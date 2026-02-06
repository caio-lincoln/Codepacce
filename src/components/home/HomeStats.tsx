import { motion } from 'framer-motion';
import { StatCard } from '../ui/StatCard';

const stats = [
  {
    value: 100,
    suffix: "+",
    label: "Soluções Entregues",
    decimals: 0
  },
  {
    value: 50,
    suffix: "+",
    label: "Parceiros de Negócio",
    decimals: 0
  },
  {
    value: 99.9,
    suffix: "%",
    label: "Uptime Garantido",
    decimals: 1
  },
  {
    value: 24,
    suffix: "/7",
    label: "Suporte Especializado",
    decimals: 0
  }
];

export function HomeStats() {
  return (
    <div className="relative z-30 -mt-24 pb-24 pointer-events-none">
      <div className="container mx-auto px-4">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="pointer-events-auto bg-white/5 backdrop-blur-xl border border-white/10 rounded-2xl p-8 md:p-12 shadow-2xl max-w-6xl mx-auto"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8">
            {stats.map((stat, index) => (
              <StatCard
                key={index}
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
                decimals={stat.decimals}
                type="hero"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}