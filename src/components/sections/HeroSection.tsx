import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Users, Waves, Laptop, Coffee } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/tropical-common-area.png";

const HeroSection = () => {
    const activities = ["Work Remotely", "Build Community", "Surf Daily", "Live Fully", "Create Together", "Island Life"];
    const [currentActivity, setCurrentActivity] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentActivity((prev) => (prev + 1) % activities.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [activities.length]);

    return (
        <section className="relative min-h-screen flex items-center justify-center">
            {/* Background Image with Enhanced Gradient */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${heroImage})` }}
            >
                <div
                    className="absolute inset-0"
                    style={{
                        background:
                            "linear-gradient(180deg, rgba(0,25,50,0.85) 0%, rgba(0,25,50,0.4) 100%), linear-gradient(120deg, rgba(0,35,70,0.7) 0%, rgba(255,140,0,0.2) 100%)",
                    }}
                />
            </div>

            {/* Content Container */}
            {/* --- UPDATED: Increased bottom padding to ensure scroll pill is visible --- */}
            <div className="relative z-20 w-full pt-24 pb-20 md:pt-28 md:pb-32">
                <div className="max-w-6xl mx-auto px-4 flex flex-col gap-5 md:gap-8 lg:gap-10">
                    {/* Location Badge */}
                    <div className="text-center">
                        <Badge
                            variant="secondary"
                            className="bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md px-3 py-1.5 sm:px-4 sm:py-2 md:px-8 md:py-3 text-sm md:text-base transition-all"
                        >
                            <MapPin className="w-4 h-4 md:w-5 md:h-5 mr-2 md:mr-3" />
                            <span className="font-semibold text-center">General Luna • Perfect for Digital Nomads</span>
                        </Badge>
                    </div>

                    {/* Main Heading */}
                    <div className="space-y-2 md:space-y-4 text-center">
                        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight leading-tight">
                            <span
                                className="animate-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent block"
                                style={{
                                    textShadow: "0 8px 32px rgba(255,140,0,0.5)",
                                    filter: "brightness(1.2) contrast(1.1)",
                                }}
                            >
                                {activities[currentActivity]}
                            </span>
                            <span className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl block">
                                Coliving & Island Life
                            </span>
                        </h1>

                        {/* Subtitle */}
                        <p className="text-base sm:text-lg md:text-xl text-white/90 font-light max-w-3xl mx-auto">
                            Where Digital Nomads Find{" "}
                            <span className="font-semibold bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
                                Community, Comfort & Connectivity
                            </span>{" "}
                            in Paradise
                        </p>
                    </div>

                    {/* Horizontally scrollable pills */}
                    <div className="w-full max-w-full">
                        <div className="flex gap-3 overflow-x-auto pb-4 [mask-image:linear-gradient(to_right,transparent_0,black_16px,black_calc(100%-16px),transparent_100%)] md:flex-wrap md:justify-center md:overflow-x-visible md:pb-0 md:[mask-image:none]">
                            {[
                                { icon: Laptop, text: "Fibre WiFi" },
                                { icon: Users, text: "Nomad Community" },
                                { icon: Coffee, text: "Work-Friendly" },
                                { icon: Waves, text: "5min to Cloud 9" },
                            ].map((feature, index) => (
                                <div
                                    key={index}
                                    className="flex-shrink-0 flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 md:px-6 md:py-3 text-white/90 hover:bg-white/20 transition-all text-sm md:text-base"
                                >
                                    <feature.icon className="w-4 h-4 md:w-5 md:h-5" />
                                    <span className="font-medium whitespace-nowrap">{feature.text}</span>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a
                            href="https://wa.me/639083339477"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group relative px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 hover:scale-105 transition-all duration-300"
                        >
                            <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
                            <span className="relative flex items-center justify-center gap-2 text-white font-semibold text-base md:text-lg">
                                <Users className="w-5 h-5" />
                                Join Nomad Community
                            </span>
                        </a>

                        <a
                            href="#rooms"
                            className="group px-5 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 rounded-full font-semibold text-base md:text-lg text-white border border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
                        >
                            <Laptop className="w-5 h-5 group-hover:animate-pulse" />
                            View Monthly Rates
                        </a>
                    </div>

                    {/* --- REDESIGNED: Stats cards are now grouped in a container for a cohesive mobile look --- */}
                    <div className="pt-4">
                        <div className="md:flex md:flex-row justify-center items-center md:gap-4 bg-white/5 backdrop-blur-lg rounded-2xl p-4 w-full max-w-sm mx-auto md:max-w-none md:bg-transparent md:p-0">
                            {[
                                { number: "₱26k/mo", label: "Starting From Coliving Rates" },
                                { number: "100+ Fiber", label: "Fast WiFi Up & Down" },
                                { number: "24/7", label: "Backup Cafe 200m" },
                            ].map((stat, index) => (
                                <div
                                    key={index}
                                    className="text-center p-2 md:flex-1 md:bg-white/5 md:backdrop-blur-lg md:rounded-xl md:px-6 md:py-3 md:hover:bg-white/10 transition-all"
                                >
                                    <div className="text-xl md:text-2xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
                                        {stat.number}
                                    </div>
                                    <div className="text-xs text-white/70">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Trust Signal - Hidden on mobile */}
                    <div className="hidden md:block text-center pt-2">
                        <p className="text-white/70 text-sm font-medium">
                            Goal to be Trusted by 200+ digital nomads • Featured in Siargao Digital Nomads Community
                        </p>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
                <div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
                    <div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
                </div>
            </div>
        </section>
    );
};

export default HeroSection;
