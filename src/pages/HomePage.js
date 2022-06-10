import { Link } from 'react-router-dom';
//import data from '../data';
import Search from "../components/Search"
//import Results from "../components/Results";
import { useReducer, useEffect, useState } from "react";
import axios from 'axios';
import logger from 'use-reducer-logger';

const reducer = (state, action) => {
    switch (action.type) {
      case 'FETCH_REQUEST':
        return { ...state, loading: true };
      case 'FETCH_SUCCESS':
        return { ...state, products: action.payload, loading: false };
      case 'FETCH_FAIL':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };


function HomePage() {
    const [{ loading, error, products }, dispatch] = useReducer(logger(reducer), {
        products: [],
        loading: true,
        error: '',
      });
      //for search bar
    const [query, setQuery] = useState([]);
    const [results, setResults] = useState([]);
    
    useEffect(() => {
        const fetchData = async () => {
            dispatch({ type: 'FETCH_REQUEST' });
            try {
              const result = await axios.get('/api/products');
              dispatch({ type: 'FETCH_SUCCESS', payload: result.data });
            } catch (err) {
              dispatch({ type: 'FETCH_FAIL', payload: err.message });
            }
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
      {loading ? (
        <div>Loading...</div>
      ) : error ? (
        <div>{error}</div>
      ) : (
        products.map((product) => (
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
        ))
      )}
    </div>
  </div>
    // <div>
    //     <Search query={query} handleSearch={handleSearch} handleSubmit={handleSubmit}/>
        
        
    //   <h1>Items</h1>
    //   <div className="products">
    //   {loading ? (
    //       <div>Loading...</div>
    //     ) : error ? (
    //       <div>{error}</div>
    //     ) : (
    //       products.map((product) => (
    //         <div className="product" key={product.slug}>
        
    //           <Link to={`/product/${product.slug}`}>
    //           <img src={product.image} alt={product.name} />
    //           </Link>
    //           <div className="product-info">
    //             <Link to={`/product/${product.slug}`}>
    //               <p>{product.name}</p>
    //             </Link>
    //             <p>
    //               <strong>${product.price}</strong>
    //             </p>
    //             <button>Add to cart</button>
    //           </div>
    //           ))
    //     )}
    //   </div>
    // </div>
  );
}
export default HomePage;