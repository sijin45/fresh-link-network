
import { useState } from 'react';
import { Product, BillItem } from '../types';
import ProductCard from './ProductCard';
import Bill from './Bill';

interface ProductsProps {
  products: Product[];
  billItems: BillItem[];
  onAddToBill: (productId: number, quantity: number, unit: string) => void;
  onClearBill: () => void;
}

const Products = ({ products, billItems, onAddToBill, onClearBill }: ProductsProps) => {
  return (
    <section id="buy" className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Buy Fresh Produce</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mb-8">
          {products.map(product => (
            <ProductCard 
              key={product.id} 
              product={product} 
              onAddToBill={onAddToBill}
            />
          ))}
        </div>

        {billItems.length > 0 && (
          <Bill billItems={billItems} onClearBill={onClearBill} />
        )}
      </div>
    </section>
  );
};

export default Products;
