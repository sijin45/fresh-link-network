
import { useState, useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Features from '../components/Features';
import Products from '../components/Products';
import SellForm from '../components/SellForm';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import PaymentModal from '../components/PaymentModal';
import { Product, BillItem } from '../types';
import { mockProducts } from '../data/products';

const Index = () => {
  const [products, setProducts] = useState<Product[]>(mockProducts);
  const [billItems, setBillItems] = useState<BillItem[]>([]);

  const addProduct = (newProduct: Omit<Product, 'id'>) => {
    const product: Product = {
      ...newProduct,
      id: products.length + 1,
      image: `https://source.unsplash.com/random/300x200/?${newProduct.category.toLowerCase()}`,
      alt: `Fresh ${newProduct.name.toLowerCase()} from local farms`
    };
    setProducts([...products, product]);
  };

  const addToBill = (productId: number, quantity: number, unit: string) => {
    const product = products.find(p => p.id === productId);
    if (!product) return;

    const quantityInKg = unit === 'g' ? quantity / 1000 : quantity;
    
    if (quantityInKg > product.quantity) {
      alert(`Sorry, only ${product.quantity.toFixed(2)}kg of ${product.name} is available.`);
      return;
    }

    // Update product quantity
    setProducts(prev => prev.map(p => 
      p.id === productId 
        ? { ...p, quantity: p.quantity - quantityInKg }
        : p
    ));

    // Add to bill
    const totalPrice = quantityInKg * product.price;
    const billItem: BillItem = {
      name: product.name,
      quantity: quantity,
      unit: unit,
      price: product.price,
      totalPrice: totalPrice
    };

    setBillItems(prev => [...prev, billItem]);
  };

  const clearBill = () => {
    setBillItems([]);
  };

  return (
    <div className="min-h-screen bg-white">
      <Header />
      <Hero />
      <About />
      <Features />
      <Products 
        products={products} 
        billItems={billItems}
        onAddToBill={addToBill}
        onClearBill={clearBill}
      />
      <SellForm onAddProduct={addProduct} />
      <Contact />
      <Footer />
      <PaymentModal 
        onComplete={() => {
          clearBill();
          alert("Payment completed successfully!");
        }} 
      />
    </div>
  );
};

export default Index;
