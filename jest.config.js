const config = {
  preset: "ts-jest",
  testEnvironment: "node",
  transform: {
    "^.+\\.js$": "babel-jest", // This will use Babel to transpile JS files
  },
};
