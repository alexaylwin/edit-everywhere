import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as SimpleMde from 'simplemde';
import { PersistService } from '../services/persist.service';

@Component({
  selector: 'app-root',
  templateUrl: '../templates/app.component.html',
  styleUrls: ['../styles/app.component.css'],
  providers: [PersistService]
})
export class AppComponent implements AfterViewInit{
  title = 'app';
  markdowntext = '';
  simpleMde;

  constructor(private persistService : PersistService) {}

  public ngAfterViewInit(): void {
    this.simpleMde = new SimpleMde();
  }

  public saveText() : void {
    console.log(this.simpleMde.value());
    this.persistService.saveText(this.simpleMde.value());
  }
}
