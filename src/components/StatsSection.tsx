
import { motion } from "framer-motion";
import { Users, Heart, Award, MapPin } from "lucide-react";

const stats = [
  {
    value: "17,500+",
    label: "Volunteers",
    icon: Users,
    color: "from-blue-500 to-indigo-600",
  },
  {
    value: "350+",
    label: "Projects Completed",
    icon: Heart,
    color: "from-purple-500 to-pink-600",
  },
  {
    value: "25,800+",
    label: "Lives Impacted",
    icon: Award,
    color: "from-amber-500 to-red-600",
  },
  {
    value: "120+",
    label: "Communities Served",
    icon: MapPin,
    color: "from-emerald-500 to-teal-600",
  },
];

const StatsSection = () => {
  return (
    <section className="py-16 px-4">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, staggerChildren: 0.2 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="bg-white dark:bg-slate-800 rounded-xl p-6 shadow-md border border-gray-100 dark:border-gray-700"
            >
              <div className="flex items-center space-x-4">
                <div className={`bg-gradient-to-r ${stat.color} p-3 rounded-lg text-white`}>
                  <stat.icon size={24} />
                </div>
                <div>
                  <p className="text-2xl font-bold">{stat.value}</p>
                  <p className="text-muted-foreground text-sm">{stat.label}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
