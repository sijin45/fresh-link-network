
import { useState } from 'react';
import { Product } from '../types';

interface SellFormProps {
  onAddProduct: (product: Omit<Product, 'id'>) => void;
}

const SellForm = ({ onAddProduct }: SellFormProps) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState<string>('');
  const [quantity, setQuantity] = useState<string>('');
  const [category, setCategory] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const newProduct: Omit<Product, 'id'> = {
      name,
      description,
      price: parseFloat(price),
      quantity: parseFloat(quantity),
      category,
      image: `https://source.unsplash.com/random/300x200/?${category.toLowerCase()}`,
      alt: `Fresh ${name.toLowerCase()} from local farms`
    };
    
    onAddProduct(newProduct);
    
    // Reset form
    setName('');
    setDescription('');
    setPrice('');
    setQuantity('');
    setCategory('');
  };

  return (
    <section id="sell" className="py-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-8 text-green-700">Sell Your Products</h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="product-name" className="block text-sm font-medium text-gray-700 mb-1">
              Product Name
            </label>
            <input
              id="product-name"
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Enter product name"
            />
          </div>
          
          <div>
            <label htmlFor="product-description" className="block text-sm font-medium text-gray-700 mb-1">
              Product Description
            </label>
            <textarea
              id="product-description"
              rows={4}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
              placeholder="Describe your product"
            />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label htmlFor="product-price" className="block text-sm font-medium text-gray-700 mb-1">
                Price (₹/kg)
              </label>
              <input
                id="product-price"
                type="number"
                step="0.01"
                min="0"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Enter price per kg"
              />
            </div>
            
            <div>
              <label htmlFor="product-quantity" className="block text-sm font-medium text-gray-700 mb-1">
                Quantity (kg)
              </label>
              <input
                id="product-quantity"
                type="number"
                step="0.1"
                min="0"
                value={quantity}
                onChange={(e) => setQuantity(e.target.value)}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
                placeholder="Enter quantity in kg"
              />
            </div>
          </div>
          
          <div>
            <label htmlFor="product-category" className="block text-sm font-medium text-gray-700 mb-1">
              Category
            </label>
            <select
              id="product-category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-green-500 focus:border-green-500"
            >
              <option value="" disabled>Select Category</option>
              <option value="Fruits">Fruits</option>
              <option value="Vegetables">Vegetables</option>
              <option value="Dairy">Dairy</option>
              <option value="Fertilizers">Fertilizers</option>
              <option value="Manure">Manure</option>
            </select>
          </div>
          
          <div>
            <button
              type="submit"
              className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
            >
              List Product
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SellForm;
