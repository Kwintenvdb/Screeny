module.exports = {
	"env": {
		"browser": true,
		"es6": true
	},
	"extends": "eslint:recommended",
	"parser": "babel-eslint",
	"parserOptions": {
		"sourceType": "module"
	},
	"plugins": [
		"html"
	],
	"settings": {
		"import/resolver": {
		  "webpack": {
			"config": "build/webpack.base.conf.js"
		  }
		}
	},
	"rules": {
		// "import/extensions": ["error", "always", {
		//     "js": "never",
		//     "vue": "never"
		// }],
		"indent": [
			"error",
			"tab"
		],
		"quotes": [
			"error",
			"double"
		],
		"semi": [
			"error",
			"always"
		]
	}
};