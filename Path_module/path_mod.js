//Path Module:

const path=require('path');

//To know dir name
console.log(path.dirname("F:/NodeJS Rivision/Path_module/path_mod.js"));

//to know extention name
console.log(path.extname("F:/NodeJS Rivision/Path_module/path_mod.js"));

//To know file naame:
console.log(path.basename("F:/NodeJS Rivision/Path_module/path_mod.js"));

//To know all structire of file
console.log(path.parse("F:/NodeJS Rivision/Path_module/path_mod.js"));

//To Know only pth
const a=path.parse("F:/NodeJS Rivision/Path_module/path_mod.js");
console.log(a.name);

//To know root
const b=path.parse("F:/NodeJS Rivision/Path_module/path_mod.js");
console.log(b.root);
