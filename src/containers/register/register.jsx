import React, { Component } from 'react';
// 引入会使用到的antd-mobile标签
import { NavBar, 
    WingBlank, 
    List, 
    InputItem,
    WhiteSpace,
    Radio, 
    Button 
} from 'antd-mobile'

import { connect } from 'react-redux';
import {register} from '../../redux/actions'
// 引入Logo标签
import Logo from '../../components/logo/logo'

const ListItem=List.Item

// WingBlank两翼留白、WhiteSpace上下空白、NavBar导航栏 
class Register extends Component {
    state ={
        username:'',
        password:'',
        password2:'',
        type:'laoban'
    }
    register =()=>{
        //调用函数实现注册 这里的register函数是action中的register方法？？
        this.props.register(this.state)
    }
    handleChange=(name,val)=>{
        this.setState({
            [name]:val //[]属性名不是name而是name 的值。这里name属性的值有可能是用户名、密码1、密码2
        })
    }
    //实现路由的转跳 从注册到登录的页面 操作的props.history.replace() 路由替换
    
    toLogin=()=>{
        this.props.history.replace('/login')
    }

  render() {
      const {type}=this.state
      const {msg, redirectTo} = this.props.user
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
              <InputItem placeholder='请输入密码' type='password' onChange={val=>{this.handleChange('password2',val)}}>确认密码:</InputItem>
              <WhiteSpace />
              <ListItem>
                <span>用户类型</span>&nbsp;&nbsp;
                <Radio checked={type==='dashen'} onClick={()=> this.handleChange('type','dashen')}>求职者</Radio>&nbsp;&nbsp;
                <Radio checked={type==='laoban'} onClick={()=> this.handleChange('type','laoban')}> 老板 </Radio>&nbsp;&nbsp;
              </ListItem>
              <WhiteSpace />
              <Button type='primary' onClick={this.register}>注册</Button>
              <Button onClick={this.toLogin}>已有账户</Button>
          </WingBlank>
        </div>
    );
  }
}

//connect()()右边是容器
export default connect(
    //state指定要传的数据 函数register
    state=>({user:state.user}),
    {register}
)(Register)
