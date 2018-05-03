// import { Injectable } from '@angular/core';
// import {SearchData} from './searchResult';
// import {HttpClient} from '@angular/common/http';
// import 'rxjs/add/operator/map';
// import {log} from 'util';
// import {Observable} from 'rxjs/Observable';
//
// @Injectable()
//
// export class SearchMusicService {
//
//   constructor(private http: HttpClient) { }
//
//   private clientId =  'ggX0UomnLs0VmW7qZnCzw';
//   private httprowsummary: string;
//
//
//   getPost(value: string): Observable<SearchData[]> {
//     return this.http.get(this.makeSearchUrl(value)).map((res: any) => {
//       // console.log(res);
//      // let arrayResultOfSearch = res.collection;
//      // return <string[]>(res);
//       return res.collection.map(function (collection: any) {
//         // console.log(collection.title);
//         // console.log(collection.artwork_url);
//         return {searchResultName: collection.title, searchResultImage: collection.artwork_url};
//       });
//     });
//   }
//
//   //
//   // getPost(value: string) {
//   //   return this.http.get(this.makeSearchUrl(value)).map((res: any) => {
//   //     console.log(res);
//   //     // return <string[]>(res);
//   //     return res.collection.map(item => {
//   //              console.log(item.title);
//   //       return item.title;
//   //     });
//   //   });
//   // }
//
//   makeSearchUrl(value: string): string {
//     this.httprowsummary = `http://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${this.clientId}&q=${value}&limit=6`;
//     return this.httprowsummary;
//   }
// }
import { Injectable } from '@angular/core';
import {SearchData} from './searchResult';
import {HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import {log} from 'util';
import {Observable} from 'rxjs/Observable';

@Injectable()

export class SearchMusicService {

  constructor(private http: HttpClient) { }

  private clientId =  'ggX0UomnLs0VmW7qZnCzw';
  private httprowsummary: string;


  getPost(value: string): Observable<SearchData> {
    return this.http.get(this.makeSearchUrl(value)).map((res: any) => {
      // console.log(res);
      // let arrayResultOfSearch = res.collection;
      // return <string[]>(res);
      const searchdataMap = new SearchData();
       res.collection.map(function (collection: any) {
        // console.log(collection.title);
        // console.log(collection.artwork_url);
         searchdataMap.searchResultName.push(collection.title);
         searchdataMap.searchResultImage.push(collection.artwork_url);
         searchdataMap.searchResultURI.push(collection.uri);
        });
       return searchdataMap;
    });
  }

  //
  // getPost(value: string) {
  //   return this.http.get(this.makeSearchUrl(value)).map((res: any) => {
  //     console.log(res);
  //     // return <string[]>(res);
  //     return res.collection.map(item => {
  //              console.log(item.title);
  //       return item.title;
  //     });
  //   });
  // }

  makeSearchUrl(value: string): string {
    this.httprowsummary = `http://api.soundcloud.com/tracks?linked_partitioning=1&client_id=${this.clientId}&q=${value}&limit=6`;
    return this.httprowsummary;
  }
}
