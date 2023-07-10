import { useParams } from "react-router-dom"
import { useContext } from "react";
import { DataContext } from "../contexts/eCommerceContext";


export default function SingleProductPage() {
    const {prodList} = useContext(DataContext);
    const {productID} = useParams();
    // const test = [prodList.find(({_id}) => _id === productID)];
    // console.log(test.map(({author}) => author));
    
    return (
        <>
            <nav>
                <h3>Bookstore</h3>
                <input type='text' placeholder="Search for product"></input>
                <div class='icon'>Wishlist icon</div>
                <div class='icon'>Cart Icon</div>
                <div class='icon'>Signup/Login/Profile Icon</div>
            </nav>
            {[prodList.find(({_id}) => _id === productID)].map(({author, title, price}) => <div class='single-book-info'>
            
            <div>♥</div>
            <h4>Book title: {title}</h4>
            <p>Rating</p>
            <p>Author: {author}</p>
            <p>Price & Discount: {price}</p>
                <ul>
                    <li>Features</li>
                    <li>Features</li>
                </ul>
            <p>Category</p>
            <p>binding</p>
            <p>language</p>
            <button>Add to Cart</button>
            <button>Add to wishlist</button>

        </div>)}
            
        </>
    )
}