export function getProduct(id) {
  const data = fetch(`https://fakestoreapi.com/products/${id}`)
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}

export function getProducts() {
  const data = fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .catch((err) => console.log(err));
  return data;
}
