import { Component, AfterViewInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import * as SimpleMde from 'simplemde';
import { PersistService } from '../services/persist.service';

@Component({
  selector: 'editor',
  templateUrl: '../templates/editor.component.html',
  styleUrls: ['../styles/editor.component.css'],
  providers: [PersistService]
})
export class EditorComponent implements AfterViewInit{
  private markdowntext: string = '';
  simpleMde;

  constructor(private persistService : PersistService) {}

  public ngAfterViewInit(): void {
    this.simpleMde = new SimpleMde();
    this.simpleMde.value(this.persistService.loadText());
  }

  public saveText() : void {
    console.log(this.simpleMde.value());
    this.persistService.saveText(this.simpleMde.value());
  }
}
