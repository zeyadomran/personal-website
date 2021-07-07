import React from "react";

const CopyrightFooter: React.FC = () => {
	return (
		<p className="text-white font-body select-none">
			© {new Date().getFullYear()} Zeyad Omran. All rights reserved
		</p>
	);
};

export default CopyrightFooter;
