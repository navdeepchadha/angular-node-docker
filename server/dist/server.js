"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const e = require("cors");
const app = express();
require("./controllers");
const routes_decorator_1 = require("./decorators/routes.decorator");
app.use(express.static("lotr"));
app.use(e());
app.use(express.urlencoded({ extended: true, limit: '10mb' }));
app.use(express.json());
app.use(routes_decorator_1.appRouter);
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
//# sourceMappingURL=server.js.map