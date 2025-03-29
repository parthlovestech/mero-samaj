
import { motion } from "framer-motion";
import { ArrowRight, Users, Heart, Flag } from "lucide-react";
import { Button } from "@/components/ui/button";
import GlobeVisualization from "./GlobeVisualization";

const HeroSection = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="min-h-screen relative flex items-center pt-16 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-background pointer-events-none -z-10" />
      
      {/* Animated circles */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ duration: 2 }}
        className="absolute top-10 right-[10%] w-96 h-96 bg-primary/20 rounded-full filter blur-3xl pointer-events-none -z-10"
      />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ duration: 2, delay: 0.5 }}
        className="absolute bottom-10 left-[5%] w-72 h-72 bg-accent/20 rounded-full filter blur-3xl pointer-events-none -z-10"
      />
      
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial="hidden"
            animate="visible"
            transition={{ staggerChildren: 0.2, delayChildren: 0.3 }}
            className="flex flex-col gap-6 max-w-xl"
          >
            <motion.span
              variants={fadeIn}
              transition={{ duration: 0.5 }}
              className="text-primary font-semibold"
            >
              Together for positive change
            </motion.span>
            
            <motion.h1
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight"
            >
              Connecting <span className="text-gradient">communities</span> for social impact
            </motion.h1>
            
            <motion.p
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-muted-foreground text-lg"
            >
              Mero Samaj brings together citizens, NGOs, volunteers, and donors
              on a single platform to address critical societal issues and create
              lasting positive change.
            </motion.p>
            
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-wrap gap-4 mt-2"
            >
              <Button size="lg" className="gap-2 text-md px-6 py-6">
                <span>Get Started</span>
                <ArrowRight size={18} />
              </Button>
              <Button size="lg" variant="outline" className="gap-2 text-md px-6 py-6">
                <span>Learn More</span>
              </Button>
            </motion.div>
            
            <motion.div
              variants={fadeIn}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-wrap gap-8 mt-4"
            >
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Users className="text-primary" size={20} />
                </div>
                <span className="text-muted-foreground">Volunteer</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Heart className="text-primary" size={20} />
                </div>
                <span className="text-muted-foreground">Donate</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Flag className="text-primary" size={20} />
                </div>
                <span className="text-muted-foreground">Report Issues</span>
              </div>
            </motion.div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="relative flex justify-center items-center"
          >
            <div className="relative w-full h-[450px] md:h-[500px]">
              <GlobeVisualization className="w-full h-full scale-110" />
              
              {/* Floating cards */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="absolute top-1/4 left-0 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg"
                style={{ maxWidth: "140px" }}
              >
                <div className="flex items-center gap-2">
                  <Users size={14} className="text-primary" />
                  <span className="text-xs font-medium">New Volunteer</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Kathmandu joined the cause</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.3 }}
                className="absolute bottom-1/4 right-0 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg"
                style={{ maxWidth: "140px" }}
              >
                <div className="flex items-center gap-2">
                  <Heart size={14} className="text-red-500" />
                  <span className="text-xs font-medium">Donation</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">$1500 for food security</p>
              </motion.div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 1.6 }}
                className="absolute top-2/3 left-1/4 bg-white dark:bg-slate-800 p-3 rounded-lg shadow-lg"
                style={{ maxWidth: "140px" }}
              >
                <div className="flex items-center gap-2">
                  <Flag size={14} className="text-accent" />
                  <span className="text-xs font-medium">Issue Reported</span>
                </div>
                <p className="text-xs text-muted-foreground mt-1">Homeless shelter needed</p>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
