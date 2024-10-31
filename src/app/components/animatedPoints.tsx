import { motion } from "framer-motion";

interface AnimatedPointsProps {
    points: number;
}

const AnimatedPoints: React.FC<AnimatedPointsProps> = ({ points }) => {
    return (
        <motion.div
            className="absolute text-cyan-400 text-4xl font-bold"
            initial={{ opacity: 0, translateY: 80, translateX: 0 }}
            animate={{ opacity: 1, translateY: 20, translateX: -150 }}
            exit={{ opacity: 0, translateY: 360, translateX: -120 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            +{points}
        </motion.div>
    );
};

export default AnimatedPoints;
