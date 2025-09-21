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
    <Card className="group hover:shadow-[var(--shadow-real-estate)] transition-all duration-300 bg-white border-border overflow-hidden">
      <div className="relative overflow-hidden">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 left-4 bg-real-estate-gold text-real-estate-navy px-3 py-1 rounded-full text-sm font-semibold">
          {property.type}
        </div>
      </div>
      
      <CardContent className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold text-real-estate-navy group-hover:text-real-estate-gold transition-colors">
            {property.title}
          </h3>
          <span className="text-2xl font-bold text-real-estate-gold">
            {property.price}
          </span>
        </div>
        
        <p className="text-real-estate-text mb-4">
          {property.location}
        </p>
        
        <div className="flex items-center gap-4 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-1">
            <Bed className="w-4 h-4" />
            <span>{property.bedrooms} Bed</span>
          </div>
          <div className="flex items-center gap-1">
            <Bath className="w-4 h-4" />
            <span>{property.bathrooms} Bath</span>
          </div>
          <div className="flex items-center gap-1">
            <Square className="w-4 h-4" />
            <span>{property.sqft.toLocaleString()} SqFt</span>
          </div>
        </div>
        
        <Link to={`/property/${property.id}`}>
          <Button className="w-full bg-real-estate-navy hover:bg-real-estate-navy/90 text-white">
            View Details
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default PropertyCard;