import { Component, ViewEncapsulation, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { CourseService } from '../../core/services';
import { TodoService } from '../../core/services';
import { TodoItem } from '../../core/entities';
import { CourseItem } from '../../core/entities';

@Component({
	selector: 'home',
	encapsulation: ViewEncapsulation.None,
	providers: [],
	styles: [require('./home.styles.scss')],
	template: require('./home.template.html')
})

export class HomeComponent implements OnInit {
	// private todoServiceSubscription: Subscription;
	// private todoList: TodoItem[];
	private courseList: CourseItem[];
	// private isLoading: boolean = false;
	private isShowingForm: boolean = false;

	constructor(private courseService: CourseService) {
		// console.log('Home page constructor');
		// this.courseList = [];
		// this.todoList = [];
	}

	public ngOnInit() {
		// console.log('Home page init');
		// this.isLoading = false;
		// this.todoServiceSubscription = this.todoService.getTodoItems().subscribe((res: TodoItem[]) => {
		// 	this.todoList = res;
		// 	this.isLoading = false;
		// });

		this.courseList = this.courseService.getCourseItems();
		// console.log(this.courseList);
	}

	// public ngOnDestroy() {
	// 	this.todoServiceSubscription.unsubscribe();
	// }

	public showForm = (course?: CourseItem): void => {
		this.isShowingForm = true;
	}

	public hideForm = (): void => {
		this.isShowingForm = false;
	}

	public deleteCourse = (course: CourseItem): void => {
		const index = this.courseList.indexOf(course);
		this.courseList.splice(index, 1);
		this.hideForm();
	}

	public addNewCourse = (data): void => {
		const newCourse = new CourseItem(data);
		this.courseList.push(newCourse);
		this.hideForm();
	}

	public onChanged() {
		console.log('del');
	}
}

// const obj1 = new CourseItem(inst1);
// const obj2 = new CourseItem(inst2);
// const obj3 = new CourseItem(inst3);
// const list = new CourseItemManager();
// list.setCourse(obj1);
// list.setCourse(obj2);
// list.setCourse(obj3);
// list.print();
// list.modifySelectedCourse(obj1, inst3);
// list.print();
// list.deleteCourse(obj1);
// list.print();
