
const Hero = () => {
  return (
    <section id="home" className="relative h-screen bg-cover bg-center flex items-center justify-center" style={{
      backgroundImage: "url('https://st3.depositphotos.com/4528771/34978/i/450/depositphotos_349781950-stock-photo-group-various-vegetables-background-agricultural.jpg')"
    }}>
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="z-10 text-center text-white px-4 sm:px-6 lg:px-8 max-w-3xl mx-auto">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-4">GreenLink</h1>
        <p className="text-xl sm:text-2xl mb-8">Connecting Farmers Directly with Consumers</p>
        <a href="#buy" className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-md transition-colors inline-block">
          Shop Now
        </a>
      </div>
    </section>
  );
};

export default Hero;
