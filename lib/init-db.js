// lib/init-db.js
import sequelize from "./sequelize.js";
import Contact from "../models/Contact.js";

let synced = false;

export const initDB = async () => {
  if (!synced) {
    try {
      await sequelize.authenticate();
      await sequelize.sync({ alter: true }); // or { force: true } for dev
      console.log("Database synced");
      synced = true;
    } catch (err) {
      console.error("DB sync error:", err);
    }
  }
};
