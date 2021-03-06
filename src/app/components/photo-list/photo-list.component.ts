import { PhotoPublicInf } from './../../photo.class';
import { PhotoService } from './../../services/photo.service';
import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.scss']
})
export class PhotoListComponent implements OnInit {

  constructor(private photoService: PhotoService, private router: Router) { }

  listImg = [];

  photoSets = new PhotoPublicInf();
  url = this.photoSets.url;

  ngOnInit(): void {
    this.photoService.getPhotos()
      .subscribe(
        res => { this.listImg = res; },
        err => console.log('err: ', err));
  }

  selectedCard(imgId: string): void {
    this.router.navigate(['photos/', imgId]);
  }
}
