import UserCanvas from "./user/UserCanvas.jsx";
import { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import { useContext, useEffect } from "react";
import { UserContext } from "../context/UserContext.jsx";
import { auth } from "../services/firebase.js";
import { onAuthStateChanged } from "firebase/auth";

function NavBar() {
  const { user, setUser } = useContext(UserContext);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user.email);
      } else {
        setUser(null);
      }
    });
  }, [user]);

  const [canvasTitle, setCanvasTitle] = useState();
  const handleCanvasTitle = (e) => {
    setCanvasTitle(e);
  };

  const location = useLocation();

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container">
          <a className="navbar-brand" href="#">
            My bussiness
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link disabled" aria-disabled="true">
                  {user && "Hello, " + user}
                </a>
              </li>
              {location.pathname !== "/" && (
                <li className="nav-item">
                  <Link to={"/"} className="nav-link">
                    Productos
                  </Link>
                </li>
              )}
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              {!user && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={"#"}
                      onClick={() => handleCanvasTitle("login")}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#canvasExample"
                    >
                      Login
                    </a>
                  </li>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={"#"}
                      onClick={() => handleCanvasTitle("register")}
                      data-bs-toggle="offcanvas"
                      data-bs-target="#canvasExample"
                    >
                      Sign up
                    </a>
                  </li>
                </>
              )}
              {user && (
                <>
                  <li className="nav-item">
                    <a
                      className="nav-link"
                      href={"#"}
                      onClick={() => Logout(setUser)}
                    >
                      Logout
                    </a>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>
      <UserCanvas dataTitle={canvasTitle} />
    </>
  );
}

function Logout(setUser) {
  //const { setUser } = useContext(UserContext);
  const handleSignOut = () => {
    auth
      .signOut()
      .then(() => {
        setUser(null);
        console.log("Signed out");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  handleSignOut();
}

export default NavBar;
