var should      = require("should")
var path        = require("path")
var fs          = require("fs")
var exec        = require("child_process").exec
var j2h         = require("../")

var inDir = path.join(__dirname, "in")
var outDir = path.join(__dirname, "out")

function inPaths(paths){
  return paths.map(function(p){return path.join(inDir,p)})
}

function cleanUp(done){
  if (fs.existsSync(outDir)) {
    exec("rm -rf " + outDir, function(){
      done()
    })
  }
}

describe("given non-unique output filenames", function(){

  before(function(done) {
    j2h.process_files(inPaths([
      'foo.md',
      '2099-12-31-foo.md',
      'bizarro/foo.md'
    ]), outDir, []);
    done();
  })

  it("should only output the first one", function(done){
    fs.readdirSync(outDir).should.eql(['_data.json','foo.md']);
    fs.readFileSync(path.join(outDir,'foo.md'), {encoding:'utf8'}).should.eql('A');
    done();
  })
})

describe("given date in both filename and YAML", function(){

  before(function(done) {
    j2h.process_files(inPaths([
      '2099-12-31-foo.md'
    ]), outDir, []);
    done();
  })

  it("should use the YAML date", function(){
    fs.readFileSync(path.join(outDir,'_data.json'), 'utf8', function (err, data) {
      JSON.parse(data)['foo']['date'].should.eql('1099-01-01 00:01');
    });
  })
})

afterEach(cleanUp)
