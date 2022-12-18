import { UserDAO } from "../dao/UserDAO";
import { User } from "../entities/User";
import { v4 as uuidv4 } from "uuid";
import { Props } from "../constants/Props";

export class UserService {
    private dao: UserDAO;

    constructor() {
        this.dao = new UserDAO();
    }

    async save(data: User) {
        try {
            let isValid = await this.validator(data);
            if (isValid == true) {
                let userData = this.dao.save(data);
                let returnData = {
                    id: data.id,
                    name: data.first_name,
                    message: "Saved Successfully!!",
                };
                return returnData;
            } else if (isValid == "Email") {
                let returnData = { message: Props.RECORD_EXISTS };
                throw returnData;
            } else {
                let returnData = { message: "Please enter valid data" };
                throw returnData;
            }
        } catch (error) {
            throw error;
        }
    }

    async findAll(filter: string) {
        try {
            let data: any = await this.dao.findAll(filter);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async findOne(id: any) {
        try {
            let data: any = await this.dao.findById(id);
            return data;
        } catch (error) {
            throw error;
        }
    }

    async delete(id: any) {
        try {
            let data = await this.dao.findById(id);
            let result: any = await this.dao.delete(data);
            let returnData = { id: id, message: "Removed Successfully" };
            return returnData;
        } catch (error) {
            throw error;
        }
    }

    async validator(user: User) {
        let returnVal: any;
        let oldUser = null;
        // check User id
        if (!user.id || user.id == "0" || user.id == "") {
            user.id = "";
        } else {
            oldUser = await this.dao.findOne(user.id);
        }
        // get email if exists in array
        let oldEmails: any = await this.dao.findAll({ email: user.email });
        // if id not exists
        if (!user.id) {
            // check User
            if (oldEmails.length > 0) {
                returnVal = "Email";
            } else {
                // genrate new id and User if there is no old record associated with current email
                let uid = uuidv4();
                user.id = uid;
                returnVal = true;
            }
        }

        let date = new Date().toISOString();
        user.updatedOn = new Date(date);

        return returnVal;
    }
}
