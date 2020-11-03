const server = require("./api/server.js");

const PORT = process.env.PORT || 5100;

server.listen(PORT, () => {
  console.log(`API running on port ${PORT}`);
});
