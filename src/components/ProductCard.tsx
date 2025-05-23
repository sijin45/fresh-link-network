
import { useState } from 'react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToBill: (productId: number, quantity: number, unit: string) => void;
}

const ProductCard = ({ product, onAddToBill }: ProductCardProps) => {
  const [quantity, setQuantity] = useState<number>(0);
  const [unit, setUnit] = useState<string>('kg');

  const handleAddToBill = () => {
    if (quantity <= 0) {
      alert("Please enter a valid quantity.");
      return;
    }
    onAddToBill(product.id, quantity, unit);
    setQuantity(0);
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img 
        src={product.image} 
        alt={product.alt} 
        className="w-full h-48 object-cover"
      />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2 text-green-700">{product.name}</h3>
        <p className="text-gray-600 mb-2">{product.description}</p>
        <p className="font-medium mb-1">Price: ₹{product.price}/kg</p>
        <p className="text-sm mb-4">Available: {product.quantity.toFixed(2)}kg</p>
        
        <div className="flex items-center gap-2 mb-4">
          <input
            type="number"
            min="0"
            step="0.001"
            value={quantity || ''}
            onChange={(e) => setQuantity(parseFloat(e.target.value) || 0)}
            className="border rounded px-2 py-1 w-20 text-center"
            placeholder="Qty"
          />
          <select
            value={unit}
            onChange={(e) => setUnit(e.target.value)}
            className="border rounded px-2 py-1"
          >
            <option value="kg">kg</option>
            <option value="g">g</option>
          </select>
        </div>
        
        <button
          onClick={handleAddToBill}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Add to Bill
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
