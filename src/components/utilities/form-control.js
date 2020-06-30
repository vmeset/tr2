import React from "react";
import styles from "./formControl.module.css"

export const Textarea = ({input, meta, ...props}) => {
    return (
        <div className={styles.formControl + " " + (meta.error && meta.touched && styles.error)}>
            <div>
                <textarea {...input} {...props} />
            </div>
            {meta.error && meta.touched && <span>{meta.error}</span>}
        </div>
    )
}