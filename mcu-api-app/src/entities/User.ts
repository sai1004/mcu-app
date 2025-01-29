import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("user")
export class User {
    @PrimaryColumn({ name: "id" })
    id: string;

    @Column({ name: "first_name" })
    first_name: string;

    @Column({ name: "last_name" })
    last_name: string;

    @Column({ name: "email" })
    email: string;

    @Column({ name: "designation" })
    designation: string;

    @Column({ name: "company_id" })
    companyId: string;

    @Column({ name: "date_of_birth" })
    dateOfBirth: Date;

    @Column({ name: "active" })
    active: boolean = true;

    @Column({ name: "created_on" })
    createdOn: Date;

    @Column({ name: "updated_on" })
    updatedOn: Date;
}
