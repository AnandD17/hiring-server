import { Sequelize } from "sequelize";

// Connection parameters
export const sequelize = new Sequelize(
  "hire",
  "hire_user",
  "5ucse3AzEM8mHbQn5PMuL0JluNFHlwZ6",
  {
    dialect: "postgres",
    host: "dpg-cnuo74qcn0vc73b7th4g-a.oregon-postgres.render.com",
    port: 5432,
    dialectOptions: {
      ssl: {
        require: true, // Require SSL/TLS encryption
        rejectUnauthorized: false, // Don't reject connections with untrusted certificates
      },
    },
  }
);

export const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
