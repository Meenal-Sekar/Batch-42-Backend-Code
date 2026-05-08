const fs=require('fs')
fs.readdir("batch-42",(err,files)=>
{
if(err)
{
console.log(err);
}
else
{
console.log(files);  //index.html,new1.txt, style.css

files.forEach((file)=>
{
fs.readFile(`batch-42/${file}`,"utf-8",(err,data)=>
{
if(err)
{
console.log(err);
}
console.log(data);
});
});
}
});