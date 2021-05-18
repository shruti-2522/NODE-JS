const os=require("os");

//To know os architeture:
console.log(os.arch());

//To know free memory
const fm=os.freemem();

//convert byte into gb
console.log(`${fm/1024/1024/1024}`);

//To know total memory
const tm=os.totalmem();
console.log(`${tm/1024/1024/1024}`);

//To know host name
console.log(os.hostname());

//To know platform
console.log(os.platform());

//To know tmpdir
console.log(os.tmpdir());

//To know type
console.log(os.type());