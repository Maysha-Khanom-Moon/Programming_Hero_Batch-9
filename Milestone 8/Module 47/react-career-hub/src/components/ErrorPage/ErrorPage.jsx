import { Link } from "react-router-dom";

function ErrorPage() {
  return (
    <div>
      <h2>Oops!!!</h2>
      <Link to="/">Go back to Home</Link>
    </div>
  );
}

export default ErrorPage;
