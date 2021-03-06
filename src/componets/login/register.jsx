import React from "react";
import loginImg from "../../login/svg";

export class Register extends React.Component {
constructor(props) {
    super(props);
}
render() {
    return
    <div className="base container">
        <div className="header">Register</div>
        <div className="content">
        <div className="Image">
        <img src={loginImg} />
        </div>
        <div className="form">
            <div className="form-group">
                <label htmlFor="username">username</label>
                <input type="text" name="Username" placeholder="username"/>
            </div>
            <div className="form">
            <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="email" name="email" placeholder="email"/>
            </div>
            <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password"/>
            </div>
        </div>
        </div>
        <div className="footer">
<button type="button" className="btn">Register</button>
    </div>
    </div>
    </div>

}

}