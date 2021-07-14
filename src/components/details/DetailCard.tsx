interface DetailCardProps {
	icon: React.ReactNode;
}

const DetailCard: React.FC<DetailCardProps> = ({ children, icon }) => {
	return (
		<div className="flex flex-col items-center p-8 w-full rounded-lg bg-white space-y-6">
			{icon}
			<div>
				<p className="text-center text-black text-base">{children}</p>
			</div>
		</div>
	);
};

export default DetailCard;
