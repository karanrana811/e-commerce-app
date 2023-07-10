import "./App.css";
// import logo from "./logo.png";
import Mockman from 'mockman-js';
import {Routes, Route} from 'react-router-dom';
import Home from "./pages/home.js";
import ProductList from "./pages/productListing";
import SingleProductPage from "./pages/singleProductPage";

function App() {
  // const getData = async () => {
  //   const creds = {
  //     email: "adarshbalika@gmail.com",
  //     password: "adarshbalika"
  //   }
  //   try {
  //     const res = await fetch('/api/auth/login', {
  //       method: 'POST',
  //       body: JSON.stringify(creds)
  //     });
  //     const { encodedToken, foundUser : {firstName} } = await res.json();
  //     localStorage.setItem('encodedToken', encodedToken);
  //     localStorage.setItem('firstName', firstName);
  //     console.log(firstName, encodedToken)
  //   }
  //   catch(error) {
  //     console.error(error)
  //   }
  // }
  return (
    <div className="App">

      <Routes>
        <Route path='/mockman' element={<Mockman />} />
        {/* <Route path='*' element={<App />} /> */}
        <Route path='/productlist' element={<ProductList />} />
        <Route path='/' element={<Home />} />
        <Route path='/productlist/:productID' element={<SingleProductPage />} />
        <Route path='/randompath' element={<><h1>This is a random path.</h1>
        <button onClick={() => {
          const encodedToken = localStorage.getItem('encodedToken');
          const firstName = localStorage.getItem('firstName');
          console.log(encodedToken, firstName)
        }}>Get Token</button></>} />
      
      </Routes>
    </div>
  );
}

export default App;
