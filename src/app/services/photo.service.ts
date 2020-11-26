import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Photo } from '../interfaces/photo';
import { Input } from '@angular/core';
import { PhotoPublicInf } from '../photo.class';

@Injectable({
  providedIn: 'root'
})
export class PhotoService {

  photoSets = new PhotoPublicInf();
  url = this.photoSets.url;

  constructor(private http: HttpClient) { }

  createPhoto(title: string, description: string, photo: File) {
    console.log(photo);
    const fd = new FormData();
    fd.append('title', title);
    fd.append('description', description);
    fd.append('image', photo);
    return this.http.post(this.url, fd);
  }
  getPhotos(){
    return this.http.get<Photo[]>(this.url);
  }
}
