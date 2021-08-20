import { AuthService } from 'src/app/services/auth/auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Retro } from 'src/app/classes/retro/retro';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RetrosService {
  _retros: BehaviorSubject<Retro[]> = new BehaviorSubject([]);
  _retro: BehaviorSubject<Retro> = new BehaviorSubject(new Retro({}))
  httpOptions: { headers: any; };
  
  constructor(
    private http: HttpClient,
    authService: AuthService
  ) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
        'Authorization': `Token ${authService.token}`
      })
    };
   }

  get retros() {
    return this._retros.asObservable();
  }

  get retro() {
    return this._retro.asObservable();
  }

  getAllRetros() {
    return this.http.get(`${environment.api}/api/retros`, this.httpOptions).subscribe(
      (res: any) => {
        let retros = res.map((retro: any) => new Retro(retro))
        this._retros.next(retros)
      },
      err => console.log('Error getting Retros', err)
    );
  }

  getSingleRetro(id: number) {
    return this.http.get(`${environment.api}/api/retros/${id}`, this.httpOptions).subscribe(
      (res: any) => {
        let retro = new Retro(res);
        this._retro.next(retro);
      }
    )
  }
}
