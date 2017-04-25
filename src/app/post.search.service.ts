    import { Injectable } from '@angular/core';
    import { Http }       from '@angular/http';
    import { Observable }     from 'rxjs/Observable';
    import 'rxjs/add/operator/map';
    import { Post }  from './post.model';
    @Injectable()
    export class PostSearchService {
      constructor(private http: Http) {}
      search(term: string): Observable<Post[]> {
        console.log('searching for '+term+' ...')
        return this.http
                   .get(`https://jsonplaceholder.typicode.com/posts`)
                   .map(response => response.json().data as Post[]);
      }
    }