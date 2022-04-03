import { Request, Response } from "express";
import Router from "../decorators/routes.decorator";
import * as jwt from "jsonwebtoken";
import * as Axios from "axios";

var axios = Axios.default;

var roles: any = {
  admin: 1,
  user: 2,
  guest: 3,
};

export class Users {
  @Router({
    path: "/characters",
    method: "get",
  })
  getCharacters(req: Request, res: Response) {
    const token = req.headers.authorization; // Token received from the frontend
    if (!token) {
      return res.status(403).send("A token is required for authentication");
    }
    try {
      const decoded: any = jwt.verify(token, "sE6ret0gfknf");
      if (decoded) {
        axios
          .get("https://the-one-api.dev/v2/character", {
            headers: {
              Authorization: "Bearer GvPeIdOLVv-28Xa_iJOj", // After signing up the-one-api we get this bearer token
            },
          })
          .then(function (response) {
            res.status(200).json({
              data: response.data.docs
            });
          })
          .catch(function (error) {
            // handle error
            res.status(500).send({ message: error.message || "Server Error" });
          });
      } else {
        return res.status(401).send("Invalid Token");
      }
    } catch (err) {
      return res.status(401).send("Invalid Token");
    }
  }

  @Router({
    path: "/login",
    method: "post",
  })
  login(req: Request, res: Response) {
    const token = jwt.sign(
      { id: req.body.username, user_type_id: req.body.password },
      "sE6ret0gfknf",
      { expiresIn: "48h" }
    );
    res.send({ token: token, role: roles[req.body.username] });
  }
}
