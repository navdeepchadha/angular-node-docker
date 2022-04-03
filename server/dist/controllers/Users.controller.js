"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Users = void 0;
const routes_decorator_1 = require("../decorators/routes.decorator");
const jwt = require("jsonwebtoken");
const Axios = require("axios");
var axios = Axios.default;
var roles = {
    admin: 1,
    user: 2,
    guest: 3,
};
class Users {
    getCharacters(req, res) {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(403).send("A token is required for authentication");
        }
        try {
            const decoded = jwt.verify(token, "sE6ret0gfknf");
            if (decoded) {
                axios
                    .get("https://the-one-api.dev/v2/character", {
                    headers: {
                        Authorization: "Bearer GvPeIdOLVv-28Xa_iJOj",
                    },
                })
                    .then(function (response) {
                    res.status(200).json({
                        data: response.data.docs
                    });
                })
                    .catch(function (error) {
                    res.status(500).send({ message: error.message || "Server Error" });
                });
            }
            else {
                return res.status(401).send("Invalid Token");
            }
        }
        catch (err) {
            return res.status(401).send("Invalid Token");
        }
    }
    login(req, res) {
        const token = jwt.sign({ id: req.body.username, user_type_id: req.body.password }, "sE6ret0gfknf", { expiresIn: "48h" });
        res.send({ token: token, role: roles[req.body.username] });
    }
}
__decorate([
    (0, routes_decorator_1.default)({
        path: "/characters",
        method: "get",
    })
], Users.prototype, "getCharacters", null);
__decorate([
    (0, routes_decorator_1.default)({
        path: "/login",
        method: "post",
    })
], Users.prototype, "login", null);
exports.Users = Users;
//# sourceMappingURL=Users.controller.js.map