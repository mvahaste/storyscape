import { ShoppingCart } from "lucide-react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Header() {
	return (
		<header className="w-full h-18 sticky top-0 bg-background border-b shadow z-50 mb-2 md:mb-4">
			{/* Content */}
			<div className="w-full lg:max-w-5xl h-full mx-auto p-4 flex gap-4">
				<h1 className="hidden md:block font-serif text-3xl">Storyscape</h1>
				<Input type="text" placeholder="Search" className="h-full text-lg md:px-4 bg-background" />
				<Button variant="ghost" className="aspect-square min-h-full w-auto p-2">
					<ShoppingCart size={22} />
				</Button>
			</div>
		</header>
	);
}
