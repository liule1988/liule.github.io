import React from 'react';
import '../styles/header.css'
export  default class Header extends React.Component{
    render(){
        return(
            <nav className="nav">
                <a href="/index"><li className="li">首页</li></a>
                <a href=""><li className="li">文章</li></a>
                <a href=""><li className="li">电影</li></a>
                <a href=""><li className="li">我</li></a>
            </nav>
        )
    }
}