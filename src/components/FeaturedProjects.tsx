
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import ProjectCard from "./ProjectCard";

// Sample project data
const projects = [
  {
    id: 1,
    title: "Community Food Drive",
    category: "Food Security",
    description: "Help collect and distribute food to families in need in rural communities.",
    imageUrl: "https://images.unsplash.com/photo-1509099652299-30938b0aeb63?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    location: "Bhaktapur, Nepal",
    date: "Aug 15 - Aug 20, 2023",
    volunteersNeeded: 15,
    volunteersJoined: 7,
    raised: 35000,
    goal: 50000,
  },
  {
    id: 2,
    title: "Animal Shelter Support",
    category: "Animal Welfare",
    description: "Support the local animal shelter with resources, care, and potential adoption opportunities.",
    imageUrl: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    location: "Patan, Nepal",
    date: "Ongoing",
    volunteersNeeded: 8,
    volunteersJoined: 3,
    raised: 25000,
    goal: 40000,
  },
  {
    id: 3,
    title: "Winter Clothing Drive",
    category: "Homelessness",
    description: "Collect warm clothes and blankets for people experiencing homelessness during winter.",
    imageUrl: "https://images.unsplash.com/photo-1516923892237-6cfbb7714bb6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=700&q=80",
    location: "Kathmandu, Nepal",
    date: "Nov 1 - Dec 15, 2023",
    volunteersNeeded: 20,
    volunteersJoined: 12,
    raised: 60000,
    goal: 75000,
  },
];

const FeaturedProjects = () => {
  return (
    <section className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold">Featured Projects</h2>
            <p className="text-muted-foreground max-w-2xl mt-3">
              Join these active initiatives making a difference in communities around Nepal
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <Button variant="outline" className="gap-2">
              <span>View All Projects</span>
              <ArrowRight size={16} />
            </Button>
          </motion.div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <ProjectCard
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;
