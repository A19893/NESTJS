import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { RealtorService } from './realtor.service';
import { CreateRealtorDto } from './dto/create-realtor.dto';
// import { UpdateRealtorDto } from './dto/update-realtor.dto';

@Controller('realtor')
export class RealtorController {
  constructor(private readonly realtorService: RealtorService) {}

  @Post()
  create(@Body() createRealtorDto: CreateRealtorDto) {
    return this.realtorService.createUser(createRealtorDto);
  }

  @Get()
  findAll() {
    return this.realtorService.findAllUser();
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.realtorService.find(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string) {
    return this.realtorService.viewUser(+id);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.realtorService.removeUser(+id);
  }
}
