import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("company")
export class Company {
    @PrimaryColumn({ name: "id" })
    id: string = "";

    @Column({ name: "name" })
    name: string = "";

    @Column({ name: "address" })
    address: string = "";

    @Column({ name: "lat" })
    lat: string = "";

    @Column({ name: "lng" })
    lng: string = "";

    @Column({ name: "created_on" })
    createdOn: Date = new Date();

    @Column({ name: "updated_on" })
    updatedOn: Date = new Date();
}
