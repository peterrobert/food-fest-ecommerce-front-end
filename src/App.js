import "./styles/app.css";
import ProductsPage from "./pages/ProductsPage";
import ProductDisplayPage from "./pages/ProductDisplayPage";

import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <Routes>
        <Route path="/" element={<ProductsPage />} />
        <Route path="/product/:id" element={<ProductDisplayPage />} />
      </Routes>
    </QueryClientProvider>
  );
}

export default App;
