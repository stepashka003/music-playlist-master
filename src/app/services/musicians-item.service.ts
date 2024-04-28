import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment.development';
import { CardMusicians } from '../interfaces/card-musicians';
import { CardMusicianAlbums } from '../interfaces/card-musician-albums';

@Injectable({
  providedIn: 'root'
})
export class MusiciansItemService {

  constructor(
    private httpClient: HttpClient,
  ) { }

public activeMusician: string = "";

  public pageItems: CardMusicians[] = [
    {
      id: 1,
      name: "Нойз",
      imageUrl: "https://www.yugopolis.ru/cdn/data/img/cdbb04ac08902ad689d7e0cd19585b33/138911.jpg"
    },
    {
      id: 1,
      name: "рок",
      imageUrl: "https://sneg.top/uploads/posts/2023-03/1678603701_sneg-top-p-oboi-dlya-aifona-rok-vkontakte-68.jpg"
    },
    {
      id: 1,
      name: "рок",
      imageUrl: "https://sneg.top/uploads/posts/2023-03/1678603701_sneg-top-p-oboi-dlya-aifona-rok-vkontakte-68.jpg"
    },
    {
      id: 1,
      name: "рок",
      imageUrl: "https://sneg.top/uploads/posts/2023-03/1678603701_sneg-top-p-oboi-dlya-aifona-rok-vkontakte-68.jpg"
    },
    {
      id: 1,
      name: "рок",
      imageUrl: "https://sneg.top/uploads/posts/2023-03/1678603701_sneg-top-p-oboi-dlya-aifona-rok-vkontakte-68.jpg"
    },
    
    
  ];

  public albumItems: CardMusicianAlbums[] = [

    {
      id: 1,
      name: "Open Air",
      imageUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music112/v4/80/e9/94/80e9947d-03ed-f333-7813-31cba0c5f725/0.jpg/1200x1200bf-60.jpg"
    },
    {
      id: 1,
      name: "рок",
      imageUrl: "https://sneg.top/uploads/posts/2023-03/1678603701_sneg-top-p-oboi-dlya-aifona-rok-vkontakte-68.jpg"
    },
    {
      id: 1,
      name: "рок",
      imageUrl: "https://sneg.top/uploads/posts/2023-03/1678603701_sneg-top-p-oboi-dlya-aifona-rok-vkontakte-68.jpg"
    },
    
    
    
  ];

  public getGenreItems(): CardMusicians[] {
    return this.pageItems;
  }

  public getMusicianAlbumItems(): CardMusicianAlbums[] {
    return this.albumItems;
  }

  public getAllGenres(): Observable<CardMusicians[]> {
    return this.httpClient.get<CardMusicians[]>(environment.apiUrl + 'Genre/getGenres')
  }

}
