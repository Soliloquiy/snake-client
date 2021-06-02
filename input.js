//conn is returned in function, but we need it to be usable outside
//i.e in the definition of handleUserInput
let connection;

const setupInput = function (conn) {
  //Allows for sending data to server
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  //Allows for user input utilizing a callback
  stdin.on("data", handleUserInput);
  
  return stdin;
};

const handleUserInput = function (data) {
  if (data === '\u0003') {
    process.exit();
  }
  if (data === 'w') {
    connection.write("Move: up")
  }
  if (data === 'a') {
    connection.write("Move: left")
  }
  if (data === 's') {
    connection.write("Move: down")
  }
  if (data === 'd') {
    connection.write("Move: right")
  }
};

module.exports = { setupInput }