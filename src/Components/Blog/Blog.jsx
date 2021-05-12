import React from "react";
import { LinkPreviewer } from "./LinkPreviewer";
import photo from "../../Asset/Image/novost_5.png"
import style from "./Blog.module.css"

export default function Blog() {
    return (
        <div>
            <div>
                <h1 className={style.h1}>555</h1>
                <p>
                    <img src="https://favicon.tech/7-izvestnyh-prilozhenij-ispolzuyushhih-reactjs"/>
                </p>
                <p>
                    333<br /> my
                    <LinkPreviewer
                        href="https://favicon.tech/7-izvestnyh-prilozhenij-ispolzuyushhih-reactjs/"
                        image={photo}
                        title="7 известных приложений использующих ReactJS в наши дни"
                    >
                        7 известных приложений использующих ReactJS в наши дни <br/>
                    </LinkPreviewer>
                    222
                    <LinkPreviewer
                        href="https://favicon.tech/7-izvestnyh-prilozhenij-ispolzuyushhih-reactjs/"
                        image="https://favicon.tech/7-izvestnyh-prilozhenij-ispolzuyushhih-reactjs"
                        title="DEV Community"
                    >
                        111
                    </LinkPreviewer>
                </p>
            </div>
        </div>
    );
}