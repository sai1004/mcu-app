import { getRepository, Repository } from "typeorm";
import { Company } from "../entities/Company";

export class CompanyDAO {
    private dao: Repository<Company>;

    constructor() {
        this.dao = getRepository(Company);
    }

    async save(data: Company) {
        return await this.dao.save(data);
    }

    async findAll(data: any) {
        return await this.dao.find(data);
    }

    async findOne(data: any) {
        return await this.dao.findOne(data);
    }

    async findById(id: any) {
        return await this.dao.findOne(id);
    }

    async delete(data: Company) {
        return await this.dao.remove(data);
    }
}
