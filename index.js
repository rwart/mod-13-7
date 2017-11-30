var fs = require('fs');
fs.readdir('./', function (err, files) {
  if (err) throw(err);
  fs.writeFile('./fileList.txt', files.join('\n'), function (err) {
    if (err) throw(err);
    console.log('ok');
  });
});
