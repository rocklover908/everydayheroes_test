import { TemoignagesService } from './../../services/temoignages.service';
import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Temoignage } from 'src/models/temoignage.interface';
import temoignagesList from '../../data/temoignages';
import { Observable } from 'rxjs';
import {   map, tap } from 'rxjs/operators';

 
@Component({
	selector: 'app-home',
	templateUrl: 'home.page.html',
	styleUrls: ['home.page.scss'],
 })
export class HomePage {
	searchWord: string;
	nombreVies = 108;
	temoignages: Observable<Temoignage[]>;;
	asyncTemoignages: Observable<string[]>;
	page: number = 1;
	total: number;
 
	async ngOnInit() {
		await this.getTemoignages();
	}
	constructor(public temoignageService: TemoignagesService) {
		this.onPageChange(1);
 	}
	onPageChange(number: number) {
 		this.page = number;
	}

	//case for the Server side paging
	getPage(page: number) {
 		this.temoignageService.getTemoignagePaged(page).then(data => {
			this.total = data['total'];
			this.p = page;
 			this.asyncTemoignages = data['items'];
		});
	}
	//get all temoignages
	getTemoignages() {
		this.temoignageService.getTemoignages().then(data => {
			this.temoignages = data;
			this.nombreVies = data['length'];
			console.log(data);
		});
	}

	//filter based on word
	filterList() {
		this.temoignages = this.temoignageService.filterTemoignagesList(this.searchWord);
	}
}
