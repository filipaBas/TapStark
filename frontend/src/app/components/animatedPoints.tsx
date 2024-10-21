import { motion } from "framer-motion";

interface AnimatedPointsProps {
    points: number;
}

const AnimatedPoints: React.FC<AnimatedPointsProps> = ({ points }) => {
    return (
        <motion.div
            className="absolute text-cyan-400 text-4xl font-bold"
            initial={{ opacity: 0, y: 80, x: 0 }}
            animate={{ opacity: 1, y: 20, x: -150 }}
            exit={{ opacity: 0, y: 360, x: -120 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
        >
            +{points}
        </motion.div>
    );
};

export default AnimatedPoints;
