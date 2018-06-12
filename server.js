const http = require("http");

const server = http.createServer((request, response) => {
  response.write("Hello, world!!!!!!!!!!");
  console.log("Debug request", request.url);

  //setTimeout(() => {
  response.end();
  // }, 3000); //will take 3 seconds to charge the page
});

server.listen(3000);

//every time you change the content, you have to kill your server with CTRL C and relaucnh with : node server.js
//in web you write: localhost:3000 and refresh
