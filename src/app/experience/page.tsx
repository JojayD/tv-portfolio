"use client";
import { motion } from "framer-motion";
import TvScreen from "@/components/TvScreen";
import { useChannel } from "@/context/ChannelContext";

const experiences = [
	{
		id: 1,
		title: "Software Engineer Intern",
		company: "Everything Parlays",
		location: "Chicago, Remote",
		startDate: "May 2025",
		endDate: "Present",
		responsibilities: [
			"Developed deep-link referral system with AWS Lambda, MongoDB, and React admin dashboard, enabling automated fraud detection and processing 10K+ daily referrals, cutting acquisition costs by 40",
			"Redesigned company website with advanced SEO and performance optimization, improving Lighthouse scores from 70→100 (Performance), 80→98 (Accessibility), and 70→98 (Best Practices) while implementing schema markup and analytics tracking",
			"Optimized contest standings flow in a React Native/MongoDB/AWS CDK stack to support thousands of users, reducing load time from 12s to ~5s by implementing paginated API endpoints and efficient data querying",
			"Refactored AWS Lambda functions to shift heavy calculations to MongoDB aggregation pipelines and increased memoryallocation, ensuring scalability and consistent performance under heavy contest sizes.",
		],
		technologies: ["AWS CDK", "React Native", "TypeScript", "MongoDB"],
	},
	{
		id: 2,
		title: "Research Assistant",
		company: "University Research Lab",
		location: "Los Beach, CA",
		startDate: "Aug 2024",
		endDate: "Apr 2025",
		responsibilities: [
			"Engineered end-to-end ML data pipeline processing 10k+ ECG records, converting raw signals to feature tensors forneural-symbolic classifier training in PyTorch, achieving 85%+ F1 score",
			"Implemented robust data processing workflows using NumPy, pandas, and signal processing techniques, improving model precision by 22% through iterative optimization",
		],
		technologies: ["Python", "TensorFlow", "PyTorch", "Jupyter"],
	},
	{
		id: 3,
		title: "Software Engineer",
		company: "California State University Long Beach ACM",
		location: "Long Beach, CA",
		startDate: "Oct 2024",
		endDate: "May 2025",
		responsibilities: [
			"Designed and built scalable, accessible UI for a large-scale web application using React, Next.js, and TypeScript, enhancing user experience and optimizing performance.",
      "Integrated Supabase to manage backend data storage, enabling secure and scalable handling of hackathon, registrations to handle over 300+ applications",
		],
		technologies: ["Java", "Python", "Git", "Linux"],
	},
];

export default function ExperiencePage() {
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
					<h1 className='text-3xl md:text-4xl font-bold mb-8 text-cyan-400 font-mono border-b border-cyan-400 pb-2'>
						EXPERIENCE
					</h1>

					<div className='relative'>
						{experiences.map((exp, index) => (
							<motion.div
								key={exp.id}
								className='relative mb-12 last:mb-0'
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								transition={{ delay: 0.2 + index * 0.15 }}
							>
								<div className='flex gap-6 md:gap-8'>
									<div className='flex flex-col items-center'>
										<div className='w-4 h-4 bg-cyan-400 rounded-full ring-4 ring-cyan-400/20 flex-shrink-0'></div>
										{index !== experiences.length - 1 && (
											<div className='w-0.5 h-full bg-gradient-to-b from-cyan-400/50 to-transparent mt-2'></div>
										)}
									</div>

									<div className='flex-1 pb-8'>
										<div className='bg-gray-800 rounded-lg p-6 hover:bg-gray-800/80 transition-colors'>
											<div className='flex flex-col md:flex-row md:justify-between md:items-start mb-3'>
												<div>
													<h2 className='text-xl font-bold text-cyan-400 mb-1'>
														{exp.title}
													</h2>
													<h3 className='text-lg text-gray-300 mb-1'>
														{exp.company}
													</h3>
													<p className='text-sm text-gray-400'>{exp.location}</p>
												</div>
												<div className='mt-2 md:mt-0'>
													<span className='inline-block bg-cyan-400/10 text-cyan-400 px-3 py-1 rounded-full text-sm font-mono'>
														{exp.startDate} - {exp.endDate}
													</span>
												</div>
											</div>

											<ul className='list-disc list-inside space-y-2 mb-4 text-gray-300'>
												{exp.responsibilities.map((responsibility, idx) => (
													<li
														key={idx}
														className='text-sm leading-relaxed'
													>
														{responsibility}
													</li>
												))}
											</ul>

											<div className='flex flex-wrap gap-2'>
												<span className='text-xs text-gray-400 font-semibold mr-2'>
													Technologies:
												</span>
												{exp.technologies.map((tech) => (
													<span
														key={tech}
														className='text-xs bg-gray-700 text-gray-300 px-2 py-1 rounded-full'
													>
														{tech}
													</span>
												))}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</motion.div>

				<motion.div
					className='text-center mt-12 font-mono text-xs text-gray-400'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					You're watching Channel 5: Experience
				</motion.div>
			</div>
		</TvScreen>
	);
}
