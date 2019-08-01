import { Injectable } from '@angular/core';
import { Temoignage } from 'src/models/temoignage.interface';
import { HttpClient } from '@angular/common/http';
  
@Injectable({
	providedIn: 'root',
})
export class TemoignagesService {
	private temoignagesList: any;
	getApiUrl: string = 'http://localhost/backend/temoignages.php';
	getApiUrlPaged: string = 'http://localhost/backend/temoignages_pagination.php';

	constructor(public http: HttpClient) {}
//call to the api to get the liste of temoignages
	getTemoignages() {
		return new Promise(resolve => {
			this.http.get(this.getApiUrl).subscribe(
				data => {
					this.temoignagesList = data;
					resolve(data);
				},
				err => {
					console.log('error', err);
				}
			);
		});
	}

	//call to the api to get the liste of temoignages paged from server
	getTemoignagePaged(page) {
	 
		return new Promise(resolve => {
			this.http.get(this.getApiUrlPaged+'?page='+page).subscribe(
				data => {
					// this.temoignagesList = data;
					resolve(data);
				},
				err => {
					console.log('error', err);
				}
			);
		});

 
	}

	//do the filtring of the temoignages list based on the searchText
	filterTemoignagesList(searchText) {
		if (searchText === '') {
			return this.temoignagesList;
		} else {
			let filtredTemoignage = [];
			this.temoignagesList.map(temoignage => {
				if (temoignage.content.includes(searchText)) {
					filtredTemoignage.push(temoignage);
				}
			});
			filtredTemoignage.sort((a, b) => new Date(b.date) - new Date(a.date));
			return filtredTemoignage;
		}
	}
}
