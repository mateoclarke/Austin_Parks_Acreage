// stream in feature collections -> stream out individual features

var es = require('event-stream');
var JSONStream = require('JSONStream');


process.stdin
  .pipe(JSONStream.parse('features.*'))
  .pipe(JSONStream.stringify(false))
  .pipe(process.stdout);
