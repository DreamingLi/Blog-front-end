import axios from 'axios';
import store from 'store';
import { observable } from 'mobx';
import expire from 'store/plugins/expire'


store.addPlugin(expire);

class UserService {
    @observable loggedin = false; 
    @observable errMsg = '';

    login(email, password) {
        axios.post('/api/user/login', {
            email, password
        })
            .then(response => {
                let token = response.data.token;
                store.set('token', token, new Date().getTime() + (8 * 3600 * 1000));
                this.loggedin = true;
            })
            .catch(error => {
                const { error: err = '' } = error.response.data;
                console.log(err)
                this.errMsg = err;
            });
    }


    reg(name, email, password) {
        axios.post('/api/user/reg', {
            email, password, name
        })
            .then(response => {
                let token = response.data.token;
                store.set('token', token, new Date().getTime() + (8 * 3600 * 1000));
                this.loggedin = true;
            })
            .catch(error => {
                const { error: err = '' } = error.response.data;
                console.log(err)
                this.errMsg = err;
            });
    }
}


const userService = new UserService();

export {userService};



