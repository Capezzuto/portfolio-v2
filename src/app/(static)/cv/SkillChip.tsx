import Chip from '@/app/_components/Chip';

const bgColorMap: { [key: string]: string } = {
	language: 'bg-pink-mist-100/30 dark:bg-pink-mist-600/60',
	framework: 'bg-banana-cream-200/30 dark:bg-banana-cream-700/60',
	build_tool: 'bg-aquamarine-100/30 dark:bg-aquamarine-700/60',
	library: 'bg-jasmine-200/30 dark:bg-jasmine-600/60',
	tooling: 'bg-emerald-200/30 dark:bg-emerald-900/60',
	standards: 'bg-vibrant-coral-100/30 dark:bg-vibrant-coral-700/60',
	practices: 'bg-cool-sky-100/30 dark:bg-cool-sky-800/60',
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
			borderColor='border-slate-500 dark:border-slate-300'
			textColor='text-slate-600 dark:text-slate-200'
			customClassName={`border-1 ${customClassName}`}
		/>
	);
};

export default SkillChip;
