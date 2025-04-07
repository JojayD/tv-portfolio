"use client";
import { motion } from "framer-motion";
import TvScreen from "@/components/TvScreen";
import { useChannel } from "@/context/ChannelContext";
import Link from "next/link";

export default function Home() {
	const { currentChannel } = useChannel();

	return (
		<TvScreen
			isActive={true}
			channelNumber={currentChannel}
		>
			{/* Bouncing circle TV effect */}
			<div className='absolute inset-0 overflow-hidden'>
				<div
					className='absolute w-16 h-16 rounded-full bg-white/20 blur-md'
					style={{
						animation: "bouncingCircle 8s linear infinite",
					}}
				/>
			</div>
			<style jsx>{`
				@keyframes bouncingCircle {
					0% {
						top: 10%;
						left: 20%;
					}
					25% {
						top: 75%;
						left: 80%;
					}
					50% {
						top: 30%;
						left: 65%;
					}
					75% {
						top: 80%;
						left: 15%;
					}
					100% {
						top: 10%;
						left: 20%;
					}
				}
			`}</style>

			<div className='min-h-[50vh] flex flex-col items-center justify-center text-center p-4 text-white relative z-10'>
				<motion.h1
					className='text-4xl md:text-5xl font-bold mb-6 font-mono'
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.2 }}
				>
					The <span className='text-amber-400'>Joseph David</span> show
				</motion.h1>

				<motion.p
					className='text-lg mb-8 max-w-xl'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 0.4 }}
				>
					Use the remote control to navigate through different channels and explore
					my work.
				</motion.p>

				<motion.div
					className='grid grid-cols-2 md:grid-cols-3 gap-6 mt-8 w-full max-w-3xl items-center justify-items-center'
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.6 }}
				>
					{/* Channel buttons */}
					{[
						{ name: "About Me", path: "/about", color: "bg-blue-500", num: 2 },
						{ name: "Projects", path: "/projects", color: "bg-green-500", num: 3 },
						{ name: "Contact", path: "/contact", color: "bg-purple-500", num: 4 },
					].map((item) => (
						<Link
							href={item.path}
							key={item.path}
						>
							<motion.div
								className={`${item.color} rounded-lg p-4 text-center cursor-pointer hover:scale-105 transition-transform`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<div className='text-xs mb-1 font-mono'>CHANNEL {item.num}</div>
								<div className='font-medium'>{item.name}</div>
							</motion.div>
						</Link>
					))}
				</motion.div>

				<motion.div
					className='mt-16 text-xs opacity-50 font-mono'
					initial={{ opacity: 0 }}
					animate={{ opacity: 0.5 }}
					transition={{ delay: 1 }}
				>
					Please adjust your TV set for optimal viewing experience
				</motion.div>
			</div>
		</TvScreen>
	);
}
