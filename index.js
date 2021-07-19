
sha3_256 = require('js-sha3').sha3_256;
var fs = require('fs');
function getFiles (dir, files_){
    files_ = files_ || [];
    let files = fs.readdirSync(dir);
   files.forEach((el, i) => {
        const name = dir + '/' + files[i];
            dushNumber= dir.length;
            files_.push(name.substring(dushNumber+1));
    })
    files_.forEach((el, id)=>{
        el=fs.readFileSync(`test/${el}`,"UTF-8");
        const sharesult=sha3_256(el);
        console.log(files_[id], sharesult);
   })
}

getFiles("test")