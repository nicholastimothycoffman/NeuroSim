// craco.config.js
module.exports = {
	babel: {
		plugins: [
			["@babel/plugin-proposal-class-properties", { "loose": true }],
			["@babel/plugin-proposal-private-methods", { "loose": true }],
			["@babel/plugin-transform-private-property-in-object", { "loose": true }]
		]
	}
};

