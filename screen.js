var page = require('webpage').create(),
		system = require('system');		
url = system.args[1];
file_path = system.args[2];
page.open(url, function() {
  page.render(file_path);
  phantom.exit();
});