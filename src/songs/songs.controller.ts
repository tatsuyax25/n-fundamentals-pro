import { Controller, Get, Put, Delete, Post } from '@nestjs/common';
import { SongsService } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private songsService: SongsService) {}
  @Post()
  create() {
    return this.songsService.create('Animals by Martin Garrix');
  }
  @Get()
  findAll() {
    return this.songsService.findAll();
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
