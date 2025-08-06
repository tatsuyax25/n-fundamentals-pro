import { Controller, Get, Put, Delete, Post, Body } from '@nestjs/common';
import { SongsService, Song } from './songs.service';

export interface CreateSongDTO {
  title: string;
  artist: string;
  releasedDate: string;
  duration: string; // duration in seconds or preferred unit
}

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  create(@Body() createSongDTO: CreateSongDTO): Song[] {
    const newSong: Song = {
      title: createSongDTO.title,
      artist: createSongDTO.artist,
      releasedDate: createSongDTO.releasedDate,
      duration: createSongDTO.duration,
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
