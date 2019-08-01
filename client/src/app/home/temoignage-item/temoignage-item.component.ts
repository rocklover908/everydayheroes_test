import { Component, OnInit, Input } from '@angular/core';
import { Temoignage } from 'src/models/temoignage.interface';

@Component({
selector: 'app-temoignage-item',
templateUrl: './temoignage-item.component.html',
styleUrls: ['./temoignage-item.component.scss'],
})
export class TemoignageItemComponent implements OnInit {
@Input() temoignage: Temoignage;
constructor() {}

ngOnInit() {}
}
