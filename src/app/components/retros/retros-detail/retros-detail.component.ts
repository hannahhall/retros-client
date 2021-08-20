import { Retro } from 'src/app/classes/retro/retro';
import { RetrosService } from './../../../services/retros/retros.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { AuthService } from 'src/app/services/auth/auth.service';


@Component({
  selector: 'app-retros-detail',
  templateUrl: './retros-detail.component.html',
  styleUrls: ['./retros-detail.component.scss']
})
export class RetrosDetailComponent implements OnInit, OnDestroy {
  retro: Retro
  retroSub: any

  constructor(
    private activeRoute: ActivatedRoute,
    private retrosService: RetrosService,
    private authService: AuthService,
  ) { }

  ngOnInit(): void {
    this.activeRoute.params.subscribe(params => {
      this.retrosService.getSingleRetro(params.id)
    })
    this.retroSub = this.retrosService.retro.subscribe(retro => this.retro = retro)
  }

  ngOnDestroy() {
    this.retroSub.unsubscribe()
  }

}
