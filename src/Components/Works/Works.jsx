import React from 'react';
import style from './Works.module.css'

const Works = () => {
    return (
        <div className={style.container}>
            <div className={style.block1}>1</div>
            <div className={style.block2}>
                <div className={style.bg}></div>
            </div>
            <div className={style.block3}>3</div>
            <div className={style.block4}>4</div>
            <div className={style.block5}>5</div>
        </div>
    );
};

export default Works;