import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

import { ListData } from '../../providers/list-data';
import { AppApi } from '../../providers/app-api/app-api';

@Component({
	selector: 'page-contact',
	templateUrl: 'contact.html'
})
export class ContactPage {
	private contacts: Array<any> = [];
	currentPageClass = this;
	constructor(
		public navCtrl: NavController,
		private appApi: AppApi,
		private loadingCtrl: LoadingController,
		private listData:ListData
	) {
		this.listData.list().then(data => {
			this.contacts = data;
		});
	}
	onItemClick(item) {
		console.log(item);
	}
	ngOnInit(): void {
	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AlphaScrollPage');
	}
}
