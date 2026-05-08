const fs=require('fs')

fs.mkdir("batch-42",(err)=>
{
if(err)
{
console.log(err);
}
console.log("New folder  created");
})

//how to write a message to the notepad file

fs.writeFile("batch-42/ajwin.txt","Ajwin is directer",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log("new file created message has shared");
})


fs.appendFile("batch-42/ajwin.txt","  meena is a mentor",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log("new file created message has shared");
})

// writeFile   (No replae,  New message will save)
// appendFile  (keep the record and also save the new message)

//rename the file name
fs.rename("batch-42/ajwin.txt","vikki.txt",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log('file renamed successfully'); 
})
// complete the delete file

fs.unlink("batch-42/vikki.txt",(err)=>
{
    if(err)
    {
        console.log(err);
    }
    console.log('file deleted');
})