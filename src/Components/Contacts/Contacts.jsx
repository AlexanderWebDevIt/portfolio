import React from 'react';
import style from './Contacts.module.css';
import Menu from "../Menu/Menu";

const Contacts = () => {
    return (
        <div className={style.container}>
            <div className={style.block}>
                    <a className={style.email} href="mailto:web.dev.it.developer@gmail.com">web.dev.it.developer@gmail.com</a>
            </div>
            <div className={style.block}>
                <a className={style.tel} href="tel:+79080745866">+79080745866</a>
            </div>
        </div>
    );
};

export default Contacts;