import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from './components/Cart/Cart';
import { useState } from "react";
import CartProvider from './store/CartProvider'

function App() {
  const [isClicked, setIsClicked] = useState(false)
  return (
    <CartProvider>
      {isClicked && <Cart onClick={() => setIsClicked(false)} />}
      <Header onClick={() => setIsClicked(true)} />
      < main >
        <Meals />
      </main>
    </CartProvider >
  );
}

export default App;
