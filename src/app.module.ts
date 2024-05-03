import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from './categoria/entities/categoria.entity';
import { Produto } from './produto/entities/produto.entity';
import { CategoriaModule } from './categoria/categoria.module';
import { ProdutoModule } from './produto/produto.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'Lana5595',
      database: 'db_farmacia',
      entities: [Categoria, Produto],
      synchronize: true  
    }),
    CategoriaModule,
    ProdutoModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
