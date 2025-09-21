import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[var(--shadow-real-estate)] p-6 max-w-4xl mx-auto hover-lift transition-all duration-300 hover:shadow-2xl">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="space-y-2 group">
          <label className="text-sm font-medium text-real-estate-text transition-colors duration-300 group-hover:text-real-estate-navy">Location</label>
          <Select>
            <SelectTrigger className="border-border transition-all duration-300 hover:border-real-estate-gold focus:border-real-estate-gold">
              <SelectValue placeholder="Select area" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="river-heights">River Heights</SelectItem>
              <SelectItem value="tuxedo">Tuxedo</SelectItem>
              <SelectItem value="charleswood">Charleswood</SelectItem>
              <SelectItem value="st-boniface">St. Boniface</SelectItem>
              <SelectItem value="wolseley">Wolseley</SelectItem>
              <SelectItem value="sage-creek">Sage Creek</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Property Type */}
        <div className="space-y-2 group">
          <label className="text-sm font-medium text-real-estate-text transition-colors duration-300 group-hover:text-real-estate-navy">Property Type</label>
          <Select>
            <SelectTrigger className="border-border transition-all duration-300 hover:border-real-estate-gold focus:border-real-estate-gold">
              <SelectValue placeholder="Select type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="house">House</SelectItem>
              <SelectItem value="condo">Condo</SelectItem>
              <SelectItem value="townhouse">Townhouse</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Min Price */}
        <div className="space-y-2 group">
          <label className="text-sm font-medium text-real-estate-text transition-colors duration-300 group-hover:text-real-estate-navy">Min Price</label>
          <Input 
            type="number" 
            placeholder="$200,000" 
            className="border-border transition-all duration-300 hover:border-real-estate-gold focus:border-real-estate-gold"
          />
        </div>

        {/* Max Price */}
        <div className="space-y-2 group">
          <label className="text-sm font-medium text-real-estate-text transition-colors duration-300 group-hover:text-real-estate-navy">Max Price</label>
          <Input 
            type="number" 
            placeholder="$800,000" 
            className="border-border transition-all duration-300 hover:border-real-estate-gold focus:border-real-estate-gold"
          />
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button className="w-full bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold h-10 transition-all duration-300 hover:scale-105 hover:shadow-lg">
            <Search className="w-4 h-4 mr-2 transition-transform duration-300 group-hover:rotate-12" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;