import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WebBotComponent } from './components/web-bot/web-bot.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DescribeComponent } from './components/describe/describe.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';
import { AnalyzeComponent } from './components/analyze/analyze.component';



@NgModule({
    declarations: [
        AppComponent,
        WebBotComponent,
        NavbarComponent,
        DescribeComponent,
        ThumbnailComponent,
        AnalyzeComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        HttpClientModule,
        // FormsModule,
        ReactiveFormsModule

    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
