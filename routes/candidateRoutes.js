import express from "express";
import {
  CandidateCountByStatus,
  CreateCandidate,
  UpdateCandidateStatus,
  getAllCandidates,
} from "../controllers/condidate.controller.js";
const router = express.Router();

router.post("/", CreateCandidate);
router.get("/", getAllCandidates);
router.get("/data", CandidateCountByStatus);
router.put("/:id", UpdateCandidateStatus);

export default router;
