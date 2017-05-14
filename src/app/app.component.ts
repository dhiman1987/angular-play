import { Component , OnInit} from '@angular/core';
import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';
// Observable class extensions
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/switchMap';
// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import { Post } from './post.model';
import { PostSearchService } from './post.search.service';
import { CollapsibleComponent } from './collapsible-component/collapsible.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass'],
  providers: [PostSearchService]
})
export class AppComponent implements OnInit{

constructor(private postSearchService:PostSearchService){}

private searchTerms = new Subject<string>();
posts: Observable<Post[]>;

  actionHit : number;
  multiStateAction(state: number){
  	this.actionHit=state;
  }

search(term: string): void {
	console.log(term);
	this.searchTerms.next(term);
}

ngOnInit(): void {
	this.posts = this.searchTerms
	.debounceTime(300)
	.distinctUntilChanged()
	.switchMap(term => term
		      ? this.postSearchService.search(term)
      : Observable.of<Post[]>([]))
    .catch(error => {
      console.log(error);
      return Observable.of<Post[]>([]);
    });
	}

}
