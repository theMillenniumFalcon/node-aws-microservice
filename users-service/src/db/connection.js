import { Sequelize } from "sequelize"
import { accessEnv } from "../helpers/accessEnv"

const dbURI = accessEnv("DB_URI")

export const sequelize = new Sequelize(dbURI, {
    dialectOptions: {
        charset: "utf8",
        multipleStatements: true
    },
    logging: false
})
