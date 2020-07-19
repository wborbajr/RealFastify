const visitor = require("./visitor");
const def = require("./default");
const fn = require("./fnRoutes");

module.exports = [...def, ...visitor, ...fn];
