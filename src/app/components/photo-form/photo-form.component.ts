import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-photo-form',
  templateUrl: './photo-form.component.html',
  styleUrls: ['./photo-form.component.scss']
})
export class PhotoFormComponent implements OnInit {

  imgFile: File;
  processedImg: ArrayBuffer;
  constructor() { }

  ngOnInit(): void {
  }

  upImg(event: Event): void {
    const img = event.currentTarget as HTMLInputElement;
    if (img.files && img.files[0]) {
      this.imgFile = img.files[0];
      console.log(this.imgFile);
      const reader = new FileReader();
      reader.onload = e => { };
    }
  }
}
