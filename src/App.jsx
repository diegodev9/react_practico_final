import NavBar from "./components/NavBar.jsx";
import Products from "./components/products/Products.jsx";

function App() {
  return (
    <>
      <NavBar />
      <div className="mt-5">
        <Products />
      </div>
    </>
  );
}

export default App;
