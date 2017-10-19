import { Component } from '@angular/core';
import { NavController,LoadingController } from 'ionic-angular';

import { AppApi } from '../../providers/app-api/app-api';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	private brands: Array<any> = [];
	currentPageClass = this;
	constructor(
		public navCtrl: NavController,
		private appApi: AppApi,
		private loadingCtrl: LoadingController
	) {}
	onItemClick(item) {
		console.log(item);
	}
	ngOnInit(): void {
		this.getCar();
		console.log(this.brands);

	}
	ionViewDidLoad() {
		console.log('ionViewDidLoad AlphaScrollPage');
	}
	getCar() {
		let loading = this.loadingCtrl.create({
			content: '加载中...'
		});
		loading.present();
		this.appApi.getBrand().subscribe(data => {
			this.brands = data.result;
			console.log(this.brands);
			setTimeout(() => {
				loading.dismiss();
			}, 500);
		});
	}
}
