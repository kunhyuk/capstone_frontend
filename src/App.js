import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ShowPage from './pages/ShowPage';


function App() {
  
  return (
    <BrowserRouter>
      <div>
        <header>
          <Link to="/">gbay</Link>
          
        </header>
        <main>
          <Routes>
            <Route path="/product/:slug" element={<ShowPage />} />
            <Route path="/" element={<HomePage />} />
            
          </Routes>
        </main>
      </div>
    </BrowserRouter>
      );
    }
    export default App;
// import data from './data';
// import Search from "./components/Search"
// import {  useState } from "react";
// function App() {
//   const [query, setQuery] = useState([]);
//   function handleSearch(e) {

//     setQuery(e.target.value);
//   }
//   return (
//     <div>
//       <header>
//         <span>
//         <a href="/">gbay</a>
//         <Search query={query} handleSearch={handleSearch}  />
//         </span>
//       </header>
//       <main>
//         <h1>Electronics</h1>
//         <div className="products">
//           {data.products.map((product) => (
//             <div className="product" key={product.slug}>
//               <a href={`/product/${product.slug}`}>
//                 <img src={product.image} alt={product.name} />
//               </a>
//               <div className="product-info">
//                 <a href={`/product/${product.slug}`}>
//                   <p>{product.name}</p>
//                 </a>
//                 <p>
//                   <strong>${product.price}</strong>
//                 </p>
//                 <button>Buy it Now</button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </main>
//     </div>
//   );
// }
// export default App;
