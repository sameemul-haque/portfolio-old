import { NextSeo } from 'next-seo';
import { useRouter } from 'next/router';

import type { ComponentProps } from 'react';

// Mirrors the redirects in vercel.json: each page's equivalent on sameem.dev
const SAMEEM_DEV_PATHS: Record<string, string> = {
	'/projects': '/projects/',
	'/timeline': '/experience/',
	'/skills': '/experience/',
};

export function useSeoProps(
	props: Partial<ComponentProps<typeof NextSeo>> = {},
): Partial<ComponentProps<typeof NextSeo>> {
	const router = useRouter();
	const path = router.asPath.split(/[?#]/)[0].replace(/\/+$/, '');
	const url = `https://sameem.dev${SAMEEM_DEV_PATHS[path] ?? '/'}`;

	const title = 'sameemul haque ─ developer';
	const description = "Hey 👋 I'm Sameemul Haque, a developer";

	return {
		title,
		description,
		canonical: url,
		openGraph: {
			title,
			description,
			site_name: 'sameemul haque',
			url,
			type: 'website',
			images: [
				{
					url: 'https://sameemul-haque.vercel.app/banner.png',
					alt: description,
					width: 1280,
					height: 720,
				},
			],
		},
		twitter: {
			cardType: 'summary_large_image',
			handle: '@sameemul_haque',
			site: '@sameemul_haque',
		},
		...props,
	};
}
