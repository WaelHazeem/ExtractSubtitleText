"use strict";
exports.__esModule = true;
var fs = require("fs");
var subtitle_1 = require("subtitle");
var output = '';
fs.createReadStream('./friends.s01e01.srt')
    .pipe((0, subtitle_1.parse)())
    .on('data', function (node) {
    output += node.data.text;
})
    .on('error', console.error)
    .on('finish', function () {
    filehandle: fs.writeFileSync('output.txt', output);
    console.log('parser has finished');
});
