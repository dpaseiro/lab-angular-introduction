import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comments-component',
  templateUrl: './comments-component.component.html',
  styleUrls: ['./comments-component.component.css']
})
export class CommentsComponentComponent implements OnInit {

  constructor() { }

  
  addComment(author, comment){
    console.log(author.value, comment.value)
    this.theComments.push({
      author: author.value,
      content: comment.value
    })
  
  }
 
  
  ngOnInit() {
  }

}
