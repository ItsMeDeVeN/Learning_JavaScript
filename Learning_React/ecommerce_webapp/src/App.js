import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProductList from './components/ProductList';
import ProductDetails from './components/ProductDetails';


function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<ProductList />} />
          <Route path="/ProductDetails/:id" element={<ProductDetails />} />
        </Routes>
      </div>
    </Router>
  );
}
export default App;