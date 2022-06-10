import { Link } from 'react-router-dom';
import data from '../data';
import Search from "../components/Search"
//import Results from "../components/Results";
import { useEffect, useState } from "react";
import axios from 'axios';
function HomePage() {
    const [query, setQuery] = useState([]);
    const [results, setResults] = useState([]);
    const [items, setItems] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
          const result = await axios.get('/api/products');
          setItems(result.data);
        };
        fetchData();
      }, []);
    function handleSearch(e) {

        setQuery(e.target.value);
      }
      async function handleSubmit(e) {
        e.preventDefault();
        try {
          //const app_id = "a186ee52"
          
          //const URL = `https://api.edamam.com/api/recipes/v2?type=public&beta=true&q=${query}&app_id=${app_id}&app_key=${apiKey}`
          
  
        //   const response = await fetch(URL)
        //   const data = await response.json()
          //setResults(data.hits)
          
        } catch(err) {
          console.log(err)
        }
      }

  return (
    <div>
        <Search query={query} handleSearch={handleSearch} handleSubmit={handleSubmit}/>
        
        
      <h1>Items</h1>
      <div className="products">
        {items.map((product) => (
          <div className="product" key={product.slug}>
            <Link to={`/product/${product.slug}`}>
              <img src={product.image} alt={product.name} />
            </Link>
            <div className="product-info">
              <Link to={`/product/${product.slug}`}>
                <p>{product.name}</p>
              </Link>
              <p>
                <strong>${product.price}</strong>
              </p>
              <button>Add to cart</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default HomePage;