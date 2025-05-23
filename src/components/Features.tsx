
import { ShoppingCart, Users, Shield, MessageCircle, Cloud, Star } from 'lucide-react';

const Features = () => {
  const features = [
    {
      icon: <ShoppingCart size={48} />,
      title: "Direct Sales",
      description: "Farmers can list and sell their products directly to consumers, ensuring higher profits."
    },
    {
      icon: <Users size={48} />,
      title: "User-Friendly Interface",
      description: "Simple and intuitive dashboard for farmers and customers to manage listings and purchases."
    },
    {
      icon: <Shield size={48} />,
      title: "Secure Payments",
      description: "Integrated payment gateway for safe and seamless transactions."
    },
    {
      icon: <MessageCircle size={48} />,
      title: "Chatbot Support",
      description: "Instant communication between farmers and customers for quick query resolution."
    },
    {
      icon: <Cloud size={48} />,
      title: "Weather Updates",
      description: "Real-time weather reports to help farmers plan crop production effectively."
    },
    {
      icon: <Star size={48} />,
      title: "Quality Assurance",
      description: "Reviews and ratings to build trust and ensure product quality."
    }
  ];

  return (
    <section id="features" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-4xl font-bold text-center mb-12 text-green-700">Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg border border-gray-100 text-center hover:shadow-xl transition-shadow">
              <div className="text-green-600 mb-4 flex justify-center">{feature.icon}</div>
              <h3 className="text-xl font-semibold mb-3 text-green-700">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
