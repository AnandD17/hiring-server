import { sequelize } from "../config/db.js";
import { DataTypes } from "sequelize";
import { CANDIDATE_STATUS_ENUM } from "../utils/data.js";

const Candidate = sequelize.define("candidate", {
  id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },

  name: {
    type: DataTypes.STRING,
  },

  email: {
    type: DataTypes.STRING,
  },

  phone: {
    type: DataTypes.STRING,
  },

  skills: {
    type: DataTypes.TEXT,
  },
  qualification: {
    type: DataTypes.TEXT,
  },
  experience: {
    type: DataTypes.INTEGER,
  },
  current_ctc: {
    type: DataTypes.INTEGER,
  },
  expected_ctc: {
    type: DataTypes.INTEGER,
  },
  status: {
    type: DataTypes.STRING,
    enum: CANDIDATE_STATUS_ENUM,
    defaultValue: "applied",
  },
});

Candidate.sync().then(() => {
  console.log("Candidate Model synced");
});

export default Candidate;
