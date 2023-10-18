const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
	transpileDependencies: true,
	// publicPath: '/healthcare-app/'
	publicPath: process.env.NODE_ENV === 'production' ? '/healthcare-app/' : '/'
});

