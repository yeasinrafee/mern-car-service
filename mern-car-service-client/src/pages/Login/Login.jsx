import loginImg from "./../../assets/images/login/login.svg";

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault();
  };
  return (
    <div className="hero min-h-screen bg-base-200">
      <div className="hero-content flex-col lg:flex-row gap-6">
        <div className="text-center lg:text-left w-1/2">
          <img src={loginImg} alt="" />
        </div>
        <div className="card flex-shrink-0 w-1/2 max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-3xl font-bold text-center">Login</h1>
            <form onSubmit={handleLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="text"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  type="submit"
                  value="Login"
                  className="btn btn-primary"
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
