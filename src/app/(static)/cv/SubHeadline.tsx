import React from 'react';
const SubHeadline = ({ text }: { text: string }) => {
	return (
		<h2 className='font-(family-name:--font-fira-code) lg:text-3xl md:text-2xl text-xl lg:mb-6 md:mb-4 mb-3'>{text}</h2>
	);
};

export default SubHeadline;
