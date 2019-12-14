import { Component, OnInit, Input } from '@angular/core';
import { SpotifyService } from '../service/spotify.service';
import { ArtistModel } from '../models/ArtistModel';

@Component({
  providers: [SpotifyService],
  selector: 'app-observed',
  templateUrl: './observed.component.html',
  styleUrls: ['./observed.component.css'],
})
export class ObservedComponent implements OnInit {
  @Input() query: any = '';
  artist: ArtistModel = {
    id: '',
    name: '',
    related: [],
    fromDB: ''
  };
  // related: ArtistModel[];
  // cache: boolean;

  constructor(private spotify: SpotifyService) { }

  ngOnInit() {
    this.spotify.getRelated(this.query).subscribe(art => {
      this.artist = art;
      //   artist.name;
      // this.cache = artist.fromDB;
      // this.related = artist.related;
    });
  }
}
