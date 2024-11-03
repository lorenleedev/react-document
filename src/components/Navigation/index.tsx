import React from "react";
import logo from '../../assets/images/logo.svg';
import './Navigation.css';
import router from "../../router";
import {NavLink} from "react-router-dom";

const Navigation = () => {
  return (
    <nav className={'nav'}>
      <header className="header" onClick={() => router.navigate('/')}>
        <img src={logo} className="logo" alt="logo"/>
        <h1 className={'nav-title'}>
          <span>바쁜 프론트엔드 개발자를 위한</span><br/>
          리액트 핵심개념
        </h1>
        <span className={'update-date'}>updated at 2024.11</span>
      </header>
      <ul className={'menu-list'}>
        <li className={'menu-item'} key={'/documents/0'}>
          <NavLink to={'/documents/0'}>
            Why React?
          </NavLink>
        </li>
        <li className={'menu-item'} key={'/documents/1'}>
          <NavLink to={'/documents/1'}>
            State
          </NavLink>
        </li>
        <li className={'menu-item'} key={'/documents/2'}>
          <NavLink to={'/documents/2'}>
            Key
          </NavLink>
        </li>
        <li className={'menu-item'} key={'/documents/3'}>
          <NavLink to={'/documents/3'}>
            Ref
          </NavLink>
        </li>
        <li className={'menu-item'} key={'/documents/4'}>
          <NavLink to={'/documents/4'}>
            Effects
          </NavLink>
        </li>
        <li className={'menu-item'} key={'/documents/5'}>
          <NavLink to={'/documents/5'}>
            Hooks
          </NavLink>
        </li>
        <li className={'menu-item'} key={'/documents/6'}>
          <NavLink to={'/documents/6'}>
            Suspense
          </NavLink>
        </li>
        <li className={'menu-item'} key={'/documents/7'}>
          <NavLink to={'/documents/7'}>
            Store: 상태 관리하기
          </NavLink>
        </li>
      </ul>
      <div className={'arrow-bottom'}>스크롤 🔽</div>
    </nav>
  )
}

export default Navigation;