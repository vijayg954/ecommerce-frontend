/* eslint-disable react/prop-types */

import { createContext, useEffect } from "react";
// import { products } from "../assets/assets";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();
const ShopContextProvider = (props) => {
  const currency = "$";
  const delivery_fee = 10;
  const backendUrl = import.meta.env.VITE_BACKEND_URL;
  const [search, setSearch] = useState("");
  const [showSearch, setShowSearch] = useState(false);
  const [cartItems, setcartItems] = useState({});
  const [products, setProducts] = useState([]);
  const [token, setToken] = useState("");
  const navigate = useNavigate();

  const addToCart = async (itemId, size) => {
    if (!size) {
      toast.error("Select product size");
      return;
    }
    let cartData = structuredClone(cartItems);
    if (cartData[itemId]) {
      if (cartData[itemId][size]) {
        cartData[itemId][size] += 1;
      } else {(cartData[itemId][size] = 1)};
    } else {
      // cartData[itemId] = {};
      // cartData[itemId][size] = 1;
      cartData[itemId] = { [size]: 1 }; // Initialize new item
    }
    setcartItems(cartData);
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/v1/cart/add",
          { itemId, size },
          { headers: { token } }
        );
        console.log("added");
      } catch (error) {
        toast.error(error.message);
      }
    }
  };

  // const getCartAmount = () => {
  //   let totalAmount = 0;
  //   for (const items in cartItems) {
  //     let itemInfo = products.find((product) => product._id === items);
  //     for (const item in cartItems[items]) {
  //       try {
  //         if (cartItems[items][item] > 0) {
  //           totalAmount += itemInfo.price * cartItems[items][item];
  //         }
  //       } catch (error) {
  //         console.log( error);
  //         console.warn(`Product with ID ${items} not found.`);
  //       }
  //     }
  //   }
  //   return totalAmount;
  // };
  const getCartAmount = () => {
    let totalAmount = 0;
    for (const items in cartItems) {
      let itemInfo = products.find((product) => product._id === items);
      for (const item in cartItems[items]) {
        if (itemInfo) { // Check if itemInfo is defined
          try {
            if (cartItems[items][item] > 0) {
              totalAmount += itemInfo.price * cartItems[items][item];
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          console.warn(`Product with ID ${items} not found.`);
        }
      }
    }
    return totalAmount;
  };

  
  const getCartCount = () => {
    let totalCount = 0;
    for (const items in cartItems) {
      for (const item in cartItems[items]) {
        try {
          if (cartItems[items][item] > 0) {
            totalCount += cartItems[items][item];
          }
        } catch (error) {
          console.log("hello" + error);
        }
      }
    }
    return totalCount;
  };

  const getProductData = async () => {
    try {
      const response = await axios.get(backendUrl + "/api/v1/product/list");
      if (response.data.success) {
        setProducts(response.data.products);
      } else {
        toast.error(response.data.message);
      }
    } catch (error) {
      toast.error(error.message);
      // console.log(error);
    }
  };

  const getUserCart = async (token) => {
    try {
      const response = await axios.post(
        backendUrl + "/api/v1/cart/get",
        {},
        { headers: { token } }
      );
      if (response.data.success) {
        setcartItems(response.data.cartData);
      } 
    } catch (error) {
      toast.error(error.message);
      console.log(error);
    }
  };
  useEffect(() => {
    getProductData();
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!token && localStorage.getItem("token")) {
      setToken(localStorage.getItem("token"));
      getUserCart(localStorage.getItem("token"));
    }
      // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateQuantity = async (itemId, size, quantity) => {
    let cartData = structuredClone(cartItems);
    cartData[itemId][size] = quantity;
    setcartItems(cartData);
    if (token) {
      try {
        await axios.post(
          backendUrl + "/api/v1/cart/update",
          { itemId, size, quantity },
          { headers: token }
        );
      } catch (error) {
        toast.error(error.message);
      }
    }
  };
  // useEffect(() => {
  //   console.log(cartItems);
  // }, [cartItems]);

  const value = {
    products,
    currency,
    delivery_fee,
    search,
    setSearch,
    showSearch,
    setShowSearch,
    cartItems,
    addToCart,
    getCartCount,
    updateQuantity,
    getCartAmount,
    navigate,
    backendUrl,setcartItems,
    setToken,
    token,
  };
  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};
export default ShopContextProvider;




// // easy code 
// /* eslint-disable react/prop-types */
// import { createContext, useEffect, useState } from "react";
// import { toast } from "react-toastify";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";

// export const ShopContext = createContext();

// const ShopContextProvider = ({ children }) => {
//   const currency = "$";
//   const delivery_fee = 10;
//   const backendUrl = import.meta.env.VITE_BACKEND_URL;

//   const [search, setSearch] = useState("");
//   const [showSearch, setShowSearch] = useState(false);
//   const [cartItems, setcartItems] = useState({});
//   const [products, setProducts] = useState([]);
//   const [token, setToken] = useState("");
//   const navigate = useNavigate();

//   const addToCart = async (itemId, size) => {
//     if (!size) return toast.error("Select product size");

//     setcartItems(prev => ({
//       ...prev,
//       [itemId]: {
//         ...prev[itemId],
//         [size]: (prev[itemId]?.[size] || 0) + 1,
//       },
//     }));

//     if (token) {
//       try {
//         await axios.post(`${backendUrl}/api/v1/cart/add`, { itemId, size }, {
//           headers: { token },
//         });
//         console.log("added");
//       } catch (error) {
//         toast.error(error.message);
//       }
//     }
//   };

//   const updateQuantity = async (itemId, size, quantity) => {
//     setcartItems(prev => ({
//       ...prev,
//       [itemId]: {
//         ...prev[itemId],
//         [size]: quantity,
//       },
//     }));

//     if (token) {
//       try {
//         await axios.post(`${backendUrl}/api/v1/cart/update`, { itemId, size, quantity }, {
//           headers: { token },
//         });
//       } catch (error) {
//         toast.error(error.message);
//       }
//     }
//   };

//   const getCartCount = () =>
//     Object.values(cartItems)
//       .flatMap(sizes => Object.values(sizes))
//       .reduce((sum, qty) => sum + (qty > 0 ? qty : 0), 0);

//   const getCartAmount = () =>
//     Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
//       const product = products.find(p => p._id === itemId);
//       if (!product) {
//         console.warn(`Product with ID ${itemId} not found.`);
//         return total;
//       }

//       const itemTotal = Object.values(sizes)
//         .reduce((sum, qty) => sum + (qty > 0 ? qty * product.price : 0), 0);

//       return total + itemTotal;
//     }, 0);

//   const getProductData = async () => {
//     try {
//       const response = await axios.get(`${backendUrl}/api/v1/product/list`);
//       if (response.data.success) {
//         setProducts(response.data.products);
//       } else {
//         toast.error(response.data.message);
//       }
//     } catch (error) {
//       toast.error(error.message);
//     }
//   };

//   const getUserCart = async (authToken) => {
//     try {
//       const response = await axios.post(`${backendUrl}/api/v1/cart/get`, {}, {
//         headers: { token: authToken },
//       });
//       if (response.data.success) {
//         setcartItems(response.data.cartData);
//       }
//     } catch (error) {
//       toast.error(error.message);
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getProductData();
//   }, []);

//   useEffect(() => {
//     const storedToken = localStorage.getItem("token");
//     if (!token && storedToken) {
//       setToken(storedToken);
//       getUserCart(storedToken);
//     }
//   }, [token]);

//   const value = {
//     products,
//     currency,
//     delivery_fee,
//     search,
//     setSearch,
//     showSearch,
//     setShowSearch,
//     cartItems,
//     setcartItems,
//     token,
//     setToken,
//     navigate,
//     addToCart,
//     updateQuantity,
//     getCartCount,
//     getCartAmount,
//     backendUrl,
//   };

//   return (
//     <ShopContext.Provider value={value}>
//       {children}
//     </ShopContext.Provider>
//   );
// };

// export default ShopContextProvider;
