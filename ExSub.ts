
import * as fs from 'fs';
import { parse } from 'subtitle';

let output='';
fs.createReadStream('./friends.s01e01.srt')
  .pipe(parse())
  .on('data', node => {
    output+=node.data.text; 
  })
  .on('error', console.error)
  .on('finish', () => {
    filehandle:fs.writeFileSync('output.txt',output);
    console.log('parser has finished')
   
  });

  