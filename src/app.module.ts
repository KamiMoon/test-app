import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CatsModule } from './cats/cats.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PrismaService } from './prisma.service';
import { Cat } from './cats/entities/cat.entity';
import { CategoriesController } from './categories/categories.controller';
import { CategoriesService } from './categories/categories.service';


@Module({
  imports: [CatsModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'test_user',
      password: 'test',
      database: 'erickizaki',
      entities: [Cat],
      synchronize: false,
      logging: true
    }),
  ],
  controllers: [AppController, CategoriesController],
  providers: [AppService, PrismaService, CategoriesService],
})
export class AppModule { }
