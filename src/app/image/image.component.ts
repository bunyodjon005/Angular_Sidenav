import { Component, Input, computed, inject, signal } from '@angular/core';
import { filter } from 'rxjs';
import { Croppersresult, ModalImg1Component } from '../modal-img-1/modal-img-1.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-image',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss']
})
export class ImageComponent {
  ImageHeight= signal(0);
  @Input() set height(val:number){
    this.ImageHeight.set(val)
  }
  ImageWidth = signal(0);
  @Input() set width(val:number){
    this.ImageWidth.set(val);
  }
  Placeholder= computed(()=>`https://placehold.co/${this.ImageWidth()}x${this.ImageHeight()}`);
  croppedImage=signal<Croppersresult | undefined>(undefined);
  dialog=inject(MatDialog);
  EditProfil(){};
  
  fileSelected(event:any){
    const file=event.target.files[0];
    if(file){
    const dialogRef=this.dialog.open(ModalImg1Component , {
      data:{image:file,width:this.ImageWidth(),height:this.ImageHeight()},
      width:'500px'
    });
    dialogRef.afterClosed().pipe(filter(result => !!result)).subscribe(
      (result)=>{
        this.croppedImage.set(result);
      }
    )
    }
  }
  imageSource = computed(()=>{
    if(this.croppedImage()){
  return this.croppedImage()?.imageUrl;
    }
    return this.Placeholder();
  })
}
