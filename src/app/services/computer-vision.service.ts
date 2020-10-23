import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {DomSanitizer} from '@angular/platform-browser';


@Injectable({
    providedIn: 'root'
})
export class ComputerVisionService {
    endpoint = 'https://ai100sb.cognitiveservices.azure.com/';
    key1 = '0b1ff433149b41dfb3b50a9cd99a5fe5';
    key2 = '4226dd61779b4b46a4980e8ea4f6001c';

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json',
            'Ocp-Apim-Subscription-Key': this.key1
        })
    }

    constructor(private http: HttpClient) { }

    describeImage(url: string){
        return this.http.post<any>(this.endpoint+'vision/v2.0/describe', {url: url}, this.httpOptions);
    }

    analyseimage(url: string){
        var request = "vision/v2.0/analyze?visualFeatures=Categories,Adult,Tags,Description,Faces,Color,ImageType,Objects,Brands&details=Celebrities,Landmarks";
        return this.http.post<any>(this.endpoint+request, {url: url}, this.httpOptions);
    }

    getBlobThumbnail(url: string): Observable<Blob> {
        return this.http.post<Blob>(this.endpoint+'vision/v2.0/generateThumbnail?width=150&height=150&smartCropping=True',
        {
        "url": url
        }, {headers: this.httpOptions.headers, responseType: 'blob' as 'json' });
    }

    test(){
        return "hey there";
    }
}
