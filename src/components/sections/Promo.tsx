import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Wifi, MapPin } from "lucide-react";

// ====================================================================
// ==  IMAGE PATH FIX
// ====================================================================
// Using the `new URL` pattern is the standard way to handle assets in Vite
// to ensure the paths are resolved correctly during the build process.
const ensuiteMasterImage = new URL('../../assets/Gallery/ensuite-master.png', import.meta.url).href;
const thumbnail1 = new URL('../../assets/Gallery/20d58880-e725-401f-bc4e-8ef420820f0b.png', import.meta.url).href;
const thumbnail2 = new URL('../../assets/Gallery/tropical-common-area.png', import.meta.url).href;
const thumbnail3 = new URL('../../assets/Gallery/1ebb565c-a304-49fa-893e-85dc219c6788.png', import.meta.url).href;
const thumbnail4 = new URL('../../assets/Gallery/cb48cf65-05f7-452c-9969-05e7c527e62d.png', import.meta.url).href;
const thumbnail5 = new URL('../../assets/Gallery/8bbdbcb9-e10f-4a92-9d49-fc6875d5fd6a.png', import.meta.url).href;
const thumbnail6 = new URL('../../assets/Gallery/2bafcf0c-8134-4a42-957c-ed899552c935.png', import.meta.url).href; // Bathroom image
// ====================================================================

// Date formatting helper
const format = (date: Date, formatStr: string): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = date.getMonth();

  if (formatStr === 'MMM dd') return `${months[month]} ${day}`;
  return date.toLocaleDateString();
};

const EnsuitePromoSection = () => {
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6];

  const openWhatsApp = () => {
    const message = `Hi! I'm interested in the special offer for the "Ensuite Master" room, available from today until August 31st. Could you provide more details?`;
    const whatsappUrl = `https://wa.me/639476170167?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="special-offer" className="py-20 bg-gradient-to-br from-green-50 via-cyan-50 to-blue-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 mb-4">
              <img 
                src={ensuiteMasterImage} 
                alt="Luxurious Ensuite Master Room" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-yellow-400 text-gray-900 px-4 py-1 rounded-full text-sm font-bold shadow-md">
                Special Offer
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-bold uppercase text-green-600 tracking-widest mb-2">
              RARE LAST-MINUTE OPENING
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              The Ensuite Master Suite is Available!
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
              Due to a late cancellation, our most sought-after suite is now open for a limited time. Experience ultimate comfort and privacy in paradise.
            </p>

            {/* Key Features Section */}
            <div className="space-y-3 text-left max-w-lg mx-auto md:mx-0 mb-6">
              <div className="flex items-center gap-3">
                <Wifi className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Blazing-Fast Fiber WiFi for seamless remote work.</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-green-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Prime Location: Just 300 meters from Bravo Beach Resort.</span>
              </div>
            </div>

            <div className="bg-green-100 border-l-4 border-green-500 text-green-800 p-4 rounded-r-lg mb-8 inline-block text-left">
              <div className="flex items-center gap-4">
                <Star className="w-10 h-10 text-yellow-500 flex-shrink-0" fill="currentColor" />
                <div>
                  <p className="font-bold text-lg">
                    Available: {format(new Date(), 'MMM dd')} - Aug 31st
                  </p>
                  <p className="text-md">
                    Special Nightly Rate: <span className="font-extrabold text-2xl">₱1099</span>
                  </p>
                </div>
              </div>
            </div>

            <div>
              <Button 
                size="lg" 
                className="bg-green-600 hover:bg-green-700 text-white shadow-lg text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-transform duration-300"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Book This Suite Now
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                This offer won't last long. Contact us to secure your stay!
              </p>
            </div>
            
            {/* Thumbnail Row */}
            <div className="grid grid-cols-6 gap-2 mt-8">
              {thumbnails.map((thumb, index) => (
                <img 
                  key={index}
                  src={thumb} 
                  alt={`Ensuite Master Room thumbnail ${index + 1}`}
                  className="w-full h-auto object-cover rounded-lg shadow-md hover:shadow-xl hover:opacity-80 transition-all duration-300 cursor-pointer"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EnsuitePromoSection;
