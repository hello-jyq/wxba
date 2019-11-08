import axios from 'axios';
import router from '../router';
// 创建axios实例
const service = axios.create({
    timeout: 60000 // 请求超时时间 
})
// 添加request拦截器 
service.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json';
    // config.headers['Authorization'] = token;

    return config
}, error => {
    return Promise.reject(error)
})
//添加拦截器
service.interceptors.response.use(
    response => {
        //   return response;
        let res = {};
        res.status = response.status      //定义获取接口状态
        res.data = response.data;  //定义获取接口数据s
        return res;
    },
    error => {
        console.log(error)
        if (error.response) {
            switch (error.response.status) {
                case 401:
                    //返回 401 清除token信息并跳转到登录页面
                    sessionStorage.removeItem('authorization');
                    router.replace({
                        path: '/secure/login',
                        //query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                    })
                case 400:
                    error.message = 'DB bad requset'
                    break
                case 404:
                    router.replace({
                        path: '/',
                    })
                case 500:
                    error.message = 'A system error has occurred'
                    break
                default:
                    error.message = "连接服务器异常";
            }
        } else {
            error.message = "连接服务器失败";
            setTimeout(() => {
                sessionStorage.removeItem('authorization');
                router.replace({
                    path: '/login',
                    //query: {redirect: router.currentRoute.fullPath}//登录成功后跳入浏览的当前页面
                })
            }, 500)
        }
        return Promise.reject(error.message)   // 返回接口返回的错误信息
    }
);
//封装通用方法 get ,post ,put ,deletes
export function get(url, params = {}) {
    params.t = new Date().getTime(); //get方法加一个时间参数,解决ie下可能缓存问题.
    return service({
        url: url,
        method: 'get',
        headers: {

        },
        params
    })
}

//封装post请求
export function post(url, data = {}) {
    //默认配置 
    let sendObject = {
        url: url,
        method: 'post',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: data
    };
    sendObject.data = JSON.stringify(data);
    return service(sendObject)
}
//封装put方法 (resfulAPI常用)
export function put(url, data = {}) {
    return service({
        url: url,
        method: 'put',
        headers: {
            'Content-Type': 'application/json;charset=UTF-8'
        },
        data: JSON.stringify(data)
    })
}
//删除方法(resfulAPI常用)
export function deletes(url) {
    return service({
        url: url,
        method: 'delete',
        headers: {}
    })
}
//不要忘记export
export {
    service
}
