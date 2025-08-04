import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar as CalendarIcon, Send, Users, MessageCircle } from "lucide-react";

const BookingSection = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    roomType: "",
    checkIn: null as Date | null,
    checkOut: null as Date | null,
    guests: "1",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const whatsappMessage = `
Hi! I'd like to book a stay:

Name: ${formData.name}
Room: ${formData.roomType}
Check-in: ${formData.checkIn ? format(formData.checkIn, 'MMM dd, yyyy') : 'TBD'}
Check-out: ${formData.checkOut ? format(formData.checkOut, 'MMM dd, yyyy') : 'TBD'}
Guests: ${formData.guests}

Additional message:
${formData.message}
    `.trim();

    window.open(`https://wa.me/639083339477?text=${encodeURIComponent(whatsappMessage)}`, '_blank');
  };

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">Book Your Stay</Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Reserve Your Room
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Quick booking process with instant WhatsApp confirmation
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Booking Form */}
          <Card className="shadow-xl">
            <CardHeader>
              <CardTitle>Room Booking</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Basic Info */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Full Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      required
                    />
                  </div>
                </div>

                {/* Room Selection & Dates */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Room Type *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, roomType: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select room type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="ensuite">Ensuite Master</SelectItem>
                        <SelectItem value="balcony">Balcony Room</SelectItem>
                        <SelectItem value="cozy">Cozy Room</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label>Number of Guests *</Label>
                    <Select onValueChange={(value) => setFormData({...formData, guests: value})}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select guests" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="1">1 Guest</SelectItem>
                        <SelectItem value="2">2 Guests</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                {/* Date Selection */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label>Check-in Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left hover:bg-primary/10 hover:border-primary/50 transition-colors"
                        >
                          {formData.checkIn ? format(formData.checkIn, 'MMM dd, yyyy') : 'Select date'}
                          <CalendarIcon className="w-5 h-5 ml-auto" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.checkIn}
                          onSelect={(date) => setFormData({...formData, checkIn: date})}
                          footer={
                            <Button
                              onClick={() => setFormData({...formData, checkIn: null})}
                              variant="outline"
                              className="w-full hover:bg-primary/10 hover:border-primary/50 transition-colors"
                            >
                              Clear Date
                            </Button>
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                  <div className="space-y-2">
                    <Label>Check-out Date</Label>
                    <Popover>
                      <PopoverTrigger asChild>
                        <Button 
                          variant="outline" 
                          className="w-full justify-start text-left hover:bg-primary/10 hover:border-primary/50 transition-colors"
                        >
                          {formData.checkOut ? format(formData.checkOut, 'MMM dd, yyyy') : 'Select date'}
                          <CalendarIcon className="w-5 h-5 ml-auto" />
                        </Button>
                      </PopoverTrigger>
                      <PopoverContent className="w-auto p-0">
                        <Calendar
                          mode="single"
                          selected={formData.checkOut}
                          onSelect={(date) => setFormData({...formData, checkOut: date})}
                          footer={
                            <Button
                              onClick={() => setFormData({...formData, checkOut: null})}
                              variant="outline"
                              className="w-full hover:bg-primary/10 hover:border-primary/50 transition-colors"
                            >
                              Clear Date
                            </Button>
                          }
                        />
                      </PopoverContent>
                    </Popover>
                  </div>
                </div>

                <Button 
                  type="submit" 
                  variant="default" 
                  size="lg" 
                  className="w-full bg-gradient-to-r from-primary to-secondary hover:from-primary/90 hover:to-secondary/90 text-white border-0"
                >
                  <Send className="w-4 h-4 mr-2" />
                  Book via WhatsApp
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Community Join Card */}
          <Card className="bg-gradient-to-r from-primary/5 to-secondary/5">
            <CardContent className="p-8 text-center">
              <Users className="w-12 h-12 text-primary mx-auto mb-4" />
              <h3 className="text-2xl font-bold mb-4">Want to Join Our Community?</h3>
              <p className="text-muted-foreground mb-6">
                Beyond just booking a room, become part of our vibrant digital nomad community
              </p>
              <Button 
                variant="outline" 
                size="lg" 
                className="hover:bg-primary/10 hover:border-primary/50 transition-colors"
                onClick={() => {
                  window.open('https://wa.me/639083339477?text=Hi! I\'d like to learn more about joining the Siargao Coliving community!', '_blank');
                }}
              >
                <MessageCircle className="w-4 h-4 mr-2" />
                Join Community
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BookingSection;