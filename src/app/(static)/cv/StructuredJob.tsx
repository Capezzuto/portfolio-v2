import React from 'react';
import SkillChip from './SkillChip';
import workHistory from '@/app/_data/work-history.json';

type JobTask = {
	description: string;
	technologies: string[];
};

type Skill = {
	id: string;
	name: string;
	type: string;
};

interface Job {
	id: string;
	company: string;
	role: string;
	startDate: string;
	endDate: string;
	location: string;
	work: JobTask[];
}

const skillsById: { [key: string]: Skill } = workHistory.skills.reduce(
	(obj: { [key: string]: Skill }, skill: Skill) => {
		obj[skill.id] = skill;
		return obj;
	},
	{}
);

const StructuredJob = ({ jobData }: { jobData: Job }) => {
	return (
		<div className='StructuredJob max-w-3xl mb-8'>
			<div className='pl-4 mb-2'>
				<h3 className='font-(family-name:--font-roboto-condensed) lg:text-2xl/6 md:text-xl/5 text-lg/4 font-medium mb-2'>
					{jobData.company} - <span className='font-normal'>{jobData.role}</span>
				</h3>
				<p className='font-(family-name:--font-roboto-condensed) text-slate-600 leading-5'>{jobData.location}</p>
				<p className='font-(family-name:--font-roboto-condensed) text-slate-600 leading-5'>
					{jobData.startDate} - {jobData.endDate}
				</p>
			</div>
			<ul className='pl-10 list-image-(--work-list-style) list-ouside marker:text-[2em] marker:leading-[1em]'>
				{jobData.work.map((task, i) => (
					<li className='mb-2' key={i}>
						<span className='mr-2' dangerouslySetInnerHTML={{ __html: task.description }}></span>
						{task.technologies.length ? <span aria-label='; Technologies used: '></span> : null}
						{task.technologies.map((id: string) => (
							<SkillChip
								key={id}
								text={skillsById[id]?.name ?? ''}
								skillType={skillsById[id]?.type ?? ''}
								customClassName='mr-1 text-xs not-hover:bg-transparent cursor-default'
							/>
						))}
					</li>
				))}
			</ul>
		</div>
	);
};

export default StructuredJob;
