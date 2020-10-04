import React from 'react'
import { observer } from 'mobx-react'
import service from '../service/post.js';
import { inject } from '../utils'
import { Card } from 'antd'
import 'antd/lib/card/style'


@inject({service})
@observer
export default class Post extends React.Component{
    constructor(props){
        super()
        let {id = 0} = props.match.params
        props.service.getpost(id)
    }
    render(){

        // console.log(this.props.service.postinfo.title)
        if(this.props.service.postinfo !== null){
            const {title, author,author_id,pubdate,content} = this.props.service.postinfo;
            return (<div>
                <Card title={title} bordered={false} style={{ width: 600 }}>
                    <p>Author {author}</p>
                    <p>Date {pubdate}</p>
                    <p>{content}</p>
                 </Card>
            </div>)
        }else{
            return <div>nodata</div>
        }           
        return <div></div>
    }
}