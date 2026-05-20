import Image from 'next/image';
import Headline from '../_components/Headline';
import profile from '../../../../public/images/PROFILE_1280x1280.webp';

const AboutPage = () => {
	return (
		<section className='about-page'>
			<Headline text='About (me)' />
			<div className='flex flex-col md:flex-row-reverse gap-6 md:gap-4 lg:gap-6 xl:gap-8'>
				<div className='image-column flex-1'>
					<Image
						alt='Me in front of an olive tree'
						width={640}
						height={640}
						placeholder='blur'
						preload={true}
						src={profile}
						className='rounded-lg'
					/>
				</div>
				<div className='text-column flex-1'>
					<p className='font-(family-name:--font-roboto) text-base mb-4 dark:text-foreground/90'>
						<strong>I consider myself a lifelong learner.</strong> I have always been learning from others or teaching
						myself something new. As a kid, my friends and I built our computers and played around with bulletin board
						systems and LANs. I also love to draw and create, and much of my education has been geared towards visual
						arts, earning a B.F.A. in Animation, and later, an M.A. in Art History.
					</p>
					<p className='font-(family-name:--font-roboto) text-base mb-4 dark:text-foreground/90'>
						While working as a freelance graphic designer and helping a client maintain their web site, I found a
						renewed love for solving technical problems. I completed the Hack Reactor bootcamp, and my first job was at
						Twisted Rope, a creative digital agency. I was able to learn and grow professionally on a wide range of
						projects with many different requirements, ranging from single web pages on an enterprise CMS to building
						web applications with complex data fetching and state management requirements to training programs with
						innovative interfaces.
					</p>
					<p className='font-(family-name:--font-roboto) text-base mb-4 dark:text-foreground/90'>
						In 2021, I joined AKQA, where I worked on a team that built much of the user-facing experience for the Apple
						Education platform and had been partnered with Apple since the launch of the platform in 2016. In this role,
						I was able to work on a collection of pages with an existing code base that evolved as we developed new
						strategies to more efficiently build and maintain pages and made updates to existing pages to stay current
						with Apple's design systems. While at AKQA I was able to focus on longer-term initiatives, optimize code,
						refine UI look and feel, and bring pages up to higher accessibility standards.
					</p>
					<p className='font-(family-name:--font-roboto) text-base mb-4 dark:text-foreground/90'>
						Because of my background and experience in the arts, I am still fascinated by the visual component of
						programming for the web. My professional interests include building clean, accessible UI, visualizing data
						in a clear, informative way, and finding effective solutions for software architecture.
					</p>
				</div>
			</div>
		</section>
	);
};

export default AboutPage;
