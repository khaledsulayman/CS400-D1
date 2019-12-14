export class ArtistModel {
  id: string;
  name: string;
  related: ArtistModel[];
  fromDB: string;
}
