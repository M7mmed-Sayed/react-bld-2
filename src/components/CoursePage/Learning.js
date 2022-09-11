import React from "react";
import '../../Css/CoursePage/Learning.css'
import "bootstrap/dist/css/bootstrap.min.css";
import * as Icon from "react-bootstrap-icons";

function Learning() {
    return (
        <div className="learning-box ">

            <div className="d-block m-4"><h2>What You Will Learn</h2></div>
            <ul className="list">
                <li>
                    <Icon.Check />
                    Create their own Python Programs
                </li>
                <li>
                    <Icon.Check />
                    Become an experienced Python Programmer{' '}
                </li>
                <li>
                    <Icon.Check />
                    Parse the Web and Create their own Games
                </li>
            </ul>
        </div>
    )
}

export default Learning
