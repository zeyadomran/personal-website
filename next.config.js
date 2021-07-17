module.exports = {
	reactStrictMode: true,
	webpack: (config) => {
		config.module.rules.push(
			{
				test: /\.svg$/,
				use: ["@svgr/webpack"],
			},
			{
				test: /\.(pdf|gif|png|jpe?g)$/,
				use: "file-loader?name=[path][name].[ext]",
			}
		);
		return config;
	},
};
