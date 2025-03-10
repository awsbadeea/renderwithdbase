import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Aw {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;

    @Column()
    title:string;

    @Column()
    place:string;


}
