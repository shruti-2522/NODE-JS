//Split a web address into readable parts:
var url=require('url');
var addr='http://localhost:3000/a.htm?name=shruti&rollno=04';
var q=url.parse(addr,true);

console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var data=q.query;

console.log(data.name);




