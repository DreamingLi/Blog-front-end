import React from 'react'
import { observer } from 'mobx-react'
import service from '../service/post.js';
import { inject , parse_qs} from '../utils'
import { message, List } from 'antd'
import { Link } from "react-router-dom";
import 'antd/lib/message/style'
import 'antd/lib/list/style'



@inject({service})
@observer
export default class L extends React.Component{
    constructor(props){
        super()
        const {location:{search}} = props
        props.service.getall(search)
    }
    handleChange = (page,size) =>{
        let search = '?page='+page + '&size='+size;
        this.props.service.getall(search)
    }

    geturl(pageNo){
        const { location:{  search }} = this.props;
        let {size=10} = parse_qs(search)
        return '/list?page='+pageNo + '&size=' + size
    }

    itemRender= (current, type, originalElement) =>{
        console.log(current,type,originalElement)
        if (current === 0) return originalElement;
        if (type === 'page'){
            return <Link to={this.geturl(current)}>{current}</Link>
        }
        if (type==="PREV"){
            return <Link to={this.geturl(current)} />
        }
        if (type === "NEXT"){
            return  <Link to={this.geturl(current)}/>
        }
        return originalElement
    }

    render(){
        const data = this.props.service.posts;
        const pagination = this.props.service.pagination;
        return (
            <List bordered={false}
            itemLayout="horizontal"
            dataSource={data}
            renderItem={
                item =>(
                    <List.Item>
                        <Link to={'/post/'+item.post_id}>{item.title}</Link>
                    </List.Item>
                )
            }
            pagination={{
                onChange: this.handleChange,
                pageSize: pagination.size,
                total: pagination.count,
                current: pagination.page,

                // itemRender: this.itemRender
            }}
            />
        )
    }
}