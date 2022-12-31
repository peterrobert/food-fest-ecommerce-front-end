import "./styles/app.css";
import ProductsPage from "./pages/ProductsPage";
import {
  QueryClient,
  QueryClientProvider,
} from "react-query";

// Create a client
const queryClient = new QueryClient();

function App() {
  return (
    // Provide the client to your App
    <QueryClientProvider client={queryClient}>
      <ProductsPage />
    </QueryClientProvider>
  );
}

export default App;
