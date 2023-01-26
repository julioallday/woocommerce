import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-component',
  templateUrl: './home-component.component.html',
  styleUrls: ['./home-component.component.css']
})
export class HomeComponentComponent implements OnInit {

  constructor() { }
  navigationLinks = [
    {
      name: "Sell",
      path: "#"
    },
    {
      name: "Marketplace",
      path: "#"
    },
    {
      name: "Community",
      path: "#"
    },
    {
      name: "Develop",
      path: "#"
    },
    {
      name: "Resources",
      path: "#"
    }
  ]

  ngOnInit(): void {
  }

}
