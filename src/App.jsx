import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <main className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/product/:productId" element={<Product />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/login" element={<Login />} />
        <Route path="/palce-order" element={<PlaceOrder />} />
        <Route path="/orders" element={<Orders />} />
      </Routes>
    </main>
  );
}

export default App;
