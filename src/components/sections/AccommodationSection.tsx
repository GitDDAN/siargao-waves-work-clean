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
  Expand,
  AlertTriangle,
  Star
} from "lucide-react";
import ensuiteMasterImageSrc from '../../assets/Gallery/ensuite-master.png';
import balconyRoomImageSrc from '../../assets/Gallery/balcony-room.png';
import cozyRoomImageSrc from '../../assets/Gallery/cozy-room.png';
import ensuiteImg2 from '../../assets/Gallery/95a8fd83-4039-4385-8acb-b3a404901043.png';
import ensuiteImg3 from '../../assets/Gallery/921e3861-a745-4e7a-bf07-ead82a89490b.png';
import ensuiteImg4 from '../../assets/Gallery/48738a79-c51e-45f7-adae-d1f3d13355e5.png';
import commonImg1 from '../../assets/Gallery/b5ba0685-11ca-4d09-be1d-5415e33d66fe.png';
import commonImg2 from '../../assets/Gallery/tropical-common-area.png';
import commonImg3 from '../../assets/Gallery/1CCTVInstalled.jpg';
import ensuiteImg5 from '../../assets/Gallery/2bafcf0c-8134-4a42-957c-ed899552c935.png';
import ensuiteImg6 from '../../assets/Gallery/8bbdbcb9-e10f-4a92-9d49-fc6875d5fd6a.png';
import commonImg4 from '../../assets/Gallery/1InternetSpeed.jpg';
import ensuiteVideo1 from '../../assets/Gallery/Walkthroughtour.mp4';
import balconyImg2 from '../../assets/Gallery/BalconyRoomDoors.jpg';
import balconyImg3 from '../../assets/Gallery/BalconyRoomstorage.jpg';
import balconyImg4 from '../../assets/Gallery/cb48cf65-05f7-452c-9969-05e7c527e62d.png';
import balconyImg5 from '../../assets/Gallery/26a3f37c-c09b-4051-b6b9-2da2c9866038.png';
import balconyImg6 from '../../assets/Gallery/5c657536-0c6a-45fe-82c9-c3dd37af1b6b.png';
import cozyImg2 from '../../assets/Gallery/PrivateRoom.jpg';
import cozyImg3 from '../../assets/Gallery/ec9eb930-e69a-466d-9b13-4c2201461a79.png';
import cozyImg4 from '../../assets/Gallery/f27cb854-871b-4105-b007-0eae90fb8d40.png';
import cozyImg5 from '../../assets/Gallery/f81897b9-695c-4f23-a935-71908f648dd4.jpg';
import cozyImg6 from '../../assets/Gallery/TeaCommonArea.jpg';
import cozyVideo1 from '../../assets/Gallery/PrivateRoomVideo.mp4';
import cozyVideo2 from '../../assets/Gallery/CuteRoomShort.mp4';


// Simple toast implementation
const useToast = () => {
  const toast = ({ title, description }: { title: string; description?: string }) => {
    const toastId = `toast-${Date.now()}`;
    document.querySelectorAll('.custom-toast').forEach(t => t.remove());

    const toastEl = document.createElement('div');
    toastEl.id = toastId;
    toastEl.className = 'custom-toast fixed bottom-4 right-4 bg-gray-900 text-white border border-gray-700 rounded-lg shadow-2xl p-4 z-[100] animate-slide-up';
    toastEl.innerHTML = `
      <div class="font-semibold">${title}</div>
      ${description ? `<div class="text-sm text-gray-300 mt-1">${description}</div>` : ''}
    `;

    const style = document.createElement('style');
    style.textContent = `
      @keyframes slide-up { from { transform: translateY(100%); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
      .animate-slide-up { animation: slide-up 0.3s ease-out forwards; }
    `;
    document.head.appendChild(style);
    document.body.appendChild(toastEl);

    setTimeout(() => {
      const el = document.getElementById(toastId);
      if (el) {
        el.style.transition = 'all 0.4s ease-in';
        el.style.opacity = '0';
        el.style.transform = 'translateY(100%)';
        setTimeout(() => {
          if (el) el.remove();
          if (style) style.remove();
        }, 400);
      }
    }, 3000);
  };
  return { toast };
};

