import axios from 'axios'
import { observable } from 'mobx'
import store from 'store'
import { message } from 'antd';

class Post{
    constructor(){
        this.instance = axios.create({
            baseURL:'/api/post/'
        });

        this.pub = (title,content) => {
            message.loading({ content:"submitting",key:'submit'})  
            this.instance.post('pub',{
                title,content
            },{
                headers:['JWT',store.get('token')]
            })
            .then(
                response =>{
                    message.success({ content:"successfully submitted",key:'submit'})  
                    this.done = true
                }
            )
            .catch(
                error =>{
                    message.error({ content:"failed to submit",key:'submit'}) 
                    this.msg = 'failed'
                }
            )            
        }

        this.getall = (search) => {
            this.instance.get(search).then(response =>{
                this.posts = response.data.posts;
                this.pagination = response.data.pagination
            })
        }

        this.getpost = (id) => {
            this.instance.get(id).then(response =>{
                this.postinfo = response.data;

            }).catch(
                error =>{
                    this.msg = "Error"
                }
            )
        }
    };
    @observable msg="";
    @observable done = false;
    @observable posts = [];
    @observable pagination = {page:1,size:20,pages:1,count:0}
    @observable postinfo = null;

}
const post = new Post()
export default post;