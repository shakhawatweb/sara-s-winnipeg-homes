import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Testimonial } from '@/data/properties';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="bg-white border-border shadow-[var(--shadow-card)] h-full hover-lift transition-all duration-300 group animate-fade-in">
      <CardContent className="p-6">
        {/* Stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-real-estate-gold text-real-estate-gold transition-transform duration-200 group-hover:scale-110"
              style={{ animationDelay: `${i * 0.1}s` }}
            />
          ))}
        </div>
        
        {/* Review */}
        <p className="text-real-estate-text mb-6 leading-relaxed transition-colors duration-300 group-hover:text-real-estate-navy">
          "{testimonial.review}"
        </p>
        
        {/* Author */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-real-estate-light rounded-full flex items-center justify-center mr-4 transition-all duration-300 group-hover:bg-real-estate-gold group-hover:scale-110">
            <span className="text-real-estate-navy font-bold text-lg transition-colors duration-300">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-real-estate-navy transition-colors duration-300 group-hover:text-real-estate-gold">
              {testimonial.name}
            </p>
            <p className="text-sm text-muted-foreground transition-colors duration-300">
              Verified Client
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;