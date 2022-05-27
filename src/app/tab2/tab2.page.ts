/* eslint-disable @angular-eslint/use-lifecycle-interface */

import { Component } from '@angular/core';
import { PhotoService, UserPhoto } from '../services/photo.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page {
  public photos: UserPhoto[] = [];

  constructor(public photoService: PhotoService) {}

  addPhotoGallery() {
    this.photoService.addNewToGallery();
  }

  deleteImage(UserPhoto) {
    this.photoService.deleteImage(UserPhoto);
  }
  async ngOnInit() {
    await this.photoService.loadSaved();
  }
  groupImages() {}
}
