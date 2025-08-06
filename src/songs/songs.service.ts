import { Injectable } from '@nestjs/common';
// Define the Song interface if not imported from elsewhere
export interface Song {
  title: string;
  artist: string;
  // add other properties as needed
  releasedDate: string; // Optional property for the release date
  duration: string; // Duration in military time format (e.g., "13:45")
}

@Injectable()
export class SongsService {
  // Local DB
  // Local array

  private readonly songs: Song[] = [];

  create(song: Song): Song[] {
    // Save the song in the database
    this.songs.push(song);
    return this.songs;
  }

  // Find all songs
  findAll() {
    return this.songs;
  }
}
