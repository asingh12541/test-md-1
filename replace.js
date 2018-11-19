const replace = require("replace");

replace({
    regex: "master",
    replacement: process.env.branch,
    paths: ['./package.json'],
    recursive: true,
    silent: true,
});