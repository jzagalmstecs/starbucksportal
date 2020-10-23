import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComputerVisionService } from 'src/app/services/computer-vision.service';


@Component({
    selector: 'app-thumbnail',
    templateUrl: './thumbnail.component.html',
    styleUrls: ['./thumbnail.component.css']
})
export class ThumbnailComponent implements OnInit {
    thumbnailForm: FormGroup;
    jsonResponse: Blob;
    imageUrl: string;
    errorMessage: string;
    imageBlobUrl: string;


    constructor(
        private visionService: ComputerVisionService
    ) {
        this.thumbnailForm = new FormGroup({
            urlControl: new FormControl("")
        })
    }

    ngOnInit(): void {
    }


    getThumbnail() : void {
        this.imageUrl = this.thumbnailForm.get('urlControl').value;
        this.visionService.getBlobThumbnail(this.imageUrl)
        .subscribe(res => 
            {this.createImageFromBlob(res)},
            error => 
            { this.errorMessage = error.message}
            );
    }
    createImageFromBlob(image: Blob) {
        let reader = new FileReader();
        reader.addEventListener("load", () => {
            this.imageBlobUrl = <string>reader.result;
            }, false);
        if (image) {
        reader.readAsDataURL(image);
        }
    }


}
