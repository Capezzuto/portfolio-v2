import React from 'react';
const Headline = ({ text }: { text: string }) => {
	return <h1 className='font-(family-name:--font-fira-code) text-3xl md:text-4xl lg:text-5xl mb-8 md:mb-12'>{text}</h1>;
};

export default Headline;
