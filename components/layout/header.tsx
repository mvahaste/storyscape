import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { ShoppingCart, User2 } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

export function Header() {
	return (
		<header className="w-full h-18 sticky top-0 bg-background/90 backdrop-blur-xl border-b shadow z-50 mb-2 md:mb-4">
			{/* Content */}
			<div className="w-full lg:max-w-5xl h-full mx-auto p-4 flex gap-1">
				<Link className="hidden md:block font-serif text-3xl" href="/">
					Storyscape
				</Link>
				<Input type="text" placeholder="Search" className="h-full text-lg md:px-4 bg-background md:mx-3" />
				<Button variant="ghost" className="aspect-square min-h-full w-auto p-2">
					<ShoppingCart size={22} />
				</Button>
				<DropdownMenu>
					<DropdownMenuTrigger asChild>
						<Button variant="ghost" className="aspect-square min-h-full w-auto p-2">
							<User2 size={22} />
						</Button>
					</DropdownMenuTrigger>
					<DropdownMenuContent className="font-serif">
						<DropdownMenuLabel>My Account</DropdownMenuLabel>
						<DropdownMenuSeparator />
						<DropdownMenuItem>Orders</DropdownMenuItem>
						<DropdownMenuItem>Settings</DropdownMenuItem>
						<DropdownMenuItem>Sign out</DropdownMenuItem>
					</DropdownMenuContent>
				</DropdownMenu>
			</div>
		</header>
	);
}
