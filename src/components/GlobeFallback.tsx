
import { motion } from "framer-motion";
import { Globe } from "lucide-react";

const GlobeFallback = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="w-full h-full flex flex-col items-center justify-center"
    >
      <div className="bg-gradient-to-r from-primary to-blue-500 p-6 rounded-full text-white mb-4">
        <Globe size={48} />
      </div>
      <h3 className="text-xl font-semibold mb-2">Global Impact Network</h3>
      <p className="text-muted-foreground text-center max-w-xs">
        Connecting communities across the world to create positive change
      </p>
      <div className="mt-6 grid grid-cols-2 gap-4">
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
          <p className="text-xl font-bold text-primary">120+</p>
          <p className="text-xs text-muted-foreground">Communities</p>
        </div>
        <div className="bg-white dark:bg-slate-800 rounded-xl p-4 shadow-md border border-gray-100 dark:border-gray-700">
          <p className="text-xl font-bold text-blue-500">25K+</p>
          <p className="text-xs text-muted-foreground">Lives Impacted</p>
        </div>
      </div>
    </motion.div>
  );
};

export default GlobeFallback;
