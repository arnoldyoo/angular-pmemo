import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'show-memo',
    templateUrl: 'show-memo.component.html',
    styleUrls: ['show-memo.component.css']
})
export class ShowMemoComponent implements OnInit {
    pmemos: FirebaseListObservable<any[]>;
    constructor(
        private af: AngularFire
    ) { }

    ngOnInit() { 
        this._setPriorityMemoList();
    }
    private _setPriorityMemoList(): void {
        this.pmemos = this.af.database.list('/pmemos');
    }
    delete(key): void {
        this.pmemos.remove(key);
    }
}