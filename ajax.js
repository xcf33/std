var page = require('webpage').create(),
		system = require('system');		
request_url = system.args[1];
before = system.args[2];
after = system.args[3];
nid = system.args[4];
url = request_url + '?before=' + before + "&after=" + after + "&nid=" + nid;
page.open(url, function() {
  phantom.exit();
});