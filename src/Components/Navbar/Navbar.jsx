import React from 'react';
import style from './Navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <ul className={style.ul}>
                    <div className={style.item}><NavLink to="/#" >Обо мне</NavLink></div>
                    <div className={style.item}><NavLink to="/skills" >Навыки</NavLink></div>
                    <div className={style.item}><NavLink to="works" >Работы</NavLink></div>
                    <div className={style.item}><NavLink to="/Blog" >Блог</NavLink></div>
                    <div className={style.item}><NavLink to="/#" >Интересное</NavLink></div>
                </ul>
            </div>
            <div className={style.wrapper}>
                <p className={style.text}>Мои соц сети</p>
                <div className={style.blok}>
                    <button  className={style.vk}><a  href="https://vk.com/id650772899"><div className={style.button}></div></a></button>
                    <div className={style.facebook}><a href="https://www.facebook.com/web.dev.it.developer/"><div className={style.button}></div></a></div>
                    <div className={style.git}><a href="https://github.com/AlexanderWebDevIt"><div className={style.button}></div></a></div>
                    <div className={style.instagram}><a href="https://www.instagram.com/web.dev.it.developer/"><div className={style.button}></div></a></div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;