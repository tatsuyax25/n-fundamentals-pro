import { Controller, Get, Put, Delete, Post } from '@nestjs/common';
import { SongsService, Song } from './songs.service';

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  create(): Song[] {
    const newSong: Song = {
      title: 'Animals by Martin Garrix',
      artist: 'Martin Garrix',
    };
    return this.songsService.create(newSong);
  }
  @Get()
  findAll(): Song[] {
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
