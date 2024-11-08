import { Link } from "react-router-dom";

function IndexPage() {
  return (
    <div>
      <h1>This is the index page</h1>
      <div>
        <ul>
          <li>
            <Link to="/sign-up">Sign Up</Link>
          </li>
          <li>
            <Link to="/sign-in">Sign In</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default IndexPage;
