import React from "react"
import Button from 'react-bootstrap/Button';
import 'bootstrap/dist/css/bootstrap.min.css';
const Search = (props)=> {

    return (

        <section>
            <form onSubmit={props.handleSubmit}>
               <h2> <span>Search </span>
                <input onChange={ props.handleSearch} name ="searchbar" type="text" value={props.query} ></input>
                <Button variant= 'outline-primary' size= 'lg' type= "submit">Search</Button>
                </h2>
            </form>
        </section>
    )
  }

export default Search