var marked = require('marked');
var fs = require('fs');

var readMe = fs.readFileSync('Android100.md', 'utf-8');
var markdownReadMe = marked(readMe);

fs.writeFileSync('./Android100.html', markdownReadMe);