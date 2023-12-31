import "../App.css";
import {useEffect, useContext, useReducer} from 'react';
import {Link} from 'react-router-dom';
import { DataContext } from "../contexts/eCommerceContext";

export default function ProductList() {
    const {prodList, setProdList} = useContext(DataContext);
    const filterState = {
        textSearch: '',
        sliderState: 1000,
        categoryFilter: [],
        ratingFilter: 1,
        sortFilter: 'none'
    }
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
    useEffect(() => {getProducts();
    // eslint-disable-next-line react-hooks/exhaustive-deps
}, []);
    

    const filterReducer = (state, filter) => {
        switch (filter.type) {
            case 'searchBar': 
                return {...state,
                    textSearch: filter.payload
                };
            case 'priceFilter':
                return {...state,
                sliderState: filter.payload};
            case 'categoryFilter':
                return {...state,
                categoryFilter: filter.payload.checked ? state.categoryFilter.includes(filter.payload.category) ? state.categoryFilter : [...state.categoryFilter, filter.payload.category] : [...state.categoryFilter.filter((_category) => _category !== filter.payload.category)]}
            case 'ratingFilter':
                return {
                    ...state,
                    ratingFilter: filter.payload
                };
            case 'sortFilter':
                return {
                    ...state,
                    sortFilter: filter.payload === 'ascending' ? 'ascending' : 'descending'
                };
            case 'clear':
                return filterState
            default: 
                return state;
        }
    }
    const [state, dispatch] = useReducer(filterReducer, filterState);
    // console.log(state);
    const testFilter = prodList.filter(({title, price, categoryName, rating}) => {
        const isSearchMatch = state.textSearch === '' ? true : title.toLowerCase().includes(state.textSearch.toLowerCase());
        const isPriceMatch = price >= state.sliderState
        const isCategoryMatch = state.categoryFilter.length === 0 ? true : state.categoryFilter.includes(categoryName.toLowerCase());
        const isRatingMatch = rating >= state.ratingFilter;
        return isSearchMatch && isPriceMatch && isCategoryMatch && isRatingMatch;
    })
    console.log('testfilter', testFilter, 'state', state);
    const filteredArray = state === filterState ? prodList : (state.sortFilter === 'none' ? testFilter : state.sortFilter === 'ascending' ? testFilter.sort((a,b) => a.price - b.price) : testFilter.sort((a,b) => b.price - a.price))
    return (
        <>
        <nav>
            <h3>Bookstore</h3>
            <input type='text' placeholder="Search for product" onChange={(event) => {
                // setFilterState({...filterState, textSearch: event.target.value});
                dispatch({type: 'searchBar', payload: event.target.value});
                // console.log('state: ', state, 'filterState: ', filterState)                
            }}  />
            <div class='icon'>Wishlist icon</div>
            <div class='icon'>Cart Icon</div>
            <div class='icon'>Signup/Login/Profile Icon</div>
        </nav>
        <div class='filters-section'>
            <h4>Filters</h4>
            <span onClick={() => {
            
            dispatch({type: 'clear'});        }
            }>Clear</span>
            <h4>Price</h4>
            <div>
            <div>1000</div><div>5000</div>
            <input type='range' min='1000' max='5000' onChange={(event) => {
                dispatch({type: 'priceFilter', payload: event.target.value})
                
            }} value={state.sliderState}/></div>
            <h4>Category</h4>
            <label><input type='checkbox' onChange={(event) => {dispatch({type: 'categoryFilter', payload: {category: 'fiction', checked: event.target.checked}})}} checked={state.categoryFilter.includes('fiction')}/>Fiction</label>
            <label><input type='checkbox' onChange={(event) => {dispatch({type: 'categoryFilter', payload: {category: 'non-fiction', checked: event.target.checked}})}} checked={state.categoryFilter.includes('non-fiction')}/>Non-fiction</label>
            <label><input type='checkbox' onChange={(event) => {dispatch({type: 'categoryFilter', payload: {category: 'horror', checked: event.target.checked}})}} checked={state.categoryFilter.includes('horror')}/>Horror</label>
            <h4>Rating</h4>
            <label><input type='radio' name='rating' onChange={() => dispatch({type: 'ratingFilter', payload: 1})} checked={state.ratingFilter === 1}/>1Stars and above</label>
            <label><input type='radio' name='rating' onChange={() => dispatch({type: 'ratingFilter', payload: 2})}  />2Stars and above</label>
            <label><input type='radio' name='rating' onChange={() => dispatch({type: 'ratingFilter', payload: 3})} />3Stars and above</label>
            <label><input type='radio' name='rating' onChange={() => dispatch({type: 'ratingFilter', payload: 4})} />4Stars and above</label>
            <h4>Sort By</h4>
            <label><input type='radio' name='sort' onChange={() => dispatch({type: 'sortFilter', payload: 'ascending'})} checked={state.sortFilter === 'ascending'}/>Price-Low to High</label>
            <label><input type='radio' name='sort' onChange={() => dispatch({type: 'sortFilter', payload: 'descending'})} checked={state.sortFilter === 'descending'}/>Price-High to Low</label>
        </div>
        {filteredArray.map(({author, title, price, _id}) => <div>
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