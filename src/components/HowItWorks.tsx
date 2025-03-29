
import { motion } from "framer-motion";
import { Flag, Search, Users, Heart } from "lucide-react";

const steps = [
  {
    title: "Report Issues",
    description: "Report social issues in your community with photos and location data.",
    icon: Flag,
    color: "bg-blue-100 dark:bg-blue-900/30",
    iconColor: "text-blue-600 dark:text-blue-400",
  },
  {
    title: "Find Projects",
    description: "Discover active projects and initiatives that need your support.",
    icon: Search,
    color: "bg-purple-100 dark:bg-purple-900/30",
    iconColor: "text-purple-600 dark:text-purple-400",
  },
  {
    title: "Volunteer",
    description: "Sign up to volunteer for causes that match your skills and interests.",
    icon: Users,
    color: "bg-green-100 dark:bg-green-900/30",
    iconColor: "text-green-600 dark:text-green-400",
  },
  {
    title: "Donate",
    description: "Contribute resources, funds, or supplies to support community needs.",
    icon: Heart,
    color: "bg-red-100 dark:bg-red-900/30",
    iconColor: "text-red-600 dark:text-red-400", 
  },
];

const HowItWorks = () => {
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">How It Works</h2>
          <p className="max-w-2xl mx-auto text-muted-foreground">
            Mero Samaj makes it easy to contribute to positive social change
            through a simple and effective process.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex flex-col items-center text-center p-6 rounded-xl bg-card shadow-sm border"
            >
              <div className={`${step.color} w-16 h-16 rounded-full flex items-center justify-center mb-4`}>
                <step.icon className={`${step.iconColor}`} size={28} />
              </div>
              <h3 className="text-xl font-semibold mb-2">{step.title}</h3>
              <p className="text-muted-foreground">{step.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
