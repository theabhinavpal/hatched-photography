'use client';
import React from 'react';

import { cn } from '../../lib/utils';
import { Button } from './button';
import { Badge } from './badge';
import { CheckIcon, SparklesIcon } from 'lucide-react';

type PricingCardProps = {
	titleBadge: string;
	priceLabel: string;
	priceSuffix?: string;
	features: string[];
	cta?: string;
	className?: string;
};

function FilledCheck() {
	return (
		<div className="bg-[#B08D8D] text-white rounded-full p-0.5">
			<CheckIcon className="size-3" strokeWidth={3} />
		</div>
	);
}

function PricingCard({
	titleBadge,
	priceLabel,
	priceSuffix = '/session',
	features,
	cta = 'Book Now',
	className,
}: PricingCardProps) {
	return (
		<div
			className={cn(
				'bg-white border-[#E0D5D2] relative overflow-hidden rounded-sm border p-6 transition-all duration-500 hover:shadow-xl',
				className,
			)}
		>
			<div className="flex items-center gap-3 mb-6">
				<Badge variant="secondary" className="bg-[#F5EFEB] text-[#B08D8D] border-none font-sans uppercase tracking-widest text-[10px] px-3 py-1">
          {titleBadge}
        </Badge>
				<div className="ml-auto">
					<Button variant="outline" className="border-[#E0D5D2] text-[#2C2C2C] font-sans text-[10px] uppercase tracking-widest hover:bg-[#FAF9F7]">{cta}</Button>
				</div>
			</div>

			<div className="flex items-end gap-2 mb-6">
				<span className="font-serif italic text-5xl text-[#2C2C2C]">
					{priceLabel}
				</span>
				{priceLabel.toLowerCase() !== 'free' && (
					<span className="text-[#4A4A4A] font-sans font-light text-sm">{priceSuffix}</span>
				)}
			</div>

			<ul className="text-[#4A4A4A] grid gap-4 text-sm font-sans font-light">
				{features.map((f, i) => (
					<li key={i} className="flex items-center gap-3">
						<FilledCheck />
						<span>{f}</span>
					</li>
				))}
			</ul>
		</div>
	);
}

export function BentoPricing() {
	return (
		<div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-8">
			<div
				className={cn(
					'bg-white border-[#E0D5D2] relative w-full overflow-hidden rounded-sm border p-8 lg:col-span-5 transition-all duration-500 hover:shadow-xl',
				)}
			>
				<div className="pointer-events-none absolute top-0 left-1/2 -mt-2 -ml-20 h-full w-full [mask-image:linear-gradient(white,transparent)] opacity-10">
					<div className="from-[#B08D8D]/20 to-transparent absolute inset-0 bg-gradient-to-r [mask-image:radial-gradient(farthest-side_at_top,white,transparent)]">
						<div
							aria-hidden="true"
							className={cn(
								'absolute inset-0 size-full mix-blend-overlay',
								'bg-[linear-gradient(to_right,#B08D8D_1px,transparent_1px)]',
								'bg-[size:24px]',
							)}
						/>
					</div>
				</div>
				<div className="flex items-center gap-3 mb-8 relative z-10">
					<Badge variant="secondary" className="bg-[#F5EFEB] text-[#B08D8D] border-none font-sans uppercase tracking-widest text-[10px] px-3 py-1">
            MOST POPULAR
          </Badge>
					<Badge variant="outline" className="hidden lg:flex border-[#B08D8D] text-[#B08D8D] font-sans uppercase tracking-widest text-[10px] px-3 py-1">
						<SparklesIcon className="me-1 size-3" /> Recommended
					</Badge>
					<div className="ml-auto">
						<Button className="bg-[#B08D8D] hover:bg-[#967676] text-white font-sans text-[10px] uppercase tracking-widest px-8">Book Session</Button>
					</div>
				</div>
				<div className="flex flex-col lg:flex-row relative z-10 gap-8">
					<div className="lg:w-[35%]">
            <h3 className="font-serif italic text-3xl text-[#2C2C2C] mb-4">The Signature Family</h3>
						<span className="font-serif italic text-6xl text-[#2C2C2C]">
							$550
						</span>
						<span className="text-[#4A4A4A] font-sans font-light text-sm ml-2">/session</span>
					</div>
					<ul className="text-[#4A4A4A] grid gap-4 text-sm font-sans font-light lg:w-[65%]">
						{[
							'Full 60-90 minute lifestyle session',
							'All high-resolution digital images included',
							'Professional retouching & timeless editing',
							'Personalized styling & location guidance',
              'Private online gallery for sharing & printing'
						].map((f, i) => (
							<li key={i} className="flex items-center gap-3">
								<FilledCheck />
								<span className="leading-relaxed">{f}</span>
							</li>
						))}
					</ul>
				</div>
			</div>

			<PricingCard
				titleBadge="MINI SESSION"
				priceLabel="$350"
				features={[
					'30 minute focused session',
					'15 high-res digital images',
					'Timeless editing style',
				]}
				className="lg:col-span-3"
			/>

			<PricingCard
				titleBadge="NEWBORN"
				priceLabel="$650"
				features={[
					'In-home lifestyle newborn session',
					'Full gallery of digital images',
					'Relaxed pace for baby & parents',
				]}
				className="lg:col-span-4"
			/>

			<PricingCard
				titleBadge="MATERNITY"
				priceLabel="$450"
				features={[
					'Outdoor or in-home session',
					'Celebrating your journey',
					'Full digital gallery included',
				]}
				className="lg:col-span-4"
			/>
		</div>
	);
}
