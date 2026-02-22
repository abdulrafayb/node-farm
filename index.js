const fs = require('fs');
const http = require('http');
const url = require('url');

///////////////////////////////
// FILES

// blocking, synchronous way
/* const textIn = fs.readFileSync('./txt/input.txt', 'utf-8');
console.log(textIn);

const textOut = `This is what we know about the avocado: ${textIn}.\nCreated on timestamp ${Date.now()}`;
fs.writeFileSync('./txt/output.txt', textOut);
console.log(textOut); */

// non-blocking, asynchronous way
/* fs.readFile('./txt/start.txt', 'utf-8', (err, data1) => {
  if (err) return console.log('ERROR!');
  fs.readFile(`./txt/${data1}.txt`, 'utf-8', (err, data2) => {
    console.log(data2);
    fs.readFile(`./txt/append.txt`, 'utf-8', (err, data3) => {
      console.log(data3);
      fs.writeFile('./txt/final.txt', `${data2}\n${data3}`, 'utf-8', (err) => {
        console.log('Your file has been written!');
      });
    });
  });
});
console.log('Will read file!'); */

/* NodeJS is built around the philosophy of callbacks, that is how NodeJS implements asynchronous operations by calling callbacks as soon as the operation that it's doing has been finished */

/* arrow functions doesn't get it's own this keyword, so it uses the this keyword from the parent function and that is called the lexical this keyword while a normal always gets it's own this keyword */

///////////////////////////////
// SERVER

const server = http.createServer((req, res) => {
  // console.log(req);
  const pathName = req.url;

  if (pathName === '/' || pathName === '/overview') {
    res.end('This is the overview');
  } else if (pathName === '/product') {
    res.end('This is the product');
  } else {
    res.writeHead(404, {
      'Content-type': 'text/html',
      'my-own-header': 'hello-world',
    });
    // res.end('Page not found!');
    res.end('<h1>Page not found!</h1>');
  }
});

server.listen(8000, '127.0.0.1', () => {
  console.log('Listening to requests on port 8000');
});

/* listen accepts a couple of parameters the first one is port and a port is a sub-address on a certain host, and a host is what we specify next we don't actually need to specify it and then it'll default to local host but we can still explicitly specify local host so it has the above address by default and local host simply means the current computer so the computer that the program is currently running in and again this is a standard ip address 127.0.0.1 for that local host */

/* routing basically means implementing different actions for different URL's, now routing can become very complicated in a big, real world application so in that case we use a tool like express to make it easier and just one final thing about the routing is that these routes defined here in our code and the routes that we put in the URL's in the browser have nothing to do with files and folders in our project's file system */

/* let's implement very simple routing here in this server, now the first step is to be actually able to analyze the URL, and for that, we use yet another built-in node module which is called URL, we don't need it for simple URL's but for complex stuff like parameters in URL's as it helps us in basically parsing the parameters that we get in the URL's and their values into a nicely formatted object */

/* when the program runs we get two requests meaning the callback function executed twice, so when we are using a browser it automatically performs a request for the website's favicon and in our case we don't have a favicon so we can ignore it */

/* something more that writeHead can do is to also send headers and to send headers we specify an object, an http header is basically a piece of information about the response that we sending back, and there are many different standard headers that we can specify to inform the browser or whatever client is receiving a response about the response itself, for example, one of the standard headers is to inform the browser of the content type and set it to html and just like that now the browser is actually expecting html */
