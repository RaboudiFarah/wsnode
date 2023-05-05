const fs = require("fs");

// create a file
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log("File created!");

  // read file
  fs.readFile("welcome.txt", "utf8", (err, data) => {
    if (err) throw err;
    console.log(data);
  });
});
