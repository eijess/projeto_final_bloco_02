import { IsNotEmpty } from "class-validator"
import { Produto } from "src/produto/entities/produto.entity"
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"

@Entity({name: "tb_categorias"})
export class Categoria {

    @PrimaryGeneratedColumn()    
    id: number

    @IsNotEmpty()
    @Column({length: 100, nullable: false})
    categoria: string

    @ManyToOne(() => Produto, (produto) => produto.categoria)
    produto: Produto[]
 
}

