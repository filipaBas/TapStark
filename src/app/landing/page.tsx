import Image from 'next/image'
import React from 'react'
import Link from 'next/link'
import { MousePointerClick, Wallet, Trophy, Rocket, ArrowRight } from 'lucide-react'
import { StatCard } from '../components/statCard'

export default function LandingPage() {
    return (
        <div className="min-h-screen min-w-96 bg-gradient-to-b from-gray-900 to-gray-950">

            <div className="container mx-auto p-4">
                <nav className="flex justify-between items-center mb-16">
                    <div className="flex items-center gap-2">
                        <Image
                            src="/images/star.png"
                            alt="TapStark Logo"
                            width={40}
                            height={40}
                            className="mr-1"
                        />
                        <h1 className="text-3xl font-bold text-white">TapStark</h1>
                    </div>
                    <div className="flex gap-4">
                        <Link
                            href="/game"
                            className="px-6 py-2 rounded-md bg-cyan-600 hover:bg-cyan-500 hover:glow text-white transition-all duration-300 uppercase font-bold"
                        >
                            Play Now
                        </Link>
                    </div>
                </nav>

                <div className="flex flex-col md:flex-row items-center justify-between px-4">
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="inline-block px-4 py-2 bg-cyan-600/20 border-cyan-700 border rounded-md text-cyan-400 mb-4 font-semibold">
                            🎮 Play-to-Earn Game on Starknet
                        </div>
                        <h2 className="text-5xl font-bold text-white uppercase mb-6">
                            Tap to <span className="text-cyan-500">Conquer</span> on Starknet
                        </h2>
                        <p className="text-gray-300 text-xl mb-8">
                            Join the most engaging game on Starknet. <br />
                            Earn points, compete for exclusive rewards,
                            and contribute to the network&#39;s growth with every click.
                        </p>
                        <div className="flex gap-4">
                            <Link
                                href="/game"
                                className="flex items-center gap-2 px-8 py-3 rounded-md bg-cyan-600 hover:bg-cyan-500 text-white font-semibold transition-all duration-300"
                            >
                                Start Playing
                                <ArrowRight className="w-5 h-5" />
                            </Link>
                            <button className="px-8 py-3 rounded-md border border-cyan-700 text-white hover:bg-white/5 transition-all duration-300">
                                Learn More
                            </button>
                        </div>
                    </div>
                    <div className="md:w-1/2 mt-10 flex justify-center relative">
                        <div className="hover:scale-125 duration-700 cursor-pointer ">
                            <Image
                                src="/images/star.png"
                                alt="TapStark Game"
                                width={300}
                                height={300}
                                className="relative w-44 h-44 sm:w-80 sm:h-80 md:w-80 md:h-80"
                            />
                        </div>
                    </div>

                </div>
            </div>



            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <span className="text-cyan-500 font-semibold mb-4 block">GETTING STARTED</span>
                    <h3 className="text-4xl font-bold text-white mb-4">
                        How TapStark Works
                    </h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Join the game in three simple steps. <br />
                        Follow the sequence below to start earning rewards
                        while contributing to Starknet&#39;s growth.
                    </p>
                </div>

                <div className="relative">

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
                        <div className="relative">
                            <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-md bg-cyan-500 text-white flex items-center justify-center font-bold">
                                    1
                                </div>

                                <h4 className="text-xl font-semibold text-white m-2 text-center flex justify-center gap-2"><Wallet className="w-8 h-8 text-cyan-500 " />Connect Wallet</h4>
                                <ul className="text-gray-400 space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        Install Braavos wallet
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        Connect to Starknet mainnet
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        One-click connection to start
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-md bg-cyan-500 text-white flex items-center justify-center font-bold">
                                    2
                                </div>

                                <h4 className="text-xl font-semibold text-white m-2 text-center flex justify-center gap-2"><MousePointerClick className="w-8 h-8 text-cyan-500 " />Click & Earn</h4>
                                <ul className="text-gray-400 space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        Click to bet and generate points
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        Watch your score multiply
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        Climb the global leaderboard
                                    </li>
                                </ul>
                            </div>
                        </div>

                        <div className="relative">
                            <div className="p-8 rounded-2xl bg-gray-900/50 border border-gray-800 hover:border-cyan-500 transition-all duration-300 group">
                                <div className="absolute -top-5 left-1/2 transform -translate-x-1/2 w-10 h-10 rounded-md bg-cyan-500 text-white flex items-center justify-center font-bold">
                                    3
                                </div>

                                <h4 className="text-xl font-semibold text-white m-2 text-center flex justify-center gap-2"><Trophy className="w-8 h-8 text-cyan-500 " />Win Rewards</h4>

                                <ul className="text-gray-400 space-y-2">
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        Earn exclusive rewards
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        Compete in daily contests
                                    </li>
                                    <li className="flex items-center">
                                        <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mr-2" />
                                        Win special prizes
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div className="text-center mt-12">
                        <Link
                            href="/game"
                            className="inline-flex items-center gap-2 px-8 py-3 rounded-md bg-cyan-600 hover:bg-cyan-400 text-white font-semibold transition-all duration-300"
                        >
                            Start Playing Now
                            <ArrowRight className="w-5 h-5" />
                        </Link>
                    </div>
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <StatCard number="1M+" label="Total Clicks" />
                    <StatCard number="10K+" label="Active Players" />
                    <StatCard number="1000+" label="Daily Winners" />
                </div>
            </div>

            <div className="container mx-auto px-4 py-16">
                <div className="bg-cyan-950/50 rounded-2xl p-8 border border-cyan-900/50">
                    <div className="flex flex-col md:flex-row items-center justify-between">
                        <div className="md:w-1/2 mb-8 md:mb-0">
                            <div className="flex items-center gap-2 mb-4">
                                <Rocket className="w-6 h-6 text-cyan-500" />
                                <span className="text-cyan-500 font-bold">Network Impact</span>
                            </div>
                            <h3 className="text-3xl font-bold text-white mb-6">
                                Boost Starknet Network
                            </h3>
                            <p className="text-gray-300">
                                Every click contributes to increasing transactions per second on the
                                Starknet network.<br /><br />
                                <strong className='text-cyan-400 hover:glow font-bold'>Have fun while being part of this evolution!</strong>
                            </p>
                        </div>
                        <div className="flex items-center gap-8">
                            <div className="text-center">
                                <p className="text-white text-4xl font-bold mb-2">+1000</p>
                                <p className="text-gray-300">Network TPS</p>
                            </div>
                            <div className="text-center">
                                <p className="text-white text-4xl font-bold mb-2">24/7</p>
                                <p className="text-gray-300">Uptime</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            <div className="container mx-auto px-4 py-24">
                <div className="text-center mb-16">
                    <span className="text-cyan-500 font-semibold mb-4 block">OUR TEAM</span>
                    <h3 className="text-4xl font-bold text-white mb-4">Meet the Developers</h3>
                    <p className="text-gray-400 max-w-2xl mx-auto">
                        Our dedicated team of developers working to create the best gaming experience on Starknet.
                    </p>
                </div>

                <div className="flex flex-col md:flex-row justify-center gap-8">
                    {/* Membro 1 */}
                    <div className="group max-w-sm mx-auto"> {/* Ajuste max-w-sm para menor largura */}
                        <div className="relative overflow-hidden rounded-2xl mb-2"> {/* Reduzido mb-2 */}
                            <Image
                                src="/images/diana-profile.png"
                                alt="Diana Bastos"
                                width={200}  // Dimensões reduzidas
                                height={200} // Dimensões reduzidas
                                className="w-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4"> {/* Ajuste de p-6 para p-4 */}
                                <div className="flex gap-4 justify-center mb-2"> {/* Ajuste mb-4 para mb-2 */}
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                                        <Image src="/images/github-logo.svg" alt="GitHub" width={20} height={20} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                                        <Image src="/images/linkedin-logo.svg" alt="LinkedIn" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-white mb-1">Diana Bastos</h4> {/* Ajuste mb-2 para mb-1 */}
                            <p className="text-cyan-500 font-medium mb-1">Developer</p> {/* Ajuste mb-2 para mb-1 */}
                        </div>
                    </div>

                    {/* Membro 2 */}
                    <div className="group max-w-sm mx-auto"> {/* Ajuste max-w-sm para menor largura */}
                        <div className="relative overflow-hidden rounded-2xl mb-2"> {/* Reduzido mb-2 */}
                            <Image
                                src="/images/filipa-profile.png"
                                alt="Filipa Bastos"
                                width={200}  // Dimensões reduzidas
                                height={200} // Dimensões reduzidas
                                className="w-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4"> {/* Ajuste de p-6 para p-4 */}
                                <div className="flex gap-4 justify-center mb-2"> {/* Ajuste mb-4 para mb-2 */}
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                                        <Image src="/images/github-logo.svg" alt="GitHub" width={20} height={20} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                                        <Image src="/images/linkedin-logo.svg" alt="LinkedIn" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-white mb-1">Filipa Bastos</h4> {/* Ajuste mb-2 para mb-1 */}
                            <p className="text-cyan-500 font-medium mb-1">Developer</p> {/* Ajuste mb-2 para mb-1 */}
                        </div>
                    </div>

                    {/* Membro 3 */}
                    <div className="group max-w-sm mx-auto"> {/* Ajuste max-w-sm para menor largura */}
                        <div className="relative overflow-hidden rounded-2xl mb-2"> {/* Reduzido mb-2 */}
                            <Image
                                src="/images/gabriel-profile.png"
                                alt="Gabriel Thome"
                                width={200}  // Dimensões reduzidas
                                height={200} // Dimensões reduzidas
                                className="w-full object-cover aspect-square group-hover:scale-105 transition-transform duration-300"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-4"> {/* Ajuste de p-6 para p-4 */}
                                <div className="flex gap-4 justify-center mb-2"> {/* Ajuste mb-4 para mb-2 */}
                                    <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                                        <Image src="/images/github-logo.svg" alt="GitHub" width={20} height={20} />
                                    </a>
                                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer"
                                        className="w-10 h-10 rounded-full bg-white/10 hover:bg-cyan-500 flex items-center justify-center backdrop-blur-sm transition-all duration-300">
                                        <Image src="/images/linkedin-logo.svg" alt="LinkedIn" width={20} height={20} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="text-center">
                            <h4 className="text-xl font-semibold text-white mb-1">Gabriel Thome</h4> {/* Ajuste mb-2 para mb-1 */}
                            <p className="text-cyan-500 font-medium mb-1">Developer</p> {/* Ajuste mb-2 para mb-1 */}
                        </div>
                    </div>
                </div>
            </div>



            <div className="container mx-auto px-4 py-24">
                <div className="bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-2xl p-12 relative overflow-hidden">
                    <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm"></div>
                    <div className="relative z-10 text-center">
                        <h3 className="text-4xl font-bold text-white mb-6">
                            Join Our Community
                        </h3>
                        <p className="text-gray-300 mb-8 max-w-2xl mx-auto">
                            Be part of the fastest-growing gaming community on Starknet. <br />
                            Connect with other players, share strategies, and stay updated on the latest developments.
                        </p>
                        <div className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6">
                            <a href="https://discord.gg" target="_blank" rel="noopener noreferrer"
                                className="px-8 py-3 min-w-[160px] whitespace-nowrap rounded-md bg-cyan-600 hover:bg-cyan-600/20 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                                <Image src="/images/discord-logo.svg" alt="Discord" width={24} height={24} />
                                Join Discord
                            </a>
                            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                className="px-8 py-3 min-w-[160px] whitespace-nowrap rounded-md bg-cyan-600 hover:bg-cyan-600/20 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                                <Image src="/images/twitter-logo.svg" alt="Twitter" width={24} height={24} />
                                Follow Us
                            </a>
                            <a href="https://telegram.com" target="_blank" rel="noopener noreferrer"
                                className="px-8 py-3 min-w-[160px] whitespace-nowrap rounded-md bg-cyan-600 hover:bg-cyan-600/20 text-white font-semibold transition-all duration-300 flex items-center justify-center gap-2">
                                <Image src="/images/telegram-logo.svg" alt="Telegram" width={24} height={24} />
                                Telegram Group
                            </a>
                        </div>
                    </div>
                </div>
            </div>


            <footer className="bg-gray-900/50 border-t border-gray-800">
                <div className="container mx-auto px-4 py-12">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
                        <div className="col-span-1 md:col-span-2">
                            <div className="flex items-center gap-2 mb-4">
                                <Image
                                    src="/images/star.png"
                                    alt="TapStark Logo"
                                    width={40}
                                    height={40}
                                />
                                <span className="text-2xl font-bold text-white">TapStark</span>
                            </div>
                            <p className="text-gray-400 mb-6 max-w-md">
                                The most engaging play-to-earn game on Starknet. <br />
                                Click, compete, and earn rewards
                                while contributing to network growth.
                            </p>
                            <div className="flex gap-4">
                                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-md bg-gray-300 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300">
                                    <Image src="/images/twitter-logo.svg" alt="Twitter" width={20} height={20} />
                                </a>
                                <a href="https://discord.gg" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-md bg-gray-300 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300">
                                    <Image src="/images/discord-logo.svg" alt="Discord" width={20} height={20} />
                                </a>
                                <a href="https://github.com" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-md bg-gray-300 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300">
                                    <Image src="/images/github-logo.svg" alt="GitHub" width={20} height={20} />
                                </a>
                                <a href="https://telegram.com" target="_blank" rel="noopener noreferrer"
                                    className="w-10 h-10 rounded-md bg-gray-300 hover:bg-cyan-500 flex items-center justify-center transition-all duration-300">
                                    <Image src="/images/telegram-logo.svg" alt="GitHub" width={20} height={20} />
                                </a>
                            </div>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Quick Links</h4>
                            <ul className="space-y-2 font-semibold">
                                <li><Link href="/game" className="text-gray-400 hover:text-cyan-500 transition-colors">Play Game</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Leaderboard</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Rewards</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Documentation</Link></li>
                            </ul>
                        </div>

                        <div>
                            <h4 className="text-white font-bold mb-4">Resources</h4>
                            <ul className="space-y-2 font-semibold">
                                <li><Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Help Center</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Terms of Service</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Privacy Policy</Link></li>
                                <li><Link href="#" className="text-gray-400 hover:text-cyan-500 transition-colors">Contact Us</Link></li>
                            </ul>
                        </div>
                    </div>

                    <div className="pt-8 border-t border-gray-800">
                        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                            <p className="text-gray-400">
                                © 2024 TapStark. All rights reserved.
                            </p>
                            <div className="flex items-center gap-2">
                                <span className="flex items-center gap-2 text-gray-400">
                                    Built on
                                    <Image
                                        src="/images/starknet-linear-logo.png"
                                        alt="Starknet Logo"
                                        width={120}
                                        height={0}
                                    />
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </div>

    )
}

