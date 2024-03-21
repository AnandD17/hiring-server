import { sequelize } from "../config/db.js";
import Candidate from "../models/candidate.model.js";

export const CreateCandidate = async (req, res) => {
  const {
    name,
    email,
    phone,
    skills,
    qualification,
    experience,
    current_ctc,
    expected_ctc,
  } = req.body;

  if (
    !name ||
    !email ||
    !phone ||
    !skills ||
    !qualification ||
    !experience ||
    !current_ctc ||
    !expected_ctc
  ) {
    return res.status(400).json({ message: "Please fill all the fields" });
  }

  const isCandidateExists = await Candidate.findOne({ where: { email } });
  if (isCandidateExists) {
    return res.status(400).json({ message: "Candidate already exists" });
  }

  Candidate.create({
    name,
    email,
    phone,
    skills,
    qualification,
    experience,
    current_ctc,
    expected_ctc,
  })
    .then((candidate) => {
      res.status(201).json(candidate);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export const getAllCandidates = async (req, res) => {
  const { status } = req.query;
  Candidate.findAll({
    where: status ? { status } : {},
  })
    .then((candidates) => {
      res.status(200).json({ data: candidates, success: true });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export const UpdateCandidateStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;
  Candidate.update({ status }, { where: { id } })
    .then(() => {
      res
        .status(200)
        .json({ message: "Status updated successfully", success: true });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};

export const CandidateCountByStatus = async (req, res) => {
  Candidate.findAll({
    attributes: ["status", [sequelize.fn("count", "status"), "count"]],
    group: ["status"],
  })
    .then((data) => {
      const result = {};
      let totalCount = 0;

      data.forEach((item) => {
        result[item.status] = item.dataValues.count;
        totalCount += Number(item.dataValues.count);
      });

      // Add total count to the result
      result.total = totalCount;
      res.status(200).json({ data: result, success: true });
    })
    .catch((err) => {
      res.status(500).json(err);
    });
};
