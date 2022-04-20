import React from "react";
import './LeftComents.css'
import userImage from '../../../../../assets/img/customer_1.png'
import Profile from "../../../../Profile/Profile";

const LeftComents = () => {



    return(
        <div className="leftComents">
            <Profile img={userImage} userName="Felipe Bassetto" reviews={"45"} />
        </div>
    )
}

export default LeftComents