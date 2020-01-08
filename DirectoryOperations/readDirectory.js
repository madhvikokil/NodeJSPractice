const fs = require('fs')
const path = require('path')

const folderPath = '/home/madhavi/Desktop/nodeFirstProgram/DirectoryOperations'

// readdirSyn is used to read the directory which includes files, folders and subfolders
fs.readdirSync(folderPath).map(fileName => {
    console.log("Filename : ",fileName);
    console.log( path.join(folderPath, fileName)
    )
  })

