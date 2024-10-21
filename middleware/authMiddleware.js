const JWT = require("jsonwebtoken");

module.exports = async (req, res, next) => {
  try {
    const authHeader = req.headers["authorization"];
    
    // Check if authorization header exists and starts with 'Bearer'
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).send({
        success: false,
        message: "Authorization header missing or malformed",
      });
    }

    // Extract the token
    const token = authHeader.split(" ")[1];

    // Verify the token
    JWT.verify(token, process.env.JWT_SECRET, (err, decode) => {
      if (err) {
        return res.status(401).send({
          success: false,
          message: "Invalid or expired token",
        });
      } else {
        // Attach the user ID to the request body
        req.body.userId = decode.userId;
        next();
      }
    });
  } catch (error) {
    console.log("Authorization error:", error);
    return res.status(401).send({
      success: false,
      message: "Authorization failed",
    });
  }
};
