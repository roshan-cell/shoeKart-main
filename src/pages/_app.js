import '@/styles/globals.css'
import { useState  , useEffect} from 'react'
import Footer from '../../components/Footer'
import NavBar from '../../components/Navbar'

export default function App({ 
  Component, pageProps 
  
}) {

  // Add to card function
  const [cart, setCart] = useState({})
  const [subTotal, setSubTotal] = useState(0)

  // to get cart from local storage and update it
  useEffect(() => {
    try {
      if (localStorage.getItem("cart")) {
        setCart(JSON.parse(localStorage.getItem("cart")));
        saveCart(JSON.parse(localStorage.getItem("cart")));
      }
    } catch (error) {
      console.log(error);
      console.error(error);
      localStorage.clear();
    }
  }, []);


  const saveCart = (myCart) => {
    localStorage.setItem("cart", JSON.stringify(myCart));

    // subtotal calculation
    let subt = 0;
    let keys = Object.keys(myCart);
    for (let i = 0; i < keys.length; i++) {
      subt += myCart[keys[i]].price * myCart[keys[i]].quantity;
      console.log(keys[i].price);
    }
    setSubTotal(subt);
    // console.log(subTotal);
    // console.log(myCart[keys[i].price * myCart[keys[i]].quantity]);
  };




  const addtoCart = (itemCode, quantity, price, productName, size, variant) => {
    let newCart = cart;
    if (itemCode in cart) {
      newCart[itemCode].quantity = cart[itemCode].quantity + quantity;
    } else {
      newCart[itemCode] = { quantity: 1, price, productName, size, variant };
    }
    setCart(newCart);
    saveCart(newCart);
    console.log("item added successfully");
  };

  const clearCart = () => {
    setCart({})
    saveCart({})
    console.log("cart cleared");
  }


  // remove cart items
  const removeFromCart = (
    itemCode,
    quantity,
    price,
    productName,
    size,
    variant
  ) => {
    let newCart = JSON.parse(JSON.stringify(cart));
    if (itemCode in cart) {
      newCart[itemCode].quantity = cart[itemCode].quantity - quantity;
    }
    // if quantity is equal to zero then
    if (newCart[itemCode].quantity <= 0) {
      delete newCart[itemCode];
    }
    setCart(newCart);
    saveCart(newCart);
  };
  

  return (
   <> 
   <NavBar cart={cart}
          addtoCart={addtoCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}/>
          
  <Component cart={cart}
          addtoCart={addtoCart}
          removeFromCart={removeFromCart}
          clearCart={clearCart}
          subTotal={subTotal}
           {...pageProps} />  

  <Footer/> </>
  )
}
