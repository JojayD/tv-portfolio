"use client";
import { motion } from "framer-motion";
import TvScreen from "@/components/TvScreen";
import { useChannel } from "@/context/ChannelContext";

const socials = {
	Github: "https://github.com/JojayD",
	Linkedin: "https://www.linkedin.com/in/joseph-d-89b5801b0/",
};

export default function ContactPage() {
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
					<h1 className='text-3xl md:text-4xl font-bold mb-6 text-purple-400 font-mono border-b border-purple-400 pb-2'>
						CONTACT ME
					</h1>

					<div className='grid grid-cols-1 md:grid-cols-2 gap-10'>
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3 }}
						>
							<h2 className='text-xl font-bold mb-4 text-purple-400'>Get In Touch</h2>
							<p className='mb-6 text-gray-300'>
								I'm always interested in hearing about new projects and opportunities.
								Feel free to reach out if you'd like to work together!
							</p>

							<div className='bg-gray-800 p-6 rounded-lg space-y-4'>
								<div className='flex items-center space-x-4'>
									<div className='w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
											<polyline points='22,6 12,13 2,6'></polyline>
										</svg>
									</div>
									<div>
										<div className='text-sm text-gray-400'>Email</div>
										<div className='font-mono'>info@josephsanchezdavid.com</div>
									</div>
								</div>

								<div className='flex items-center space-x-4'>
									<div className='w-10 h-10 bg-purple-600 rounded-full flex items-center justify-center'>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											width='20'
											height='20'
											viewBox='0 0 24 24'
											fill='none'
											stroke='currentColor'
											strokeWidth='2'
											strokeLinecap='round'
											strokeLinejoin='round'
										>
											<path d='M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z'></path>
											<polyline points='9 22 9 12 15 12 15 22'></polyline>
										</svg>
									</div>
									<div>
										<div className='text-sm text-gray-400'>Location</div>
										<div className='font-mono'>Los Angeles, CA</div>
									</div>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.4 }}
							className='flex flex-col items-center justify-center'
						>
							<div className='bg-gray-800 p-8 rounded-lg text-center w-full'>
								<div className='w-16 h-16 bg-purple-600 rounded-full flex items-center justify-center mx-auto mb-4'>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										width='32'
										height='32'
										viewBox='0 0 24 24'
										fill='none'
										stroke='currentColor'
										strokeWidth='2'
										strokeLinecap='round'
										strokeLinejoin='round'
									>
										<path d='M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z'></path>
										<polyline points='22,6 12,13 2,6'></polyline>
									</svg>
								</div>
								<h3 className='text-xl font-bold mb-4'>Send Me an Email</h3>
								<p className='text-gray-300 mb-6'>
									Click the button below to open your email client and send me a message
									directly.
								</p>
								<a
									href='mailto:info@josephsanchezdavid.com?subject=Portfolio%20Contact'
									className='bg-purple-600 hover:bg-purple-700 px-6 py-3 rounded-md inline-block font-medium transition-colors'
								>
									Open Mail Client
								</a>
							</div>
						</motion.div>
					</div>

					<motion.div
						className='mt-8 flex justify-center space-x-6'
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 0.6 }}
					>
						{/* Social media links */}
						{Object.keys(socials).map((platform) => (
							<motion.a
								key={platform}
								href={socials[platform as keyof typeof socials]}
								className='bg-gray-800 hover:bg-gray-700 p-3 rounded-full text-gray-300 hover:text-white transition-colors'
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.95 }}
							>
								{platform}
							</motion.a>
						))}
					</motion.div>
				</motion.div>

				<motion.div
					className='text-center mt-12 font-mono text-xs text-gray-400'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					You're watching Channel 4: Contact Me
				</motion.div>
			</div>
		</TvScreen>
	);
}
