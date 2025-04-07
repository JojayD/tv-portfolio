"use client";
import { motion } from "framer-motion";
import TvScreen from "@/components/TvScreen";
import { useChannel } from "@/context/ChannelContext";

export default function AboutPage() {
	const { currentChannel } = useChannel();

	return (
		<TvScreen
			isActive={true}
			channelNumber={currentChannel}
		>
			<div className='min-h-[50vh] p-6 text-white overflow-auto'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
				>
					<h1 className='text-3xl md:text-4xl font-bold mb-6 text-amber-400 font-mono border-b border-amber-400 pb-2'>
						ABOUT ME
					</h1>

					<div className='flex flex-col md:flex-row gap-8'>
						<motion.div
							className='flex-1'
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3 }}
						>
							<p className='mb-4 text-lg'>
								Hello! I'm Joseph David, a Computer Science major passionate about
								creating software solutions to make life easier.
							</p>

							<p className='mb-4'>My expertise includes:</p>

							<ul className='list-disc pl-5 mb-6 space-y-1'>
								<motion.li
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.4 }}
								>
									Web Development
								</motion.li>
								<motion.li
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5 }}
								>
									Machine Learning
								</motion.li>
								<motion.li
									initial={{ opacity: 0, x: -10 }}
									animate={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.6 }}
								>
									Software Engineering
								</motion.li>
							</ul>
						</motion.div>

						<motion.div
							className='flex-1'
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 }}
						>
							<div className='bg-gray-800 p-6 rounded-lg'>
								<h2 className='text-xl font-bold mb-4 text-amber-400 font-mono'>
									FEATURED PROGRAM
								</h2>

								<div className='grid grid-cols-2 gap-4'>
									<div className='bg-gray-700 p-3 rounded-md'>
										<h3 className='text-sm font-bold mb-1'>Experience</h3>
										<p className='text-gray-300 text-sm'>CSULB Undergraduate Researcher</p>
										<p className='text-gray-400 text-xs'>2023-2025</p>
									</div>

									<div className='bg-gray-700 p-3 rounded-md'>
										<h3 className='text-sm font-bold mb-1'>Education</h3>
										<p className='text-gray-300 text-sm'>Computer Science</p>
										<p className='text-gray-400 text-xs'>Bachleor's Degree (2023-Present)</p>
									</div>

									<div className='bg-gray-700 p-3 rounded-md'>
										<h3 className='text-sm font-bold mb-1'>Location</h3>
										<p className='text-gray-300 text-sm'>Long Beach, CA</p>
									</div>

									<div className='bg-gray-700 p-3 rounded-md'>
										<h3 className='text-sm font-bold mb-1'>Interests</h3>
										<p className='text-gray-300 text-sm'>Web Technologies, Machine Learning, Software Engineering</p>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</motion.div>

				<motion.div
					className='text-center mt-12 font-mono text-xs text-gray-400'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					You're watching Channel 2: About Me
				</motion.div>
			</div>
		</TvScreen>
	);
}
