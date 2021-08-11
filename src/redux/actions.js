// 包含n个action creator ：异步action和同步action
/*
包含n个action creator
异步action
同步action
包含所有 action creator 函数的模块
 */

import {
  AUTH_SUCCESS,
  ERROR_MSG,
} from './action-types'
import {
  reqRegister,
  reqLogin,
} from '../api'

// 同步错误消息
const errorMsg = (msg) => ({type:ERROR_MSG, data: msg})
// 同步成功响应
const authSuccess = (user) => ({type: AUTH_SUCCESS, data: user})

/*
单例对象
1. 创建对象之前: 判断对象是否已经存在, 只有不存在才去创建
2. 创建对象之后: 保存对象
 */
// 注册异步action 在action.js中定义一个对应操作的action 比如注册action
export const register = (user) => {
    const {username, password, password2, type} = user
    // 做表单的前台检查, 如果不通过, 返回一个errorMsg的同步action
    if(!username) {
      return errorMsg('用户名必须指定!')
    } else if(password!==password2) {
      return errorMsg('2次密码要一致!')
    }
    // 表单数据合法, 返回一个发ajax请求的异步action函数 async与await一起使用 调用注册接口 获得后台返回数据
    return async dispatch => {
  
  
      // 发送注册的异步ajax请求
      /*const promise = reqRegister(user)
      promise.then(response => {
        const result = response.data  // {code: 0/1, data: user, msg: ''}
      })*/
      const response = await reqRegister({username, password, type})
      const result = response.data //  {code: 0/1, data: user, msg: ''}
      if(result.code===0) {// 成功
        // getMsgList(dispatch, result.data._id)
        // 分发授权成功的同步action
        dispatch(authSuccess(result.data))
      } else { // 失败
        // 分发错误提示信息的同步action
        dispatch(errorMsg(result.msg))
      }
    }
  }
  
  // 登陆异步action
  export const login = (user) => {
  
    const {username, password} = user
    // 做表单的前台检查, 如果不通过, 返回一个errorMsg的同步action
    if(!username) {
      return errorMsg('用户名必须指定!')
    } else if(!password) {
      return errorMsg('密码必须指定!')
    }
  
    return async dispatch => {
      // 发送注册的异步ajax请求
      /*const promise = reqLogin(user)
      promise.then(response => {
        const result = response.data  // {code: 0/1, data: user, msg: ''}
      })*/
      const response = await reqLogin(user)
      const result = response.data
      if(result.code===0) {// 成功
        // getMsgList(dispatch, result.data._id)
        // 分发授权成功的同步action
        dispatch(authSuccess(result.data))
      } else { // 失败
        // 分发错误提示信息的同步action
        dispatch(errorMsg(result.msg))
      }
    }
  }