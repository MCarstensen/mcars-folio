module.exports = {
	presets: [
		[
			'next/babel',
			// '@babel/preset-typescript',
			{ 
				'preset-react': { 
					runtime: 'automatic' ,
				},
			}
		],
	],
	plugins: [
		'babel-plugin-macros', 
		['styled-components', { ssr: true }]],
}
