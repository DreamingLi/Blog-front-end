import service from '../service/post.js';
import { inject } from '../utils'
import React from 'react'
import {observer} from 'mobx-react';
import { message,Form,Input,layout,Button} from "antd";
import { Redirect } from "react-router-dom";
import 'antd/lib/message/style'
import 'antd/lib/form/style'
import 'antd/lib/input/style'
import 'antd/lib/button/style'

const { TextArea } = Input;

@inject({service})
@observer
export default class Pub extends React.Component{

    handleSubmit = (e)=>{
        e.preventDefault();
        this.props.service.pub(e.target[0].value,e.target[1].value)
        e.target[0].value = ""
        e.target[1].value = ""

    }
    render(){
        return (  
    
            <div> 
                <Form onSubmit={this.handleSubmit}> 
                    <Form.Item label="Title" wrapperCol={{span:10}} labelCol={{span:3}} >                 
                    <Input />
                    </Form.Item>
                    <Form.Item label="Content" wrapperCol={{span:15}} labelCol={{span:3}} >                 
                    <TextArea rows={30} />
                    </Form.Item>
                    <Form.Item wrapperCol={{span:10, offset:11}}  >                 
                    <Button type="primary" htmlType="submit">SUBMIT</Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}