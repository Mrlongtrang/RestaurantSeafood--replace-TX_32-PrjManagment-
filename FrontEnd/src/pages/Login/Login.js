import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import { loginAccount } from "../../actions/accountAction";
import "./Login.scss";

function Login() {
  const [accounts, setAccounts] = useState([]);
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    axios
      .get("/restaurant/account")
      .then((res) => {
        setAccounts(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleLogin = () => {
    const findAccount = accounts.find((acc) => {
      return acc.username === usename && acc.password === password;
    });
    if (findAccount === undefined) {
      toast("Sai tên tài khoản hoặc mật khẩu");
    } else {
      const action = loginAccount(findAccount);
      dispatch(action);
      toast("Đăng nhập thành công");
      navigate("/");
    }
  };
  return (
    <div className="container">
      <div className="loginContent">
        <div className="leftContent">
          <h1>Sign In</h1>
          <img src="/food.png" />
          <h2>Privacy policy {"&"} Term of service</h2>
        </div>
        <div className="rightContent">
          <div className="input">
            <label htmlFor="mail">Username: </label>
            <input
              placeholder="Enter Username "
              id="mail"
              value={usename}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="input">
            <label htmlFor="password">Password:</label>
            <input
              placeholder="Password"
              type={"password"}
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <p
            style={{
              color: "#f9004d",
              textAlign: "left",
              fontSize: "12px",
              display: "none",
            }}
          >
            Incorrect Email or Password
          </p>
          <p
            style={{
              color: "#f9004d",
              textAlign: "left",
              fontSize: "12px",
              display: "none",
            }}
          >
            Account is Blocked
          </p>
          <div className="handle">
            <button onClick={handleLogin}>Đăng nhập</button>
            <a 
            className="remember"
            onClick={() => navigate("/changePassword")}
            style={{textAlign: "center"}} 
            >Đổi mật khẩu</a>
            <a className="remember" onClick={() => navigate("/rememberPassword")}>Quên mật khẩu</a>
          </div>
          <div className="register">
            <b>Bạn chưa có tài khoản? </b>
            <p
              onClick={() => navigate("/signup")}
              style={{ cursor: "pointer" }}
            >
              Đăng ký
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
