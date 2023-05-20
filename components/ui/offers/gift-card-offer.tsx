import Image from "next/image";
import { Button } from "../button";
import { OfferBanner } from "./offer-banner";

export function GiftCardOffer() {
	return (
		<OfferBanner className="flex flex-row justify-between items-center rounded-sm md:my-4">
			<div className="font-serif text-base sm:text-3xl md:text-4xl lg:text-5xl w-3/4 font-medium flex flex-col items-start justify-center gap-2 md:gap-4">
				<h2>Surprise your loved ones with a gift card!</h2>
				<Button variant="default" className="font-serif">
					Learn more
				</Button>
			</div>
			<div className="h-5/6 w-auto aspect-[3/2] flex justify-center items-center relative">
				<Image
					src="/images/gift-card.jpg"
					width={512}
					height={512}
					alt=""
					className="absolute rounded-lg md:rounded-xl aspect-[1.8/1] h-auto w-32 sm:w-32 md:w-52 rotate-[35deg] shadow right-0"
				/>
				<Image
					src="/images/gift-card.jpg"
					width={512}
					height={512}
					alt=""
					className="absolute rounded-lg md:rounded-xl aspect-[1.8/1] h-auto w-32 sm:w-32 md:w-52 rotate-[25deg] shadow right-0"
				/>
				<Image
					src="/images/gift-card.jpg"
					width={512}
					height={512}
					alt=""
					className="absolute rounded-lg md:rounded-xl aspect-[1.8/1] h-auto w-32 sm:w-32 md:w-52 rotate-[15deg] shadow right-0"
				/>
			</div>
		</OfferBanner>
	);
}
