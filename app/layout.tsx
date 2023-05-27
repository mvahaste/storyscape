import { Footer } from "@/components/layout/footer";
import { Header } from "@/components/layout/header";
import { Inter, Merriweather } from "next/font/google";
import "./globals.css";

const inter = Inter({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-sans",
});

const merriweather = Merriweather({
	subsets: ["latin"],
	display: "swap",
	variable: "--font-serif",
	weight: ["400", "700"],
});

export const metadata = {
	title: "Storyscape",
	description:
		"Discover a world of literary treasures at Storyscape, an online haven for book enthusiasts. Explore a curated collection of captivating novels, timeless classics, and thought-provoking reads. Immerse yourself in the joy of reading with our cozy online bookstore, where stories come alive and imaginations flourish.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
	return (
		<html lang="en">
			<body className={`${inter.variable} ${merriweather.variable} min-h-screen transition-colors relative pb-20 font-sans`}>
				<Header />
				{children}
				<Footer />
			</body>
		</html>
	);
}
