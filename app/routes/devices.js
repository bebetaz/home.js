module.exports = function(app, apiurl){
  //app.get('/devices/status', require('./resources/device').status);
  var devices = require('./../resources/devices');
  app.get(apiurl+'/device/status.:format?', devices.status);
  app.get(apiurl+'/device/tree.:format?', devices.tree);
  app.get(apiurl+'/device/events.:format?', devices.events);
  app.get(apiurl+'/device/:device/events.:format?', devices.events);
  app.post(apiurl+'/device/:device/events.:format?', devices.newEvent);
  var devicesResource = app.resource(apiurl.substr(1)+'/device', devices);
  
}