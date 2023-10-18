const jwt = require("jsonwebtoken");

exports.verifyToken = (req, res, next) => {
  //  const token = req.headers["authorization"];
  const token = req.headers["authorization"].split(" ")[1];

  console.log(token);
  if (!token) {
    return res.status(403).send("Token is missing");
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.userId = decoded.userId;
    next();
  } catch (err) {
    return res.status(401).send("Invalid token");
  }
};
