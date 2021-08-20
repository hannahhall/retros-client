import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  @Input() data: any = []

  columns = [
    {
      id: 1,
      label: "What should I start doing?"
    },
    {
      id: 2,
      label: "What should I stop doing?"
    },
    {
      id: 3,
      label: "What should I continue doing?"
    },
    {
      id: 4,
      label: "Action Items"
    }
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
