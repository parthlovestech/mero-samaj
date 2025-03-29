
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary/10 to-accent/5" />
        <motion.div
          animate={{ 
            y: [0, 15, 0],
            rotate: [0, 5, 0],
          }}
          transition={{ 
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute top-10 left-1/4 w-64 h-64 rounded-full bg-primary/10 filter blur-3xl"
        />
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            rotate: [0, -5, 0],
          }}
          transition={{ 
            duration: 12,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className="absolute bottom-10 right-1/4 w-80 h-80 rounded-full bg-accent/10 filter blur-3xl"
        />
      </div>
      
      <div className="max-w-5xl mx-auto glass-panel rounded-2xl p-12 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Join our community of changemakers and contribute to creating a better society. 
            Every action, big or small, can have a lasting impact.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" className="gap-2 text-md">
              <span>Join as Volunteer</span>
              <ArrowRight size={18} />
            </Button>
            <Button size="lg" variant="outline" className="gap-2 text-md">
              <span>Donate Now</span>
              <ArrowRight size={18} />
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
