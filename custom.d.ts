declare module "*.svg" {
	const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>;
	export default content;
}

declare module "*.pdf" {
	const content: any;
	export default content;
}
