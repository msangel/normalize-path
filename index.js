#!/usr/bin/env node
var program = require('commander');
var inputPath;
program
  .version('0.0.1')
  .arguments('<path> [otherParts...]').action(function(path, otherParts) {
    if(otherParts){
      inputPath = '"'+[path].concat(otherParts).join(' ')+'"';
    } else {
      inputPath = path;  
    }
  })
.parse(process.argv);

if (typeof inputPath === 'undefined') {
    inputPath = process.cwd();
    var regexIndexOf = function(str, regex, startpos) {
    var indexOf = str.substring(startpos || 0).search(regex);
    return (indexOf >= 0) ? (indexOf + (startpos || 0)) : indexOf;
}
   if(regexIndexOf(""+inputPath, /\s/)>-1){
     inputPath = '"'+inputPath+'"'
   }
}

// console.log('inputPath', inputPath);

var path = require('path');
var normal = path.normalize(inputPath);

console.log(normal);