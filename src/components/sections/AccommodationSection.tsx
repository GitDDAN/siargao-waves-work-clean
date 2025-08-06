import React, { useState, useEffect, useRef } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Bed,
  Users,
  Wifi,
  AirVent,
  Coffee,
  Shield,
  Calendar,
  Share2,
  MessageCircle,
  Bath,
  Heart,
  X,
  ChevronLeft,
  ChevronRight,
  Expand
} from "lucide-react";

// Simple toast implementation
const useToast = () => {
  const toast = ({ title, description }) => {
    const toastId = `toast-${Date.now()}`;
    // Remove any existing toasts
    const existingToasts = document.querySelectorAll('.custom-toast');
    existingToasts.forEach(t => t.remove());

    const toastEl = document.createElement('div');
    toastEl.id = toastId;
    toastEl.className = 'custom-toast fixed bottom-4 right-4 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-2xl p-4 z-[100] animate-slide-up';
    toastEl.innerHTML = `
      <div class="font-semibold">${title}</div>
      ${description ? `<div class="text-sm text-gray-300 mt-1">${description}</div>` : ''}
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-up {
        from { transform: translateY(100%); opacity: 0; }
        to { transform: translateY(0); opacity: 1; }
      }
      .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toastEl);

    setTimeout(() => {
      const el = document.getElementById(toastId);
      if (el) {
        el.style.opacity = '0';
        el.style.transform = 'translateY(100%)';
        el.style.transition = 'all 0.4s ease-in';
        setTimeout(() => {
          el.remove();
          style.remove();
        }, 400);
      }
    }, 3000);
  };
  return { toast };
};

// Date formatting helper
const format = (date, formatStr) => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const fullMonths = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (formatStr === 'MMM dd, yyyy') {
    return `${months[month]} ${day}, ${year}`;
  } else if (formatStr === 'MMM dd') {
    return `${months[month]} ${day}`;
  } else if (formatStr === 'MMMM yyyy') {
    return `${fullMonths[month]} ${year}`;
  }
  return date.toLocaleDateString();
};

// Image URLs
const ensuiteMasterImage = "/src/assets/Gallery/ensuite-master.png";
const balconyRoomImage = "/src/assets/Gallery/balcony-room.png";
const cozyRoomImage = "/src/assets/Gallery/cozy-room.png";

// ====================================================================
// ==  MODERNIZED IMAGE GALLERY MODAL (2025 STYLE)
// ====================================================================
const ImageGalleryModal = ({ isOpen, onClose, images, initialIndex = 0, roomTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  const thumbnailRef = useRef(null);

  // Effect to inject styles for the scrollbar and gradients
  useEffect(() => {
    const styleId = 'gallery-styles';
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      const style = document.createElement('style');
      style.id = styleId;
      style.innerHTML = `
        .thumbnail-strip::-webkit-scrollbar { display: none; }
        .thumbnail-strip { -ms-overflow-style: none; scrollbar-width: none; }
        .thumbnail-container { position: relative; }
        .thumbnail-container::before, .thumbnail-container::after {
          content: ''; position: absolute; top: 0; bottom: 0;
          width: 60px; pointer-events: none; z-index: 2; transition: opacity 0.3s;
        }
        .thumbnail-container::before { left: 0; background: linear-gradient(to right, rgba(10, 10, 10, 1), transparent); }
        .thumbnail-container::after { right: 0; background: linear-gradient(to left, rgba(10, 10, 10, 1), transparent); }
      `;
      document.head.appendChild(style);
    }
    return () => {
      document.body.style.overflow = 'unset';
      const styleElement = document.getElementById(styleId);
      if (styleElement) styleElement.remove();
    };
  }, [isOpen]);

  // Handlers for next/prev/keyboard controls
  const handlePrevious = () => setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  const handleNext = () => setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') handlePrevious();
      if (e.key === 'ArrowRight') handleNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [images.length]);

  // Effect to scroll the active thumbnail into view
  useEffect(() => {
    if (thumbnailRef.current) {
      const activeThumbnail = thumbnailRef.current.children[currentIndex];
      if (activeThumbnail) {
        activeThumbnail.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
      }
    }
  }, [currentIndex]);
  
  // Set initial index only when it changes
  useEffect(() => {
    setCurrentIndex(initialIndex);
  }, [initialIndex]);


  if (!isOpen) return null;
  const currentItem = images[currentIndex];
  const isVideo = currentItem.type === 'video';

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center" onClick={onClose}>
      <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4 z-50 w-full">
        <div className="text-white">
          <h3 className="text-xl font-semibold">{roomTitle}</h3>
          <p className="text-sm text-gray-300 mt-1">{currentIndex + 1} / {images.length}</p>
        </div>
        <button className="text-white hover:text-gray-300 transition-colors" onClick={onClose}><X className="w-8 h-8" /></button>
      </div>

      <div className="relative w-full h-full flex items-center justify-center">
        <button className="absolute left-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 p-2 rounded-full" onClick={(e) => { e.stopPropagation(); handlePrevious(); }}><ChevronLeft className="w-8 h-8" /></button>
        <div className="flex flex-col items-center justify-center p-4 h-full" onClick={(e) => e.stopPropagation()}>
          {isVideo ? (
            <video key={currentItem.url} src={currentItem.url} controls autoPlay muted className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl">Your browser does not support the video tag.</video>
          ) : (
            <img key={currentItem.url} src={currentItem.url} alt={currentItem.alt} className="max-w-full max-h-[80vh] object-contain rounded-lg shadow-2xl" />
          )}
          {currentItem.caption && (<p className="text-white text-center mt-4 text-sm max-w-2xl">{currentItem.caption}</p>)}
        </div>
        <button className="absolute right-4 top-1/2 -translate-y-1/2 text-white hover:text-gray-300 transition-colors z-50 bg-black/50 p-2 rounded-full" onClick={(e) => { e.stopPropagation(); handleNext(); }}><ChevronRight className="w-8 h-8" /></button>
      </div>

      <div className="w-full flex-shrink-0 pb-4 pt-2 thumbnail-container">
        <div ref={thumbnailRef} className="mx-auto flex gap-3 max-w-7xl overflow-x-auto px-[60px] thumbnail-strip">
          {images.map((item, index) => (
            <button key={index} onClick={(e) => { e.stopPropagation(); setCurrentIndex(index); }} className={`flex-shrink-0 transition-all rounded-lg ${index === currentIndex ? 'ring-2 ring-white opacity-100' : 'opacity-50 hover:opacity-80'}`}>
              {item.type === 'video' ? (
                <div className="w-28 h-20 bg-gray-800 rounded-md flex items-center justify-center">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" /></svg>
                </div>
              ) : (
                <img src={item.url} alt={`Thumbnail ${index + 1}`} className="w-28 h-20 object-cover rounded-md" />
              )}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

const AccommodationSection = () => {
  const { toast } = useToast();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  // Corrected and cleaned gallery data
  const roomGalleries = {
    "Ensuite Master": [
      { url: "/src/assets/Gallery/ensuite-master.png", alt: "Ensuite Master Bedroom", caption: "Spacious master bedroom with ensuite bathroom", type: "image" },
      { url: "/src/assets/Gallery/921e3861-a745-4e7a-bf07-ead82a89490b.png", alt: "Master Bedroom View", caption: "Premium master suite with Jungle views", type: "image" },
      { url: "/src/assets/Gallery/8897ba46-4d01-419c-9f3d-91a11338672e.png", alt: "Private Bathroom", caption: "Modern private bathroom with hot shower", type: "image" },
      { url: "/src/assets/Gallery/48738a79-c51e-45f7-adae-d1f3d13355e5.png", alt: "Work Desk", caption: "Dedicated workspace with natural light", type: "image" },
      { url: "/src/assets/Gallery/821784fc-6b6d-46e9-a51e-26ad2ad93522.png", alt: "Master Room Details", caption: "Comfortable bedroom with premium amenities", type: "image" },
      { url: "/src/assets/Gallery/b2f1d8e7-69c7-431d-a562-d0a45f9a3dcf.png", alt: "Jungle View", caption: "Beautiful Jungle views from the room", type: "image" },
      { url: "/src/assets/Gallery/95a8fd83-4039-4385-8acb-b3a404901043.png", alt: "Room Interior", caption: "Queen bed with tropical ambiance", type: "image" },
      { url: "/src/assets/Gallery/b5ba0685-11ca-4d09-be1d-5415e33d66fe.png", alt: "Workspace", caption: "Downstairs Hammock", type: "image" },
      { url: "/src/assets/Gallery/tropical-common-area.png", alt: "Tropical Common Area", caption: "Shared tropical paradise space", type: "image" },
      { url: "/src/assets/Gallery/1CCTVInstalled.jpg", alt: "Security", caption: "24/7 CCTV security system", type: "image" },
      { url: "/src/assets/Gallery/1InternetSpeed.jpg", alt: "High Speed Internet", caption: "Fast fiber internet throughout", type: "image" },
      { url: "/src/assets/Gallery/Walkthroughtour.mp4", alt: "Villa Walkthrough", caption: "Complete tour of the master suite", type: "video" }
    ],
    "Balcony Room": [
      { url: "/src/assets/Gallery/balcony-room.png", alt: "Balcony Room", caption: "Bright room with private balcony access", type: "image" },
      { url: "/src/assets/Gallery/BalconyRoomDoors.jpg", alt: "Balcony Doors", caption: "Private balcony doors opening to paradise", type: "image" },
      { url: "/src/assets/Gallery/BalconyRoomstorage.jpg", alt: "Storage Space", caption: "Ample storage for extended stays", type: "image" },
      { url: "/src/assets/Gallery/cb48cf65-05f7-452c-9969-05e7c527e62d.png", alt: "Tropical Views", caption: "Wake up to tropical jungle views", type: "image" },
      { url: "/src/assets/Gallery/26a3f37c-c09b-4051-b6b9-2da2c9866038.png", alt: "Balcony Space", caption: "2 bathrooms shared between 2 rooms, 1 with shower", type: "image" },
      { url: "/src/assets/Gallery/5c657536-0c6a-45fe-82c9-c3dd37af1b6b.png", alt: "Additional View", caption: "Downstairs area", type: "image" },
      { url: "/src/assets/Gallery/b5ba0685-11ca-4d09-be1d-5415e33d66fe.png", alt: "Workspace", caption: "Downstairs Hammock", type: "image" },
      { url: "/src/assets/Gallery/tropical-common-area.png", alt: "Tropical Common Area", caption: "Shared tropical paradise space", type: "image" },
      { url: "/src/assets/Gallery/1CCTVInstalled.jpg", alt: "Security", caption: "24/7 CCTV security system", type: "image" },
      { url: "/src/assets/Gallery/1InternetSpeed.jpg", alt: "High Speed Internet", caption: "Fast fiber internet throughout", type: "image" }
    ],
    "Cozy Room": [
      { url: "/src/assets/Gallery/cozy-room.png", alt: "Cozy Room", caption: "Comfortable room with Jungle views", type: "image" },
      { url: "/src/assets/Gallery/PrivateRoom.jpg", alt: "Private Room", caption: "Your private sanctuary", type: "image" },
      { url: "/src/assets/Gallery/b5ba0685-11ca-4d09-be1d-5415e33d66fe.png", alt: "Workspace", caption: "Downstairs Hammock", type: "image" },
      { url: "/src/assets/Gallery/ec9eb930-e69a-466d-9b13-4c2201461a79.png", alt: "Room Features", caption: "Downstairs Kitchen", type: "image" },
      { url: "/src/assets/Gallery/f27cb854-871b-4105-b007-0eae90fb8d40.png", alt: "Garden Access", caption: "Location / Shortcut access to main road", type: "image" },
      { url: "/src/assets/Gallery/f81897b9-695c-4f23-a935-71908f648dd4.jpg", alt: "Room Details", caption: "Cozy room amenities", type: "image" },
      { url: "/src/assets/Gallery/TeaCommonArea.jpg", alt: "Common Area", caption: "Access to shared tea area", type: "image" },
      { url: "/src/assets/Gallery/tropical-common-area.png", alt: "Tropical Common Area", caption: "Shared tropical paradise space", type: "image" },
      { url: "/src/assets/Gallery/1CCTVInstalled.jpg", alt: "Security", caption: "24/7 CCTV security system", type: "image" },
      { url: "/src/assets/Gallery/1InternetSpeed.jpg", alt: "High Speed Internet", caption: "Fast fiber internet throughout", type: "image" },
      { url: "/src/assets/Gallery/PrivateRoomVideo.mp4", alt: "Room Tour", caption: "Video tour of the cozy room", type: "video" },
      { url: "/src/assets/Gallery/CuteRoomShort.mp4", alt: "Quick Room Tour", caption: "Quick tour of the cozy room", type: "video" }
    ]
  };

  const roomTypes = [
    {
      title: "Ensuite Master",
      subtitle: "Your Private Coliving Suite",
      monthlyPrice: "₱33,000",
      weeklyPrice: "₱9,500",
      image: ensuiteMasterImage,
      perfectFor: "Digital nomads seeking premium coliving with privacy and focused coworking space.",
      socialTagline: "🌊 Premium Coliving Suite with Private Bathroom & Coworking Space in Paradise! Perfect for Digital Nomads seeking luxury island living.",
      features: ["Private ensuite bathroom", "Dedicated coworking workspace", "Queen bed with premium linens", "AC + ceiling fan comfort", "High-speed fiber WiFi", "New Linen & Towels Weekly", "Weekly Cleaning Service", "Extra Large balcony with Hammock"],
      popular: false,
      capacity: "Max 2 guests",
      amenities: [Bath, Bed, Wifi, AirVent, Shield]
    },
    {
      title: "Balcony Room",
      subtitle: "Coliving with Paradise Views",
      monthlyPrice: "₱31,000",
      weeklyPrice: "₱8,500",
      image: balconyRoomImage,
      perfectFor: "Couples enjoying coliving lifestyle with outdoor morning routines and collaborative workspace.",
      socialTagline: "🌴 Wake Up to Jungle Views Every Day! Coliving Suite with Private Balcony - Perfect for Couples & Digital Nomads in Siargao Paradise.",
      features: ["Private balcony with jungle views", "Coworking space with nature views", "Queen bed in tropical setting", "AC + natural ventilation", "High-speed fiber WiFi", "New Linen & Towels Weekly", "Weekly Cleaning Service", "Perfect for couples or solo nomads"],
      popular: true,
      capacity: "Max 2 guests",
      amenities: [Bed, Wifi, AirVent, Coffee]
    },
    {
      title: "Cozy Room",
      subtitle: "Essential Coliving Experience",
      monthlyPrice: "₱28,000",
      weeklyPrice: "₱7,500",
      image: cozyRoomImage,
      perfectFor: "Solo nomads maximizing coliving value for extended community living.",
      socialTagline: "🏄‍♂️ Budget-Friendly Island Coliving! Perfect for Solo Digital Nomads - Jungle Views, Great Community, Unbeatable Value in Siargao.",
      features: ["Jungle view workspace", "Comfortable double bed", "Air conditioning comfort", "High-speed fiber WiFi", "Shared bathroom with hot shower", "Perfect for budget-conscious nomads", "New Linen & Towels Weekly", "Weekly Cleaning Service"],
      popular: false,
      capacity: "Max 2 guest",
      amenities: [Bed, Wifi, AirVent, Coffee]
    }
  ];

  const getAvailabilityDates = (room) => {
    const availabilityMap = {
      "Cozy Room": { nextAvailable: new Date(2025, 7, 7), availableUntil: new Date(2025, 11, 31) },
      "Ensuite Master": { nextAvailable: new Date(2025, 7, 15), availableUntil: new Date(2025, 11, 31) },
      "Balcony Room": { nextAvailable: new Date(2025, 7, 23), availableUntil: new Date(2025, 11, 31) }
    };
    const roomData = availabilityMap[room.title];
    return {
      from: format(roomData.nextAvailable, 'MMM dd, yyyy'),
      until: format(roomData.availableUntil, 'MMM dd, yyyy'),
      fromShort: format(roomData.nextAvailable, 'MMM dd'),
      monthYear: format(roomData.nextAvailable, 'MMMM yyyy'),
      nextAvailable: roomData.nextAvailable
    };
  };

  const openGallery = (room, imageIndex = 0) => {
    setSelectedRoom(room);
    setSelectedImageIndex(imageIndex);
    setGalleryOpen(true);
  };

  const shareRoom = async (room) => {
    const availability = getAvailabilityDates(room);
    const currentUrl = window.location.href.split('#')[0];
    const roomUrl = `${currentUrl}#${room.title.toLowerCase().replace(/ /g, '-')}`;
    let imageUrl = new URL(room.image, window.location.origin).href;
    const enhancedShareText = `
🏝️ Check out the "${room.title}" room at Siargao Salamat Villa Coliving!

${room.socialTagline}

📅 Available from: ${availability.from}
💰 Price: ${room.monthlyPrice}/month

✨ Highlights:
${room.features.slice(0, 3).map(f => `• ${f}`).join('\n')}

👥 Perfect for: ${room.perfectFor}

Book your stay or see more details here: ${roomUrl}
`.trim();

    updateMetaTags(room, availability, roomUrl, imageUrl);

    try {
      if (navigator.share) {
        await navigator.share({ title: `${room.title} - Siargao Salamat Villa Coliving`, text: room.socialTagline, url: roomUrl });
      } else {
        await navigator.clipboard.writeText(enhancedShareText);
        toast({ title: "Room details copied! 📋", description: "Ready to share on your favorite platform." });
      }
    } catch (err) {
      console.error("Share failed:", err);
    }
  };

  const updateMetaTags = (room, availability, roomUrl, imageUrl) => {
    document.querySelectorAll('meta[property^="og:"], meta[name^="twitter:"]').forEach(meta => meta.remove());
    const metaTags = [
      { property: 'og:title', content: `${room.title} - Siargao Salamat Villa Coliving` },
      { property: 'og:description', content: `${room.socialTagline} Available from ${availability.from}.` },
      { property: 'og:image', content: imageUrl },
      { property: 'og:url', content: roomUrl },
    ];
    metaTags.forEach(tag => {
      const meta = document.createElement('meta');
      if (tag.property) meta.setAttribute('property', tag.property);
      meta.setAttribute('content', tag.content);
      document.head.appendChild(meta);
    });
  };

  const openWhatsApp = (room) => {
    const availability = getAvailabilityDates(room);
    const message = `Hi! I'm interested in booking the "${room.title}" room at Siargao Salamat Villa Coliving. I saw it's available from ${availability.from}. Could you please provide more details on booking?`;
    const whatsappUrl = `https://wa.me/639083339477?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const amenities = [
    { icon: Wifi, label: "High-Speed Fiber WiFi", description: "Reliable 100+ Mbps" },
    { icon: Coffee, label: "24/7 Kitchen", description: "Fully equipped coliving kitchen space" },
    { icon: Shield, label: "24/7 Security", description: "CCTV system and secure coliving environment" },
    { icon: Calendar, label: "Flexible Stays", description: "Weekly and monthly coliving rates" },
    { icon: Users, label: "Live-in Hosts for 24/7 Support", description: "On-property team for all your needs" },
    { icon: Heart, label: "Island Partnership Network", description: "Best local guides & experiences" }
  ];

  return (
    <>
      {galleryOpen && selectedRoom && (
        <ImageGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} images={roomGalleries[selectedRoom.title]} initialIndex={selectedImageIndex} roomTitle={selectedRoom.title} />
      )}
      <section id="rooms" className="py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <Badge variant="outline" className="mb-4">Tropical Paradise Coliving</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Coliving Siargao Villa</span> Private Suites
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-4">Your Dream Island Living & Coworking Space Awaits</p>
            <div className="bg-primary/5 p-4 rounded-lg inline-block">
              <h3 className="text-lg font-semibold text-primary mb-2">Next Available Suites:</h3>
              <p className="text-sm text-muted-foreground">🌟 Cozy Room from Aug 7 | Ensuite &amp; Balcony from Aug 15</p>
            </div>
          </div>
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {roomTypes
              .sort((a, b) => { const dateA = getAvailabilityDates(a).nextAvailable; const dateB = getAvailabilityDates(b).nextAvailable; return dateA.getTime() - dateB.getTime(); })
              .map((room, index) => (
              <Card key={index} id={room.title.toLowerCase().replace(/ /g, '-')} className={`relative flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${room.popular ? 'ring-2 ring-primary shadow-lg' : ''}`}>
                {room.popular && (<Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white z-10">Most Popular</Badge>)}
                <CardHeader className="pb-4">
                  <div className="relative rounded-lg overflow-hidden mb-4 group">
                    <img src={room.image} alt={`${room.title} - ${room.subtitle}`} className="w-full h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" onClick={() => openGallery(room, 0)} />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center cursor-pointer" onClick={() => openGallery(room, 0)}>
                      <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-3 rounded-full"><Expand className="w-6 h-6 text-black" /></div>
                    </div>
                    <Button variant="secondary" size="sm" className="absolute top-3 right-3 bg-white/90 hover:bg-white text-black transition-all hover:scale-105 z-10" onClick={(e) => { e.stopPropagation(); shareRoom(room); }}>
                      <Share2 className="w-3 h-3 mr-1" /> Share
                    </Button>
                    <div className="absolute bottom-3 left-3 bg-primary text-white px-2 py-1 rounded-md text-xs font-medium">Available {getAvailabilityDates(room).fromShort}</div>
                    <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium flex items-center gap-1">
                      <Expand className="w-3 h-3" /> {roomGalleries[room.title].length} photos
                    </div>
                  </div>
                  <CardTitle className="text-xl">{room.title}</CardTitle>
                  <p className="text-sm text-muted-foreground mb-3">{room.subtitle}</p>
                  <div className="space-y-2">
                    <div className="flex items-baseline space-x-2"><span className="text-2xl font-bold text-primary">{room.monthlyPrice}</span><span className="text-muted-foreground">/month</span></div>
                    <div className="flex items-baseline space-x-2"><span className="text-lg font-semibold text-secondary">{room.weeklyPrice}</span><span className="text-muted-foreground text-sm">/week</span></div>
                  </div>
                  <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2"><Users className="w-4 h-4" /><span>{room.capacity}</span></div>
                  <div className="flex flex-col gap-2 mt-3 bg-primary/5 p-3 rounded-lg border border-primary/10">
                    <div className="flex items-center space-x-2 text-sm"><Calendar className="w-4 h-4 text-primary" /><span className="font-medium">Suite Availability:</span></div>
                    <span className="text-sm text-primary font-medium">Move in from {getAvailabilityDates(room).from}</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-6 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="bg-muted/50 p-3 rounded-lg mb-6"><p className="text-sm font-medium mb-1">Perfect For:</p><p className="text-sm text-muted-foreground">{room.perfectFor}</p></div>
                    <div className="flex justify-center space-x-4 mb-6">{room.amenities.map((Icon, iconIndex) => (<div key={iconIndex} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>))}</div>
                    <ul className="space-y-2">{room.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center space-x-3 text-sm"><div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" /><span>{feature}</span></li>))}</ul>
                  </div>
                  <div className="flex gap-2 pt-6">
                    <Button variant={room.popular ? "default" : "outline"} size="lg" className={`flex-1 ${room.popular ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0' : ''}`} onClick={() => openWhatsApp(room)}><MessageCircle className="w-4 h-4 mr-2" />Book Now</Button>
                    <Button variant="outline" size="lg" onClick={() => shareRoom(room)} className="hover:scale-105 transition-transform" aria-label="Share this room"><Share2 className="w-4 h-4" /></Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">{amenities.map((amenity, index) => (<div key={index} className="flex items-start space-x-4 p-6 bg-muted/50 rounded-xl hover:shadow-md transition-shadow"><div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0"><amenity.icon className="w-6 h-6 text-primary" /></div><div><h4 className="font-semibold mb-1">{amenity.label}</h4><p className="text-sm text-muted-foreground">{amenity.description}</p></div></div>))}</div>
          <div className="mb-16">
            <h3 className="text-2xl font-bold mb-8 text-center">Your Coliving Concierge Services</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[ { icon: "✈️", title: "Arrival Coordination", description: "Seamless coliving guest arrivals" }, { icon: "🗺️", title: "Community Orientation", description: "Island integration for coliving members" }, { icon: "🏄", title: "Surf Buddy Connections", description: "Connect with surf-loving colivers" }, { icon: "☕", title: "Best Coworking Cafés", description: "Local workspace recommendations" }, { icon: "🏢", title: "External Coworking Partnerships", description: "Access to Coco Space & more" }, { icon: "💆", title: "Wellness Recommendations", description: "Maintain health during long-term stays" }, { icon: "📅", title: "Weekly Community Activities", description: "Regular coliving events & meetups" }, { icon: "🏍️", title: "Transportation Arrangements", description: "Motorbike rentals & island transport" } ].map((service, index) => (<div key={index} className="text-center p-4 bg-muted/30 rounded-lg"><div className="text-2xl mb-2">{service.icon}</div><h4 className="font-medium mb-1 text-sm">{service.title}</h4><p className="text-xs text-muted-foreground">{service.description}</p></div>))}
            </div>
          </div>
          <div className="text-center bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8">
            <h3 className="text-2xl font-bold mb-4">Ready to Join Our Coliving Community?</h3>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">Experience authentic tropical coliving with professional coworking facilities</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="default" size="lg" className="bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0" onClick={() => { const message = "Hi! I'm interested in joining your coliving community at Siargao. Can you share more details about availability for both short and long-term stays?"; window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank'); }}>
                <MessageCircle className="w-4 h-4 mr-2" /> Join Our Coliving Community
              </Button>
              <Button variant="outline" size="lg" className="hover:bg-primary/10 hover:border-primary/50 transition-colors" onClick={() => { const message = "Hi! I'd like to schedule a virtual tour of your coliving space. When would be a good time?"; window.open(`https://wa.me/639083339477?text=${encodeURIComponent(message)}`, '_blank'); }}>
                Schedule Virtual Tour
              </Button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AccommodationSection;
