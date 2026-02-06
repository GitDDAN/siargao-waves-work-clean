import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Wifi, MapPin } from "lucide-react";

// Image imports
import cozyRoomImage from '@/assets/Gallery/cozy-room.png';
import thumbnail1 from '@/assets/Gallery/PrivateRoom.jpg';
import thumbnail2 from '@/assets/Gallery/TeaCommonArea.jpg';
import thumbnail3 from '@/assets/Gallery/tropical-common-area.png';
import thumbnail4 from '@/assets/Gallery/1InternetSpeed.jpg';
import thumbnail5 from '@/assets/Gallery/bamboo-entrance.png';
import thumbnail6 from '@/assets/Gallery/community-collab.jpg';


// Date formatting helper
const format = (date: Date, formatStr: string): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = date.getMonth();

  if (formatStr === 'MMM dd') return `${months[month]} ${day}`;
  return date.toLocaleString();
};

const CozyRoomPromoSection = () => {
  const thumbnails = [thumbnail1, thumbnail2, thumbnail3, thumbnail4, thumbnail5, thumbnail6];
  const availableDate = new Date(2026, 1, 20); // February 20, 2026
  const endDate = new Date(2026, 2, 20); // March 20, 2026

  const openWhatsApp = () => {
    const message = `Hi! I'm interested in the Cozy Room PROMO, available from Feb 20 at the special rate of ₱26,500/month. Could you provide more details?`;
    const whatsappUrl = `https://wa.me/639083339477?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="special-offer-cozy" className="py-10 md:py-20 bg-gradient-to-b from-green-50/40 to-white">
      <div className="container mx-auto px-4">
        <div className="relative rounded-3xl shadow-xl shadow-black/10 overflow-hidden bg-white/65 backdrop-blur-md border border-white/40">

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 lg:gap-12 p-4 sm:p-6 md:p-8 lg:p-12">
            {/* Image Column */}
            <div className="w-full md:w-1/2 lg:w-5/12">
              <div className="relative rounded-2xl overflow-hidden shadow-xl transform hover:scale-[1.02] transition-transform duration-500">
                <img
                  src={cozyRoomImage}
                  alt="Cozy Room with Jungle Views"
                  className="w-full h-auto object-cover"
                />
                {/* Gradient overlay on image */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
                <div className="absolute top-4 left-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                  Best Value - Available Now!
                </div>
              </div>
            </div>

            {/* Content Column */}
            <div className="w-full md:w-1/2 text-center md:text-left">
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-green-100 to-teal-100 px-4 py-1.5 rounded-full mb-4">
                <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse" />
                <span className="text-sm font-semibold text-green-700 uppercase tracking-wider">Limited Time Offer</span>
              </div>

              <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-extrabold mb-4 leading-tight">
                <span className="bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800 bg-clip-text text-transparent">The Cozy Room</span>
                <span className="block text-2xl md:text-3xl mt-1 bg-gradient-to-r from-green-600 to-teal-600 bg-clip-text text-transparent">is Available!</span>
              </h3>

              <p className="text-gray-600 mb-6 max-w-lg mx-auto md:mx-0 leading-relaxed">
                Perfect for solo digital nomads seeking value without compromise. Enjoy jungle views, fast WiFi, and access to all shared amenities.
              </p>

              {/* Key Features */}
              <div className="flex flex-wrap gap-3 justify-center md:justify-start mb-6">
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-green-100">
                  <Wifi className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">100+ Mbps WiFi</span>
                </div>
                <div className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-sm border border-green-100">
                  <MapPin className="w-4 h-4 text-green-600" />
                  <span className="text-sm font-medium text-gray-700">300m to Beach</span>
                </div>
              </div>

              {/* Price Card */}
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-3 sm:p-4 md:p-5 rounded-2xl mb-6 inline-block shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-green-100 text-sm font-medium">
                      {format(availableDate, 'MMM dd')} - {format(endDate, 'MMM dd')}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-extrabold text-2xl sm:text-3xl md:text-4xl">₱26,500</span>
                      <span className="text-green-100">/month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-xl text-base sm:text-lg px-6 py-4 sm:px-8 sm:py-6 rounded-full transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
                  onClick={openWhatsApp}
                >
                  <MessageCircle className="w-5 h-5 mr-2" />
                  Book This 1-Month Stay
                </Button>
                <p className="text-xs text-gray-500">
                  This room books fast - inquire now!
                </p>
              </div>

              {/* Thumbnail Row */}
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2 mt-8">
                {thumbnails.map((thumb, index) => (
                  <div key={index} className="aspect-square overflow-hidden rounded-xl shadow-md hover:shadow-xl transition-all duration-300 cursor-pointer ring-2 ring-white">
                    <img
                      src={thumb}
                      alt={`Villa amenity ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CozyRoomPromoSection;
