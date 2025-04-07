"use client";
import React, { ReactNode } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TvScreenProps {
	children: ReactNode;
	isActive: boolean;
	channelNumber?: number;
}

const TvScreen = ({ children, isActive, channelNumber = 1 }: TvScreenProps) => {
	return (
		<div className='relative w-full h-full'>
			<AnimatePresence mode='wait'>
				{isActive ? (
					<motion.div
						key='content'
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{
							opacity: 1,
							scale: 1,
							filter: ["brightness(2) contrast(0.8)", "brightness(1) contrast(1)"],
						}}
						exit={{ opacity: 0, filter: "brightness(0) contrast(0)" }}
						transition={{
							duration: 0.3,
							filter: { duration: 0.5 },
						}}
						className='w-full h-full p-6'
					>
						{/* Channel number indicator */}
						{channelNumber && (
							<div className='absolute top-4 right-4 bg-black/50 px-3 py-1 rounded-md text-white font-mono text-sm z-30'>
								CH-{channelNumber}
							</div>
						)}

						{children}
					</motion.div>
				) : (
					<motion.div
						key='static'
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className='w-full h-full bg-black flex items-center justify-center'
					>
						<div className='text-white/20 text-2xl'>No Signal</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
};

export default TvScreen;
