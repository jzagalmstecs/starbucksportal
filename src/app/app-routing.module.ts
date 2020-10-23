import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AnalyzeComponent } from './components/analyze/analyze.component';
import { DescribeComponent } from './components/describe/describe.component';
import { ThumbnailComponent } from './components/thumbnail/thumbnail.component';

const routes: Routes = [
    { path: 'describe', component: DescribeComponent},
    { path: 'thumbnail', component: ThumbnailComponent},
    { path: 'analyse', component: AnalyzeComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
