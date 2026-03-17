import Chip from '@/app/_components/Chip';

const bgColorMap: { [key: string]: string } = {
	language: 'bg-pink-mist-100/30',
	framework: 'bg-banana-cream-200/30',
	build_tool: 'bg-aquamarine-100/30',
	library: 'bg-jasmine-200/30',
	tooling: 'bg-emerald-200/30',
	standards: 'bg-vibrant-coral-100/30',
	practices: 'bg-cool-sky-100/30',
};

const SkillChip = ({
	skillType,
	text,
	customClassName,
}: {
	skillType: string;
	text: string;
	customClassName?: string;
}) => {
	return (
		<Chip
			color={bgColorMap[skillType]}
			text={text}
			borderColor='border-slate-500'
			textColor='text-slate-600'
			customClassName={`border-1 ${customClassName}`}
		/>
	);
};

export default SkillChip;
