import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Wifi, Users, Waves } from "lucide-react";
import { useState, useEffect } from "react";
import heroImage from "@/assets/tropical-common-area.png";

const HeroSection = () => {
	const activities = ["Surfing", "CrosssFit", "Wakeboard", "Paddle", "Yoga", "Party"];
	const [currentActivity, setCurrentActivity] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentActivity((prev) => (prev + 1) % activities.length);
		}, 3000);
		return () => clearInterval(interval);
	}, [activities.length]);

	return (
		<section className="relative min-h-screen flex items-center justify-center overflow-hidden">
			{/* Background Image with Enhanced Gradient */}
			<div
				className="absolute inset-0 bg-cover bg-center bg-no-repeat"
				style={{ backgroundImage: `url(${heroImage})` }}
			>
				<div
					className="absolute inset-0"
					style={{
						background:
							"linear-gradient(180deg, rgba(0,32,64,0.8) 0%, rgba(0,32,64,0.4) 100%), linear-gradient(120deg, rgba(0,40,80,0.6) 0%, rgba(255,140,0,0.3) 100%)",
					}}
				/>
			</div>

			{/* Content Container with Glass Effect */}
			<div className="relative z-20 w-full">
				<div className="max-w-6xl mx-auto px-4 space-y-12">
					{/* Location Badge */}
					<Badge
						variant="secondary"
						className="mx-auto bg-white/10 hover:bg-white/20 text-white border-white/20 backdrop-blur-md px-6 py-2 text-sm transition-all"
					>
						<MapPin className="w-4 h-4 mr-2" />
						General Luna, Siargao • 5min to Cloud 9
					</Badge>

					{/* Main Heading with Modern Gradient */}
					<div className="space-y-6 text-center">
						<h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight">
							<span className="text-white">Co-living, Coworking,</span>{" "}
							<span
								className="animate-gradient bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 bg-clip-text text-transparent"
								style={{
									textShadow: "0 8px 32px rgba(255,140,0,0.5)",
									filter: "brightness(1.2) contrast(1.1)",
								}}
							>
								{activities[currentActivity]}
							</span>
						</h1>

						<p className="text-xl md:text-2xl text-white/90 font-light max-w-3xl mx-auto">
							Siargao's General Luna{" "}
							<span className="font-medium bg-gradient-to-r from-blue-200 to-cyan-200 bg-clip-text text-transparent">
								Co-living & Coworking
							</span>{" "}
							Space
						</p>
					</div>

					{/* Feature Pills with Glass Effect */}
					<div className="flex flex-wrap justify-center gap-4">
						{[
							{ icon: Users, text: "Live-in Hosts" },
							{ icon: Wifi, text: "High-Speed WiFi" },
							{ icon: Waves, text: "Island Network" },
						].map((feature, index) => (
							<div
								key={index}
								className="flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-6 py-3 text-white/90 hover:bg-white/20 transition-all"
							>
								<feature.icon className="w-5 h-5" />
								<span className="font-medium">{feature.text}</span>
							</div>
						))}
					</div>

					{/* CTA Buttons with Modern Design */}
					<div className="flex flex-col sm:flex-row gap-6 justify-center pt-8">
						<a
							href="https://wa.me/639083339477"
							target="_blank"
							rel="noopener noreferrer"
							className="group relative px-8 py-4 rounded-full overflow-hidden bg-gradient-to-r from-blue-500 via-cyan-400 to-green-400 hover:scale-105 transition-all duration-300"
						>
							<div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-200" />
							<span className="relative flex items-center justify-center gap-2 text-white font-semibold text-lg">
								<Users className="w-5 h-5" />
								Join WhatsApp Group
							</span>
						</a>

						<a
							href="#rooms"
							className="group px-8 py-4 rounded-full font-semibold text-lg text-white border border-white/30 hover:bg-white/10 hover:scale-105 transition-all duration-300 flex items-center justify-center gap-2"
						>
							<Waves className="w-5 h-5 group-hover:animate-bounce" />
							View Rooms
						</a>
					</div>

					{/* Stats with Modern Glass Cards */}
					<div className="flex flex-wrap justify-center gap-8 pt-12">
						{[
							{ number: "From ₱25k", label: "Monthly Coliving" },
							{ number: "4.9★", label: "Guest Rating" },
							{ number: "70%", label: "Extend Stay" },
						].map((stat, index) => (
							<div
								key={index}
								className="bg-white/5 backdrop-blur-lg rounded-2xl px-8 py-4 hover:bg-white/10 transition-all"
							>
								<div className="text-3xl font-bold bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
									{stat.number}
								</div>
								<div className="text-sm text-white/70">{stat.label}</div>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Modernized Scroll Indicator */}
			<div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
				<div className="w-8 h-12 border-2 border-white/30 rounded-full flex justify-center hover:border-white/50 transition-colors">
					<div className="w-1.5 h-3 bg-white/50 rounded-full mt-2 animate-bounce" />
				</div>
			</div>
		</section>
	);
};

export default HeroSection;