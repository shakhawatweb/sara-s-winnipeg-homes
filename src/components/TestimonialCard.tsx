import { Card, CardContent } from '@/components/ui/card';
import { Star } from 'lucide-react';
import { Testimonial } from '@/data/properties';

interface TestimonialCardProps {
  testimonial: Testimonial;
}

const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="bg-white border-border shadow-[var(--shadow-card)] h-full">
      <CardContent className="p-6">
        {/* Stars */}
        <div className="flex mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className="w-5 h-5 fill-real-estate-gold text-real-estate-gold"
            />
          ))}
        </div>
        
        {/* Review */}
        <p className="text-real-estate-text mb-6 leading-relaxed">
          "{testimonial.review}"
        </p>
        
        {/* Author */}
        <div className="flex items-center">
          <div className="w-12 h-12 bg-real-estate-light rounded-full flex items-center justify-center mr-4">
            <span className="text-real-estate-navy font-bold text-lg">
              {testimonial.name.charAt(0)}
            </span>
          </div>
          <div>
            <p className="font-semibold text-real-estate-navy">
              {testimonial.name}
            </p>
            <p className="text-sm text-muted-foreground">
              Verified Client
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default TestimonialCard;