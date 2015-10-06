'use strict';
var runApplescript = require('run-applescript');
var Promise = require('pinkie-promise');

module.exports = function (bundleId) {
	if (process.platform !== 'darwin') {
		return Promise.reject(new Error('Only OS X systems are supported'));
	}

	var script = 'tell application "Finder" to set app_path to application file id "' + bundleId + '" as string\ntell application "System Events" to get value of property list item "CFBundleName" of property list file (app_path & ":Contents:Info.plist")';

	return runApplescript(script);
};
