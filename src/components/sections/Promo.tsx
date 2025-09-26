import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Wifi, MapPin } from "lucide-react";

// ====================================================================
// ==  IMAGE PATH FIX
// ====================================================================
// Using absolute paths from the project root to ensure the build tool can resolve them.
import balconyRoomImage from '/src/assets/Gallery/balcony2-room-BE-uQFjk.png';
import thumbnail1 from '/src/assets/Gallery/BalconyRoomDoors.jpg';
import thumbnail2 from '/src/assets/Gallery/tropical-common-area.png';
import thumbnail3 from '/src/assets/Gallery/BalconyRoomstorage.jpg';
import thumbnail4 from '/src/assets/Gallery/cb48cf65-05f7-452c-9969-05e7c527e62d.png';
import thumbnail5 from '/src/assets/Gallery/1InternetSpeed.jpg';
import thumbnail6 from '/src/assets/Gallery/26a3f37c-c09b-4051-b6b9-2da2c9866038.png';
// ====================================================================

// Date formatting helper
const format = (date: Date, formatStr: string): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = date.getMonth();

  if (formatStr === 'MMM dd') return `${months[month]} ${day}`;
  return date.toLocaleString();
};

const BalconyPromoSection = () => {
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6];
  const availableDate = new Date(2025, 8, 26); // September 26, 2025
  const endDate = new Date(2025, 9, 2); // October 2, 2025

  const openWhatsApp = () => {
    const message = `Hi! I'm interested in the special promo for the "Balcony Room" at ₱997/night from September 26th to October 2nd (6 nights available). Could you provide more details?`;
    const whatsappUrl = `https://wa.me/639476170167?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="special-offer" className="py-20 bg-gradient-to-br from-blue-50 via-teal-50 to-green-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">
          
          {/* Image Column */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 mb-4">
              <img 
                src={balconyRoomImage} 
                alt="Bright Balcony Room with Paradise Views" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold shadow-md">
                SPECIAL PROMO
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-bold uppercase text-red-600 tracking-widest mb-2">
              LIMITED TIME SPECIAL OFFER
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              The Balcony Room - Special Promo!
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
              Don't miss this amazing deal! Our beautiful Balcony Room is available at a special promotional rate. Enjoy paradise views, a private balcony, and our vibrant coliving community.
            </p>

            {/* Key Features Section */}
            <div className="space-y-3 text-left max-w-lg mx-auto md:mx-0 mb-6">
              <div className="flex items-center gap-3">
                <Wifi className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Blazing-Fast Fiber WiFi for seamless remote work.</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-6 h-6 text-blue-600 flex-shrink-0" />
                <span className="text-gray-700 font-medium">Prime Location: Just 300 meters from Bravo Beach Resort.</span>
              </div>
            </div>

            <div className="bg-red-100 border-l-4 border-red-500 text-red-800 p-4 rounded-r-lg mb-8 inline-block text-left">
              <div className="flex items-center gap-4">
                <Star className="w-10 h-10 text-yellow-500 flex-shrink-0" fill="currentColor" />
                <div>
                  <p className="font-bold text-lg">
                    Promo Period: {format(availableDate, 'MMM dd')} - {format(endDate, 'MMM dd')}
                  </p>
                  <p className="text-sm text-red-600 mb-2">6 nights available</p>
                  <div className="text-md">
                    <span className="font-extrabold text-3xl text-red-700">₱997</span>
                    <span className="text-lg">/night</span>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <Button 
                size="lg" 
                className="bg-red-600 hover:bg-red-700 text-white shadow-lg text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-transform duration-300"
                onClick={openWhatsApp}
              >
                <MessageCircle className="w-6 h-6 mr-3" />
                Book This Promo Now
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                Limited time offer - only 6 nights available at this special rate!
              </p>
            </div>
            
            {/* Thumbnail Row */}
            <div className="grid grid-cols-6 gap-2 mt-8">
              {thumbnails.map((thumb, index) => (
                <img 
                  key={index}
                  src={thumb} 
                  alt={`Balcony Room thumbnail ${index + 1}`}
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

export default BalconyPromoSection;