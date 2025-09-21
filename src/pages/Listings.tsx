import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import PropertyCard from '@/components/PropertyCard';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { properties } from '@/data/properties';
import { useState } from 'react';

const Listings = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const propertiesPerPage = 6;
  const totalPages = Math.ceil(properties.length / propertiesPerPage);
  
  const startIndex = (currentPage - 1) * propertiesPerPage;
  const currentProperties = properties.slice(startIndex, startIndex + propertiesPerPage);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Header */}
      <section className="bg-real-estate-navy text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Available Properties
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Browse through our curated selection of homes available in Winnipeg's most desirable neighborhoods.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-real-estate-light border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-2xl shadow-[var(--shadow-card)] p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {/* Property Type */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-real-estate-text">Property Type</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Types</SelectItem>
                    <SelectItem value="house">House</SelectItem>
                    <SelectItem value="condo">Condo</SelectItem>
                    <SelectItem value="townhouse">Townhouse</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Location */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-real-estate-text">Location</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="All Areas" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Areas</SelectItem>
                    <SelectItem value="river-heights">River Heights</SelectItem>
                    <SelectItem value="tuxedo">Tuxedo</SelectItem>
                    <SelectItem value="charleswood">Charleswood</SelectItem>
                    <SelectItem value="st-boniface">St. Boniface</SelectItem>
                    <SelectItem value="wolseley">Wolseley</SelectItem>
                    <SelectItem value="sage-creek">Sage Creek</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Price Range */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-real-estate-text">Min Price</label>
                <Input type="number" placeholder="$200,000" />
              </div>

              <div className="space-y-2">
                <label className="text-sm font-medium text-real-estate-text">Max Price</label>
                <Input type="number" placeholder="$800,000" />
              </div>

              {/* Sort By */}
              <div className="space-y-2">
                <label className="text-sm font-medium text-real-estate-text">Sort By</label>
                <Select>
                  <SelectTrigger>
                    <SelectValue placeholder="Price: Low to High" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="price-low">Price: Low to High</SelectItem>
                    <SelectItem value="price-high">Price: High to Low</SelectItem>
                    <SelectItem value="newest">Newest First</SelectItem>
                    <SelectItem value="sqft">Square Footage</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold text-real-estate-navy">
              {properties.length} Properties Found
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {currentProperties.map((property) => (
              <PropertyCard key={property.id} property={property} />
            ))}
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex justify-center items-center space-x-2">
              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.max(1, currentPage - 1))}
                disabled={currentPage === 1}
                className="border-real-estate-navy text-real-estate-navy hover:bg-real-estate-light"
              >
                Previous
              </Button>
              
              {[...Array(totalPages)].map((_, i) => (
                <Button
                  key={i + 1}
                  variant={currentPage === i + 1 ? "default" : "outline"}
                  onClick={() => setCurrentPage(i + 1)}
                  className={currentPage === i + 1 
                    ? "bg-real-estate-navy hover:bg-real-estate-navy/90" 
                    : "border-real-estate-navy text-real-estate-navy hover:bg-real-estate-light"
                  }
                >
                  {i + 1}
                </Button>
              ))}
              
              <Button
                variant="outline"
                onClick={() => setCurrentPage(Math.min(totalPages, currentPage + 1))}
                disabled={currentPage === totalPages}
                className="border-real-estate-navy text-real-estate-navy hover:bg-real-estate-light"
              >
                Next
              </Button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Listings;