import { Link } from 'react-router-dom';
const userID = 100;
export default function HomePage() {
  return (
    <div className="App">
      <h1>Home Page</h1>
      <p>This is a simple example of a React Router page.</p>
      <p>
        The <code>HomePage</code> component is a simple example of a React
        Router page.
      </p>
      <p>
        The <code>HomePage</code> component is a simple example of a React
        Router page.
      </p>
      {/* Link to <Link to="/about">About Page</Link> */}
      Link to <Link to={`/user/${userID}`}>User Page</Link>
      {/* to={`/about/${userID}`} */}
    </div>
  );
}
