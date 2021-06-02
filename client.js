const net = require("net");

// establishes a connection with the game server
const connect = function () {
  const conn = net.createConnection({
    host: "135.23.222.131",
    port: 50542
  });
  

  // interpret incoming data as text
  conn.setEncoding("utf8");

  conn.on('connect', () => {
    console.log('Successfully connected to server')
    // conn.write('Name: AAA')
    // conn.write('Move: up')
    // conn.write('Move: left')
    
    // setTimeout(() => {conn.write('Move: up')}, 3000)
    setTimeout(() => {
      conn.write('Move: down')
      // console.log('working')
    }, 1000);
  })


  // create event handler to handle incoming data
  conn.on('data', (data) => {
    console.log(data)
  })

  return conn;
};

module.exports = {connect}