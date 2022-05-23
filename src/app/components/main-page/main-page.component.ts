import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment';
import {HttpClient} from '@angular/common/http';
import { Personajes } from 'src/app/interface/personajes';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  personajes!: Personajes[] ;
  personajesCopy!: Personajes[];

  constructor(public http: HttpClient) {
    this.getData();
  }

  async getData(){
    await this.http.get<any>(environment.apiUrl + "/characters").subscribe((data) => {
      this.personajes = data.map(({char_id, name, nickname, status, occupation, img}: Personajes) => {
        return{
          char_id: char_id,
          name: name,
          nickname: nickname,
          img: img,
          status: status,
          occupation: occupation
        }
      })
      this.personajesCopy = this.personajes
    })
  }

  ngOnInit(): void {
  }

  filter(e: any){
    const search: string = e.target.value;
    
    this.personajes = this.personajesCopy?.filter(({name}: Personajes) => {
      return name.toLowerCase().includes(search.toLowerCase());
    })
  }
}
