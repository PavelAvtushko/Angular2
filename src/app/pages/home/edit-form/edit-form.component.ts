import { Component, ViewEncapsulation, Input, OnInit } from '@angular/core';
// import { TodoItem } from '../../../core/entities';
// import { todoStatusClasses } from '../../../core/enums';

@Component({
	selector: 'edit-form',
	templateUrl: 'edit-form.component.html',
	styles: [require('./edit-form.component.scss')],
	providers: [],
	encapsulation: ViewEncapsulation.None
})
export class EditFormComponent implements OnInit {
	@Input() public hideForm;
	@Input() public addNewCourse;
	public newCourse: any;

	constructor() {
	}

	public ngOnInit() {
		this.newCourse = {};
		this.newCourse.name = '';
		this.newCourse.description = '';
		this.newCourse.duration = '';
		this.newCourse.date = new Date();
	}

	public clearForm() {
		this.hideForm();
	}

	public addCourse() {
		this.addNewCourse(this.newCourse);
	}
}
