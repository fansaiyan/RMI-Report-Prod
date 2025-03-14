(function(window) {
	let path = window.location.protocol + '//' + window.location.hostname;
	window.__env = window.__env || {};

	// API url
	window.__env.url = path + ':8069/';
	window.__env.db = 'rmi-survey';
	window.__env.url_smi = 'http://localhost:8070/';
	window.__env.smi_survey_code = 'SMI-SA';

	// window.__env.url = 'http://train.ermi.online/';
	// window.__env.db = 'rmi';
	// window.__env.url_smi = 'http://localhost:8070/';
	// window.__env.smi_survey_code = 'SMI-SA';

	// Whether or not to enable debug mode
	// Setting this to false will disable console output
	window.__env.enableDebug = true;
})(this);
