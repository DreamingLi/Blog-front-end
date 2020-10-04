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
export default class Reg extends React.Component {
    validate(pwd, confirmpwd) {
        return pwd.value === confirmpwd.value;
    }
    handleSubmit(event) {
        event.preventDefault();
        let fm = event.target.form;

        const [name, email, pwd, confirmpwd] = fm;
        if (this.validate(pwd, confirmpwd))
            this.props.service.reg(name.value, email.value, pwd.value);
    }
    render() {
        if (this.props.service.loggedin) {
            return <Redirect to="/" />
        }

        let msg = this.props.service.errMsg;
        return (
            <div className="login-page">
                <div className="form" >
                    <form className="register-form">
                        <input type="text" placeholder="NAME" defaultValue="" />
                        <input type="text" placeholder="EMAIL" defaultValue="" />
                        <input type="password" placeholder="PASSWORD" defaultValue='' />
                        <input type="password" placeholder="PASSWORD" defaultValue='' />
                        <button onClick={this.handleSubmit.bind(this)}>REGISTER</button>
                        <p className="message">ALREADY REGISTERED？<Link to="/login">LOGIN</Link></p>
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