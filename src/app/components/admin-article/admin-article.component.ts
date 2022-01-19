import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';

@Component({
  selector: 'app-admin-article',
  templateUrl: './admin-article.component.html',
  styleUrls: ['./admin-article.component.css']
})
export class AdminArticleComponent implements OnInit {
  articles:any=[];

  constructor(private articleService:ArticleService,
    private router:Router) { }

  ngOnInit() {

    this.articleService.getAllArticles().subscribe(
      (data)=> {
        this.articles = data.result;
      }
    );

  }
  goToDisplayOrEditArticle(id,type){
    if (type ==0) {
      this.router.navigate([`displayArticle/${id}`]);
      
    } else {
      this.router.navigate([`editArticle/${id}`]);
    }
    

  }
  

  
  goToAddArticle(){
    this.router.navigate(['addArticle']);

  }

 

}
