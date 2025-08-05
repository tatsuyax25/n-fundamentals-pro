import { Controller, Get, Put, Delete, Post, Body } from '@nestjs/common';
import { SongsService, Song } from './songs.service';

export interface CreateSongDTO {
  title: string;
  artist: string;
}

@Controller('songs')
export class SongsController {
  constructor(private readonly songsService: SongsService) {}
  @Post()
  create(@Body() createSongSTO: CreateSongDTO): Song[] {
    const newSong: Song = {
      title: createSongSTO.title,
      artist: createSongSTO.artist,
      releasedDate: new Date(), // Assuming you want to set the current date as the release date
      duration: new Date(0), // Set a default duration as a Date object (e.g., epoch)
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
