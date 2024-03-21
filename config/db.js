import { Sequelize } from "sequelize";
// Connection parameters
// const sequelize = new Sequelize('database', 'username', 'password')

// with URI
export const sequelize = new Sequelize("dev", "root", "Doddamani@123", {
  dialect: "postgres",
  host: "SG-ionian-hide-6988-5227-pgsql-master.servers.mongodirector.com",
  port: 5432,
});
export const testDbConnection = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};
