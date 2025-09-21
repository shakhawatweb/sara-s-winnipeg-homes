import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Search } from 'lucide-react';

const SearchBar = () => {
  return (
    <div className="bg-white rounded-2xl shadow-[var(--shadow-real-estate)] p-6 max-w-4xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {/* Location */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-real-estate-text">Location</label>
          <Select>
            <SelectTrigger className="border-border">
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
        <div className="space-y-2">
          <label className="text-sm font-medium text-real-estate-text">Property Type</label>
          <Select>
            <SelectTrigger className="border-border">
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
        <div className="space-y-2">
          <label className="text-sm font-medium text-real-estate-text">Min Price</label>
          <Input 
            type="number" 
            placeholder="$200,000" 
            className="border-border"
          />
        </div>

        {/* Max Price */}
        <div className="space-y-2">
          <label className="text-sm font-medium text-real-estate-text">Max Price</label>
          <Input 
            type="number" 
            placeholder="$800,000" 
            className="border-border"
          />
        </div>

        {/* Search Button */}
        <div className="flex items-end">
          <Button className="w-full bg-real-estate-gold hover:bg-real-estate-gold/90 text-real-estate-navy font-semibold h-10">
            <Search className="w-4 h-4 mr-2" />
            Search
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;