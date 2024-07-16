import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../../services/firebase.js";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

function UserCanvas({ dataTitle }) {
  const title = dataTitle === "login" ? "Login" : "Sign up";

  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (dataTitle !== "login") {
      const { email, password } = e.target.elements;
      createUserWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log("Signed in:", user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorCode, errorMessage);
        });
    }
    if (dataTitle === "login") {
      const { email, password } = e.target.elements;
      signInWithEmailAndPassword(auth, email.value, password.value)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          setError(null);
          navigate("/");
          console.log("Signed in");
          console.log(userCredential);
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setError(errorMessage);
          console.log(errorCode);
          console.log(errorMessage);
        });
    }
  };

  return (
    <div
      className="offcanvas offcanvas-end"
      tabIndex="-1"
      id="canvasExample"
      aria-labelledby="canvasExampleLabel"
    >
      <div className="offcanvas-header">
        <h5 className="offcanvas-title" id="canvasExampleLabel">
          {title}
        </h5>
        <button
          type="button"
          className="btn-close text-reset"
          data-bs-dismiss="offcanvas"
          aria-label="Close"
        ></button>
      </div>
      <div className="offcanvas-body">
        <form onSubmit={handleSubmit}>
          {dataTitle !== "login" && nameLastName()}
          <div className="mb-3">
            <label htmlFor="input_email" className="col-form-label-sm">
              Email
            </label>
            <input
              type="email"
              name="email"
              className="form-control"
              id="input_email"
              placeholder="nombre@ejemplo.com"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="input_password" className="col-form-label-sm">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="input_password"
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="input_confirmar_password"
              className="col-form-label-sm"
            >
              Confirmar password
            </label>
            <input
              type="password"
              className="form-control"
              id="input_confirmar_password"
            />
          </div>
          <div className="mb-3">
            <button
              type="submit"
              className="btn btn-primary"
              id="submit_button"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            >
              Confirm
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

function nameLastName() {
  return (
    <>
      <div className="mb-3">
        <label htmlFor="input_name" className="col-form-label-sm">
          Name
        </label>
        <input type="text" className="form-control" id="input_name" />
      </div>
      <div className="mb-3">
        <label htmlFor="input_name" className="col-form-label-sm">
          Last name
        </label>
        <input type="text" className="form-control" id="input_lastname" />
      </div>
    </>
  );
}

export default UserCanvas;
