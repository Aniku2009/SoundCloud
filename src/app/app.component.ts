// import {Component, OnInit} from '@angular/core';
// import {SearchMusicService} from './search-music.service';
// import {SearchData} from './searchResult';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent implements OnInit {
//  searchResultfromComponent: SearchData;
//  searchInput = 'Search Input';
//  searchImage = 'https://i1.sndcdn.com/artworks-000059522031-nwy1v0-large.jpg';
//
//   constructor(private searchServicefromComponent: SearchMusicService) {
//     this.searchResultfromComponent = new SearchData ();
//     this.searchResultfromComponent.searchResultName.push('Please, enter search data');
//     this.searchResultfromComponent.searchResultImage.push('https://i1.sndcdn.com/artworks-000059522031-nwy1v0-large.jpg');
//   }
//
//   ngOnInit() {
//     this.searchServicefromComponent.getPost(this.searchInput).subscribe(posts => {
//       console.log(posts);
//        this.searchResultfromComponent.searchResultName = posts;
//     });
//   }
// }
import {Component, OnInit} from '@angular/core';
import {SearchMusicService} from './search-music.service';
import {SearchData} from './searchResult';
import index from '@angular/cli/lib/cli';

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
 // let searchhistory = new Array(3);

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
  }



}
