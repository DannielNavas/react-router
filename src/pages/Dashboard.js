import { useNavigate, Route, Routes, Link, Outlet } from "react-router-dom";
export default function Dashboard() {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Clicked");
    navigate("/");
  };
  return (
    <div className="App">
      <h1>Dashboard</h1>
      <p>This is a simple example of a React Router page.</p>
      <p>
        The <code>Dashboard</code> component is a simple example of a React
        Router page.
      </p>
      <p>
        The <code>Dashboard</code> component is a simple example of a React
        Router page.
      </p>
      <button onClick={handleClick}>Salir</button>
      <Link to="welcome">Welcome</Link>
      <Outlet />
      {/* <Routes>
        <Route
          path="welcome"
          element={
            <div>
              <h1>Welcome</h1>
              <p>This is a simple example of a React Router page.</p>
              <p>
                The <code>Welcome</code> component is a simple example of a
                React Router page
              </p>
            </div>
          }
        ></Route>
      </Routes> */}
    </div>
  );
}
