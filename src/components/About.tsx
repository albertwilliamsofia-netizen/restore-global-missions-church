import { Card, CardContent } from "./ui/card";
import { Heart, Globe, Send } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Love & Compassion",
      description: "Demonstrating God's love through service and care for communities worldwide."
    },
    {
      icon: Globe,
      title: "Global Impact",
      description: "Reaching across cultures and nations to share hope and transformation."
    },
    {
      icon: Send,
      title: "Mission Focus",
      description: "Equipping and sending disciples to fulfill the Great Commission everywhere."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">About Our Church</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Restore Global Missions Church exists to spread the Gospel and restore hope to communities 
            around the world through strategic missions, local outreach, and discipleship.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <h3 className="text-2xl mb-6">Our Mission</h3>
            <p className="text-muted-foreground mb-6">
              Our mission is to restore broken communities, both locally and globally, through the 
              transformative power of the Gospel. We partner with churches and organizations worldwide 
              to provide clean water, education, healthcare, and spiritual guidance.
            </p>
            <p className="text-muted-foreground">
              Whether you're called to go, send, or support missions work, you'll find your place 
              in God's global plan at Restore Global Missions Church.
            </p>
          </div>
          <div className="rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1733809697694-52c0c58ab888?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtaXNzaW9ucyUyMHZvbHVudGVlciUyMHdvcmt8ZW58MXx8fHwxNzU4ODc3NTgwfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Missions volunteer work"
              className="w-full h-64 object-cover"
            />
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-8">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4">
                  <value.icon className="w-8 h-8 text-primary" />
                </div>
                <h4 className="text-xl mb-4">{value.title}</h4>
                <p className="text-muted-foreground">{value.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}