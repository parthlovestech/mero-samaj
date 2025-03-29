
import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, Quote } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    name: "Asha Tamang",
    role: "Volunteer",
    image: "https://randomuser.me/api/portraits/women/32.jpg",
    quote:
      "Volunteering through Mero Samaj has been incredibly fulfilling. The platform made it easy to find opportunities that match my skills, and I've connected with amazing people while making a real difference in my community.",
  },
  {
    id: 2,
    name: "Rajesh Adhikari",
    role: "NGO Director",
    image: "https://randomuser.me/api/portraits/men/54.jpg",
    quote:
      "As an NGO, Mero Samaj has transformed how we manage projects and connect with volunteers. The analytics dashboard helps us track our impact, and the streamlined volunteer management system has saved us countless hours.",
  },
  {
    id: 3,
    name: "Sunita Gurung",
    role: "Community Member",
    image: "https://randomuser.me/api/portraits/women/67.jpg",
    quote:
      "I reported a serious issue in my neighborhood using Mero Samaj, and was amazed at how quickly action was taken. The ability to track progress and see updates kept me informed throughout the resolution process.",
  },
  {
    id: 4,
    name: "Binod Sharma",
    role: "Regular Donor",
    image: "https://randomuser.me/api/portraits/men/42.jpg",
    quote:
      "The transparency of Mero Samaj gives me confidence that my donations are making an impact. I can see exactly where my contributions go and receive updates on the projects I support.",
  },
];

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Community Voices
          </h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Hear from the people who are part of our journey in creating positive
            social impact
          </p>
        </motion.div>

        <div className="relative">
          <div className="overflow-hidden">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center"
            >
              <div className="flex justify-center">
                <div className="relative">
                  <div className="w-72 h-72 rounded-full overflow-hidden border-4 border-white shadow-xl">
                    <img
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 w-16 h-16 bg-primary rounded-full flex items-center justify-center text-white">
                    <Quote size={24} />
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-center lg:items-start">
                <blockquote className="text-xl italic mb-6 relative">
                  "{testimonials[currentIndex].quote}"
                </blockquote>
                <div className="flex flex-col items-center lg:items-start">
                  <h4 className="text-lg font-semibold">
                    {testimonials[currentIndex].name}
                  </h4>
                  <p className="text-muted-foreground">
                    {testimonials[currentIndex].role}
                  </p>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="flex justify-center mt-10 gap-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prev}
              className="rounded-full"
            >
              <ChevronLeft size={20} />
            </Button>
            <Button
              variant="outline"
              size="icon"
              onClick={next}
              className="rounded-full"
            >
              <ChevronRight size={20} />
            </Button>
          </div>

          <div className="flex justify-center mt-4 gap-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex
                    ? "bg-primary"
                    : "bg-gray-300 dark:bg-gray-600"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
