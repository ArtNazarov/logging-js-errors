

function MonitorErrors(logger, callback){
	window.addEventListener('error', function (e) {
		logger(e, callback);
	});
};

function LogJSError(e, callback){
	var xhr = new XMLHttpRequest();
    var lineno = e.lineno;
	var body = `location=${document.location.href}&errorLine=${encodeURIComponent(lineno)}&errorMessage=${encodeURIComponent(e.message)}`;
	xhr.open("POST", '/log-js-error.php', true);
	xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
	xhr.onreadystatechange = function() { //Вызывает функцию при смене состояния.
    if(xhr.readyState == XMLHttpRequest.DONE && xhr.status == 200) {
        callback(e, xhr.response);
    };
};
	xhr.send(body);
}

MonitorErrors( 
	LogJSError, 
	(e, response)=>{ console.log('sended'); console.log(e); console.log(response); }
	);
