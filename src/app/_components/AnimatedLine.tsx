'use client';
import React, { useEffect, useMemo, useRef } from 'react';
import './AnimatedLine.css';

interface AnimatedLineProps {
	length: number;
	weight?: number;
	height?: number | string;
	width?: number | string;
	color?: string;
	fill?: string;
	orientation?: 'vertical' | 'horizontal';
	viewBox?: string;
	path?: string;
	shouldAnimate?: boolean;
	animateType?: 'forward' | 'reverse' | 'middle-out' | 'outside-in';
	duration?: number | string;
	delay?: number | string;
}

const AnimatedLine = ({
	length = 1,
	weight = 1,
	height,
	width,
	orientation = 'horizontal',
	color = '#000000',
	fill = 'transparent',
	viewBox,
	path,
	shouldAnimate = false,
	animateType = 'forward',
	duration = '500ms',
	delay = '0ms',
}: AnimatedLineProps) => {
	const isVertical = orientation === 'vertical';
	const pathRef = useRef<SVGPathElement>(null);

	const svgBox = useMemo(() => {
		return {
			width: width || (isVertical ? weight : length),
			height: height || (isVertical ? length : weight),
		};
	}, [length, weight, isVertical, width, height]);

	return (
		<svg
			viewBox={viewBox || `0 0 ${svgBox.width} ${svgBox.height}`}
			className={`AnimatedLine${shouldAnimate ? ' animate' : ''} ${animateType}`}
			width={svgBox.width}
			height={svgBox.height}
			style={{
				['--anim-line-length' as string]: length + 'px',
				['--anim-line-duration' as string]: typeof duration === 'number' ? duration + 'ms' : duration,
				['--anim-line-delay' as string]: typeof delay === 'number' ? delay + 'ms' : delay,
			}}
			xmlns='http://www.w3.org/2000/svg'
		>
			<path
				ref={pathRef}
				strokeWidth={weight}
				stroke={color}
				fill={fill}
				d={path || `M ${isVertical ? weight : 0} ${isVertical ? 0 : weight} ${isVertical ? 'V' : 'H'} ${length}`}
				pathLength={length}
			/>
		</svg>
	);
};

export default AnimatedLine;
