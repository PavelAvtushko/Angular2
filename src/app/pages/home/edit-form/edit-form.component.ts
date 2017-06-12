import { Component, ViewEncapsulation, Input } from '@angular/core';
// import { TodoItem } from '../../../core/entities';
// import { todoStatusClasses } from '../../../core/enums';

@Component({
	selector: 'edit-form',
	templateUrl: 'edit-form.component.html',
	styles: [require('./edit-form.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class EditFormComponent {
	@Input() public hideForm;
	@Input() public addNewCourse;
	constructor() {
	}

	public clearForm() {
		console.log('clearForm');
		this.hideForm();
	}

	public addCourse() {
		const name = 'Title' || 'No name';
		const description = 'description' || 'No description';
		const duration = 'duration' || 'No information';
		this.addNewCourse({ name, description, duration });
	}
}
