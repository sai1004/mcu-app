import { CompanyDAO } from "../dao/CompanyDAO";
import { Company } from "../entities/Company";
import { v4 as uuidv4 } from "uuid";

export class CompanyService {
    private dao: CompanyDAO;

    constructor() {
        this.dao = new CompanyDAO();
    }

    async save(data: Company) {
        try {
            let isValid = await this.validator(data);

            if (isValid) {
                let companyData = this.dao.save(data);
                let returnData = {
                    id: data.id,
                    name: data.name,
                    message: "Saved Successfully!!",
                };
                return returnData;
            } else {
                let returnData = { message: "Please enter valid data" };
                throw returnData;
            }
        } catch (error) {
            throw error;
        }
    }

    async getItems(items: Company) {
        try {
            let companyData = await this.dao.findAll(items);
            return companyData;
        } catch (error) {
            throw error;
        }
    }

    async validator(item: Company) {
        if (!item.id || item.id == "" || item.id == "0") {
            let uid = uuidv4();
            item.id = uid;
        }
        return true;
    }
}
