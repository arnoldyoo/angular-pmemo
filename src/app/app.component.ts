import { Component, OnInit } from '@angular/core';
import { AngularFire } from 'angularfire2';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
	isLogin: boolean = false;
	login_obj: any;

	constructor(
		private af: AngularFire
	) {
		af.auth.subscribe(auth => {
			console.log(auth);
			if (auth.uid !== undefined){
				this.isLogin = true;
			}
			else {
				this.login();
			}
		});
	}
	ngOnInit(){
	}

	login(): void {

		this.af.auth.login();
		
	}
	logout(): void {
		this.af.auth.logout();
		this.isLogin = false;
	}
}
