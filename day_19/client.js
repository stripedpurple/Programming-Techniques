var http = require("http");

var request = http.request(
    {
        hostname: "austinisa.ninja",
        path: "/resume",
        method: "GET",
        headers: {Accept: "text/html"}
    }, function (res) {
        console.log(res.body);
    }
);

request.end();
