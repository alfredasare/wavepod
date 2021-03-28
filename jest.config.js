module.exports = {
	testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/'],
	setupFilesAfterEnv: ['<rootDir>/setupTests.js'],
	moduleNameMapper: {
		'^@/global(.*)$': '<rootDir>/global$1',
		'^@/lib(.*)$': '<rootDir>/lib$1',
		'^@/components(.*)$': '<rootDir>/components$1',
		'^@/utils(.*)$': '<rootDir>/utils$1',
	},
	verbose: true,
};
