import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';

@Injectable()
export class CategoriesService {
  constructor(private prismaSevice: PrismaService) {}

  create(createCategoryDto: CreateCategoryDto) {
    return this.prismaSevice.category.create({ data: createCategoryDto });
  }

  findAll() {
    return this.prismaSevice.category.findMany();
  }

  findOne(id: string) {
    return this.prismaSevice.category.findUnique({ where: { id } });
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    return this.prismaSevice.category.update({
      where: { id },
      data: updateCategoryDto,
    });
  }

  remove(id: string) {
    return this.prismaSevice.category.delete({
      where: { id },
    });
  }
}
