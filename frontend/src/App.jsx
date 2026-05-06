import './App.css'
import Header from './components/header'
import ProductCard from './components/productCard'

function App() {
  

  return (
    <>
      <Header/>
      <ProductCard name="Apple Laptop" description="High-performance laptop for gaming and productivity" price={1299.99} picture="https://picsum.photos/id/2/200/300" />
      <ProductCard name="Gaming Laptop" description="High-performance laptop for gaming and productivity" price={1500.99} picture="https://picsum.photos/id/3/200/300" />
    </>
  )
}

export default App
