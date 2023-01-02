import React, { useState } from "react";
import "./styles/app.css";
import ProductsPage from "./pages/ProductsPage";
import ProductDisplayPage from "./pages/ProductDisplayPage";

import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import CartContext from "./context/CartContext";

// Create Query Client
const queryClient = new QueryClient();

// <==== FOR ADDING PRODUCTS INTO THE CART ====>

function App() {
  // <==== Main App State ===>
  const AppState = {
    AppCart: [],
    AppCategories: [],
  };
  const [state, setState] = useState(AppState);

  const handleAddToCart = (selection) => {
    setState({ ...state, AppCart: [...state.AppCart, selection] });
  };

  return (
    <CartContext.Provider
      value={{
        cartData: state.AppCart,
        addToCart: handleAddToCart,
      }}
    >
      <QueryClientProvider client={queryClient}>
        <Routes>
          <Route path="/" element={<ProductsPage />} />
          <Route path="/product/:id" element={<ProductDisplayPage />} />
        </Routes>
      </QueryClientProvider>
    </CartContext.Provider>
  );
}

export default App;
