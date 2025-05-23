
import { useEffect, useState, useRef } from 'react';

interface PaymentModalProps {
  onComplete: () => void;
}

const PaymentModal = ({ onComplete }: PaymentModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [amount, setAmount] = useState(0);
  const qrCodeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleOpenModal = (event: Event) => {
      const customEvent = event as CustomEvent;
      setAmount(customEvent.detail.amount);
      setIsOpen(true);
      
      // Generate QR code after modal is opened
      setTimeout(generateQRCode, 100);
    };

    window.addEventListener('openPaymentModal', handleOpenModal);
    
    return () => {
      window.removeEventListener('openPaymentModal', handleOpenModal);
    };
  }, []);

  const generateTransactionId = () => {
    return 'TXN' + Math.random().toString(36).substr(2, 9).toUpperCase();
  };

  const generateQRCode = () => {
    if (qrCodeRef.current && window.QRCode) {
      qrCodeRef.current.innerHTML = '';
      
      const transactionId = generateTransactionId();
      const upiUrl = `upi://pay?pa=greenlink@bank&pn=GreenLink&am=${amount.toFixed(2)}&tn=${transactionId}&cu=INR`;
      
      new window.QRCode(qrCodeRef.current, {
        text: upiUrl,
        width: 200,
        height: 200
      });
    }
  };

  const handleComplete = () => {
    setIsOpen(false);
    onComplete();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-lg max-w-md w-full">
        <h3 className="text-2xl font-bold mb-4 text-green-700 text-center">Scan to Pay</h3>
        
        <div ref={qrCodeRef} className="flex justify-center my-4"></div>
        
        <p className="text-center mb-6">
          Scan the QR code with your payment app to pay ₹{amount.toFixed(2)}
        </p>
        
        <button
          onClick={handleComplete}
          className="w-full bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded transition-colors"
        >
          Complete Payment
        </button>
      </div>
    </div>
  );
};

export default PaymentModal;
