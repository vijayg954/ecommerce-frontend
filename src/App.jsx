import "./App.css";
import { BrowserRouter as Router, Routes,Route } from 'react-router-dom'
import Home from "./pages/Home";
import Collection from "./pages/Collection";
import Contact from "./pages/Contact";
import Crat from "./pages/Crat";
import Login from "./pages/Login";
import Orders from "./pages/Orders";
import PlaceOrder from "./pages/PlaceOrder";
import Product from "./pages/Product";
import About from "./pages/About";
import Navbar from "./components/Navbar";
import ShopContextProvider from "./context/ShopContext";
import Footer from "./components/Footer";
import SearchBar from "./components/SearchBar";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {
  return (
    <>
    <Router>
    <ShopContextProvider>
    <ToastContainer></ToastContainer>
    <Navbar></Navbar>
    <SearchBar></SearchBar>
<Routes>
  <Route path="/" element={<Home></Home>}></Route>
  <Route path="/collection" element={<Collection></Collection>}></Route>
  <Route path="/contact" element={<Contact></Contact>}></Route>
  <Route path="/about" element={<About></About>}></Route>
  <Route path="/cart" element={<Crat></Crat>}></Route>
  <Route path="/login" element={<Login></Login>}></Route>
  <Route path="/orders" element={<Orders></Orders>}></Route>
  <Route path="/place-order" element={<PlaceOrder></PlaceOrder>}></Route>
  <Route path="/product/:productId" element={<Product></Product>}></Route>
</Routes>
<Footer></Footer>
</ShopContextProvider>
    </Router>
      
    </>
  );
}

export default App;
