import { parse } from "querystring";

export default (req, res) => {
  if (req.method === "GET") {
    res.writeHead(200, { "Content-Type": "text/plain" });
    res.end("Hello World, Welcome to WeJapa Internships");
  } else if (req.method === "POST") {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
    });

    req.on("end", () => {
      const name = parse(body).name;
      res.end(`Hello ${name}, Welcome to WeJapa Internships`);
    });
  }
};
