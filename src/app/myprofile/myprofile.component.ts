import { Component, Input, computed, inject, signal } from '@angular/core';
import {MatToolbarModule} from '@angular/material/toolbar';
import { CroppersData, Croppersresult, ModalImg1Component } from '../modal-img-1/modal-img-1.component';
import { MatDialog } from '@angular/material/dialog';
import { DialogRef } from '@angular/cdk/dialog';
import { filter } from 'rxjs';
import { ImageCropperModule } from 'ngx-image-cropper';
import { FormGroup } from '@angular/forms';
import { FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-myprofile',
  templateUrl: './myprofile.component.html',
  styleUrls: ['./myprofile.component.scss']
})
export class MyprofileComponent {
  Userregisters=new FormGroup({
    firstname:new FormControl('',[
      Validators.required,
      Validators.minLength(2),
      Validators.maxLength(12)
    ]),
    lastname:new FormControl('',[
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(12)
    ])
  });

  get firstname(){
    return this.Userregisters.get('firstname')
  }
  get lastname(){
    return this.Userregisters.get('lastname')
  }
registers() {
throw new Error('Method not implemented.');
}
  edits:boolean=true;
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
EditProfil(){
  this.edits=!this.edits
};

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
