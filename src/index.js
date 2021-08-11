// 入口js文件
import React from 'react' 
import ReactDOM from 'react-dom' 
import { HashRouter,Route,Switch } from 'react-router-dom'
import Register from './containers/register/register.jsx'
import Login from './containers/login/login.jsx'
import Main from './containers/main/main.jsx'
import {Provider} from 'react-redux'
import store from './redux/store.js'

ReactDOM.render( 
    (<Provider store={store}>
        <HashRouter>
        <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        {/* 默认路径和根路径都是main */}
        <Route  component={Main}></Route> 
        </Switch>
        
        </HashRouter>
    </Provider>
    ),
    document.getElementById('root') 
    )