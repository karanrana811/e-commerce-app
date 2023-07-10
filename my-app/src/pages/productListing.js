import "../App.css";
import {useEffect, useContext} from 'react';
import {Link} from 'react-router-dom';
import { DataContext } from "../contexts/eCommerceContext";

export default function ProductList() {
    const {prodList, setProdList} = useContext(DataContext);
    const getProducts = async () => {
        
        try {
            const res = (await fetch('/api/products', {method: 'GET'}))
            const data = await res.json();
            const {products} = await data;
            setProdList(products);
        }
        catch {
            console.log('error')
        }
    }
    useEffect(() => {getProducts()}, []);
    console.log(prodList)
    
    return (
        <>
        <nav>
            <h3>Bookstore</h3>
            <input type='text' placeholder="Search for product"></input>
            <div class='icon'>Wishlist icon</div>
            <div class='icon'>Cart Icon</div>
            <div class='icon'>Signup/Login/Profile Icon</div>
        </nav>
        <div class='filters-section'>
            <h4>Filters</h4>
            <span>Clear</span>
            <h4>Price</h4>
            <input type='range'/>
            <h4>Category</h4>
            <label><input type='checkbox' />Fiction</label>
            <label><input type='checkbox' />Non-fiction</label>
            <label><input type='checkbox' />Horror</label>
            <h4>Rating</h4>
            <label><input type='radio' />1Stars and above</label>
            <label><input type='radio' />2Stars and above</label>
            <label><input type='radio' />3Stars and above</label>
            <label><input type='radio' />4Stars and above</label>
            <h4>Sort By</h4>
            <label><input type='radio' />Price-Low to High</label>
            <label><input type='radio' />Price-High to Low</label>





        </div>
        {prodList.map(({author, title, price, _id}) => <div>
            <Link to={`/productlist/${_id}`}><img alt='bookImg' /></Link>
            <div>♥</div>
            <h4>Book title: {title}</h4>
            <p>Rating</p>
            <p>Author: {author}</p>
            <p>Price & Discount: {price}</p>
            <button>Add to Cart</button>
        </div>)}
        
        </>
    )
}