// Date formatting helper
const format = (date: Date, formatStr: string): string => {
  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  const day = date.getDate();
  const month = date.getMonth();
  const year = date.getFullYear();

  if (formatStr === 'MMM dd, yyyy') return `${months[month]} ${day}, ${year}`;
  if (formatStr === 'MMM dd') return `${months[month]} ${day}`;
  return date.toLocaleDateString();
};

// ====================================================================
// ==  IMAGE GALLERY MODAL
// ====================================================================
interface ImageItem { url: string; alt: string; caption: string; type: 'image' | 'video'; }
interface ImageGalleryModalProps { isOpen: boolean; onClose: () => void; images: ImageItem[]; initialIndex?: number; roomTitle: string; }

const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({ isOpen, onClose, images, initialIndex = 0, roomTitle }) => {
  const [currentIndex, setCurrentIndex] = useState(initialIndex);
  
  useEffect(() => {
    if (!isOpen) return;
    document.body.style.overflow = 'hidden';
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
      if (e.key === 'ArrowRight') setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, images.length, onClose]);

  useEffect(() => { setCurrentIndex(initialIndex); }, [initialIndex]);

  if (!isOpen) return null;
  const currentItem = images[currentIndex];

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((p) => (p === images.length - 1 ? 0 : p + 1));
  };

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((p) => (p === 0 ? images.length - 1 : p - 1));
  };

  return (
    <div className="fixed inset-0 z-50 bg-black/95 flex flex-col items-center justify-center" onClick={onClose}>
        <div className="absolute top-0 left-0 right-0 flex justify-between items-start p-4 z-50">
            <div>
                <h3 className="text-xl font-semibold text-white">{roomTitle}</h3>
                <p className="text-sm text-gray-300 mt-1">{currentIndex + 1} / {images.length}</p>
            </div>
            <button className="text-white hover:text-gray-300" onClick={onClose}><X className="w-8 h-8" /></button>
        </div>
        <div className="relative w-full h-full flex items-center justify-center">
            <button className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-1.5 sm:p-2 rounded-full z-50" onClick={handlePrev}><ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" /></button>
            <div className="flex flex-col items-center justify-center px-2 sm:px-6 md:px-10 lg:px-16 py-4 h-full" onClick={(e) => e.stopPropagation()}>
                {currentItem.type === 'video' ? <video key={currentItem.url} src={currentItem.url} controls autoPlay muted className="max-w-full max-h-[70dvh] sm:max-h-[75dvh] md:max-h-[80dvh] object-contain rounded-lg" /> : <img key={currentItem.url} src={currentItem.url} alt={currentItem.alt} className="max-w-full max-h-[70dvh] sm:max-h-[75dvh] md:max-h-[80dvh] object-contain rounded-lg" />}
                {currentItem.caption && <p className="text-white text-center mt-4 text-sm max-w-2xl">{currentItem.caption}</p>}
            </div>
            <button className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 text-white bg-black/50 p-1.5 sm:p-2 rounded-full z-50" onClick={handleNext}><ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" /></button>
        </div>
    </div>
  );
};

