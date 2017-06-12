import { Component, ViewEncapsulation, Input } from '@angular/core';

@Component({
	selector: 'search-form',
	templateUrl: 'search-form.component.html',
	styles: [require('./search-form.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class SearchFormComponent {
	@Input() public showForm;

	constructor() {
	}
}
