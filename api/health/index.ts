import type { Request, Response } from "express";

export default function handler(req: Request, res: Response) {
  if (req.method !== "GET") {
    res.setHeader("Allow", "GET");
    return res.status(405).end("Method Not Allowed");
  }

  res.status(200).json({ status: "ok" });
}
