"use client";
import { motion } from "framer-motion";
import TvScreen from "@/components/TvScreen";
import { useChannel } from "@/context/ChannelContext";
import { useState, FormEvent } from "react";
const socials = {
	Github: "https://github.com/JojayD",
	Linkedin: "https://www.linkedin.com/in/joseph-d-89b5801b0/",
};

export default function ContactPage() {
	const { currentChannel } = useChannel();
	const [formState, setFormState] = useState({
		name: "",
		email: "",
		message: "",
	});
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [isSubmitted, setIsSubmitted] = useState(false);
	const [isError, setIsError] = useState(false);

	const handleSubmit = (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);

		// Simulate form submission
		setTimeout(() => {
			setIsSubmitting(false);
			setIsSubmitted(true);
			// Reset form after submission
			setFormState({
				name: "",
				email: "",
				message: "",
			});
		}, 1500);
	};

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormState((prev) => ({
			...prev,
			[name]: value,
		}));
	};

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
											<path d='M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z'></path>
										</svg>
									</div>
									<div>
										<div className='text-sm text-gray-400'>Phone</div>
										<div className='font-mono'>408-477-0748</div>
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
						>
							{isSubmitted ? (
								<motion.div
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									className='bg-gray-800 p-8 rounded-lg text-center'
								>
									<div className='w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4'>
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
											<polyline points='20 6 9 17 4 12'></polyline>
										</svg>
									</div>
									<h3 className='text-xl font-bold mb-2'>Message Sent!</h3>
									<p className='text-gray-300 mb-4'>
										Thank you for reaching out. I'll get back to you as soon as possible.
									</p>
									<button
										className='bg-purple-600 hover:bg-purple-700 px-4 py-2 rounded-md'
										onClick={() => setIsSubmitted(false)}
									>
										Send Another Message
									</button>
								</motion.div>
							) : (
								<form
									onSubmit={handleSubmit}
									className='bg-gray-800 p-6 rounded-lg'
								>
									<div className='mb-4'>
										<label
											htmlFor='name'
											className='block text-gray-300 mb-1'
										>
											Name
										</label>
										<input
											type='text'
											id='name'
											name='name'
											value={formState.name}
											onChange={handleChange}
											className='w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
											required
										/>
									</div>

									<div className='mb-4'>
										<label
											htmlFor='email'
											className='block text-gray-300 mb-1'
										>
											Email
										</label>
										<input
											type='email'
											id='email'
											name='email'
											value={formState.email}
											onChange={handleChange}
											className='w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
											required
										/>
									</div>

									<div className='mb-6'>
										<label
											htmlFor='message'
											className='block text-gray-300 mb-1'
										>
											Message
										</label>
										<textarea
											id='message'
											name='message'
											value={formState.message}
											onChange={handleChange}
											rows={5}
											className='w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-purple-500'
											required
										></textarea>
									</div>

									<button
										type='submit'
										disabled={isSubmitting}
										className={`w-full px-4 py-3 rounded-md font-medium ${
											isSubmitting
												? "bg-gray-600 cursor-not-allowed"
												: "bg-purple-600 hover:bg-purple-700"
										}`}
									>
										{isSubmitting ? "Sending..." : "Send Message"}
									</button>
								</form>
							)}
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
