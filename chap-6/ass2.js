var fs=require('fs');
var  data=fs.readFileSync('a.txt','utf-8');
fs.writeFileSync('c.txt',data);

