"use client";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";

interface ChannelIndicatorProps {
	channelNumber: number;
	channelName: string;
	isChanging: boolean;
}

const ChannelIndicator = ({
	channelNumber,
	channelName,
	isChanging,
}: ChannelIndicatorProps) => {
	return (
		<AnimatePresence>
			{isChanging && (
				<motion.div
					initial={{ opacity: 0, y: -20 }}
					animate={{ opacity: 1, y: 0 }}
					exit={{ opacity: 0, y: -20 }}
					transition={{ duration: 0.3 }}
					className='fixed top-10 left-1/2 transform -translate-x-1/2 z-50'
				>
					<div className='bg-black/80 text-white font-mono rounded-lg p-3 flex flex-col items-center'>
						<div className='text-2xl font-bold'>CH-{channelNumber}</div>
						<div className='text-xs uppercase tracking-wider mt-1'>{channelName}</div>
					</div>
				</motion.div>
			)}
		</AnimatePresence>
	);
};

export default ChannelIndicator;
