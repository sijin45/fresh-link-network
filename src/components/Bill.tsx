
import { BillItem } from '../types';

interface BillProps {
  billItems: BillItem[];
  onClearBill: () => void;
}

const Bill = ({ billItems, onClearBill }: BillProps) => {
  const calculateGrandTotal = () => {
    return billItems.reduce((total, item) => total + item.totalPrice, 0);
  };

  const handleProceedToPayment = () => {
    // We'll create a PaymentModal component to handle this
    const paymentModal = document.getElementById('payment-modal');
    if (paymentModal) {
      // The modal is managed by PaymentModal component
      const event = new CustomEvent('openPaymentModal', {
        detail: { amount: calculateGrandTotal() }
      });
      window.dispatchEvent(event);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg max-w-3xl mx-auto mt-8">
      <h3 className="text-2xl font-bold mb-4 text-green-700">Purchase Bill</h3>
      
      <div className="overflow-x-auto">
        <table className="min-w-full">
          <thead>
            <tr className="border-b border-gray-300">
              <th className="text-left py-2">Product</th>
              <th className="text-left py-2">Quantity</th>
              <th className="text-left py-2">Unit</th>
              <th className="text-left py-2">Price/kg</th>
              <th className="text-left py-2">Total</th>
            </tr>
          </thead>
          <tbody>
            {billItems.map((item, index) => (
              <tr key={index} className="border-b border-gray-200">
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
        <p className="text-lg font-bold">Grand Total: ₹{calculateGrandTotal().toFixed(2)}</p>
      </div>
      
      <div className="mt-6 flex flex-col sm:flex-row gap-3 justify-end">
        <button
          onClick={onClearBill}
          className="bg-gray-500 hover:bg-gray-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Clear Bill
        </button>
        <button
          onClick={handleProceedToPayment}
          className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Proceed to Payment
        </button>
      </div>
    </div>
  );
};

export default Bill;
