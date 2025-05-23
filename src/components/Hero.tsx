
const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="h-screen flex items-center justify-center text-white text-center mt-16 relative"
      style={{
        backgroundImage: 'url("https://st3.depositphotos.com/4528771/34978/i/450/depositphotos_349781950-stock-photo-group-various-vegetables-background-agricultural.jpg")',
        backgroundSize: 'cover',
        backgroundPosition: 'center'
      }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10 bg-black bg-opacity-50 p-8 rounded-xl max-w-4xl mx-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-6">GreenLink</h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          Connecting Farmers Directly with Consumers
        </p>
        <button 
          onClick={() => scrollToSection('buy')}
          className="bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-lg text-lg font-semibold transition-colors transform hover:scale-105"
        >
          Shop Now
        </button>
      </div>
    </section>
  );
};

export default Hero;
