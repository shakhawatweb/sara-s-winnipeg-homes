import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, Instagram, MapPin, Clock } from 'lucide-react';

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-real-estate-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Contact Sara
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Get in touch today to discuss your real estate needs. 
              I'm here to help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <Card className="bg-white border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-8">
                  <h2 className="text-2xl font-bold text-real-estate-navy mb-6">
                    Send Me a Message
                  </h2>
                  
                  <form className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-real-estate-text mb-2">
                          First Name *
                        </label>
                        <Input 
                          type="text" 
                          placeholder="John"
                          className="border-border"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-real-estate-text mb-2">
                          Last Name *
                        </label>
                        <Input 
                          type="text" 
                          placeholder="Doe"
                          className="border-border"
                          required
                        />
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-real-estate-text mb-2">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john.doe@email.com"
                        className="border-border"
                        required
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-real-estate-text mb-2">
                        Phone Number
                      </label>
                      <Input 
                        type="tel" 
                        placeholder="(204) 555-0123"
                        className="border-border"
                      />
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-real-estate-text mb-2">
                        I'm interested in:
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-2">
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Buying</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Selling</span>
                        </label>
                        <label className="flex items-center">
                          <input type="checkbox" className="mr-2" />
                          <span className="text-sm">Investing</span>
                        </label>
                      </div>
                    </div>
                    
                    <div>
                      <label className="block text-sm font-medium text-real-estate-text mb-2">
                        Message *
                      </label>
                      <Textarea 
                        placeholder="Tell me about your real estate needs..."
                        className="border-border h-32 resize-none"
                        required
                      />
                    </div>
                    
                    <Button className="w-full bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold py-3">
                      Send Message
                    </Button>
                    
                    <p className="text-sm text-muted-foreground text-center">
                      I'll get back to you within 24 hours!
                    </p>
                  </form>
                </CardContent>
              </Card>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              {/* Direct Contact */}
              <Card className="bg-white border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-real-estate-navy mb-4">
                    Get In Touch Directly
                  </h3>
                  
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Phone className="w-6 h-6 mr-4 text-real-estate-gold" />
                      <div>
                        <div className="font-semibold text-real-estate-navy">(204) 555-0123</div>
                        <div className="text-sm text-muted-foreground">Call or text anytime</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Mail className="w-6 h-6 mr-4 text-real-estate-gold" />
                      <div>
                        <div className="font-semibold text-real-estate-navy">sara@realbrokerage.com</div>
                        <div className="text-sm text-muted-foreground">Email for detailed inquiries</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Instagram className="w-6 h-6 mr-4 text-real-estate-gold" />
                      <div>
                        <a 
                          href="https://instagram.com/sarabuffie" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="font-semibold text-real-estate-navy hover:text-real-estate-gold transition-colors"
                        >
                          @sarabuffie
                        </a>
                        <div className="text-sm text-muted-foreground">Follow for market updates</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Office Hours */}
              <Card className="bg-white border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-real-estate-navy mb-4">
                    Office Hours
                  </h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-real-estate-gold" />
                      <div>
                        <div className="font-medium text-real-estate-navy">Monday - Friday</div>
                        <div className="text-sm text-muted-foreground">9:00 AM - 7:00 PM</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-real-estate-gold" />
                      <div>
                        <div className="font-medium text-real-estate-navy">Saturday</div>
                        <div className="text-sm text-muted-foreground">10:00 AM - 5:00 PM</div>
                      </div>
                    </div>
                    
                    <div className="flex items-center">
                      <Clock className="w-5 h-5 mr-3 text-real-estate-gold" />
                      <div>
                        <div className="font-medium text-real-estate-navy">Sunday</div>
                        <div className="text-sm text-muted-foreground">12:00 PM - 4:00 PM</div>
                      </div>
                    </div>
                  </div>
                  
                  <p className="text-sm text-muted-foreground mt-4">
                    Available by appointment outside regular hours
                  </p>
                </CardContent>
              </Card>

              {/* Service Areas */}
              <Card className="bg-white border-border shadow-[var(--shadow-card)]">
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-real-estate-navy mb-4">
                    Service Areas
                  </h3>
                  
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-3 text-real-estate-gold mt-1" />
                    <div>
                      <div className="font-medium text-real-estate-navy mb-2">Winnipeg & Surrounding Areas</div>
                      <div className="grid grid-cols-1 gap-1 text-sm text-muted-foreground">
                        <span>• River Heights</span>
                        <span>• Tuxedo</span>
                        <span>• Charleswood</span>
                        <span>• St. Boniface</span>
                        <span>• Wolseley</span>
                        <span>• Sage Creek</span>
                        <span>• And more...</span>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Placeholder */}
      <section className="py-16 bg-real-estate-light">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-real-estate-navy mb-4">
              Find Me in Winnipeg
            </h2>
            <p className="text-real-estate-text">
              Serving clients throughout Winnipeg and the greater metropolitan area.
            </p>
          </div>
          
          <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-8 text-center">
            <div className="bg-real-estate-light rounded-xl p-12">
              <MapPin className="w-16 h-16 text-real-estate-gold mx-auto mb-4" />
              <h3 className="text-xl font-bold text-real-estate-navy mb-2">
                Winnipeg, Manitoba
              </h3>
              <p className="text-real-estate-text">
                Interactive map coming soon - serving all areas of Winnipeg
              </p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;