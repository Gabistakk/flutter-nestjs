import { Injectable } from '@nestjs/common';
import { Prisma } from '@prisma/client';
import { PrismaService } from 'src/common/prisma/prisma.service';


@Injectable()
export class ThingsService {

  constructor(private readonly prisma:PrismaService){
    
  }


  create(createCategoryDto: Prisma.ThingCreateInput) {
    return this.prisma.thing.create({
      data: createCategoryDto
    })
  }

  update(id: number, updateCategoryDto: Prisma.ThingUpdateInput) {
    return this.prisma.thing.update({
      data: updateCategoryDto,
      where: {
        id: id
      }
    })
  }

  findAll() {
    return this.prisma.thing.findMany({
      include: {
        category: true
      }
    });
  }

  findOne(id: number) {
    return this.prisma.thing.findUnique({
      where: {
        id: id
      }
    });
  }



  remove(id: number) {
    return this.prisma.thing.delete({
      where: {
        id: id
      }
    });
  }
}
