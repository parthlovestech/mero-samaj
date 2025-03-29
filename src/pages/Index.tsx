
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import HowItWorks from "@/components/HowItWorks";
import StatsSection from "@/components/StatsSection";
import FeaturedProjects from "@/components/FeaturedProjects";
import TestimonialsSection from "@/components/TestimonialsSection";
import CallToAction from "@/components/CallToAction";
import IssueReportCard from "@/components/IssueReportCard";
import SafeGlobeVisualization from "@/components/SafeGlobeVisualization";
import HeroSection from "@/components/HeroSection";

const Index = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Navbar />
      
      <main>
        <HeroSection />
        
        <HowItWorks />
        
        <StatsSection />
        
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Report a Social Issue
              </h2>
              <p className="max-w-2xl mx-auto text-muted-foreground">
                Notice a problem in your community? Let us know and we'll work together to address it.
              </p>
            </motion.div>
            
            <IssueReportCard />
          </div>
        </section>
        
        <FeaturedProjects />
        
        <TestimonialsSection />
        
        <CallToAction />
      </main>
      
      <Footer />
    </motion.div>
  );
};

export default Index;
