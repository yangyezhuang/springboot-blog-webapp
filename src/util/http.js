/**
 * 封装axios
 */

const axios = require('axios')
const baseUrl = 'http://localhost:3001'
const api = {}


const apiAxios = async (method, url, params) => {
    return await new Promise((resolve => {
        axios({
            method: method,
            url: baseUrl + url,
            //数据内容
            data:
                method === 'POST' ? params : null,
            params:
                method === 'GET' ? params : null
        }).then((res) => {
            console.log(res.data)
            resolve(res)
        }).catch(e => {
            console.log(e)
        })
    }))
}


//get请求
api.get = async (url, params,) => {
    return await apiAxios('GET', url, params)
}

//post请求
api.post = async (url, params) => {
    return await apiAxios('POST', url, params)
}


module.exports = api

