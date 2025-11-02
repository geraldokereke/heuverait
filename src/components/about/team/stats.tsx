import { motion } from "framer-motion";

const stats = [
    {
        value: '10+',
        label: 'Successful Projects',
    },
    {
        value: '15+',
        label: 'Talented Developers',
    },
    {
        value: '30+',
        label: 'Satisfied Clients',
    },
    {
        value: '12+',
        label: 'Industries Covered'
    }
];


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

const Stats = () => {
    return (
        <div>
            {/* Stats Section */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-0 md:divide-x md:divide-gray-300">
                {stats.map((stat, index) => (
                    <motion.div
                        key={stat.label}
                        variants={fadeInUp}
                        custom={0.2 + index * 0.1}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        className="px-4 text-center cursor-pointer group transition-colors duration-300"
                    >
                        <h3 className="text-2xl xl:text-3xl 2xl:text-5xl font-montserrat font-medium text-black mb-2 group-hover:scale-105 transition-transform duration-300">
                            {stat.value}
                        </h3>
                        <p className="text-xs xl:text-sm 2xl:text-xl font-poppins font-medium text-gray-900 group-hover:text-[#41a7ad] transition-colors duration-300">
                            {stat.label}
                        </p>
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Stats;