const AccommodationSection = () => {
  const { toast } = useToast();
  const [galleryOpen, setGalleryOpen] = useState(false);
  const [selectedRoom, setSelectedRoom] = useState<any>(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const roomGalleries: Record<string, ImageItem[]> = {
    "Ensuite Master": [
      { url: ensuiteMasterImageSrc, alt: "Ensuite Master Bedroom", caption: "Spacious master bedroom with ensuite bathroom", type: "image" },
      { url: ensuiteImg2, alt: "Room Interior", caption: "Queen bed with tropical ambiance", type: "image" },
      { url: ensuiteImg3, alt: "Master Bedroom View", caption: "Master suite with Jungle views", type: "image" },
      { url: ensuiteImg4, alt: "Work Desk", caption: "Room desk with natural light", type: "image" },
      { url: commonImg1, alt: "Hammock", caption: "Downstairs Hammock", type: "image" },
      { url: commonImg2, alt: "Tropical Common Area", caption: "Shared tropical paradise space", type: "image" },
      { url: commonImg3, alt: "Security", caption: "24/7 CCTV security system", type: "image" },
      { url: ensuiteImg5, alt: "Bathroom", caption: "Private Ensuite Bathroom", type: "image" },
      { url: ensuiteImg6, alt: "Bathroom", caption: "Hot Private Shower", type: "image" },
      { url: commonImg4, alt: "High Speed Internet", caption: "Fast fiber internet throughout", type: "image" },
      { url: ensuiteVideo1, alt: "Villa Walkthrough", caption: "Complete tour of the master suite", type: "video" }
    ],
    "Balcony Room": [
      { url: balconyRoomImageSrc, alt: "Balcony Room", caption: "Bright room with private balcony access", type: "image" },
      { url: balconyImg2, alt: "Balcony Doors", caption: "Private balcony doors opening to paradise", type: "image" },
      { url: balconyImg3, alt: "Storage Space", caption: "Ample storage for extended stays", type: "image" },
      { url: balconyImg4, alt: "Tropical Views", caption: "Wake up to tropical jungle views", type: "image" },
      { url: balconyImg5, alt: "Balcony Space", caption: "2 bathrooms shared between 2 rooms, 1 with shower", type: "image" },
      { url: balconyImg6, alt: "Additional View", caption: "Downstairs area", type: "image" },
      { url: commonImg1, alt: "Hammock", caption: "Downstairs Hammock", type: "image" },
      { url: commonImg2, alt: "Tropical Common Area", caption: "Shared tropical paradise space", type: "image" },
      { url: commonImg3, alt: "Security", caption: "24/7 CCTV security system", type: "image" },
      { url: commonImg4, alt: "High Speed Internet", caption: "Fast fiber internet throughout", type: "image" }
    ],
    "Cozy Room": [
      { url: cozyRoomImageSrc, alt: "Cozy Room", caption: "Comfortable room with Jungle views", type: "image" },
      { url: cozyImg2, alt: "Private Room", caption: "Your private sanctuary", type: "image" },
      { url: commonImg1, alt: "Hammock", caption: "Downstairs Hammock", type: "image" },
      { url: cozyImg3, alt: "Room Features", caption: "Downstairs Kitchen", type: "image" },
      { url: cozyImg4, alt: "Garden Access", caption: "Location / Shortcut access to main road", type: "image" },
      { url: cozyImg5, alt: "Room Details", caption: "Cozy room amenities", type: "image" },
      { url: cozyImg6, alt: "Common Area", caption: "Access to shared tea area", type: "image" },
      { url: commonImg2, alt: "Tropical Common Area", caption: "Shared tropical paradise space", type: "image" },
      { url: commonImg3, alt: "Security", caption: "24/7 CCTV security system", type: "image" },
      { url: commonImg4, alt: "High Speed Internet", caption: "Fast fiber internet throughout", type: "image" },
      { url: cozyVideo1, alt: "Room Tour", caption: "Video tour of the cozy room", type: "video" },
      { url: cozyVideo2, alt: "Quick Room Tour", caption: "Quick tour of the cozy room", type: "video" }
    ]
  };

  const roomTypes = [
    { title: "Ensuite Master", subtitle: "Your Private Suite", monthlyPrice: "₱33,000", weeklyPrice: "₱9,500", image: ensuiteMasterImageSrc, perfectFor: "Digital nomads seeking privacy, comfort, and a dedicated desk for focused remote work.", socialTagline: "🌊 Private Suite with Ensuite Bathroom & Work Desk in Paradise! Perfect for Digital Nomads seeking comfortable island living.", features: ["Private ensuite bathroom", "In-room work desk", "Queen bed with premium linens", "Air conditioning comfort", "High-speed fiber WiFi", "New Linen & Towels Weekly", "Weekly Cleaning Service", "Extra Large balcony", "Hammock with jungle tree view"], popular: true, capacity: "Max 2 guests", amenities: [Bath, Bed, Wifi, AirVent, Shield] },
    { title: "Balcony Room", subtitle: "Paradise Views & Balcony", monthlyPrice: "₱31,000", weeklyPrice: "₱8,500", image: balconyRoomImageSrc, perfectFor: "Couples or solo nomads who love outdoor mornings, jungle views, and a comfortable work setup.", socialTagline: "🌴 Wake Up to Jungle Views Every Day! Coliving Suite with Private Balcony - Perfect for Couples & Digital Nomads in Siargao Paradise.", features: ["Private balcony with jungle views", "Desk with nature views", "Queen bed in tropical setting", "AC + natural ventilation", "High-speed fiber WiFi", "New Linen & Towels Weekly", "Weekly Cleaning Service", "Perfect for couples or solo nomads"], popular: false, capacity: "Max 2 guests", amenities: [Bed, Wifi, AirVent, Coffee] },
    { title: "Cozy Room", subtitle: "Smart & Comfortable", monthlyPrice: "₱28,000", weeklyPrice: "₱7,500", image: cozyRoomImageSrc, perfectFor: "Solo nomads seeking great value for extended island living with a community vibe.", socialTagline: "🏄‍♂️ Budget-Friendly Island Coliving! Perfect for Solo Digital Nomads - Jungle Views, Great Community, Unbeatable Value in Siargao.", features: ["Desk with jungle views", "Comfortable double bed", "Air conditioning comfort", "High-speed fiber WiFi", "Shared bathroom with hot shower", "Perfect for budget-conscious nomads", "New Linen & Towels Weekly", "Weekly Cleaning Service"], popular: false, capacity: "Max 2 guest", amenities: [Bed, Wifi, AirVent, Coffee] }
  ];

  const getAvailabilityDates = (room: { title: string }) => {
    // Note: JavaScript months are 0-indexed (e.g., 1 is February)
    const availabilityMap: Record<string, any> = {
      "Ensuite Master": {
        status: "available",
        nextAvailable: new Date(2026, 1, 27), // Feb 27, 2026
      },
      "Cozy Room": {
        status: "available",
        nextAvailable: new Date(2026, 1, 20), // Feb 20, 2026
      },
      "Balcony Room": {
        status: "available",
        nextAvailable: new Date(2026, 1, 20), // Feb 20, 2026
      }
    };
    
    const roomData = availabilityMap[room.title];
    if (!roomData) return {}; // handle case where room title doesn't match
    
    const isBooked = roomData.status === "booked";
    const displayDate = isBooked ? roomData.bookedUntil : roomData.nextAvailable;
    
    return {
      from: format(displayDate, 'MMM dd, yyyy'),
      availableUntilDate: roomData.availableUntil,
      fromShort: format(displayDate, 'MMM dd'),
      isBooked,
      nextAvailable: displayDate,
      extensionWarning: roomData.extensionWarning || false,
      possibleExtensionUntil: roomData.possibleExtensionUntil ? format(roomData.possibleExtensionUntil, 'MMM dd') : null,
      nextMajorAvailability: roomData.nextMajorAvailability ? format(roomData.nextMajorAvailability, 'MMM dd, yyyy') : null,
      specialOffer: roomData.specialOffer || null
    };
  };

  const openGallery = (room: any, imageIndex = 0) => {
    setSelectedRoom(room);
    setSelectedImageIndex(imageIndex);
    setGalleryOpen(true);
  };
  
  const openWhatsApp = (room: any) => {
    const availability = getAvailabilityDates(room);
    let message;
    if (availability.isBooked) {
      message = `Hi! I'd like to join the waitlist for the "${room.title}" room. I understand it's booked until ${availability.from}. Please let me know when it becomes available!`;
    } else {
      let offerText = availability.specialOffer ? ` I'm interested in the special offer of ${availability.specialOffer.rate} ${availability.specialOffer.period}.` : '';
      message = `Hi! I'm interested in booking the "${room.title}" room, available from ${availability.from}.${offerText} Could you provide more details?`;
    }
    const whatsappUrl = `https://wa.me/639083339477?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const openWhatsAppForWaitlist = (room: any) => {
    const message = `Hi! I'd like to be added to the waitlist for the "${room.title}" room for future dates. Please keep me updated on any new openings!`;
    const whatsappUrl = `https://wa.me/639083339477?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  const getAvailabilitySummary = () => {
    const availableRooms = roomTypes.filter(room => !getAvailabilityDates(room).isBooked);
    if (availableRooms.length === 0) return "All suites currently booked - Join waitlist for next availability";
    const earliestAvailable = availableRooms.map(room => ({ room, date: getAvailabilityDates(room).nextAvailable })).sort((a, b) => a.date.getTime() - b.date.getTime())[0];
    return `Next Available: ${earliestAvailable.room.title} from ${format(earliestAvailable.date, 'MMM dd')}`;
  };

  const shareRoom = async (room: any) => {
    const availability = getAvailabilityDates(room);
    const url = window.location.href.split('#')[0] + '#' + room.title.toLowerCase().replace(/ /g, '-');
    const text = `Check out the ${room.title} at Salamat Villa Siargao! ${room.socialTagline}. It's currently ${availability.isBooked ? `booked until ${availability.from}` : `available from ${availability.from}`}. More info here:`;

    if (navigator.share) {
      try {
        await navigator.share({
          title: `Salamat Villa Siargao - ${room.title}`,
          text: text,
          url: url,
        });
        toast({ title: 'Room Shared!', description: 'The link has been copied to your clipboard.' });
      } catch (error) {
        console.error('Error sharing:', error);
        toast({ title: 'Sharing Failed', description: 'Could not share the room at this time.' });
      }
    } else {
      try {
        await navigator.clipboard.writeText(`${text} ${url}`);
        toast({ title: 'Link Copied!', description: 'The share link is in your clipboard.' });
      } catch (err) {
        console.error('Failed to copy: ', err);
        toast({ title: 'Copy Failed', description: 'Could not copy the link.' });
      }
    }
  };

  return (
    <>
      {galleryOpen && selectedRoom && ( <ImageGalleryModal isOpen={galleryOpen} onClose={() => setGalleryOpen(false)} images={roomGalleries[selectedRoom.title]} initialIndex={selectedImageIndex} roomTitle={selectedRoom.title} /> )}
      <section id="rooms" className="py-10 md:py-20 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8 md:mb-16">
            <Badge variant="outline" className="mb-4">Tropical Paradise Living</Badge>
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-4 sm:mb-6">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">Salamat Villa Siargao</span> Private Suites
            </h2>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto mb-4">Your Dream Island Living Awaits</p>
            <div className="bg-primary/5 p-3 sm:p-4 rounded-lg inline-block">
              <h3 className="text-base sm:text-lg font-semibold text-primary mb-2">Current Suite Status:</h3>
              <p className="text-sm text-muted-foreground">{getAvailabilitySummary()}</p>
            </div>
          </div>
          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 mb-8 md:mb-16 pt-4">
            {roomTypes.map((room) => {
              const availability = getAvailabilityDates(room);
              const { isBooked, from, fromShort, extensionWarning, possibleExtensionUntil, nextMajorAvailability, specialOffer, availableUntilDate } = availability;
              const isBalconyRoom = room.title === "Balcony Room";
              const isCozyRoom = room.title === "Cozy Room";
              const bookedRingColor = isBalconyRoom ? 'ring-red-400' : 'ring-red-500';
              const bookedBadgeColor = isBalconyRoom ? 'bg-red-400' : 'bg-red-500';
              
              return (
                <Card key={room.title} id={room.title.toLowerCase().replace(/ /g, '-')} className={`relative flex flex-col hover:shadow-xl transition-all duration-300 hover:scale-[1.02] ${room.popular && !isBooked ? 'ring-2 ring-green-500 shadow-lg' : ''} ${isBooked ? `ring-2 ${bookedRingColor} shadow-lg` : ''}`}>
                  {isBooked && (<Badge className={`absolute -top-3 left-1/2 transform -translate-x-1/2 ${bookedBadgeColor} text-white z-10`}>Currently Booked</Badge>)}
                  {isBalconyRoom && extensionWarning && (<Badge className="absolute -top-3 right-4 bg-blue-500 text-white z-10 text-xs">Extension Pending</Badge>)}
                  
                  <CardHeader className="p-4">
                    <div className="relative rounded-lg overflow-hidden mb-4 group">
                      <img src={room.image} alt={`${room.title} - ${room.subtitle}`} className="w-full h-36 sm:h-44 md:h-48 object-cover cursor-pointer transition-transform duration-300 group-hover:scale-105" onClick={() => openGallery(room, 0)} />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center cursor-pointer" onClick={() => openGallery(room, 0)}>
                        <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/90 p-3 rounded-full"><Expand className="w-6 h-6 text-black" /></div>
                      </div>
                      <Button variant="secondary" size="sm" className="absolute top-3 right-3 bg-white/90 hover:bg-white text-black transition-all hover:scale-105 z-10" onClick={(e) => { e.stopPropagation(); shareRoom(room); }}>
                        <Share2 className="w-3 h-3 mr-1" /> Share
                      </Button>
                      <div className={`absolute bottom-3 left-3 px-2 py-1 rounded-md text-xs font-medium ${isBooked ? (isBalconyRoom ? 'bg-red-500 text-white' : 'bg-red-500 text-white') : 'bg-green-600 text-white'}`}>{isBooked ? `Booked until ${fromShort}` : `Available ${fromShort}`}</div>
                      <div className="absolute bottom-3 right-3 bg-black/70 text-white px-2 py-1 rounded-md text-xs font-medium hidden sm:flex items-center gap-1"><Expand className="w-3 h-3" /> {roomGalleries[room.title].length} photos</div>
                    </div>
                    <CardTitle className="text-xl">{room.title}</CardTitle>
                    <p className="text-sm text-muted-foreground mb-3">{room.subtitle}</p>
                    <div className="space-y-2">
                      <div className="flex items-baseline space-x-2"><span className="text-2xl font-bold text-primary">{room.monthlyPrice}</span><span className="text-muted-foreground">/month</span></div>
                      <div className="flex items-baseline space-x-2"><span className="text-lg font-semibold text-secondary">{room.weeklyPrice}</span><span className="text-muted-foreground text-sm">/week</span></div>
                    </div>
                    <div className="flex items-center space-x-2 text-sm text-muted-foreground mt-2"><Users className="w-4 h-4" /><span>{room.capacity}</span></div>
                  </CardHeader>
                  
                  <CardContent className="p-4 space-y-4 flex-grow flex flex-col justify-between">
                    <div>
                      <div className={`flex flex-col gap-2 p-3 rounded-lg border ${isBooked ? (isBalconyRoom ? 'bg-red-50 border-red-200' : 'bg-red-50 border-red-200') : 'bg-green-50 border-green-200'}`}>
                            <div className="flex items-center space-x-2 text-sm">
                              <Calendar className={`w-4 h-4 ${isBooked ? (isBalconyRoom ? 'text-red-600' : 'text-red-600') : 'text-green-600'}`} />
                              <span className="font-medium">{isBooked ? 'Next Available:' : 'Available From:'}</span>
                            </div>
                            <span className={`text-lg font-bold ${isBooked ? (isBalconyRoom ? 'text-red-700' : 'text-red-700') : 'text-green-700'}`}>{from}</span>
                            {!isBooked && availableUntilDate && (
                              <div className="mt-2 pt-2 border-t border-green-200">
                                <p className="text-xs text-green-800 font-medium">Available until {format(availableUntilDate, 'MMM dd, yyyy')}</p>
                              </div>
                            )}
                            {nextMajorAvailability && (
                              <div className="mt-2 pt-2 border-t border-dashed border-gray-300">
                                <p className="text-xs text-gray-600 font-medium mt-2">Next opening after this is {nextMajorAvailability}</p>
                              </div>
                            )}
                      </div>

                      {specialOffer && !isBooked && (
                        <div className="flex flex-col gap-1 mt-3 p-3 rounded-lg border bg-yellow-50 border-yellow-200 text-yellow-900">
                            <div className="flex items-center space-x-2 text-sm font-bold">
                              <Star className="w-4 h-4 text-yellow-600" fill="currentColor" />
                              <span>Special Nightly Rate</span>
                            </div>
                            <p className="text-sm font-medium pl-6">
                              <span className="font-bold">{specialOffer.rate}</span> {specialOffer.period}
                            </p>
                        </div>
                      )}
                      
                      {extensionWarning && (
                        <div className="flex flex-col gap-2 mt-3 p-3 rounded-lg border bg-yellow-50 border-yellow-200">
                          <div className="flex items-center space-x-2 text-sm">
                            <AlertTriangle className="w-4 h-4 text-yellow-600" />
                            <span className="font-medium text-yellow-700">Extension Possible</span>
                          </div>
                          <span className="text-sm text-yellow-700">Guest may extend until {possibleExtensionUntil}</span>
                        </div>
                      )}

                      <div className="bg-muted/50 p-3 rounded-lg my-4">
                        <p className="text-sm font-medium mb-1">Perfect For:</p>
                        <p className="text-sm text-muted-foreground">{room.perfectFor}</p>
                      </div>
                      <div className="flex justify-center space-x-4 mb-4">
                        {room.amenities.map((Icon, iconIndex) => (<div key={iconIndex} className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center"><Icon className="w-5 h-5 text-primary" /></div>))}
                      </div>
                      <ul className="space-y-2">
                        {room.features.map((feature, featureIndex) => (<li key={featureIndex} className="flex items-center space-x-3 text-sm"><div className="w-2 h-2 bg-accent rounded-full flex-shrink-0" /><span>{feature}</span></li>))}
                      </ul>
                    </div>
                    <div className="pt-4">
                      <div className="flex gap-2">
                        <Button variant={isBooked ? "outline" : (room.popular ? "default" : "outline")} size="lg" className={`flex-1 ${isBooked ? (isCozyRoom ? 'border-red-500 text-red-600 hover:bg-red-50' : 'border-orange-500 text-orange-600 hover:bg-orange-50') : room.popular ? 'bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0' : ''}`} onClick={() => openWhatsApp(room)}>
                          <MessageCircle className="w-4 h-4 mr-2" />{isBooked ? 'Join Waitlist' : 'Book Now'}
                        </Button>
                        <Button variant="outline" size="lg" onClick={() => shareRoom(room)} className="hover:scale-105 transition-transform" aria-label="Share this room"><Share2 className="w-4 h-4" /></Button>
                      </div>
                      <div className="text-center mt-4">
                        <button onClick={() => openWhatsAppForWaitlist(room)} className="text-xs text-muted-foreground hover:text-primary transition-colors underline decoration-dotted">Add me to the waiting list for other dates</button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AccommodationSection;

