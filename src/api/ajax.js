/*
能发送ajax请求的函数模块
函数的返回值是promise对象
 */
import axios from 'axios'
const baseurl=''
export default function ajax(url,data={},type='GET'){
    url=baseurl+url
    if(type==='GET'){
        let paramStr=''
        //Object.keys(data)将data对象中的所有key提取出来成一个数组中 使用数组方法forEach
        Object.keys(data).forEach(key=>{
            paramStr+=key+'='+data[key]+'&'
        })
        if(paramStr){
            paramStr=paramStr.substring(0,paramStr.length-1)
        }
        return axios.get(url+'?'+paramStr)
    }else{
        return axios.post(url,data)
    }
}