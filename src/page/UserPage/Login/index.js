import React from "react";
import { useDispatch } from "react-redux";
import { actionLogin } from "../../../redux/actions/UserActions";
import { useHistory } from "react-router-dom";
export default function Login() {
    const history = useHistory();
    const dispatch = useDispatch();
    const [info, setInfo] = React.useState({
        email: "dovanthao2404@gmail.com",
        passWord: "dovanthao2404",
    });
    const handleChange = (e) => {
        const { name, value } = e.target;
        setInfo({ ...info, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(actionLogin(info, history));
    };
    return (
        <div>
            <form>
                <input
                    onChange={handleChange}
                    name="email"
                    type="text"
                    placeholder="email"
                    value={info.email}
                />
                <input
                    onChange={handleChange}
                    name="passWord"
                    type="password"
                    placeholder="matkhau"
                    value={info.passWord}
                />
                <button onClick={handleSubmit}>Đăng nhập</button>
            </form>
        </div>
    );
}
