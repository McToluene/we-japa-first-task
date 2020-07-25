import { createServer } from "http";
import requestHandler from "./requestHandler.js";

const PORT = 8080;

createServer(requestHandler).listen(PORT, function onStart() {
  console.log(`Server running on port ${PORT}`);
});
