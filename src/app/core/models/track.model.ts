import { ArtistModel } from "./artist.model";

//el modelo de dato que debe tener un Track (cancion)
export interface TrackModel {
  name: string;
  album: string;
  cover: string;
  artist?: ArtistModel
  duration: number;
  url: string; //mp3 file
  _id: string | number;
}