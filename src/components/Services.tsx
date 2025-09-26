import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Clock, Users, Music, Globe } from "lucide-react";

export function Services() {
  const services = [
    {
      title: "Sunday Worship",
      time: "9:00 AM & 11:00 AM",
      description: "Join us for inspiring worship, missions-focused teaching, and prayers for global church planting.",
      icon: Music,
      features: ["Live Worship", "Global Prayer", "Missions Focus"]
    },
    {
      title: "Wednesday Bible Study",
      time: "7:00 PM",
      description: "Study God's word with a focus on missions, evangelism, and global church planting.",
      icon: Users,
      features: ["Missions Study", "Prayer for Nations", "Discipleship"]
    },
    {
      title: "Missions Training",
      time: "Saturday 10:00 AM",
      description: "Equipping believers for effective missions work both locally and internationally.",
      icon: Globe,
      features: ["Cross-cultural Training", "Evangelism", "Service Projects"]
    }
  ];

  return (
    <section id="services" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">Service Times & Programs</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We offer various opportunities throughout the week for worship, learning, and fellowship. 
            All are welcome regardless of where you are in your faith journey.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {services.map((service, index) => (
            <Card key={index} className="h-full">
              <CardHeader className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 mx-auto">
                  <service.icon className="w-8 h-8 text-primary" />
                </div>
                <CardTitle className="text-xl">{service.title}</CardTitle>
                <div className="flex items-center justify-center text-primary">
                  <Clock className="w-4 h-4 mr-2" />
                  <span>{service.time}</span>
                </div>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="bg-primary/5 rounded-lg p-8 text-center">
          <h3 className="text-2xl mb-4">First Time Visitor?</h3>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            We'd love to meet you! Come as you are - no dress code required. 
            We have greeters at the door to help you feel welcome and answer any questions.
          </p>
          <div className="grid md:grid-cols-3 gap-6 text-sm">
            <div>
              <h4 className="mb-2">What to Expect</h4>
              <p className="text-muted-foreground">Friendly atmosphere, inspiring music, and practical teaching</p>
            </div>
            <div>
              <h4 className="mb-2">Childcare</h4>
              <p className="text-muted-foreground">Safe, fun programs for infants through 5th grade</p>
            </div>
            <div>
              <h4 className="mb-2">Parking</h4>
              <p className="text-muted-foreground">Free parking available with accessible spaces</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}