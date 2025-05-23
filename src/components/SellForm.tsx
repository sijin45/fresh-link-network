
import { useState } from 'react';
import { Product } from '../types';

interface SellFormProps {
  onAddProduct: (product: Omit<Product, 'id'>) => void;
}

const SellForm = ({ onAddProduct }: SellFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: '',
    quantity: '',
    category: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const product = {
      name: formData.name,
      description: formData.description,
      price: parseFloat(formData.price),
      quantity: parseFloat(formData.quantity),
      category: formData.category,
      image: `https://source.unsplash.com/random/300x200/?${formData.category.toLowerCase()}`,
      alt: `Fresh ${formData.name.toLowerCase()} from local farms`
    };

    onAddProduct(product);
    alert(`Product "${product.name}" listed successfully!`);
    setFormData({
      name: '',
      description: '',
      price: '',
      quantity: '',
      category: ''
    });
  };

  return (
    <section id="sell" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Sell Your Products</h2>
        
        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Product Name"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            placeholder="Product Description"
            rows={4}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <input
            type="number"
            name="price"
            value={formData.price}
            onChange={handleChange}
            placeholder="Price (INR)"
            step="0.01"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <input
            type="number"
            name="quantity"
            value={formData.quantity}
            onChange={handleChange}
            placeholder="Quantity (kg)"
            step="0.1"
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="" disabled>Select Category</option>
            <option value="Fruits">Fruits</option>
            <option value="Vegetables">Vegetables</option>
            <option value="Dairy">Dairy</option>
            <option value="Fertilizers">Fertilizers</option>
            <option value="Manure">Manure</option>
          </select>
          
          <button
            type="submit"
            className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
          >
            List Product
          </button>
        </form>
      </div>
    </section>
  );
};

export default SellForm;
