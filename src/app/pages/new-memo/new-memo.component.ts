import { Component, OnInit } from '@angular/core';
import {AngularFire, FirebaseListObservable} from 'angularfire2';

@Component({
    selector: 'new-memo',
    templateUrl: 'new-memo.component.html',
    styleUrls: ['new-memo.component.css']
})
export class NewMemoComponent implements OnInit {

    Priority: Array<string> = ['A', 'B', 'C'];
    selectedType: string;
    prioritymemo_text: string;
    prioritymemo_title: string;
  
    constructor(
        private af: AngularFire
    ) { 
        this.selectedType = 'A';
    }

    ngOnInit() { }

    insertNewMemo() {
        const memo_obj = {
            title: this.prioritymemo_title,
            contents: this.prioritymemo_text,
            type: this.selectedType,
            create_date : new Date()
        }
        const memoObservable = this.af.database.list('/pmemos');
        memoObservable.push(memo_obj);
    }
}