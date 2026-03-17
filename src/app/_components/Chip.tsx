const Chip = ({
	color,
	text,
	textColor,
	borderColor,
	customClassName = '',
}: {
	color: string;
	text: string;
	textColor: string;
	borderColor: string;
	customClassName?: string;
}) => {
	return (
		<span
			className={`Chip ${color} ${borderColor} px-4 py-0.5 inline-block rounded-full ${textColor} font-medium text-sm${customClassName ? ' ' + customClassName : ''}`}
		>
			{text}
		</span>
	);
};

export default Chip;
