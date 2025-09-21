import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Link } from 'react-router-dom';
import { Instagram, Phone, Mail, Award, Users, Home } from 'lucide-react';
import saraImage from '@/assets/sara-buffie-realtor.jpg';

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Banner */}
      <section className="relative bg-real-estate-navy text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Meet Sara Buffie
              </h1>
              <p className="text-xl text-gray-300 leading-relaxed">
                Your trusted real estate professional dedicated to helping you 
                navigate Winnipeg's dynamic property market with expertise and care.
              </p>
            </div>
            <div className="flex justify-center">
              <img
                src={saraImage}
                alt="Sara Buffie - Winnipeg Realtor"
                className="w-64 h-64 lg:w-80 lg:h-80 rounded-full object-cover shadow-[var(--shadow-real-estate)]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg max-w-none">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-6">
              About Sara
            </h2>
            <div className="text-real-estate-text leading-relaxed space-y-6">
              <p>
                With over 8 years of experience in the Winnipeg real estate market, 
                Sara Buffie has established herself as a trusted advisor for families 
                looking to buy or sell their homes. As a licensed Realtor with Real Brokerage, 
                she combines deep local market knowledge with innovative marketing strategies 
                to deliver exceptional results for her clients.
              </p>
              
              <p>
                Sara's passion for real estate stems from her genuine desire to help 
                people achieve their homeownership dreams. Whether you're a first-time 
                buyer navigating the market for the first time, or an experienced investor 
                looking for your next opportunity, Sara provides personalized service 
                tailored to your unique needs and goals.
              </p>
              
              <p>
                Born and raised in Winnipeg, Sara has an intimate understanding of the 
                city's diverse neighborhoods, from the historic charm of Wolseley to 
                the family-friendly communities of River Heights and the growing developments 
                in Sage Creek. This local expertise, combined with her commitment to 
                staying current with market trends and technology, ensures her clients 
                receive the most comprehensive service possible.
              </p>
              
              <p>
                When she's not helping clients find their perfect home, Sara enjoys 
                exploring Winnipeg's vibrant food scene, volunteering with local 
                community organizations, and spending time with her family at the 
                lake during Manitoba's beautiful summers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 bg-real-estate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-4">
              Proven Track Record
            </h2>
            <p className="text-real-estate-text max-w-2xl mx-auto">
              Sara's commitment to excellence is reflected in her impressive results 
              and satisfied clients throughout Winnipeg.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="text-center bg-white border-border shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <Home className="w-12 h-12 text-real-estate-gold mx-auto mb-4" />
                <div className="text-4xl font-bold text-real-estate-navy mb-2">200+</div>
                <div className="text-real-estate-text font-medium">Homes Sold</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Successfully closed transactions
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-border shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <Users className="w-12 h-12 text-real-estate-gold mx-auto mb-4" />
                <div className="text-4xl font-bold text-real-estate-navy mb-2">150+</div>
                <div className="text-real-estate-text font-medium">Happy Families</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Clients who found their dream home
                </p>
              </CardContent>
            </Card>
            
            <Card className="text-center bg-white border-border shadow-[var(--shadow-card)]">
              <CardContent className="p-8">
                <Award className="w-12 h-12 text-real-estate-gold mx-auto mb-4" />
                <div className="text-4xl font-bold text-real-estate-navy mb-2">8</div>
                <div className="text-real-estate-text font-medium">Years Experience</div>
                <p className="text-sm text-muted-foreground mt-2">
                  Serving Winnipeg real estate
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-real-estate-navy mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-real-estate-text mb-8 max-w-2xl mx-auto">
            Whether you're buying your first home or selling your current property, 
            Sara is here to guide you through every step of the process.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <Link to="/contact">
              <Button className="bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold px-8 py-3 text-lg">
                Get In Touch
              </Button>
            </Link>
            <Link to="/listings">
              <Button variant="outline" className="border-real-estate-navy text-real-estate-navy hover:bg-real-estate-light px-8 py-3 text-lg">
                View Listings
              </Button>
            </Link>
          </div>
          
          {/* Social Links */}
          <div className="flex justify-center space-x-6">
            <div className="flex items-center text-real-estate-text">
              <Phone className="w-5 h-5 mr-2 text-real-estate-gold" />
              <span>(204) 555-0123</span>
            </div>
            <div className="flex items-center text-real-estate-text">
              <Mail className="w-5 h-5 mr-2 text-real-estate-gold" />
              <span>sara@realbrokerage.com</span>
            </div>
            <a 
              href="https://instagram.com/sarabuffie" 
              target="_blank" 
              rel="noopener noreferrer"
              className="flex items-center text-real-estate-text hover:text-real-estate-gold transition-colors"
            >
              <Instagram className="w-5 h-5 mr-2" />
              <span>@sarabuffie</span>
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;