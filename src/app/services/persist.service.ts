import { Injectable } from '@angular/core';

@Injectable()
export class PersistService {
    saveText(data): void {
        console.log("Saving [" + data + "]" );
        localStorage.setItem("ee-text", data);
    }
}