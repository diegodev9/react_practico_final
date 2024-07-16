import { useNavigate } from "react-router-dom";

function NotFound() {
  const navigate = useNavigate();

  return (
    <div style={{ marginLeft: "1rem" }}>
      <h1>Not Found :/</h1>
      <button className="btn btn-secondary" onClick={() => navigate(-1)}>
        go back
      </button>
    </div>
  );
}

export default NotFound;
