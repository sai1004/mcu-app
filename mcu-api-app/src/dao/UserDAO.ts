import { getRepository, Repository } from "typeorm";
import { User } from "../entities/User";

export class UserDAO {
    private dao: Repository<User>;

    constructor() {
        this.dao = getRepository(User);
    }

    async save(data: User) {
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

    async delete(data: any) {
        return await this.dao.remove(data);
    }
}
