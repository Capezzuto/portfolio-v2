import type { Metadata } from 'next';
import { Roboto, Roboto_Condensed, Fira_Code } from 'next/font/google';
import './globals.css';

const roboto = Roboto({
	variable: '--font-roboto',
	subsets: ['latin'],
});

const robotoCondensed = Roboto_Condensed({
	variable: '--font-roboto-condensed',
	subsets: ['latin'],
});

const firaCode = Fira_Code({
	variable: '--font-fira-code',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: "Joe Capezzuto's Portfolio",
	description: 'Some creative explorations of technology, art, and ideas',
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en'>
			<body className={`${firaCode.variable} ${roboto.variable} ${robotoCondensed.variable}`}>{children}</body>
		</html>
	);
}
