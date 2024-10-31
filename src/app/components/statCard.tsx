interface StatCardProps {
    number: string;
    label: string;
}

export const StatCard: React.FC<StatCardProps> = ({ number, label }) => (
    <div className="p-6 rounded-xl bg-gray-900/50 border border-cyan-800 text-center hover:border-cyan-400 ease-in duration-300">
        <p className="text-3xl font-bold text-white mb-1">{number}</p>
        <p className="text-gray-400">{label}</p>
    </div>
);