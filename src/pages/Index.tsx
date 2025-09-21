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
        className="relative h-[600px] bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-real-estate-navy/60"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex items-center">
          <div className="text-white max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-bold mb-6 leading-tight">
              Helping You Find Your 
              <span className="text-real-estate-gold"> Dream Home</span> in Winnipeg
            </h1>
            <p className="text-xl mb-8 leading-relaxed">
              Professional Realtor with Real Brokerage, dedicated to making your 
              real estate dreams a reality in beautiful Winnipeg.
            </p>
            <Link to="/listings">
              <Button className="bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold px-8 py-3 text-lg">
                Browse Listings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Search Bar Section */}
      <section className="py-12 bg-real-estate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-4">
              Find Your Perfect Home
            </h2>
            <p className="text-real-estate-text max-w-2xl mx-auto">
              Search through our extensive listings to find the home that matches your lifestyle and budget.
            </p>
          </div>
          <SearchBar />
        </div>
      </section>

      {/* Featured Properties Section */}
      <section className="py-16 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-4">
              Featured Listings
            </h2>
            <p className="text-real-estate-text max-w-2xl mx-auto">
              Discover some of our most popular properties currently available in Winnipeg's best neighbourhoods.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>
          
          <div className="text-center">
            <Link to="/listings">
              <Button className="bg-real-estate-navy hover:bg-real-estate-navy/90 text-white px-8 py-3">
                View All Listings
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-real-estate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-4">
              What Clients Say
            </h2>
            <p className="text-real-estate-text max-w-2xl mx-auto">
              Don't just take our word for it. Here's what our satisfied clients have to say about their experience.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial) => (
              <TestimonialCard key={testimonial.id} testimonial={testimonial} />
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Index;