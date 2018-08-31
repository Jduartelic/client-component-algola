import { Component, OnInit  } from '@angular/core';
import {CommonService} from './common.service'; 
import {DataSource} from '@angular/cdk/collections';
import {MatIconRegistry} from '@angular/material';
import {DomSanitizer} from '@angular/platform-browser';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  
  constructor(private newService : CommonService,) {  
  }

  dataSource;  

  ngOnInit() {    
    this.newService.getNews().subscribe(data => { return this.dataSource = data.data; })  
  } 

  deleteClick = (row) => {
    this.newService.deleteUser(row._id)  
    .subscribe(data =>   { this.ngOnInit();}, error => {console.log(error)} )   
  }

  openStory = (row) =>{
    window.open(row.story_url, '_blank');
  }

  enter = (row) => {
    this.hover = row._id;
  }

  leave() {
    this.hover = null;
  }

  title = "HN FEED";
  subTitle = "We <3 love hacker news!"
  columnsToDisplay = ['story_title', 'author', 'created_at', 'button'];
  hover = false;
}