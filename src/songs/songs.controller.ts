import { Controller, Get, Put, Delete, Post } from '@nestjs/common';

@Controller('songs')
export class SongsController {
  @Post()
  create() {
    return 'Create a new song endpoint';
  }
  @Get()
  findAll() {
    return 'Find all songs';
  }
  @Get(':id')
  findOne() {
    return 'Fetch song on the based on ID';
  }

  @Put(':id')
  update() {
    return 'Update song on the based on ID';
  }

  @Delete(':id')
  delete() {
    return 'Delete song on the based on ID';
  }
}
