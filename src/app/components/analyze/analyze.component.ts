import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComputerVisionService } from 'src/app/services/computer-vision.service';

@Component({
    selector: 'app-analyze',
    templateUrl: './analyze.component.html',
    styleUrls: ['./analyze.component.css']
})
export class AnalyzeComponent implements OnInit {
    analyseForm: FormGroup;
    jsonResponse: Blob;
    url: string;
    errorMessage: string

    constructor(
        private visionService: ComputerVisionService
    ) { 
        this.analyseForm = new FormGroup({
            urlControl: new FormControl("")
        })
    }

    ngOnInit(): void {
    }

    analyse(){
        this.url = this.analyseForm.controls['urlControl'].value;
        this.visionService.analyseimage(this.url).subscribe(res=>
            {this.jsonResponse = res},
            error => 
            { this.errorMessage = error.error.message }
            );
    }

}
