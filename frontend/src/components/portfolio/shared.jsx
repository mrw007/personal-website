import { motion } from "framer-motion";

const fadeUp = {
    hidden: { opacity: 0, y: 24 },
    show: { opacity: 1, y: 0 },
};

export const SectionHeader = ({ index, label, title, kicker }) => {
    return (
        <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={fadeUp}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="mb-14 md:mb-20"
        >
            <div className="flex items-center gap-4 mb-6">
                <span className="overline text-rust">{index}</span>
                <span className="h-px w-12 bg-white/10" />
                <span className="overline">{label}</span>
            </div>
            <h2
                className="font-display text-4xl sm:text-5xl lg:text-6xl font-black tracking-[-0.03em] leading-[0.96] text-bone-50 max-w-4xl"
                data-testid={`section-title-${label.toLowerCase().replace(/\s+/g, "-")}`}
            >
                {title}
            </h2>
            {kicker && (
                <p className="mt-6 text-bone-300 font-light text-lg max-w-2xl leading-relaxed">
                    {kicker}
                </p>
            )}
        </motion.div>
    );
};

export const Reveal = ({ children, delay = 0, className = "" }) => (
    <motion.div
        initial={{ opacity: 0, y: 24 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{
            duration: 0.7,
            delay,
            ease: [0.16, 1, 0.3, 1],
        }}
        className={className}
    >
        {children}
    </motion.div>
);
