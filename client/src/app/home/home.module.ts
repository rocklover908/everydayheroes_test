import { TemoignageItemComponent } from './temoignage-item/temoignage-item.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgxPaginationModule } from 'ngx-pagination';

import { HomePage } from './home.page';

@NgModule({
	imports: [
		CommonModule,
		FormsModule,
		IonicModule,
		NgxPaginationModule,
		RouterModule.forChild([
			{
				path: '',
				component: HomePage,
			},
		]),
	],
	declarations: [HomePage, TemoignageItemComponent],
})
export class HomePageModule {}
