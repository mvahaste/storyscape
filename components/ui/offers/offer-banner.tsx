export function OfferBanner({ children, className, href }: { children: React.ReactNode; className?: string; href: string }) {
	return (
		<a href={href} className={`w-full h-36 md:h-56 bg-secondary py-2 px-4 md:py-6 md:px-8 rounded ${className}`}>
			{children}
		</a>
	);
}
