import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http'; // from angulars built in http library
import { map } from 'rxjs/operators'; // a map operator from reactive extensions(rxjs)
 // import 'rxjs/add/operator/map'; //old way

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.sass']
})
export class FaqComponent implements OnInit {

  faqs: Array<any>;

  constructor(private http: Http) {
    this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(map(response => response.json())) // you must wrap in .pipe now...
    .subscribe(res => this.faqs = res);
  }




  ngOnInit() {
  }

}
