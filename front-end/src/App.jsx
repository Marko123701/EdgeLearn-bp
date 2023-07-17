import { Link, Route, Router, Routes } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import useAuthContext from "./context/AuthContext";
import ForgotPassword from "./pages/ForgotPassword";
import ResetPassword from "./pages/ResetPassword";
import Lectures from "./pages/Lectures";
import Blogs from "./pages/Blogs";
import Profile from "./pages/Profile";
import Links from "./pages/Links";
import BlogPost from "./pages/BlogPost";

function App() {
  const { user, logout } = useAuthContext();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false); // Add state for mobile menu

  // Function to toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className="bg-slate-100">
      <nav className="bg-indigo-900 text-white px-2 py-2.5 sm:px-4">
        <div className="container mx-auto flex flex-wrap items-center justify-between">
          <Link to="/" className="flex items-center">
            EdgeLearn
          </Link>
          <div className="md:hidden"> {/* Add classes for mobile menu */}
            <button
              className="block text-white hover:text-gray-200 focus:text-gray-200 focus:outline-none"
              onClick={toggleMobileMenu}
            >
              {/* Toggle menu icon */}
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>
          <div
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } w-full md:block md:w-auto md:flex-grow md:flex md:items-center md:justify-end`}
          >
            <ul className="mt-4 flex flex-col rounded-lg p-4 md:mt-0 md:flex-row md:space-x-8 md:text-sm md:font-medium">
              <li>
                <Link
                  to="/"
                  className="block rounded py-2 pr-4 pl-3 text-white"
                  aria-current="page"
                >
                  Domov
                </Link>
              </li>
              <li>
                <Link
                  to="/blogs"
                  className="block rounded py-2 pr-4 pl-3 text-white"
                  aria-current="page"
                >
                  Články
                </Link>
              </li>
              <li>
                <Link
                  to="/links"
                  className="block rounded py-2 pr-4 pl-3 text-white"
                  aria-current="page"
                >
                  Odkazy
                </Link>
              </li>
              {user ? (
                <>
                  <li>
                    <Link
                      to="/lectures"
                      className="block rounded py-2 pr-4 pl-3 text-white"
                      aria-current="page"
                    >
                      Lekcie
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/profile"
                      className="block rounded py-2 pr-4 pl-3 text-white"
                      aria-current="page"
                    >
                      Profil
                    </Link>
                  </li>
                  <li>
                    <button
                      onClick={logout}
                      className="block rounded py-2 pr-4 pl-3 text-white"
                    >
                      Odhlásiť sa
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li>
                    <Link
                      to="/login"
                      className="block rounded py-2 pr-4 pl-3 text-white"
                      aria-current="page"
                    >
                      Prihásiť sa
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/register"
                      className="block rounded py-2 pr-4 pl-3 text-white"
                      aria-current="page"
                    >
                      Registrácia
                    </Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <div className="max-width-7xl mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/password-reset/:token" element={<ResetPassword />} />
          <Route path="/lectures" element={<Lectures />} />
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/links" element={<Links />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/blog/:blogId" element={<BlogPost />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
