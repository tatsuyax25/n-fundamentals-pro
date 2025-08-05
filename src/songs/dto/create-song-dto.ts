import 'reflect-metadata';
import {
  IsString,
  IsNotEmpty,
  IsArray,
  IsDateString,
  IsMilitaryTime,
} from 'class-validator';

export class CreateSongDto {
  // Define the properties of the song that should be created
  @IsString()
  @IsNotEmpty()
  readonly title: string;

  @IsNotEmpty()
  @IsArray()
  @IsString({ each: true })
  readonly artist: string[]; // Assuming artist can be an array of strings, adjust as needed

  // Add other properties as needed, e.g., album, genre, etc.
  @IsNotEmpty()
  @IsDateString()
  readonly releasedDate: Date; // Optional property for the release date

  @IsMilitaryTime()
  @IsNotEmpty()
  readonly duration: Date; // Duration in military time format (e.g., "13:45")
}
