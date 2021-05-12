import React from 'react';
import style from './Header.module.css';
import Contacts from "../Contacts/Contacts";

const Header = () => {
    return (
        <div className={style.container}>
            <div className={style.wrapper}>
                <div className={style.logo}></div>
                <div>
                    <p className={style.text}>Это приложение <br/> создано на React.js</p>
                </div>
            </div>
            <div className={style.wrapper}>
                <p>Мои контакты:</p>
                <Contacts />
            </div>
        </div>
    );
};

export default Header;