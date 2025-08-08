import { motion } from "framer-motion";

interface SectionTitleProps {
    section: string;
    sectionClassname?: string;
    title: string;
    titleClassname?: string;
    subtitle: string;
    subtitleClassname?: string;
    className?: string;
}


const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: (delay = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay,
            type: "spring",
            stiffness: 60,
            damping: 18,
        },
    }),
};

const SectionTitle = ({ title, subtitle, className = "", section, titleClassname, subtitleClassname, sectionClassname }: SectionTitleProps) => {
    return (
        <motion.div
            className={`relative space-y-6 w-full flex flex-col text-center items-center justify-center ${className}`}
            variants={fadeInUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
        >
            {/* Classic Professional Header */}
            <div className="relative mx-auto">
                {/* Top border line */}
                <div className="w-24 h-[1px] mb-3 mx-auto bg-slate-300"></div>

                {/* Section Label */}
                <div className="mb-4">
                    <span className={`text-[8px] 2xl:text-xs font-montserrat uppercase font-medium text-slate-500 uppercase tracking-[0.2em] letterspacing-wide ${sectionClassname}`}>
                        {section}
                    </span>
                </div>

                {/* Main Title */}
                <div className="relative mb-3">
                    <h1 className={`font-montserrat uppercase font-bold text-xl md:text-4xl lg:text-xl xl:text-2xl 2xl:text-4xl leading-tight text-slate-900 tracking-tight ${titleClassname}`}>
                        {title}
                    </h1>

                    {/* Classic underline */}
                    <div className="mt-3 flex items-center justify-center gap-3">
                        <div className="w-16 h-[2px] bg-[#41a7ad]"></div>
                        <div className="w-8 h-[1px] bg-slate-300"></div>
                    </div>
                </div>
            </div>

            {/* Professional Subtitle */}
            {subtitle && (
                <div className="relative max-w-3xl">
                    <p className={`text-sm sm:text-base md:text-lg lg:text-xs xl:text-sm 2xl:text-lg text-slate-600 font-poppins leading-relaxed font-light tracking-wide ${subtitleClassname}`}>
                        {subtitle}
                    </p>
                </div>
            )}

            {/* Bottom accent line */}
            <div className="pt-2">
                <div className="w-12 h-[1px] bg-slate-200"></div>
            </div>
        </motion.div>
    );
};

export default SectionTitle;