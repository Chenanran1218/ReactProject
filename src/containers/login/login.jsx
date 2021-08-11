import React, { Component } from 'react';
// 引入会使用到的antd-mobile标签
import { NavBar, 
    WingBlank, 

    InputItem,
    WhiteSpace,

    Button 
} from 'antd-mobile'
// 引入Logo标签
import Logo from '../../components/logo/logo'


// WingBlank两翼留白、WhiteSpace上下空白、NavBar导航栏 
export default class Register extends Component {
    state ={
        username:'',
        password:'',
    }
    login =()=>{
        // 登录，发送后台请求的
        if(!this.state.username) alert('请输入用户名')
        console.log(this.state)
    }
    // handleChange函数是来获取input框中的数据的 这里使用的onchange+回调函数 或者使用react 的ref也可以
    handleChange=(name,val)=>{
        this.setState({
            [name]:val //[]属性名不是name而是name 的值。这里name属性的值有可能是用户名、密码1、密码2
        })
    }
    //实现路由的转跳 从注册到登录的页面 操作的props.history.replace() 路由替换
    
    toRegister=()=>{
        this.props.history.replace('/register')
    }

  render() {

    return (
      <div> 
          <NavBar>安&nbsp;然&nbsp;特&nbsp;招 </NavBar>
          <Logo></Logo>
          
          <WingBlank>
              <WhiteSpace></WhiteSpace>
              <InputItem placeholder='请输入用户名' onChange={val=>{this.handleChange('username',val)}}>用户名:</InputItem>
              <WhiteSpace />
              <InputItem placeholder='请输入密码' type='password' onChange={val=>{this.handleChange('password',val)}}>密&nbsp;&nbsp;码:</InputItem>
              <WhiteSpace />
              
              
              <Button type='primary' onClick={this.login}>登&nbsp;&nbsp;录</Button>
              <WhiteSpace />
              {/* 登录界面点击去注册后 就通过toRegister实现页面转跳去注册界面 */}
              <Button onClick={this.toRegister}>去注册</Button>
          </WingBlank>
        </div>
    );
  }
}
