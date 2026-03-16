'use client';
import { type ReactNode, useEffect, useRef, useState } from 'react';
import AnimatedLine from '@/app/_components/AnimatedLine';

interface TimelineItemProps {
	children: ReactNode;
	shouldAnimateCircle: boolean;
	shouldAnimateLine: boolean;
	shouldShowLine: boolean;
	animationEndHandler?(evt: AnimationEvent): any;
}

const TimelineItem = ({
	children,
	shouldAnimateCircle,
	shouldAnimateLine,
	shouldShowLine,
	animationEndHandler,
}: TimelineItemProps) => {
	const contentContainerRef = useRef(null);
	const [lineLength, setLineLength] = useState(0);

	useEffect(() => {
		const contentHeightObserver = new ResizeObserver((entries) => {
			for (const entry of entries) {
				if (entry.target.scrollHeight) {
					setLineLength(entry.target.scrollHeight - 19);
				}
			}
		});
		if (contentContainerRef.current) {
			contentHeightObserver.observe(contentContainerRef.current);
		}
		return () => {
			contentHeightObserver.disconnect();
		};
	}, []);

	return (
		<div className='TimelineItem flex'>
			<div className='TimelineItem-lineContainer relative'>
				<AnimatedLine
					height={20}
					width={20}
					color='#62748e'
					length={200}
					weight={2}
					shouldAnimate={shouldAnimateCircle}
					viewBox='0 0 20 20'
					path='M 10 1 a 9 9 0 1 1 0 18 a 9 9 0 1 1 0 -18'
					animateType='outside-in'
					duration='400ms'
					onAnimationEnd={animationEndHandler}
				/>
				<AnimatedLine
					customClassName='absolute top-0 left-0'
					height={20}
					width={20}
					color='#62748e'
					length={200}
					weight={2}
					shouldAnimate={shouldAnimateCircle}
					viewBox='0 0 20 20'
					path='M 10 4.5 a 3 3 0 1 1 0 11 a 3 3 0 1 1 0 -11'
					animateType='outside-in'
					duration='400ms'
				/>
				{shouldShowLine ? (
					<AnimatedLine
						customClassName='absolute'
						color='#62748e'
						viewBox={`0 0 20 ${lineLength}`}
						width={20}
						height={lineLength}
						length={lineLength}
						weight={2}
						orientation='vertical'
						shouldAnimate={shouldAnimateLine}
						animateType='forward'
						path={`M 10 0 v 10 ${lineLength}`}
						duration='1000ms'
						delay='200ms'
						onAnimationEnd={animationEndHandler}
					/>
				) : null}
			</div>
			<div ref={contentContainerRef} className='TimelineItem-contentContainer flex-1'>
				{children}
			</div>
		</div>
	);
};

export default TimelineItem;
