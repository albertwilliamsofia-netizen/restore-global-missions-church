import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Calendar, MapPin, Clock } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

export function Events() {
  const events = [
    {
      title: "Global Missions Conference",
      date: "November 15-17, 2024",
      time: "All Day",
      location: "Main Sanctuary",
      description: "Three days of inspiring speakers, missionary testimonies, and opportunities to get involved in global missions."
    },
    {
      title: "Water Well Fundraiser",
      date: "December 8, 2024",
      time: "6:00 PM - 9:00 PM",
      location: "Fellowship Hall",
      description: "Join us for an evening of fellowship while raising funds to provide clean water to communities in need."
    },
    {
      title: "Short-Term Mission Trip to Guatemala",
      date: "January 20-27, 2025",
      time: "One Week",
      location: "Guatemala",
      description: "Experience missions firsthand by joining our team to build homes and share the Gospel in rural Guatemala."
    },
    {
      title: "Prayer for the Nations",
      date: "Last Friday of Each Month",
      time: "7:00 PM - 8:30 PM",
      location: "Prayer Room",
      description: "Monthly gathering to pray for unreached people groups and our missionary partners worldwide."
    }
  ];

  return (
    <section id="events" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">Upcoming Events</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Stay connected with our church community through special events, outreach programs, 
            and fellowship opportunities throughout the year.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="rounded-lg overflow-hidden">
            <ImageWithFallback
              src="https://images.unsplash.com/photo-1753014871672-b23b1335fec7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaHVyY2glMjBjb21tdW5pdHklMjBnYXRoZXJpbmd8ZW58MXx8fHwxNzU4NzY3Mzc3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
              alt="Church community gathering"
              className="w-full h-64 object-cover"
            />
          </div>
          <div>
            <h3 className="text-2xl mb-6">Join Our Community</h3>
            <p className="text-muted-foreground mb-6">
              Our events focus on mobilizing the church for global missions, supporting our missionary 
              partners, and providing opportunities for hands-on ministry both locally and internationally.
            </p>
            <Button>View All Events</Button>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-6">
          {events.map((event, index) => (
            <Card key={index} className="h-full">
              <CardHeader>
                <CardTitle className="text-xl">{event.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-3 mb-4">
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4 mr-3" />
                    {event.date}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-3" />
                    {event.time}
                  </div>
                  <div className="flex items-center text-sm text-muted-foreground">
                    <MapPin className="w-4 h-4 mr-3" />
                    {event.location}
                  </div>
                </div>
                <p className="text-muted-foreground mb-4">{event.description}</p>
                <Button variant="outline" size="sm">Learn More</Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Want to stay updated on all our events and announcements?
          </p>
          <Button>Subscribe to Our Newsletter</Button>
        </div>
      </div>
    </section>
  );
}