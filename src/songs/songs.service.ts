import { Injectable } from '@nestjs/common';

@Injectable()
export class SongsService {
  // Local DB
  // Local array

  private readonly songs = [];

  create(song) {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }
  // Find all songs
  findAll() {
    // F
    return this.songs;
  }
}
