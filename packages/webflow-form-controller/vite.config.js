import path from 'path'

export default {
	root: `src`,
	server: {
		// So it doesn't conflict with Next.js
		port: process.env.PORT || 3000,
		outDir: '../dist',
		lib: {
		  entry: path.resolve(__dirname, 'src/index.js'),
		  name: 'WebflowForm',
		  fileName: (format) => `webflow-form-controller.${format}.js`
		},
	},
	build: {
		outDir: '../dist',
		lib: {
		  entry: path.resolve(__dirname, 'src/index.js'),
		  name: 'WebflowForm',
		  fileName: (format) => `webflow-form-controller.${format}.js`
		},
		// watch: {
		// 	include: `src/**/*`,
		// },
	},
}