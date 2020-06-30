import React from "react";
import preloader from "../Spinner-1s-200px.svg";
import styles from "./style.module.css"

let Preloader = () => {
    return (
        <div className={styles.preloader}>
            <img src={preloader}/>
        </div>
    )
}

export default Preloader