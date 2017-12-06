import { GithubFollowersService } from './../services/github-followers.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/combineLatest';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/switchMap';

@Component({
  selector: 'github-followers',
  templateUrl: './github-followers.component.html',
  styleUrls: ['./github-followers.component.css']
})
export class GithubFollowersComponent implements OnInit {
  followers: any[];

  constructor(private route: ActivatedRoute, private service: GithubFollowersService) { }

  ngOnInit() {
      Observable.combineLatest([
      this.route.paramMap,
      this.route.queryParamMap
    ])
    .map(combined => {
      
    })
    .subscribe(combined => {
      let id = combined[0].get('id');
      let page = combined[1].get('page');

      //Call service to get data
      //this.service.getAll();
      this.service.getAll()
      .subscribe(followers => this.followers = followers);
    });
    
    
    //this.route.paramMap.subscribe(); // OR
    //let id = this.route.snapshot.paramMap.get('id');

    //this.route.queryParamMap.subscribe();  // OR
    //let page = this.route.snapshot.paramMap.get('page');
  }
}
