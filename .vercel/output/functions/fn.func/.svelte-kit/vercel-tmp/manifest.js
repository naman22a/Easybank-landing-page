export const manifest = {
	appDir: "_app",
	appPath: "_app",
	assets: new Set(["favicon.png","images/bg-intro-desktop.svg","images/bg-intro-mobile.svg","images/icon-api.svg","images/icon-budgeting.svg","images/icon-close.svg","images/icon-facebook.svg","images/icon-hamburger.svg","images/icon-instagram.svg","images/icon-onboarding.svg","images/icon-online.svg","images/icon-pinterest.svg","images/icon-twitter.svg","images/icon-youtube.svg","images/image-confetti.jpg","images/image-currency.jpg","images/image-mockups.png","images/image-plane.jpg","images/image-restaurant.jpg","images/logo.svg"]),
	mimeTypes: {".png":"image/png",".svg":"image/svg+xml",".jpg":"image/jpeg"},
	_: {
		client: {"start":"_app/immutable/entry/start.f5f8d3da.js","app":"_app/immutable/entry/app.2c643273.js","imports":["_app/immutable/entry/start.f5f8d3da.js","_app/immutable/chunks/index.131e7a0b.js","_app/immutable/chunks/singletons.0303312f.js","_app/immutable/entry/app.2c643273.js","_app/immutable/chunks/index.131e7a0b.js"],"stylesheets":[],"fonts":[]},
		nodes: [
			() => import('../output/server/nodes/0.js'),
			() => import('../output/server/nodes/1.js')
		],
		routes: [
			
		],
		matchers: async () => {
			
			return {  };
		}
	}
};
