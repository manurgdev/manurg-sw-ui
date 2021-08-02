module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    setupFilesAfterEnv: ['./jest.setup.ts'],
    testPathIgnorePatterns: ['<rootDir>/.next/', '<rootDir>/node_modules/', '<rootDir>/coverage', '<rootDir>/dist'],
    moduleDirectories: ['<rootDir>/node_modules', '<rootDir>/pages', '<rootDir>/components'],
    coverageDirectory: 'coverage',
    collectCoverageFrom: ['pages/**/*.{js,tsx,ts,jsx}', 'components/**/*.[js,jsx,ts,tsx]'],
    coverageThreshold: {
        global: {
            branches: 0,
            functions: 0,
            lines: 0,
            statements: 0
        }
    },
    transform: {
        '^.+\\.ts?$': 'ts-jest',
        '^.+\\.tsx?$': 'ts-jest',
        "^.+\\.svg$": "<rootDir>/svgTransform.js"
    },
    "globals": {
        "ts-jest": {
            "tsConfig": './tsconfig.json'
        }
    }
};