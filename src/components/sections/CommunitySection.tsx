import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Code, Camera, Palette, TrendingUp, MessageCircle, Calendar } from "lucide-react";
import communityImage from "@/assets/community-collab.jpg";

const CommunitySection = () => {
  const members = [
    {
      name: "Sarah Chen",
      role: "Full-Stack Developer",
      skills: ["React", "Node.js", "AWS"],
      avatar: "SC",
      project: "Building a surf forecast app",
      flag: "🇺🇸"
    },
    {
      name: "Miguel Rodriguez", 
      role: "UX Designer",
      skills: ["Figma", "Design Systems", "Research"],
      avatar: "MR",
      project: "Designing for sustainable tourism",
      flag: "🇪🇸"
    },
    {
      name: "Yuki Tanaka",
      role: "Digital Marketer",
      skills: ["SEO", "Content", "Analytics"],
      avatar: "YT", 
      project: "Marketing for eco-startups",
      flag: "🇯🇵"
    }
  ];

  const projects = [
    {
      title: "Siargao Island Guide App",
      participants: 4,
      skills: ["React Native", "Travel Tech"],
      status: "Launching Soon",
      icon: Code
    },
    {
      title: "Sustainable Tourism Documentary",
      participants: 6,
      skills: ["Video Production", "Environmental"],
      status: "In Production",
      icon: Camera
    },
    {
      title: "Local Artisan Marketplace",
      participants: 3,
      skills: ["E-commerce", "Local Business"],
      status: "MVP Ready",
      icon: Palette
    }
  ];

  return (
    <section id="community" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <Badge variant="outline" className="mb-4">
            Community First
          </Badge>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Connect, Create,{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Collaborate
            </span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join a thriving community of digital nomads building amazing projects while living the island life
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Community Image */}
          <div className="relative">
            <img
              src={communityImage}
              alt="Digital nomads collaborating"
              className="rounded-2xl shadow-xl w-full h-[400px] object-cover"
            />
            <div className="absolute -bottom-4 -right-4 bg-white rounded-lg p-4 shadow-lg">
              <div className="flex items-center space-x-2">
                <MessageCircle className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium">24/7 Community Chat</span>
              </div>
            </div>
          </div>

          {/* Community Stats & Features */}
          <div className="space-y-8">
            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                <TrendingUp className="w-8 h-8 text-primary mx-auto mb-2" />
                <div className="text-2xl font-bold">75%</div>
                <div className="text-sm text-muted-foreground">Launch Projects</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl shadow-sm">
                <Calendar className="w-8 h-8 text-accent mx-auto mb-2" />
                <div className="text-2xl font-bold">15+</div>
                <div className="text-sm text-muted-foreground">Events/Month</div>
              </div>
            </div>

            <div className="space-y-4">
              <h3 className="text-xl font-semibold">What makes our community special?</h3>
              <ul className="space-y-3 text-muted-foreground">
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Daily co-working sessions with skill sharing</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0" />
                  <span>Weekly project showcases and feedback sessions</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-secondary rounded-full mt-2 flex-shrink-0" />
                  <span>Organized surf sessions and island adventures</span>
                </li>
                <li className="flex items-start space-x-3">
                  <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0" />
                  <span>Mentorship programs with experienced entrepreneurs</span>
                </li>
              </ul>
            </div>

            <Button variant="tropical" size="lg" className="w-full">
              Join Our Community
            </Button>
          </div>
        </div>

        {/* Active Members */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold mb-8 text-center">Meet Our Current Members</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {members.map((member, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02]">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <Avatar className="w-12 h-12">
                      <AvatarFallback className="bg-gradient-to-br from-primary to-accent text-white">
                        {member.avatar}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center space-x-2">
                        <h4 className="font-semibold">{member.name}</h4>
                        <span className="text-lg">{member.flag}</span>
                      </div>
                      <p className="text-sm text-muted-foreground">{member.role}</p>
                    </div>
                  </div>
                  
                  <p className="text-sm mb-4 italic">"{member.project}"</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {member.skills.map((skill, skillIndex) => (
                      <Badge key={skillIndex} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Active Projects */}
        <div>
          <h3 className="text-2xl font-bold mb-8 text-center">Active Collaborative Projects</h3>
          <div className="grid md:grid-cols-3 gap-6">
            {projects.map((project, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4 mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center">
                      <project.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold mb-2">{project.title}</h4>
                      <Badge variant="outline" className="text-xs mb-3">
                        {project.status}
                      </Badge>
                    </div>
                  </div>
                  
                  <div className="space-y-3">
                    <div className="flex items-center text-sm text-muted-foreground">
                      <span>{project.participants} active participants</span>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {project.skills.map((skill, skillIndex) => (
                        <Badge key={skillIndex} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CommunitySection;