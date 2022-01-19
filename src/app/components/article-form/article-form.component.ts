import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticleService } from 'src/app/services/article.service';


@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css']
})
export class ArticleFormComponent implements OnInit {
  id:any;
  article:any =[];
  
  articleForm:FormGroup;


  constructor(
    private formBuilder: FormBuilder,
    private router:Router,
    private activatedRoute: ActivatedRoute,
    private articleService: ArticleService,
  ) { }

  ngOnInit() {
    this.id = this.activatedRoute.snapshot.paramMap.get('id');
    if (this.id) {
      this.articleService.getArticleById(this.id).subscribe(
        (data)=>{
          this.article= data.result;
        }
      );
      
    }
    this.articleForm= this.formBuilder.group({
      title:[''],
      content:[''],
      date:[''],
    })
  }
  addOrEditArticle(){
    if (this.id) {
      this.articleService.editArticleById(this.article).subscribe(
        (data)=> {
          console.log('Here msg from BE', data.message);
          this.router.navigate(['admin']);
          
        }
      )
    } else {
      this.articleService.addArticle(this.article).subscribe(
        (data)=> {
          console.log('Here msg from BE', data.message);
          this.router.navigate(['admin']);
          
        }
      )
    }

  }

}
