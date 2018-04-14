var sshell = require('../sshell');
var fs = require('fs');

exports.plugin = function (list, loader) {};

sharedScripts.install_package = function (con, package) {
  var script = fs.readFileSync('scripts/pacapt', 'UTF-8');

  return sshell.runBashScriptAsRoot(con, script, '--noconfirm -Sy')
    .then(() => sshell.runBashScriptAsRoot(con, script, '--noconfirm -S ' + package));
};