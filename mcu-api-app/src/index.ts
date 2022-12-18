import { createConnection } from "typeorm";
import * as config from "./config/Config";
import { UserController } from "./routes/UserController";

const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid");
const cors = require("cors");
const logger = require("morgan");
const dotEnv = require("dotenv");
dotEnv.config();

const PORT = process.env.PORT;

const startServer = async () => {
    try {
        let db = await createConnection(config.dbConfig);
        if (db.isConnected) {
            console.log(`______DB CONNECTED______`);

            const userRoutes = new UserController();

            /* ''''''' middlewares ''''''''' */

            app.use(express.urlencoded({ extended: false }));
            app.use(cors());
            app.use(bodyParser.json());
            app.use(bodyParser.urlencoded({ extended: false }));
            app.use(logger("dev"));

            /* ''''''' App Routes ''''''''' */

            app.get("/api", (req: any, res: any) => {
                res.send({ message: "Hello App Works!!" });
            });

            app.use("/api/user", userRoutes.getRouter());

            app.listen(PORT, (err: Error) => {
                if (!err) {
                    console.log(`
                    ******************************************************
                    server is listening on port http://127.0.0.1:${PORT}/api
                    ******************************************************
                    `);
                }
            });
        }
    } catch (error) {
        console.log("Error: error while starting the server", error);
    }
};

startServer();
