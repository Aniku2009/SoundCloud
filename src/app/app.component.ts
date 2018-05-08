import {Component, OnInit} from '@angular/core';
import {SearchMusicService} from './search-music.service';
import {SearchData} from './searchResult';
import {Observable} from 'rxjs/Observable';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  searchResultfromComponent: SearchData;
  searchInput = 'The Best';
  searchImage = 'https://i1.sndcdn.com/artworks-000059522031-nwy1v0-large.jpg';
  searchhistory = new Array();
  SC = require('soundcloud');
  searchNext = '';
  indexForPlayTrack = 0;
  track_url = '';
  Embed = Object;

  constructor(private searchServicefromComponent: SearchMusicService) {
    this.searchResultfromComponent = new SearchData ();
    this.searchResultfromComponent.searchResultName.push('Please, enter search data');
    this.searchResultfromComponent.searchResultImage.push('https://i1.sndcdn.com/artworks-000059522031-nwy1v0-large.jpg');
  }

  ngOnInit() {
    this.searchServicefromComponent.getPost(this.searchInput).subscribe(posts => {
      console.log(posts);
      this.searchResultfromComponent = posts;
      this.searchhistory.push(this.searchInput);
    });
  }

  setImageUrl(n: number) {
    this.searchImage = this.searchResultfromComponent.searchResultImage[n];
    this.indexForPlayTrack = n;
  }

  playTrack (n: number) {
    this.SC.initialize({client_id: 'ggX0UomnLs0VmW7qZnCzw'});
    this.track_url = this.searchResultfromComponent.searchResultURI[n];
    this.SC.oEmbed(this.track_url, {auto_play: false}).then(function (oEmbed) {
      console.log('oEmbed response: ', oEmbed);
      this.Embed = oEmbed;
      Embed.subscribe()
    });
  }

  nextList () {
   this.searchNext = this.searchResultfromComponent.searchResultContinue;
   this.searchServicefromComponent.getPost(this.searchNext).subscribe(posts => {
      console.log(posts);
      this.searchResultfromComponent = posts;
    });
  }


}
