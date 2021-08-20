import { Router } from '@angular/router';
import { RetrosService } from './../../../services/retros/retros.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Retro } from 'src/app/classes/retro/retro';

@Component({
  selector: 'app-retros-list',
  templateUrl: './retros-list.component.html',
  styleUrls: ['./retros-list.component.scss']
})
export class RetrosListComponent implements OnInit, OnDestroy {
  retros: Retro[] = []
  retrosSub: any

  constructor(
    private retroService: RetrosService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.retroService.getAllRetros()
    this.retrosSub = this.retroService.retros.subscribe(retros => this.retros = retros)
  }

  selectRetro(id: number) {
    this.router.navigate([`retro/${id}`])
  }

  ngOnDestroy() {
    this.retrosSub.unsubscribe()
  }
}
