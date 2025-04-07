"use client";
import React from "react";
import { motion } from "framer-motion";

interface TvKnobsProps {
	onVolumeChange?: (volume: number) => void;
	onBrightnessChange?: (brightness: number) => void;
	volume?: number;
	brightness?: number;
}

const TvKnobs = ({
	onVolumeChange,
	onBrightnessChange,
	volume = 50,
	brightness = 50,
}: TvKnobsProps) => {
	return (
		<div className='flex gap-6 justify-center'>
			{/* Volume Knob */}
			<div className='flex flex-col items-center'>
				<motion.div
					className='w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center cursor-pointer'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					drag={true}
					dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
					dragElastic={0.1}
					dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
					onClick={() => onVolumeChange?.(Math.min(volume + 10, 100))}
				>
					<motion.div
						className='w-8 h-1.5 bg-gray-500 rounded-full origin-center'
						style={{
							transform: `rotate(${(volume / 100) * 270 - 135}deg)`,
						}}
					/>
				</motion.div>
				<div className='text-xs text-gray-400 mt-1'>VOL</div>
			</div>

			{/* Brightness Knob */}
			<div className='flex flex-col items-center'>
				<motion.div
					className='w-12 h-12 rounded-full bg-gray-700 border-2 border-gray-600 flex items-center justify-center cursor-pointer'
					whileHover={{ scale: 1.1 }}
					whileTap={{ scale: 0.95 }}
					drag={true}
					dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
					dragElastic={0.1}
					dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
					onClick={() => onBrightnessChange?.(Math.min(brightness + 10, 100))}
				>
					<motion.div
						className='w-8 h-1.5 bg-gray-500 rounded-full origin-center'
						style={{
							transform: `rotate(${(brightness / 100) * 270 - 135}deg)`,
						}}
					/>
				</motion.div>
				<div className='text-xs text-gray-400 mt-1'>BRGHT</div>
			</div>
		</div>
	);
};

export default TvKnobs;
