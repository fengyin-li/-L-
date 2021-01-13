import axios from "axios";
let Axios = axios.create({
    timeout: 30000,
    headers: {
        'Content-Type': 'application/json; charset=utf-8'
    }
});
Axios.interceptors.request.use(//http request 拦截器请求之前
    config => {
        // const token = sessionStorage.getItem('token')
        // if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
        //     config.headers.authorization = token  //请求头加上token
        // }
        return config
    },
    err => {
      return Promise.reject(err)
    }
)
Axios.interceptors.response.use(//response 拦截器请求回来后
    response => {
        //拦截响应，做统一处理 
        return Promise.resolve(response.data)
    },
    //接口错误状态处理，也就是说无响应时的处理
    error => {
        return Promise.reject(error) // 返回接口返回的错误信息
    })
const getapi=(url)=>{
    return Axios.get(url)
}
const API = {
    getIndex(){
        return getapi('http://127.0.0.1:7001/default/getArticleList')
    },
    getDetailed(id){
        return getapi('http://127.0.0.1:7001/default/getArticleById?id='+id)
    }
}
export default API