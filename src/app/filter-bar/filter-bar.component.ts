import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-filter-bar',
  templateUrl: './filter-bar.component.html',
  styleUrls: ['./filter-bar.component.css']
})
export class FilterBarComponent implements OnInit {

  constructor(
    private productDetailsService: ProductDetailsService

  ) { }

  ngOnInit(): void {
  }

}
