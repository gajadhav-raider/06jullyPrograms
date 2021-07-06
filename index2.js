const fs= require("fs");
//fs.writeFileSync("read.txt","This is awesome");
//fs.appendFileSync("read.txt"," My Name is Gaurav");
//fs.renameSync("read.txt","readWrite.txt");
  const befdata= fs.readFileSync("readwrite.txt");
      data= befdata.toLocaleString();
  console.log(data);