import React from 'react';
import style from './Skills.module.css'

const Skills = () => {
    return (
        <div className={style.container}>
            <a href="https://ru.reactjs.org/" className={style.react}></a>
            <a href="https://nodejs.org/ru/" className={style.node}></a>
            <a href="https://expressjs.com/ru/" className={style.express}></a>
            <a href="https://metanit.com/nosql/mongodb/" className={style.mongodb}></a>
            <a href="https://tproger.ru/translations/redux-for-beginners/" className={style.redux}></a>
            <a href="https://www.digitalocean.com/community/tutorials/react-axios-react-ru" className={style.axios}></a>
            <a href="https://developer.mozilla.org/ru/docs/Web/JavaScript" className={style.js}></a>
            <a href="https://skillbox.ru/media/code/chto_takoe_html/" className={style.html}></a>
            <a className={style.css}></a>
        </div>
    );
};

export default Skills;