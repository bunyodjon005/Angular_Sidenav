import { Component, inject, signal } from '@angular/core';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ImageCroppedEvent } from 'ngx-image-cropper';
export type CroppersData={
  image:File;
  width:number;
  height:number;
}
export type Croppersresult ={
blob:Blob;
imageUrl:string;
}

@Component({
  selector: 'app-modal-img-1',
  templateUrl: './modal-img-1.component.html',
  styleUrls: ['./modal-img-1.component.scss']
})
export class ModalImg1Component {
result=signal<Croppersresult | undefined>(undefined);
data: CroppersData=inject(MAT_DIALOG_DATA);
ImageCropped(event:ImageCroppedEvent){
const {blob,objectUrl}=event;
if(blob && objectUrl){
  this.result.set({blob,imageUrl:objectUrl});
}
}
}
