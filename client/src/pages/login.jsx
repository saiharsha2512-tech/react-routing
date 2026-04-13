import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      <h1>Login</h1>
      <p>Login form will be here</p>

      <Link to="/register">Go to Register</Link>
    </div>
  );
}

export default Login;