"use strict";

const autocannon = require("autocannon");
const config = require("../config/ecosystem.config");

const PORT = config.app.port;
const ADDRESS = config.app.ip_address;
const URI = "http://" + ADDRESS + PORT;

autocannon(
  {
    url: URI,
    connections: 100, //default
    pipelining: 1, // default
    duration: 15, // default
  },
  console.log
);

// async/await
async function foo() {
  const result = await autocannon({
    url: URI,
    connections: 100, //default
    pipelining: 1, // default
    duration: 15, // default
  });
  console.log(result);
}

foo();
