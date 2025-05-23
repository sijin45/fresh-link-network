
import { useEffect, useRef } from 'react';
import { X } from 'lucide-react';

interface PaymentModalProps {
  amount: number;
  onClose: () => void;
  onPaymentComplete: () => void;
}

const PaymentModal = ({ amount, onClose, onPaymentComplete }: PaymentModalProps) => {
  const qrCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (qrCodeRef.current && window.QRCode) {
      // Clear any existing QR code
      qrCodeRef.current.innerHTML = '';
      
      const transactionId = 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase();
      const upiUrl = `upi://pay?pa=greenlink@bank&pn=GreenLink&am=${amount.toFixed(2)}&tn=${transactionId}&cu=INR`;
      
      new window.QRCode(qrCodeRef.current, {
        text: upiUrl,
        width: 200,
        height: 200
      });
    }
  }, [amount]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl p-6 max-w-sm w-full relative">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
        >
          <X size={24} />
        </button>
        
        <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">Scan to Pay</h3>
        
        <div ref={qrCodeRef} className="flex justify-center mb-4"></div>
        
        <p className="text-center text-gray-600 mb-4">
          Scan the QR code with your payment app to pay ₹{amount.toFixed(2)}
        </p>
        
        <button
          onClick={onPaymentComplete}
          className="w-full bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-semibold transition-colors"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
