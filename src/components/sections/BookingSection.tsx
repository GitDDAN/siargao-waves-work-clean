import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea"; // Import Textarea
import { format } from "date-fns";
import { Calendar as CalendarIcon, Send, Users, MessageCircle, CheckCircle, Shield, Sparkles } from "lucide-react";


const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "", // Added phone field
    roomType: "",
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    guests: "1",
    message: "" // Added message field
  });

  // --- UPDATED: handleSubmit now includes all form fields in the WA message ---
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `
🌴 *Siargao Villa Booking Request* 🌴

Hello! I'd like to book a stay with the following details:

*Name:* ${formData.name}
*Email:* ${formData.email || 'Not provided'}
*Phone:* ${formData.phone || 'Not provided'}

*Room Choice:* ${formData.roomType || 'Not selected'}
*Guests:* ${formData.guests}

*Check-in:* ${formData.checkIn ? format(formData.checkIn, 'MMM dd, yyyy') : 'Flexible'}
*Check-out:* ${formData.checkOut ? format(formData.checkOut, 'MMM dd, yyyy') : 'Flexible'}

*Additional Message:*
${formData.message || 'None'}
    `.trim().replace(/\n\s*\n/g, '\n'); // Clean up extra lines

    window.open(`https://wa.me/639083339477?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section id="booking" className="py-20 bg-gradient-to-b from-sky-50/40 to-white">
      <div className="container mx-auto px-4">
        {/* Section Header — frosted pill */}
        <div className="text-center mb-16">
          <div className="inline-block bg-white/70 backdrop-blur-md rounded-2xl px-8 py-6 shadow-lg shadow-black/5 border border-white/50">
            <Badge variant="outline" className="mb-4 bg-white/80 border-primary/30">Book Your Tropical Escape</Badge>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Reserve Your Suite
              </span>
            </h2>
            <p className="text-base text-muted-foreground max-w-2xl mx-auto">
              Fill out the form below. We'll confirm your booking and details instantly via WhatsApp.
            </p>
          </div>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 lg:gap-12 items-start">
          {/* --- REDESIGNED: Booking Form takes up 3 columns --- */}
          <Card className="lg:col-span-3 shadow-xl shadow-black/10 bg-white/75 backdrop-blur-lg border-white/50">
            <CardHeader>
              <CardTitle className="text-2xl flex items-center gap-2">
                <CalendarIcon className="w-6 h-6 text-primary" />
                Booking Details
              </CardTitle>
              <CardDescription>All fields marked with * are required.</CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input id="name" placeholder="John Doe" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} required className="bg-white/60" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email (Optional)</Label>
                    <Input id="email" type="email" placeholder="john.doe@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="bg-white/60" />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor="phone">Phone Number (Optional)</Label>
                        <Input id="phone" placeholder="+63 912 345 6789" value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="bg-white/60" />
                    </div>
                    <div className="space-y-2">
                        <Label>Room Type *</Label>
                        <Select onValueChange={(value) => setFormData({...formData, roomType: value})} required>
                          <SelectTrigger className="bg-white/60"><SelectValue placeholder="Select a room" /></SelectTrigger>
                          <SelectContent>
                            <SelectItem value="Ensuite Master">Ensuite Master</SelectItem>
                            <SelectItem value="Balcony Room">Balcony Room</SelectItem>
                            <SelectItem value="Cozy Room">Cozy Room</SelectItem>
                          </SelectContent>
                        </Select>
                    </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Check-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal hover:bg-primary/10 bg-white/60">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {formData.checkIn ? format(formData.checkIn, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={formData.checkIn} onSelect={(date) => setFormData({...formData, checkIn: date})} initialFocus /></PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Check-out Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button variant="outline" className="w-full justify-start text-left font-normal hover:bg-primary/10 bg-white/60">
                          <CalendarIcon className="w-4 h-4 mr-2" />
                          {formData.checkOut ? format(formData.checkOut, 'PPP') : 'Pick a date'}
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0"><Calendar mode="single" selected={formData.checkOut} onSelect={(date) => setFormData({...formData, checkOut: date})} initialFocus /></PopoverContent>
                    </Popover>
                  </div>
                </div>

                <div className="space-y-2">
                    <Label>Number of Guests *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, guests: value})} defaultValue="1">
                        <SelectTrigger className="bg-white/60"><SelectValue /></SelectTrigger>
                        <SelectContent>
                            <SelectItem value="1">1 Guest</SelectItem>
                            <SelectItem value="2">2 Guests</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-2">
                    <Label htmlFor="message">Additional Message (Optional)</Label>
                    <Textarea id="message" placeholder="Let us know if you have any special requests..." value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="bg-white/60" />
                </div>

                <Button type="submit" size="lg" className="w-full bg-gradient-to-r from-primary to-secondary text-white text-lg font-bold hover:scale-[1.02] transition-transform shadow-md">
                  <Send className="w-5 h-5 mr-2" />
                  Book via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* --- REDESIGNED: Info card takes up 2 columns --- */}
          <div className="lg:col-span-2 space-y-8">
            <Card className="bg-white/70 backdrop-blur-md border-white/50 shadow-lg shadow-black/5">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <Sparkles className="w-6 h-6 text-accent" />
                    Why Book With Us?
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Instant Confirmation</h4>
                    <p className="text-sm text-muted-foreground">Your booking is sent directly to our team via WhatsApp for a quick response.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Secure & Simple</h4>
                    <p className="text-sm text-muted-foreground">No upfront payment needed. We'll confirm availability and payment options with you directly.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <MessageCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold">Direct Communication</h4>
                    <p className="text-sm text-muted-foreground">Have questions? You'll be connected directly with our friendly hosts to plan your perfect stay.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-md bg-white/70 border-white/50 shadow-lg shadow-black/5">
              <CardContent className="p-8 text-center">
                <Users className="w-12 h-12 text-primary mx-auto mb-4" />
                <h3 className="text-2xl font-bold mb-4">Join Our Community</h3>
                <p className="text-muted-foreground mb-6">
                  Beyond just a room, become part of our vibrant digital nomad family.
                </p>
                <Button
                  variant="outline"
                  size="lg"
                  className="w-full bg-white/80"
                  onClick={() => {
                    window.open('https://wa.me/639083339477?text=Hi! I\'d like to learn more about Salamat Villa Siargao!', '_blank');
                  }}
                >
                  <MessageCircle className="w-4 h-4 mr-2" />
                  Ask About Community
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;
