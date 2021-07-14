const Badge: React.FC = ({ children }) => {
	return (
		<div className="m-0.5 py-0.5 px-1 select-none rounded-sm bg-blue font-body font-medium text-white text-xs">
			{children}
		</div>
	);
};

export default Badge;
