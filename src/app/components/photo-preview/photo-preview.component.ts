import { PhotoPublicInf } from './../../photo.class';
import { PhotoService } from './../../services/photo.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Photo } from 'src/app/interfaces/photo';

@Component({
  selector: 'app-photo-preview',
  templateUrl: './photo-preview.component.html',
  styleUrls: ['./photo-preview.component.scss']
})
export class PhotoPreviewComponent implements OnInit {

  photoSet = new PhotoPublicInf();
  imgId: string;
  photo: Photo;
  url = this.photoSet.url;

  constructor(
    private activatedRoute: ActivatedRoute,
    private photoService: PhotoService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.imgId = params.id;
    });
    this.getPhoto();
  }

  async getPhoto(): Promise<void> {
    await this.photoService.getPhoto(this.imgId)
      .subscribe(
        res => {
          this.photo = res;
          console.log('ok...', res);
        },
        err => console.log(err)
      );
  }
}
