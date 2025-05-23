
import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToBill: (productId: number, quantity: number, unit: string) => void;
}

const ProductCard = ({ product, onAddToBill }: ProductCardProps) => {
  const [quantity, setQuantity] = useState<string>('');
  const [unit, setUnit] = useState<string>('kg');

  const handleAddToBill = () => {
    const quantityNum = parseFloat(quantity);
    if (!quantityNum || quantityNum <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }
    
    onAddToBill(product.id, quantityNum, unit);
    setQuantity('');
  };

  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
      <img 
        src={product.image} 
        alt={product.alt}
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-lg font-semibold mb-2 text-green-700">{product.name}</h3>
        <p className="text-gray-600 text-sm mb-3">{product.description}</p>
        <p className="text-lg font-bold text-green-600 mb-2">₹{product.price}/kg</p>
        <p className="text-sm text-gray-500 mb-4">Available: {product.quantity.toFixed(2)}kg</p>
        
        <div className="flex gap-2 mb-4">
          <input
            type="number"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
            min="0"
            step="0.001"
            placeholder="Quantity"
            className="flex-1 px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          >
            <option value="kg">kg</option>
            <option value="g">g</option>
          </select>
        </div>
        
        <button
          onClick={handleAddToBill}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-2 px-4 rounded-lg font-semibold transition-colors"
        >
          Add to Bill
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
