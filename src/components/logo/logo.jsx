import React,{Component} from 'react';
import logo from './logo.png'
import './logo.less'
//这里定义了注册的图片为Logo标签 这里定义好了就需要去container里去注册组件 或者理解为使用组件
export default class Logo extends Component { 
    render () {
         return ( 
         <div className="logo-container"> 
            <img src={logo} alt="logo" className='logo-img'/> 
        </div> ) } }