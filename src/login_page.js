import React from 'react';
import './login_page.css';
import './vendor/animate/animate.css';
import './fonts/font-awesome-4.7.0/css/font-awesome.min.css';
import './fonts/iconic/css/material-design-iconic-font.min.css';
import './fonts/font-awesome-4.7.0/css/util.css';
var username;
var password;
class Login extends React.Component {
	//add 2018/09/24
	constructor(props) {
		super(props)
		this.state = {
			_validate: ''
		}
	}
	getUser(e) {
		username = e.target.value;
	}

	getPwd(e) {
		password = e.target.value;
	}
	onChange(e) {
		this.setState({_validate: username + " " + password});
	}
	render() {
		return (
			<div className="container-login100">
				<div className="wrap-login100">
					<div className="login100-form validate-form">
						<span className="login100-form-title p-b-49">Login</span>
						<div className="wrap-input100 validate-input m-b-23" data-validate = "Username is reauired">
							<span className="label-input100">Username</span>
							<input className="input100" type="text" name="username" placeholder="Type your username" onChange={this.getUser.bind(this)} />
							<span className="focus-input100" data-symbol="&#xf206;"></span>
						</div>

						<div className="wrap-input100 validate-input" data-validate="Password is required">
							<span className="label-input100">Password</span>
							<input className="input100" type="password" name="pass" placeholder="Type your password" onChange={this.getPwd.bind(this)}/>
						<span className="focus-input100" data-symbol="&#xf190;"></span>
					</div>

					<div className="text-right p-t-8 p-b-31">
						<a href="#">
							Forgot password?
						</a>
					</div>
					<p>{this.state._validate}</p>
					<div className="container-login100-form-btn">
						<div className="wrap-login100-form-btn">
							<div className="login100-form-bgbtn"></div>
							<button className="login100-form-btn" onClick={this.onChange.bind(this)}>
								Login
							</button>
						</div>
					</div>
					<div className="txt1 text-center p-t-54 p-b-20">
						<span>
							Or Sign Up Using
						</span>
					</div>

					<div className="flex-c-m">
						<a href="#" className="login100-social-item bg1">
							<i className="fa fa-facebook"></i>
						</a>

						<a href="#" className="login100-social-item bg2">
							<i className="fa fa-twitter"></i>
						</a>

						<a href="#" className="login100-social-item bg3">
							<i className="fa fa-google"></i>
						</a>
					</div>
					<div className="flex-col-c p-t-155">
						<span className="txt1 p-b-17">
							Or Sign Up Using
						</span>

						<a href="#" className="txt2">
							Sign Up
						</a>
					</div>
					</div>
				</div>
			</div>
		);
	}
}

export default Login;