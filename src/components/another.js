import React from "react";
import Preloader from "./preloader";

const Another = (props) => {

    if(!props.profile){
        return (<Preloader />)
    }

    return (
        <div>
            <div>
                <img src={props.avatar} />
                <button>set</button>
            </div>
            <div>
                {props.profile.fullName}
            </div>
        </div>
    )
}

export default Another