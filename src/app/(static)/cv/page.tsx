'use client';
import { useCallback, useEffect, useRef, useState } from 'react';
import Headline from '../_components/Headline';
import SubHeadline from './SubHeadline';
import TimelineItem from './TimelineItem';
import StructuredJob from './StructuredJob';
import StructuredEducation from './StructuredEducation';
import workHistory from '@/app/_data/work-history.json';
import SkillChip from './SkillChip';

const CVPage = () => {
	const eduSectionRef = useRef(null);
	const jobSectionRef = useRef(null);
	const [currentJobStage, setCurrentJobStage] = useState(0);
	const [currentEduStage, setCurrentEduStage] = useState(0);
	const jobAnimationEndHandler = useCallback((evt: AnimationEvent) => {
		setCurrentJobStage((stage) => stage + 1);
	}, []);
	const eduAnimationEndHandler = useCallback((evt: AnimationEvent) => {
		setCurrentEduStage((stage) => stage + 1);
	}, []);

	useEffect(() => {
		const jobIntersectionObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setCurrentJobStage(1);
						jobIntersectionObserver.disconnect();
					}
				}
			},
			{ threshold: 0.25 }
		);
		if (jobSectionRef.current && !currentJobStage) {
			jobIntersectionObserver.observe(jobSectionRef.current);
		}
		return () => {
			jobIntersectionObserver.disconnect();
		};
	}, [currentJobStage]);

	useEffect(() => {
		const eduIntersectionObserver = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setCurrentEduStage(1);
						eduIntersectionObserver.disconnect();
					}
				}
			},
			{ threshold: 0.25 }
		);
		if (eduSectionRef.current && !currentEduStage) {
			eduIntersectionObserver.observe(eduSectionRef.current);
		}
		return () => {
			eduIntersectionObserver.disconnect();
		};
	}, [currentEduStage]);

	return (
		<section className='cv-page'>
			<Headline text='C.V.' />
			<section id='skills' className='mb-8'>
				<SubHeadline text='Skills' />
				<ul>
					{workHistory.skills.map((skill: { id: string; name: string; type: string }) => (
						<li key={skill.id} className='m-1 inline-block'>
							<SkillChip text={skill.name} skillType={skill.type} />
						</li>
					))}
				</ul>
			</section>
			<section ref={jobSectionRef} id='experience'>
				<SubHeadline text='Experience' />
				{workHistory.experience.map((job, i, arr) => (
					<TimelineItem
						key={job.id}
						animationEndHandler={jobAnimationEndHandler}
						shouldAnimateCircle={currentJobStage >= 2 * i + 1}
						shouldAnimateLine={currentJobStage >= 2 * i + 2}
						shouldShowLine={i + 1 < arr.length}
					>
						<StructuredJob jobData={job} />
					</TimelineItem>
				))}
			</section>
			<section ref={eduSectionRef} id='education'>
				<SubHeadline text='Education' />
				{workHistory.education.map((school, i, arr) => (
					<TimelineItem
						key={school.id}
						shouldAnimateCircle={currentEduStage >= 2 * i + 1}
						shouldAnimateLine={currentEduStage >= 2 * i + 2}
						animationEndHandler={eduAnimationEndHandler}
						shouldShowLine={i + 1 < arr.length}
						lineDuration='400ms'
					>
						<div>
							<StructuredEducation
								school={school.school}
								degree={school.degree}
								location={school.location}
								startDate={school.startDate}
								endDate={school.endDate}
							/>
						</div>
					</TimelineItem>
				))}
			</section>
		</section>
	);
};

export default CVPage;
