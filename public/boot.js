(function(document) {
	function addScript(path, attrs) {
		var element = document.createElement('script');
		element.type = 'text/javascript';
		element.src = path;

		document.head.appendChild(element);
	}

	addScript('/bundle.js');
})(document)