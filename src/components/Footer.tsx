import { Instagram, Phone, Mail } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-real-estate-navy text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-real-estate-gold">Contact Sara</h3>
            <div className="space-y-3">
              <div className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-real-estate-gold" />
                <span>(204) 555-0123</span>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-real-estate-gold" />
                <span>sara@realbrokerage.com</span>
              </div>
              <div className="flex items-center">
                <Instagram className="w-5 h-5 mr-3 text-real-estate-gold" />
                <a 
                  href="https://instagram.com/sarabuffie" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="hover:text-real-estate-gold transition-colors"
                >
                  @sarabuffie
                </a>
              </div>
            </div>
          </div>

          {/* About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-real-estate-gold">About</h3>
            <p className="text-gray-300 leading-relaxed">
              Licensed Realtor with Real Brokerage, specializing in helping families 
              find their perfect home in Winnipeg. Committed to providing exceptional 
              service and expert market knowledge.
            </p>
          </div>

          {/* Service Areas */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-real-estate-gold">Service Areas</h3>
            <ul className="text-gray-300 space-y-2">
              <li>River Heights</li>
              <li>Tuxedo</li>
              <li>Charleswood</li>
              <li>St. Boniface</li>
              <li>Wolseley</li>
              <li>Sage Creek</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Sara Buffie, Real Brokerage. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;