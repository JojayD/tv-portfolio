"use client";
import React from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

interface Channel {
	number: number;
	name: string;
	path: string;
}

interface RemoteControlProps {
	channels: Channel[];
	currentChannel: number;
}

const RemoteControl = ({ channels, currentChannel }: RemoteControlProps) => {
	const router = useRouter();

	const changeChannel = (channel: Channel) => {
		router.push(channel.path);
	};

	return (
		<motion.div
			className='bg-gray-700 rounded-3xl p-5 shadow-lg fixed bottom-8 right-8 z-50 w-48'
			initial={{ y: 100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			whileHover={{ scale: 1.05 }}
			transition={{ type: "spring", stiffness: 300, damping: 20 }}
		>
			<div className='text-center mb-3'>
				<div className='bg-gray-900 text-white py-1 px-3 rounded-md mb-2 font-mono text-xs'>
					CH-{currentChannel}
				</div>
				<div className='grid grid-cols-3 gap-2 mb-4'>
					{[1, 2, 3, 4, 5, 6, 7, 8, 9].map((num) => {
						const channel = channels.find((c) => c.number === num);
						return (
							<motion.button
								key={num}
								className={`w-10 h-10 rounded-full ${
									currentChannel === num
										? "bg-red-500 text-white"
										: "bg-gray-800 text-gray-300"
								} flex items-center justify-center text-sm font-mono`}
								whileHover={{ scale: 1.1 }}
								whileTap={{ scale: 0.9 }}
								disabled={!channel}
								onClick={() => channel && changeChannel(channel)}
							>
								{num}
							</motion.button>
						);
					})}
				</div>
			</div>
			<div className='flex justify-between'>
				<button
					className='bg-red-600 text-white p-2 rounded-full w-10 h-10 flex items-center justify-center'
					onClick={() => router.push("/")}
				>
					<span className='text-xs'>HOME</span>
				</button>
				<div className='space-y-2'>
					<button
						className='bg-gray-800 text-white p-1 rounded-lg w-full flex items-center justify-center'
						onClick={() => {
							const currentIndex = channels.findIndex(
								(c) => c.number === currentChannel
							);
							if (currentIndex > 0) {
								changeChannel(channels[currentIndex - 1]);
							}
						}}
					>
						<span className='text-sm'>▲</span>
					</button>
					<button
						className='bg-gray-800 text-white p-1 rounded-lg w-full flex items-center justify-center'
						onClick={() => {
							const currentIndex = channels.findIndex(
								(c) => c.number === currentChannel
							);
							if (currentIndex < channels.length - 1) {
								changeChannel(channels[currentIndex + 1]);
							}
						}}
					>
						<span className='text-sm'>▼</span>
					</button>
				</div>
			</div>
		</motion.div>
	);
};

export default RemoteControl;
