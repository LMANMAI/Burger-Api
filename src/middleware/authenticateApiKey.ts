export const authenticateApiKey = (req: any, res: any, next: any) => {
  console.log("desde le middleware");
  const apiKey = req.headers["api-key"];
  if (!apiKey || apiKey !== process.env.API_KEY) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  next();
};
