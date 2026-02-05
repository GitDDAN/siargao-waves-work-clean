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
    <section id="special-offer-cozy" className="py-20 bg-gradient-to-br from-green-50 via-teal-50 to-cyan-50 relative overflow-hidden">
      {/* Decorative Siargao Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Palm leaves top right */}
        <svg className="absolute -top-10 -right-10 w-64 h-64 text-green-200/40 rotate-45" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 30, 90 40, 100 50 C90 60, 60 70, 50 100 C40 70, 10 60, 0 50 C10 40, 40 30, 50 0" />
        </svg>
        {/* Wave pattern bottom */}
        <svg className="absolute bottom-0 left-0 w-full h-24 text-cyan-200/30" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,60 C150,120 350,0 600,60 C850,120 1050,0 1200,60 L1200,120 L0,120 Z" />
        </svg>
        {/* Second wave layer */}
        <svg className="absolute bottom-0 left-0 w-full h-20 text-teal-200/20" viewBox="0 0 1200 120" preserveAspectRatio="none" fill="currentColor">
          <path d="M0,80 C200,40 400,100 600,60 C800,20 1000,80 1200,40 L1200,120 L0,120 Z" />
        </svg>
        {/* Palm leaves bottom left */}
        <svg className="absolute -bottom-5 -left-10 w-48 h-48 text-green-300/30 -rotate-12" viewBox="0 0 100 100" fill="currentColor">
          <path d="M50 0 C60 30, 90 40, 100 50 C90 60, 60 70, 50 100 C40 70, 10 60, 0 50 C10 40, 40 30, 50 0" />
        </svg>
        {/* Surfboard silhouette */}
        <svg className="absolute top-1/4 -left-4 w-16 h-40 text-teal-300/20 rotate-12" viewBox="0 0 30 100" fill="currentColor">
          <ellipse cx="15" cy="50" rx="12" ry="48" />
        </svg>
        {/* Sun rays top left */}
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-radial from-yellow-200/30 to-transparent rounded-full blur-2xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="relative rounded-3xl shadow-2xl overflow-hidden">
          {/* Card gradient background */}
          <div className="absolute inset-0 bg-gradient-to-br from-emerald-50 via-white to-teal-50" />

          {/* Decorative elements inside card */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden">
            {/* Top right palm accent */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-br from-green-200/40 to-teal-200/20 rounded-full blur-3xl" />
            {/* Bottom left ocean accent */}
            <div className="absolute -bottom-16 -left-16 w-56 h-56 bg-gradient-to-tr from-cyan-200/40 to-blue-200/20 rounded-full blur-3xl" />
            {/* Subtle wave line */}
            <svg className="absolute bottom-0 right-0 w-1/2 h-32 text-teal-100/50" viewBox="0 0 400 100" fill="currentColor">
              <path d="M0,50 Q100,0 200,50 T400,50 L400,100 L0,100 Z" />
            </svg>
          </div>

          <div className="relative flex flex-col md:flex-row items-center justify-center gap-8 md:gap-12 p-8 md:p-12">
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

              <h3 className="text-4xl md:text-5xl font-extrabold mb-4 leading-tight">
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
              <div className="bg-gradient-to-br from-green-500 to-emerald-600 text-white p-5 rounded-2xl mb-6 inline-block shadow-lg">
                <div className="flex items-center gap-4">
                  <div className="bg-white/20 p-3 rounded-xl">
                    <Star className="w-8 h-8 text-yellow-300" fill="currentColor" />
                  </div>
                  <div>
                    <p className="text-green-100 text-sm font-medium">
                      {format(availableDate, 'MMM dd')} - {format(endDate, 'MMM dd')}
                    </p>
                    <div className="flex items-baseline gap-1">
                      <span className="font-extrabold text-4xl">₱26,500</span>
                      <span className="text-green-100">/month</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-gray-800 to-gray-900 hover:from-gray-900 hover:to-black text-white shadow-xl text-lg px-8 py-6 rounded-full transform hover:scale-105 transition-all duration-300 w-full md:w-auto"
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
              <div className="grid grid-cols-6 gap-2 mt-8">
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
