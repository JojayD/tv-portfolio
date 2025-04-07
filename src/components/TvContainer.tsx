"use client";
import React, { ReactNode } from "react";
import { motion } from "framer-motion";

interface TvContainerProps {
	children: ReactNode;
}

const TvContainer = ({ children }: TvContainerProps) => {
	return (
		<div className='w-full max-w-5xl mx-auto my-8 perspective-1000'>
			<div className='relative'>
				{/* TV Frame/Bezel */}
				<div className='bg-gray-800 rounded-3xl p-6 shadow-2xl border-8 border-gray-900'>
					{/* TV Screen */}
					<div className='bg-black rounded-2xl overflow-hidden relative'>
						{/* Screen Glare Effect */}
						<div className='absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none z-10'></div>

						{/* Static Noise Effect Overlay */}
						<motion.div
							className='absolute inset-0 opacity-10 mix-blend-overlay pointer-events-none z-20'
							style={{
								backgroundImage: 'url("/static-noise.png")',
								backgroundSize: "400px 400px",
							}}
							animate={{
								x: [0, -100, 0],
								opacity: [0.1, 0.15, 0.1],
							}}
							transition={{
								repeat: Infinity,
								duration: 0.5,
								ease: "linear",
							}}
						/>

						{/* Content */}
						<div className='relative z-0 min-h-[60vh]'>{children}</div>
					</div>

					{/* TV Controls */}
					<div className='flex justify-center mt-4 gap-4'>
						{/* Knobs/Dials */}
						<div className='w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center'>
							<div className='w-6 h-1.5 bg-gray-500 rounded-full'></div>
						</div>
						<div className='w-10 h-10 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center'>
							<div className='w-6 h-1.5 bg-gray-500 rounded-full'></div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default TvContainer;
