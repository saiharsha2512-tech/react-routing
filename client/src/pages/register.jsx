import { Link } from "react-router-dom";

function Register() {
  return (
    <div>
      <h1>Register</h1>
      <p>Registration form will be here</p>

      <Link to="/login">Go to Login</Link>
    </div>
  );
}

export default Register;