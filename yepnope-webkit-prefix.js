/*! Copyright (c) 2012 Jean-Philippe Bidegain (http://jp.bidega.in)
* Webkit Prefix for Yepnope JS
*/

(function(yepnope){
	var isWebkit = navigator.appVersion.match(/WebKit/i) ? true : false;
	yepnope.addPrefix('webkit', function(resourceObj) {
		if( !isWebkit ) {
			resourceObj.bypass = true;
		}
		return resourceObj;
	});
})(this.yepnope);
