
import { motion } from "framer-motion";
import Tilt from "react-tilt";
import { Calendar, MapPin, Users, ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";

export interface ProjectCardProps {
  title: string;
  category: string;
  description: string;
  imageUrl: string;
  location: string;
  date?: string;
  volunteersNeeded?: number;
  volunteersJoined?: number;
  raised?: number;
  goal?: number;
}

const ProjectCard = ({
  title,
  category,
  description,
  imageUrl,
  location,
  date,
  volunteersNeeded,
  volunteersJoined = 0,
  raised = 0,
  goal = 0,
}: ProjectCardProps) => {
  // Calculate progress percentage
  const progressPercentage = goal > 0 ? Math.min(Math.round((raised / goal) * 100), 100) : 0;
  
  // Format currency
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "NPR",
      maximumFractionDigits: 0,
    }).format(amount);
  };
  
  return (
    <Tilt
      className="Tilt"
      options={{
        max: 10,
        scale: 1.02,
        speed: 300,
        glare: true,
        "max-glare": 0.1,
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="rounded-xl overflow-hidden bg-card shadow-md h-full border"
      >
        <div className="relative h-48">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-full object-cover"
          />
          <Badge className="absolute top-3 left-3 bg-primary/90">
            {category}
          </Badge>
        </div>
        
        <div className="p-5 space-y-4">
          <h3 className="text-xl font-semibold line-clamp-1">{title}</h3>
          
          <p className="text-muted-foreground text-sm line-clamp-2">
            {description}
          </p>
          
          <div className="flex flex-col space-y-2">
            <div className="flex items-center text-muted-foreground text-sm gap-1">
              <MapPin size={14} />
              <span>{location}</span>
            </div>
            
            {date && (
              <div className="flex items-center text-muted-foreground text-sm gap-1">
                <Calendar size={14} />
                <span>{date}</span>
              </div>
            )}
            
            {volunteersNeeded && (
              <div className="flex items-center text-muted-foreground text-sm gap-1">
                <Users size={14} />
                <span>
                  {volunteersJoined} / {volunteersNeeded} volunteers
                </span>
              </div>
            )}
          </div>
          
          {goal > 0 && (
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>
                  Raised: <span className="font-medium">{formatCurrency(raised)}</span>
                </span>
                <span>
                  Goal: <span className="font-medium">{formatCurrency(goal)}</span>
                </span>
              </div>
              <Progress value={progressPercentage} className="h-2" />
            </div>
          )}
          
          <button className="w-full py-2 btn-gradient rounded-md flex items-center justify-center gap-1 mt-2">
            <span>View Details</span>
            <ArrowRight size={16} />
          </button>
        </div>
      </motion.div>
    </Tilt>
  );
};

export default ProjectCard;
