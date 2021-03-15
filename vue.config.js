module.exports = {
	lintOnSave: false, 
	productionSourceMap: false,
	devServer: {
		proxy: {
			'/mi': {
				target: 'https://m.xiaomiyoupin.com',
				// ws: true,
				changeOrigin: true,
				pathRewrite:{
					'^/mi':''
				}
			},
			'/micart': {
				target: 'https://trade.m.xiaomiyoupin.com',
				changeOrigin: true,
				pathRewrite:{
					'^/micart':''
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
