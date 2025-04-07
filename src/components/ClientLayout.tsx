"use client";
import React from "react";
import TvContainer from "@/components/TvContainer";
import RemoteControl from "@/components/RemoteControl";
import ChannelIndicator from "@/components/ChannelIndicator";
import { useChannel } from "@/context/ChannelContext";

interface ClientLayoutProps {
	children: React.ReactNode;
}

export default function ClientLayout({ children }: ClientLayoutProps) {
	const { currentChannel, isChangingChannel, currentChannelName, channels } =
		useChannel();

	return (
		<>
			<TvContainer>{children}</TvContainer>
			<RemoteControl
				channels={channels}
				currentChannel={currentChannel}
			/>
			<ChannelIndicator
				channelNumber={currentChannel}
				channelName={currentChannelName}
				isChanging={isChangingChannel}
			/>
		</>
	);
}
