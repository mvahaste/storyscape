export function OfferBanner({ children, className }: { children: React.ReactNode; className?: string }) {
	return <div className={`w-full h-36 md:h-56 bg-secondary py-2 px-4 md:py-6 md:px-8 rounded ${className}`}>{children}</div>;
}
