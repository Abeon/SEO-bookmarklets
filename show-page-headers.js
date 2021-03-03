javascript:(function(){function%20read(url){var r=new XMLHttpRequest();r.open('HEAD',url,false);r.send(null);return r.getAllResponseHeaders();}alert(read(window.location))})();
