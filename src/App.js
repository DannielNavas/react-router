import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import NavBar from "./components/Navbar";
import UserPage from "./pages/UserPages";
import Dashboard from "./pages/Dashboard";
export default function App() {
  return (
    <BrowserRouter>
      <NavBar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/user/:id" element={<UserPage />} />
        <Route path="/acerca" element={<Navigate replace to="/about" />} />
        <Route path="/dashboard/*" element={<Dashboard />}>
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
        </Route>
        <Route
          path="*"
          element={
            <div>
              <h1>404</h1>
              <p>Page not found.</p>
            </div>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
