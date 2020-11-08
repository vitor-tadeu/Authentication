import { avatar, bg, wave } from "../assets";
import "./signin.css";

function SignIn() {
	return (
		<>
			<img
				alt=""
				className="position-fixed h-100 d-inline-block"
				style={{ zIndex: -1 }}
				src={wave}
			></img>

			<div className="container w-auto vw-100 vh-100">
				<div className="img justify-content-end align-items-center">
					<img alt="" style={{ width: 500 }} src={bg}></img>
				</div>

				<div className="login-content d-flex align-items-center text-center">
					<form style={{ width: 360 }} action="index.html">
						<img alt="" style={{ height: 100 }} src={avatar}></img>

						<h2 className="m-3 text-uppercase">Welcome</h2>

						<div className="input-div d-relative m-3 p-1 border-bottom">
							<div className="d-flex justify-content-center align-items-center text-dark">
								<i className="fas fa-envelope"></i>
							</div>

							<div>
								<input
									type="text"
									className="input "
									placeholder="E-mail"
									required
									style={{ fontSize: 14 }}
								></input>
							</div>
						</div>

						<div className="input-div d-relative m-3 p-1 border-bottom">
							<div className="d-flex justify-content-center align-items-center text-dark">
								<i className="fas fa-lock"></i>
							</div>

							<div>
								<input
									type="password"
									className="input"
									placeholder="Password"
									required
									style={{ fontSize: 14 }}
								></input>
							</div>
						</div>

						<a className="d-block text-right mr-3" style={{ fontSize: 12 }} href=".">
							Forgot Password?
						</a>

						<input
							type="submit"
							className="btn d-block w-100 text-light text-uppercase mx-1"
							value="Login"
							style={{ fontSize: 16 }}
						></input>
					</form>
				</div>
			</div>
		</>
	);
}

export default SignIn;
