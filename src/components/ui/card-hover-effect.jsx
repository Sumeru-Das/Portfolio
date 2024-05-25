import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import cn from "../../utils/cn";

const HoverEffect = ({ items, className }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  return (
    <div
      className={cn(
        "grid grid-cols-1 py-10 md:grid-cols-2 lg:grid-cols-3",
        className
      )}
    >
      {items.map((item, idx) => (
        <a
          href={item.link}
          key={item.link}
          className="group relative block h-full w-full p-2"
          onMouseEnter={() => setHoveredIndex(idx)}
          onMouseLeave={() => setHoveredIndex(null)}
        >
          <AnimatePresence>
            {hoveredIndex === idx && (
              <motion.span
                className="absolute inset-0 block h-full w-full rounded-3xl bg-white"
                layoutId="hoverBackground"
                initial={{ opacity: 0 }}
                animate={{
                  opacity: 1,
                  transition: { duration: 0.15 },
                }}
                exit={{
                  opacity: 0,
                  transition: { duration: 0.15, delay: 0.2 },
                }}
              />
            )}
          </AnimatePresence>
          <Card>
            <CardTitle>{item.title}</CardTitle>
            <CardDescription>{item.description}</CardDescription>
          </Card>
        </a>
      ))}
    </div>
  );
};

const Card = ({ className, children }) => {
  return (
    <div
      className={cn(
        "relative z-20 h-full w-full overflow-hidden rounded-2xl border-2 border-transparent bg-accent-400 p-4 group-hover:border-primary-200",
        className
      )}
    >
      <div className="relative z-50">
        <div className="p-4">{children}</div>
      </div>
    </div>
  );
};

const CardTitle = ({ className, children }) => {
  return (
    <h4
      className={cn(
        "mt-4 text-2xl font-bold tracking-wide text-zinc-100 underline hover:underline-offset-4",
        className
      )}
    >
      {children}
    </h4>
  );
};

const CardDescription = ({ className, children }) => {
  return (
    <p
      className={cn(
        "mt-8 text-lg leading-relaxed tracking-wide text-zinc-400",
        className
      )}
    >
      {children}
    </p>
  );
};

export { HoverEffect, Card, CardTitle, CardDescription };
