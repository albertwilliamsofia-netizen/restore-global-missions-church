import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function Contact() {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Address",
      details: ["123 Faith Street", "Hometown, ST 12345"]
    },
    {
      icon: Phone,
      title: "Phone",
      details: ["(555) 123-4567", "Office Hours: Mon-Fri 9AM-5PM"]
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@gracecommunitychurch.org", "pastor@gracecommunitychurch.org"]
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: ["Monday - Friday: 9:00 AM - 5:00 PM", "Saturday - Sunday: By Appointment"]
    }
  ];

  return (
    <section id="contact" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl mb-6">Get In Touch</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We'd love to hear from you! Whether you have questions about our services, 
            want to get involved, or need prayer, don't hesitate to reach out.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div>
            <h3 className="text-2xl mb-8">Contact Information</h3>
            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              {contactInfo.map((info, index) => (
                <Card key={index}>
                  <CardHeader className="pb-3">
                    <div className="flex items-center space-x-3">
                      <div className="flex items-center justify-center w-10 h-10 bg-primary/10 rounded-full">
                        <info.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{info.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    {info.details.map((detail, detailIndex) => (
                      <p key={detailIndex} className="text-muted-foreground text-sm">
                        {detail}
                      </p>
                    ))}
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Map Placeholder */}
            <div className="bg-gray-200 rounded-lg h-64 flex items-center justify-center">
              <div className="text-center text-muted-foreground">
                <MapPin className="w-12 h-12 mx-auto mb-2" />
                <p>Interactive Map</p>
                <p className="text-sm">123 Faith Street, Hometown, ST 12345</p>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form className="space-y-4">
                  <div className="grid sm:grid-cols-2 gap-4">
                    <div>
                      <label htmlFor="firstName" className="block mb-2">First Name</label>
                      <Input id="firstName" placeholder="Enter your first name" />
                    </div>
                    <div>
                      <label htmlFor="lastName" className="block mb-2">Last Name</label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <Input id="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block mb-2">Phone (Optional)</label>
                    <Input id="phone" type="tel" placeholder="Enter your phone number" />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2">Subject</label>
                    <Input id="subject" placeholder="What can we help you with?" />
                  </div>
                  <div>
                    <label htmlFor="message" className="block mb-2">Message</label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us how we can help or pray for you..."
                      className="min-h-32"
                    />
                  </div>
                  <Button type="submit" className="w-full">Send Message</Button>
                </form>
              </CardContent>
            </Card>

            <div className="mt-6 p-4 bg-primary/5 rounded-lg">
              <h4 className="mb-2">Need Prayer?</h4>
              <p className="text-sm text-muted-foreground">
                Our pastoral team is here to pray with you. All prayer requests are kept confidential. 
                You can submit them through this form or call our prayer line at (555) 123-PRAY.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}