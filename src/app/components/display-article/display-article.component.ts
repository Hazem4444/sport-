import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-display-article',
  templateUrl: './display-article.component.html',
  styleUrls: ['./display-article.component.css']
})
export class DisplayArticleComponent implements OnInit {
  id:any;
  article:any;

  constructor(
    private activatedroute:ActivatedRoute,
    private articleService:ArticleService,

  ) {}

  ngOnInit() {
    this.id = this.activatedroute.snapshot.paramMap.get('id');
    this.articleService.getArticleById(this.id).subscribe(
      (data)=> {
        this.article= data.result;
        
      }
    )
  }

}
