"use client";
import { motion } from "framer-motion";
import TvScreen from "@/components/TvScreen";
import { useChannel } from "@/context/ChannelContext";
import { useState } from "react";

// Sample project data
const projects = [
	{
		id: 1,
		title: "Code Canvas",
		description:
			"Code canvas is a platoform where you can practice your interview skills with mock interviews.",
		technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Supabase"],
		imageUrl: "/code-canvas.png",
		category: "Full Stack",
		gitHubUrl: "https://github.com/JojayD/codecanvas",
	},
	{
		id: 2,
		title: "Shark seek",
		description:
			"Combine RMP and CSULB course catalog and you get Shark Seek. You now don't have to go back and forth between RMP and the CSULB course catalog to find the perfect class.",
		technologies: ["Next.js", "Node.js", "MongoDB"],
		imageUrl: "/shark-seek.png", // Make sure to add this image in your public folder
		category: "",
		gitHubUrl: "https://github.com/JojayD/codecanvas",
	},
	{
		id: 3,
		title: "ECG classification",
		description:
			"Research project with Professor Xin Qin. Use CNNs and LLM models to classify ECG signals.",
		technologies: ["PyTorch", "Hugging Face", "LLM"],
		imageUrl: "/training.png",
		category: "Machine Learning",
		gitHubUrl: "https://github.com/JojayD/EcgClassification",
	},
];

export default function ProjectsPage() {
	const { currentChannel } = useChannel();
	const [selectedProject, setSelectedProject] = useState<number | null>(null);

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

			<div className='min-h-[50vh] p-6 text-white overflow-auto relative z-10'>
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ delay: 0.1 }}
				>
					<h1 className='text-3xl md:text-4xl font-bold mb-6 text-green-400 font-mono border-b border-green-400 pb-2'>
						MY PROJECTS
					</h1>

					{selectedProject === null ? (
						<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
							{projects.map((project, index) => (
								<motion.div
									key={project.id}
									className='bg-gray-800 rounded-lg overflow-hidden cursor-pointer hover:ring-2 hover:ring-green-400 transition-all'
									whileHover={{ scale: 1.03 }}
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{ delay: 0.2 + index * 0.1 }}
									onClick={() => setSelectedProject(project.id)}
								>
									<div className='h-40 bg-gray-700 flex items-center justify-center relative'>
										<img
											src={project.imageUrl}
											alt={project.title}
											className='absolute inset-0 w-full h-full object-cover'
										/>
										<div className='absolute inset-0 bg-gradient-to-b from-transparent to-black/50'></div>
										<div className='text-lg font-bold'>{project.title}</div>
									</div>
									<div className='p-4'>
										<div className='text-xs text-green-400 font-mono mb-2'>
											{project.category}
										</div>
										<p className='text-sm text-gray-300 mb-4 line-clamp-2'>
											{project.description}
										</p>
										<div className='flex flex-wrap gap-2'>
											{project.technologies.map((tech) => (
												<span
													key={tech}
													className='text-xs bg-gray-700 px-2 py-1 rounded-full'
												>
													{tech}
												</span>
											))}
										</div>
									</div>
								</motion.div>
							))}
						</div>
					) : (
						<motion.div
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.3 }}
						>
							{/* Project Detail View */}
							{(() => {
								const project = projects.find((p) => p.id === selectedProject);
								if (!project) return null;

								return (
									<div className='bg-gray-800 rounded-lg p-6'>
										<div className='flex justify-between items-center mb-6'>
											<h2 className='text-2xl font-bold text-green-400'>
												{project.title}
											</h2>
											<button
												className='bg-gray-700 hover:bg-gray-600 px-3 py-1 rounded-full text-sm'
												onClick={() => setSelectedProject(null)}
											>
												Back to List
											</button>
										</div>

										<div className='h-64 bg-gray-700 rounded-lg mb-6 relative'>
											<img
												src={project.imageUrl}
												alt={project.title}
												className='absolute inset-0 w-full h-full object-cover object-top'
											/>
										</div>

										<div className='mb-6'>
											<h3 className='text-lg font-semibold mb-2'>Description</h3>
											<p className='text-gray-300'>{project.description}</p>
										</div>

										<div className='mb-6'>
											<h3 className='text-lg font-semibold mb-2'>Technologies</h3>
											<div className='flex flex-wrap gap-2'>
												{project.technologies.map((tech) => (
													<span
														key={tech}
														className='bg-gray-700 px-3 py-1 rounded-full'
													>
														{tech}
													</span>
												))}
											</div>
										</div>

										<div className='flex gap-4'>
											<button className='bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg'>
												View Live
											</button>
											<button className='bg-gray-700 hover:bg-gray-600 px-4 py-2 rounded-lg'>
												<a
													href={project.gitHubUrl}
													target='_blank'
												>
													View Code
												</a>
											</button>
										</div>
									</div>
								);
							})()}
						</motion.div>
					)}
				</motion.div>

				<motion.div
					className='text-center mt-12 font-mono text-xs text-gray-400'
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1 }}
				>
					You're watching Channel 3: Projects
				</motion.div>
			</div>
		</TvScreen>
	);
}
