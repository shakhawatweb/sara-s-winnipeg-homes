import { useParams, Link } from 'react-router-dom';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Bed, Bath, Square, MapPin, Phone, Mail, Instagram, ArrowLeft } from 'lucide-react';
import { properties } from '@/data/properties';
import saraImage from '@/assets/sara-buffie-realtor.jpg';

const PropertyDetails = () => {
  const { id } = useParams();
  const property = properties.find(p => p.id === id);

  if (!property) {
    return (
      <div className="min-h-screen bg-background">
        <Navbar />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-center">
          <h1 className="text-3xl font-bold text-real-estate-navy mb-4">Property Not Found</h1>
          <p className="text-real-estate-text mb-8">The property you're looking for doesn't exist.</p>
          <Link to="/listings">
            <Button className="bg-real-estate-navy hover:bg-real-estate-navy/90 text-white">
              Back to Listings
            </Button>
          </Link>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Back Button */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <Link to="/listings">
          <Button variant="outline" className="border-real-estate-navy text-real-estate-navy hover:bg-real-estate-light">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Listings
          </Button>
        </Link>
      </div>

      {/* Hero Image */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-[400px] lg:h-[500px] rounded-2xl overflow-hidden mb-8">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-6 left-6 bg-real-estate-gold text-real-estate-navy px-4 py-2 rounded-full font-semibold">
            {property.type}
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Property Info */}
          <div className="lg:col-span-2">
            <div className="flex justify-between items-start mb-6">
              <div>
                <h1 className="text-3xl lg:text-4xl font-bold text-real-estate-navy mb-2">
                  {property.title}
                </h1>
                <div className="flex items-center text-real-estate-text mb-4">
                  <MapPin className="w-5 h-5 mr-2" />
                  {property.location}
                </div>
              </div>
              <div className="text-right">
                <div className="text-3xl lg:text-4xl font-bold text-real-estate-gold">
                  {property.price}
                </div>
              </div>
            </div>

            {/* Property Stats */}
            <div className="flex flex-wrap gap-6 mb-8 p-6 bg-real-estate-light rounded-2xl">
              <div className="flex items-center gap-2">
                <Bed className="w-6 h-6 text-real-estate-navy" />
                <span className="text-lg font-semibold text-real-estate-navy">
                  {property.bedrooms} Bedrooms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Bath className="w-6 h-6 text-real-estate-navy" />
                <span className="text-lg font-semibold text-real-estate-navy">
                  {property.bathrooms} Bathrooms
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Square className="w-6 h-6 text-real-estate-navy" />
                <span className="text-lg font-semibold text-real-estate-navy">
                  {property.sqft.toLocaleString()} SqFt
                </span>
              </div>
            </div>

            {/* Description */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-real-estate-navy mb-4">Description</h2>
              <p className="text-real-estate-text leading-relaxed text-lg">
                {property.description}
              </p>
            </div>

            {/* Features */}
            <div className="mb-8">
              <h2 className="text-2xl font-bold text-real-estate-navy mb-4">Features</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {property.features.map((feature, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-2 h-2 bg-real-estate-gold rounded-full mr-3"></div>
                    <span className="text-real-estate-text">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Realtor Info */}
            <Card className="bg-white border-border shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <div className="text-center mb-6">
                  <img
                    src={saraImage}
                    alt="Sara Buffie"
                    className="w-24 h-24 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-real-estate-navy">Sara Buffie</h3>
                  <p className="text-real-estate-text">Realtor @ Real Brokerage</p>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-3 text-real-estate-gold" />
                    <span className="text-real-estate-text">(204) 555-0123</span>
                  </div>
                  <div className="flex items-center">
                    <Mail className="w-5 h-5 mr-3 text-real-estate-gold" />
                    <span className="text-real-estate-text">sara@realbrokerage.com</span>
                  </div>
                  <div className="flex items-center">
                    <Instagram className="w-5 h-5 mr-3 text-real-estate-gold" />
                    <span className="text-real-estate-text">@sarabuffie</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Contact Form */}
            <Card className="bg-white border-border shadow-[var(--shadow-card)]">
              <CardContent className="p-6">
                <h3 className="text-xl font-bold text-real-estate-navy mb-4">Send Inquiry</h3>
                <form className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-real-estate-text mb-2">
                      Name
                    </label>
                    <Input 
                      type="text" 
                      placeholder="Your full name"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-real-estate-text mb-2">
                      Email
                    </label>
                    <Input 
                      type="email" 
                      placeholder="your@email.com"
                      className="border-border"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-real-estate-text mb-2">
                      Message
                    </label>
                    <Textarea 
                      placeholder={`I'm interested in ${property.title}. Please contact me with more information.`}
                      className="border-border h-24 resize-none"
                    />
                  </div>
                  <Button className="w-full bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold">
                    Send Inquiry
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PropertyDetails;