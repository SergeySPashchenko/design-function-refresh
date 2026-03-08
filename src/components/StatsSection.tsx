import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Cell, Tooltip } from "recharts";

const stats = [
  { label: "Purity", value: 99.7, suffix: "%", color: "hsl(152, 45%, 28%)" },
  { label: "Bioavailability", value: 94, suffix: "%", color: "hsl(152, 35%, 40%)" },
  { label: "Customer Satisfaction", value: 98, suffix: "%", color: "hsl(152, 45%, 28%)" },
  { label: "Third-Party Tested", value: 100, suffix: "%", color: "hsl(152, 35%, 40%)" },
];

const researchData = [
  { name: "2020", studies: 12, products: 8 },
  { name: "2021", studies: 18, products: 11 },
  { name: "2022", studies: 24, products: 15 },
  { name: "2023", studies: 31, products: 19 },
  { name: "2024", studies: 42, products: 24 },
  { name: "2025", studies: 56, products: 30 },
];

function CountUp({ target, suffix = "", duration = 2000 }: { target: number; suffix?: string; duration?: number }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;
    let start = 0;
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * target;
      setCount(current);
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, target, duration]);

  return (
    <span ref={ref}>
      {target % 1 !== 0 ? count.toFixed(1) : Math.round(count)}
      {suffix}
    </span>
  );
}

const CustomTooltip = ({ active, payload, label }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-card border border-border rounded-lg px-4 py-3 shadow-lg">
        <p className="font-body text-xs text-muted-foreground mb-1">{label}</p>
        {payload.map((p: any) => (
          <p key={p.dataKey} className="font-body text-sm font-semibold text-foreground">
            {p.dataKey === "studies" ? "Studies" : "Products"}: {p.value}
          </p>
        ))}
      </div>
    );
  }
  return null;
};

const StatsSection = () => {
  const chartRef = useRef<HTMLDivElement>(null);
  const isChartInView = useInView(chartRef, { once: true, margin: "-50px" });

  return (
    <section className="py-24 md:py-32">
      {/* Animated counters */}
      <div className="bg-primary py-16 mb-20">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary-foreground">
                  <CountUp target={stat.value} suffix={stat.suffix} />
                </p>
                <p className="font-body text-xs tracking-[0.15em] uppercase text-primary-foreground/70 mt-2">
                  {stat.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* Research growth chart */}
      <div className="container mx-auto px-6 max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="font-body text-sm tracking-[0.2em] uppercase text-primary font-semibold mb-3">
            Driven by Data
          </p>
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">
            Our Research Growth
          </h2>
          <p className="font-body text-muted-foreground mt-4 max-w-lg mx-auto">
            Year over year, we're expanding our portfolio of clinically backed formulations.
          </p>
        </motion.div>

        <motion.div
          ref={chartRef}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="bg-card rounded-2xl border border-border p-6 md:p-8"
        >
          <div className="flex items-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-primary" />
              <span className="font-body text-xs text-muted-foreground">Clinical Studies</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 rounded-sm bg-accent" />
              <span className="font-body text-xs text-muted-foreground">Products Launched</span>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={280}>
            <BarChart data={researchData} barGap={4}>
              <XAxis
                dataKey="name"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "hsl(var(--muted-foreground))" }}
              />
              <Tooltip content={<CustomTooltip />} cursor={{ fill: "hsl(var(--muted) / 0.5)" }} />
              <Bar dataKey="studies" radius={[4, 4, 0, 0]} fill="hsl(var(--primary))" />
              <Bar dataKey="products" radius={[4, 4, 0, 0]} fill="hsl(var(--accent))" />
            </BarChart>
          </ResponsiveContainer>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsSection;
