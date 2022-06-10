import data from './data';
import Search from "./components/Search"
import {  useState } from "react";
function App() {
  const [query, setQuery] = useState([]);
  function handleSearch(e) {

    setQuery(e.target.value);
  }
  return (
    <div>
      <header>
        <a href="/">gbay</a>
        <Search query={query} handleSearch={handleSearch}  />
      </header>
      <main>
        <h1>Electronics</h1>
        <div className="products">
          {data.products.map((product) => (
            <div className="product" key={product.slug}>
              <a href={`/product/${product.slug}`}>
                <img src={product.image} alt={product.name} />
              </a>
              <div className="product-info">
                <a href={`/product/${product.slug}`}>
                  <p>{product.name}</p>
                </a>
                <p>
                  <strong>${product.price}</strong>
                </p>
                <button>Buy it Now</button>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}
export default App;
