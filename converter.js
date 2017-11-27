var converter = function(path, callback){
  
  var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
  
  if (path == parseInt(path)){
    
    var time = path * 1000;
    var date = new Date(time);
    
    var month = date.getUTCMonth();
    var day = date.getUTCDate();
    var year = date.getUTCFullYear();
    
    month = months[month];
    
    var natural = month + " " + day + ", " + year;
    
    var obj = {"unix": path, "natural": natural}
    callback(obj);
  
  }
  
  var date = new Date(path).getTime();
  var unixDate = date / 1000;
  
  if (isNaN(date)){
    
    var obj = {"unix": null, "natural": null};
    callback(obj);
  }
  var obj = {"unix": unixDate, "natural": path};
  callback(obj);
}

module.exports = converter;
