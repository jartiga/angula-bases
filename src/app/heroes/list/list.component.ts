import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  public heroNames: string[] = ['Spiderman','Ironman', 'Hulk', 'Thor']
  public heroRemove: string | undefined = '';

  removeLastHero(): void {
    this.heroRemove = this.heroNames.pop();
  }



}
