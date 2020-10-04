import React from 'react';
import { Link, Redirect } from "react-router-dom";
import {userService as service} from '../service/user';
import {observer} from 'mobx-react';
import { message } from 'antd';
import {inject} from '../utils';


import '../css/login.css';
import 'antd/lib/message/style';


@inject({service})
@observer
export default class Login extends React.Component {
    handleSubmit(event) {
        event.preventDefault();
        let fm = event.target.form;
        // validate
        this.props.service.login(fm[0].value, fm[1].value);
    }

    render() {
        if (this.props.service.loggedin) {
            return <Redirect to="/" />
        }
        let msg = this.props.service.errMsg;
        return (
            <div className="login-page">
                <div className="form">
                    <form className="login-form">
                        <input type="text" placeholder="EMAIL" defaultValue="" />
                        <input type="password" placeholder="PASSWORD" defaultValue="" />
                        <button onClick={this.handleSubmit.bind(this)}>LOGIN</button>
                        <p className="message">NOT REGISTER YET？ <Link to="/reg">REGISTER</Link></p>
                    </form>
                </div>
            </div>
        );
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.service.errMsg) {
            message.info(this.props.service.errMsg, 3, ()=>this.props.service.errMsg='');
        }
    }

}






