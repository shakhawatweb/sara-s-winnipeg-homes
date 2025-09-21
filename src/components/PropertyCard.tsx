import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Bed, Bath, Square } from 'lucide-react';
import { Property } from '@/data/properties';

interface PropertyCardProps {
  property: Property;
}

const PropertyCard = ({ property }: PropertyCardProps) => {
  return (
    <Card className="group hover-lift hover:shadow-[var(--shadow-real-estate)] transition-all duration-300 bg-white border-border overflow-hidden animate-fade-in">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-real-estate-navy/0 group-hover:bg-real-estate-navy/10 transition-colors duration-300"></div>
        <div className="absolute top-4 left-4 bg-real-estate-gold text-real-estate-navy px-3 py-1 rounded-full text-sm font-semibold transform translate-y-0 group-hover:-translate-y-1 transition-transform duration-300">
          {property.type}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-real-estate-navy group-hover:text-real-estate-gold transition-colors duration-300">
            {property.title}
          </h3>
          <span className="text-2xl font-bold text-real-estate-gold transform group-hover:scale-105 transition-transform duration-300">
            {property.price}
          </span>
        </div>
        
        <p className="text-real-estate-text mb-4 transition-colors duration-300">
          {property.location}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1 transition-colors duration-300 group-hover:text-real-estate-navy">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center gap-1 transition-colors duration-300 group-hover:text-real-estate-navy">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1 transition-colors duration-300 group-hover:text-real-estate-navy">
            <Square className="w-4 h-4" />
            <span>{property.sqft.toLocaleString()} SqFt</span>
          </div>
        </div>
        
        <Link to={`/property/${property.id}`}>
          <Button className="w-full bg-real-estate-navy hover:bg-real-estate-navy/90 text-white transform hover:scale-[1.02] transition-all duration-300 hover:shadow-lg">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;