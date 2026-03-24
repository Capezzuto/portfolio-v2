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
					<p className='font-(family-name:--font-roboto) text-base mb-4'>
						<strong>I consider myself a lifelong learner.</strong> I graduated from Edinboro University of
						Pennsylvania's Film and Animation department, moved to Los Angeles, moved to Japan for a year, then earned
						an M.A. in Art History, focusing on Japanese art and photography of the 20th century. While working as a
						freelance designer, I found a renewed love for solving technical problems. After completing the Hack Reactor
						bootcamp, my first job was at Twisted Rope, a creative digital agency, where I was able to learn and grow
						professionally on a wide range of projects requiring many different approaches.
					</p>
					<p className='font-(family-name:--font-roboto) text-base mb-4'>
						In 2021, I joined AKQA as a Senior Front End Developer on the Apple Education team, which had been partnered
						with Apple since the launch of the Apple Education platform in 2016. In this role, I was able to work on a
						collection of pages with an existing code base that evolved as we developed new strategies to more
						efficiently build and maintain pages and made updates to existing pages to stay current with Apple's design
						systems. While at AKQA I was able to focus on longer-term initiatives, optimize code, refine UI look and
						feel, and bring pages up to higher accessibility standards.
					</p>
					<p className='font-(family-name:--font-roboto) text-base mb-4'>
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
