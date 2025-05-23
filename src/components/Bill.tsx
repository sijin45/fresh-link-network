
import { useState } from 'react';
import { BillItem } from '../types';
import PaymentModal from './PaymentModal';

interface BillProps {
  billItems: BillItem[];
  onClearBill: () => void;
}

const Bill = ({ billItems, onClearBill }: BillProps) => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);

  const grandTotal = billItems.reduce((total, item) => total + item.totalPrice, 0);

  const handlePayment = () => {
    setShowPaymentModal(false);
    alert("Payment completed successfully!");
    onClearBill();
  };

  return (
    <>
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-2xl mx-auto">
        <h3 className="text-2xl font-bold mb-4 text-green-700">Purchase Bill</h3>
        
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-200">
                <th className="text-left py-2 text-green-700">Product</th>
                <th className="text-left py-2 text-green-700">Quantity</th>
                <th className="text-left py-2 text-green-700">Unit</th>
                <th className="text-left py-2 text-green-700">Price/kg</th>
                <th className="text-left py-2 text-green-700">Total</th>
              </tr>
            </thead>
            <tbody>
              {billItems.map((item, index) => (
                <tr key={index} className="border-b border-gray-100">
                  <td className="py-2">{item.name}</td>
                  <td className="py-2">{item.quantity}</td>
                  <td className="py-2">{item.unit}</td>
                  <td className="py-2">₹{item.price}</td>
                  <td className="py-2">₹{item.totalPrice.toFixed(2)}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="mt-4 text-right">
          <p className="text-xl font-bold text-green-700">
            Grand Total: ₹{grandTotal.toFixed(2)}
          </p>
        </div>
        
        <button
          onClick={() => setShowPaymentModal(true)}
          className="w-full mt-4 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          Proceed to Payment
        </button>
      </div>

      {showPaymentModal && (
        <PaymentModal 
          amount={grandTotal}
          onClose={() => setShowPaymentModal(false)}
          onPaymentComplete={handlePayment}
        />
      )}
    </>
  );
};

export default Bill;
