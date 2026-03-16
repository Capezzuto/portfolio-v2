import React from 'react';
interface School {
	school: string;
	location: string;
	degree: string;
	startDate: string;
	endDate: string;
}
const StructuredEducation = ({ school, location, degree, startDate, endDate }: School) => {
	return (
		<div className='StructuredJob max-w-4xl pl-4 mb-8'>
			<h3 className='font-(family-name:--font-roboto-condensed) lg:text-2xl/6 md:text-xl/5 text-lg/4 font-medium mb-2'>
				{school} - <span className='font-normal'>{degree}</span>
			</h3>
			<p className='font-(family-name:--font-roboto-condensed) text-slate-600 leading-5'>{location}</p>
			<p className='font-(family-name:--font-roboto-condensed) text-slate-600 leading-5'>
				{startDate} - {endDate}
			</p>
		</div>
	);
};

export default StructuredEducation;
