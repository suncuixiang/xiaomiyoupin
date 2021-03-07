module.exports = {
	lintOnSave: false, 
	productionSourceMap: false,
	devServer: {
		proxy: {
			'/mi': {
				target: 'https://m.xiaomiyoupin.com',
				changeOrigin: true,
				pathRewrite:{
					'^/mi':''
				}
			},
			'/server': {
				target: 'http://127.0.0.1:9999',
				changeOrigin: true,
				pathRewrite:{
					'^/server':''
				}
			}
		}
	}
};
