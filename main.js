const http = require("http");

const host = "192.168.86.91";
// const host = "localhost";
const port = 3000;


function requestListener(req, res) {
    let paths = req.url.split("/").slice(1);
    let type = req.headers["content-type"];
    console.log(`${req.method} ${req.url}${type ? ` ${type}` : ""}`);
}
const server = http.createServer(requestListener);
server.listen(port, host, () => {
    console.log(`Server is running on http://${host}:${port}`);
});