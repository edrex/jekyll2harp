var fs = require('fs');
var fse = require("fs-extra")
var path = require('path');
var yamlFront = require('yaml-front-matter')

function writeFile(file, content){
  fs.writeFile(file, content, function(err) {
      if(err) {
          console.error(err);
      } else {
          console.log("Wrote " + file);
      }
  });
}

exports.process_files = function (paths, outdir, skip_keys){
  outdir = path.normalize(outdir+path.sep);
  
  if (fs.existsSync(outdir)) {
    console.error("Outdir " + outdir + " exists. Please specify an unused path.");
    return;
  }
  fse.mkdirp(outdir);


  var data = {};
  var re = /((\d{4}-\d{2}-\d{2})-)?((.*)\.([a-z]{1,3}))/;

  paths.reverse().forEach(function(p){
    var match = re.exec(path.basename(p));
    if (match){
      var o = yamlFront.loadFront(p);
      o.date = match[2];
      var outpath = outdir + match[3];
      var docname = match[4];

      if (fs.existsSync(outpath)) {
        console.warn("Output file "+outpath+" exists. Skipping input file "+p+". Please give it a unique name and try again.");
      } else {
        writeFile(outpath, o['__content'].trimLeft());
        delete o['__content'];

        skip_keys.forEach(function(key){
          if (typeof o[key] !== "undefined"){
            delete o[key];
          }
        });
        // collect document metadata
        data[docname] = o;
      }
    }
  });
  // write data.json
  writeFile(outdir+"_data.json", JSON.stringify(data, null, 2));
}