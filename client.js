const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });

  conn.on('connect', () => {
    console.log('Successfully connected to server')
    conn.write('Name: AAA')
  })

  // interpret incoming data as text
  conn.setEncoding("utf8");

  // create event handler to handle incoming data
  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
};

console.log("Connecting ...");

module.exports = connect