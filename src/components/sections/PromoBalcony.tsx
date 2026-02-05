import React from 'react';
import { Button } from "@/components/ui/button";
import { Star, MessageCircle, Wifi, MapPin } from "lucide-react";

// ====================================================================
// ==  IMAGE PATH FIX
// ====================================================================
// Using placeholder images to resolve build errors.
const cozyRoomImage = 'https://placehold.co/800x600/34D399/FFFFFF?text=Cozy+Room';
const thumbnail1 = 'https://placehold.co/100x100/34D399/FFFFFF?text=Room';
const thumbnail2 = 'https://placehold.co/100x100/34D399/FFFFFF?text=Common+Area';
const thumbnail3 = 'https://placehold.co/100x100/34D399/FFFFFF?text=Kitchen';
const thumbnail4 = 'https://placehold.co/100x100/60A5FA/FFFFFF?text=View';
const thumbnail5 = 'https://placehold.co/100x100/FBBF24/FFFFFF?text=WiFi';
const thumbnail6 = 'https://placehold.co/100x100/F472B6/FFFFFF?text=Lounge';
// ====================================================================

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
    <section id="special-offer-cozy" className="py-20 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 bg-white rounded-3xl shadow-2xl p-8 md:p-12 overflow-hidden">

          {/* Image Column */}
          <div className="w-full md:w-1/2 lg:w-5/12">
            <div className="relative rounded-2xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-500 mb-4">
              <img
                src={cozyRoomImage}
                alt="Cozy Room with Jungle Views"
                className="w-full h-auto object-cover"
              />
              <div className="absolute top-4 left-4 bg-green-600 text-white px-4 py-2 rounded-full text-sm font-bold shadow-md">
                Best Value - Available Now!
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className="w-full md:w-1/2 text-center md:text-left">
            <h2 className="text-sm font-bold uppercase text-green-600 tracking-widest mb-2">
              BUDGET-FRIENDLY PARADISE
            </h2>
            <h3 className="text-4xl md:text-5xl font-extrabold text-gray-800 mb-4 leading-tight">
              The Cozy Room is Available!
            </h3>
            <p className="text-lg text-gray-600 mb-6 max-w-lg mx-auto md:mx-0">
                Perfect for solo digital nomads seeking value without compromise. Enjoy jungle views, fast WiFi, and access to all shared amenities at our most affordable rate.
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
                    Available: {format(availableDate, 'MMM dd')} - {format(endDate, 'MMM dd')}
                  </p>
                  <div className="text-md">
                    <span className="font-extrabold text-3xl text-green-700">₱26,500</span>
                    <span className="text-lg">/month</span>
                  </div>
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
                Book This 1-Month Stay
              </Button>
              <p className="text-xs text-gray-500 mt-3">
                This room will be booked fast - inquire now!
              </p>
            </div>

            {/* Thumbnail Row */}
            <div className="grid grid-cols-6 gap-2 mt-8">
              {thumbnails.map((thumb, index) => (
                <img
                  key={index}
                  src={thumb}
                  alt={`Cozy Room thumbnail ${index + 1}`}
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

export default CozyRoomPromoSection;
