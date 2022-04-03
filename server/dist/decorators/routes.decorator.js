"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.appRouter = void 0;
const express_1 = require("express");
exports.appRouter = (0, express_1.Router)();
const RoutesDecorator = (options) => {
    return (target, propertyKey) => exports.appRouter[options.method](options.path, target[propertyKey]);
};
exports.default = RoutesDecorator;
//# sourceMappingURL=routes.decorator.js.map