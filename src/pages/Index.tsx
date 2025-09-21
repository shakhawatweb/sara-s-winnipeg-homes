import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SearchBar from '@/components/SearchBar';
import PropertyCard from '@/components/PropertyCard';
import TestimonialCard from '@/components/TestimonialCard';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { properties, testimonials } from '@/data/properties';
import heroImage from '@/assets/hero-winnipeg-homes.jpg';

const Index = () => {
  const featuredProperties = properties.slice(0, 3);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section 
        className="relative h-[600px] bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-real-estate-navy/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl animate-slide-in-left">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Helping You Find Your 
              <span className="text-real-estate-gold animate-bounce-gentle inline-block"> Dream Home</span> in Winnipeg
            </h1>
            <p className="text-xl mb-8 leading-relaxed opacity-0 animate-fade-in" style={{ animationDelay: '0.3s', animationFillMode: 'forwards' }}>
              Professional Realtor with Real Brokerage, dedicated to making your 
              real estate dreams a reality in beautiful Winnipeg.
            </p>
            <div className="opacity-0 animate-fade-in" style={{ animationDelay: '0.6s', animationFillMode: 'forwards' }}>
              <Link to="/listings">
                <Button className="bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold px-8 py-3 text-lg transition-all duration-300 hover:scale-105 hover:shadow-xl">
                  Browse Listings
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-12 bg-real-estate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-4">
              Find Your Perfect Home
            </h2>
            <p className="text-real-estate-text max-w-2xl mx-auto">
              Search through our extensive listings to find the home that matches your lifestyle and budget.
            </p>
          </div>
          <div className="animate-scale-in" style={{ animationDelay: '0.2s', animationFillMode: 'forwards', opacity: '0' }}>
            <SearchBar />
          </div>
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-4">
              Featured Listings
            </h2>
            <p className="text-real-estate-text max-w-2xl mx-auto">
              Discover some of our most popular properties currently available in Winnipeg's best neighbourhoods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property, index) => (
              <div 
                key={property.id}
                className="animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.1}s`, 
                  animationFillMode: 'forwards',
                  opacity: '0'
                }}
              >
                <PropertyCard property={property} />
              </div>
            ))}
          </div>
          
          <div className="text-center animate-fade-in">
            <Link to="/listings">
              <Button className="bg-real-estate-navy hover:bg-real-estate-navy/90 text-white px-8 py-3 transition-all duration-300 hover:scale-105 hover:shadow-lg">
                View All Listings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-real-estate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12 animate-fade-in-up">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-4">
              What Clients Say
            </h2>
            <p className="text-real-estate-text max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={testimonial.id}
                className="animate-fade-in-up"
                style={{ 
                  animationDelay: `${index * 0.2}s`, 
                  animationFillMode: 'forwards',
                  opacity: '0'
                }}
              >
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;