const replace = require("replace");

replace({
    regex: "latest",
    replacement: process.env.branch,
    paths: ['./package.json'],
    recursive: true,
    silent: true,
});