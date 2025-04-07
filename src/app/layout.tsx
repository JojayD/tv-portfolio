import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ChannelProvider } from "@/context/ChannelContext";
import ClientLayout from "@/components/ClientLayout";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "TV Portfolio",
	description: "A portfolio website with an old-school TV theme",
};

// Server component
export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900`}
			>
				<ChannelProvider>
					<ClientLayout>{children}</ClientLayout>
				</ChannelProvider>
			</body>
		</html>
	);
}
