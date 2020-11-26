import { PhotoService } from './../../services/photo.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  imgFile: File;
  processedImg: string | ArrayBuffer;
  constructor(private photoService: PhotoService, private router: Router) { }

  ngOnInit(): void {
  }

  loadImg(event: any): void {
    if (event.target.files && event.target.files[0]) {
      this.imgFile = event.target.files[0];
      const reader = new FileReader();
      reader.onload = e => this.processedImg = reader.result;
      reader.readAsDataURL(this.imgFile);
    }
  }
  upImg(title: HTMLInputElement, description: HTMLTextAreaElement, event: Event): void {
    event.preventDefault();
    this.photoService.createPhoto(title.value, description.value, this.imgFile)
      .subscribe(res => { this.router.navigate(['/photos']); }, err => { console.log(err); });
  }
}
