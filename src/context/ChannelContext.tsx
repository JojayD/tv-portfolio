"use client";
import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	ReactNode,
} from "react";
import { usePathname } from "next/navigation";

export interface Channel {
	number: number;
	name: string;
	path: string;
}

// Define the available channels
export const CHANNELS: Channel[] = [
	{ number: 1, name: "Home", path: "/" },
	{ number: 2, name: "About", path: "/about" },
	{ number: 3, name: "Projects", path: "/projects" },
	{ number: 4, name: "Contact", path: "/contact" },
];

interface ChannelContextType {
	currentChannel: number;
	isChangingChannel: boolean;
	currentChannelName: string;
	channels: Channel[];
	setChannel: (channelNumber: number) => void;
}

const ChannelContext = createContext<ChannelContextType | undefined>(undefined);

export const useChannel = () => {
	const context = useContext(ChannelContext);
	if (!context) {
		throw new Error("useChannel must be used within a ChannelProvider");
	}
	return context;
};

interface ChannelProviderProps {
	children: ReactNode;
}

export const ChannelProvider = ({ children }: ChannelProviderProps) => {
	const [currentChannel, setCurrentChannel] = useState<number>(1);
	const [isChangingChannel, setIsChangingChannel] = useState<boolean>(false);
	const pathname = usePathname();

	// Set the channel based on the current path
	useEffect(() => {
		const channel = CHANNELS.find((c) => c.path === pathname);
		if (channel) {
			setCurrentChannel(channel.number);
		}
	}, [pathname]);

	const setChannel = (channelNumber: number) => {
		setIsChangingChannel(true);
		setCurrentChannel(channelNumber);

		// Hide the channel indicator after a delay
		setTimeout(() => {
			setIsChangingChannel(false);
		}, 2000);
	};

	const currentChannelName =
		CHANNELS.find((c) => c.number === currentChannel)?.name || "Unknown";

	const value = {
		currentChannel,
		isChangingChannel,
		currentChannelName,
		channels: CHANNELS,
		setChannel,
	};

	return (
		<ChannelContext.Provider value={value}>{children}</ChannelContext.Provider>
	);
};
