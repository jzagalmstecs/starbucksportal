import { JsonPipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ComputerVisionService } from 'src/app/services/computer-vision.service';

@Component({
    selector: 'app-describe',
    templateUrl: './describe.component.html',
    styleUrls: ['./describe.component.css']
})
export class DescribeComponent implements OnInit {
    describeForm: FormGroup;
    jsonResponse: any;
    url: string;
    errorMessage: string;

    constructor(
        private visionService: ComputerVisionService
        ) { 
            this.describeForm = new FormGroup({
                urlControl: new FormControl("")
            })
        }

    ngOnInit(): void {
    }

    describe(){
        this.url = this.describeForm.controls['urlControl'].value;
        this.visionService.describeImage(this.url).subscribe(res=>
            {this.jsonResponse = res},
            error => 
            { this.errorMessage = error.error.message }
            );
    }



}
