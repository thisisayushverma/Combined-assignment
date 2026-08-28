import { asyncHandler } from "../utils/asyncHandler.js";
import jwt from "jsonwebtoken";

const authMiddleware = asyncHandler((req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];

  //   if (req.headers.authorization) {
  //     console.log("i came 1");
  //     token = req.headers.authorization.split(" ")[1];
  //   } else {
  //     console.log("i came 2");
  //     // console.log(req.headers.cookie);

  //     token = req.headers.cookie.split("=")[1];
  //   }
  console.log("token", token);

  if (!token) {
    return res.status(401).json({
      staus: 401,
      error: "Unauthorized access",
      data: null,
    });
  }

  // const accessToken = token.split(" ")[1];
  try {
    console.log("process.env.ACCESS_TOKEN", process.env.ACCESS_TOKEN);

    const decoded = jwt.verify(token, process.env.ACCESS_TOKEN);
    console.log("Decoded - ",decoded);
    
    req.user = decoded;
    next();
  } catch (error) {
    console.log("hello", error);

    return res.status(401).json({
      status: 401,
      error: "Unauthorized access",
    });
  }
});

export { authMiddleware };
