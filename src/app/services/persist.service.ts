import { Injectable } from '@angular/core';

const SAVE_KEY:string = "ee-text";
const TIMESTAMP_KEY:string = "ee-timestamp";

@Injectable()
export class PersistService {

    /**
     * This method persists data first to local storage, then to the remote
     * service, if possible. It also stores a timestamp, used for comparison
     * to the service data.
     * @param data the text to persist
     */
    public saveText(data): void {
        console.log("Saving [" + data + "]" );
        localStorage.setItem(SAVE_KEY, data);
    }

    /**
     * This method first tries to load data from the remote service. If it does,
     * it will compare the timestamp of the response with the timestamp in the
     * local storage data. It will load the textbox with whichever is newest.
     */
    public loadText(): string {
        var ret = localStorage.getItem(SAVE_KEY);
        console.log("Loading data, returning: [" + ret + "]");
        return ret;
    }
}