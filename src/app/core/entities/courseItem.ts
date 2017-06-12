import { CourseData } from './courseData';

export class CourseItem {
	private _name: string;
	private _description: string;
	private _date: Date;
	private _duration: string;
	private _id: string;

	constructor(data: CourseData) {
		this._name = data.name;
		this._description = data.description;
		this._date = new Date();
		this._id = this.generateID();
		this._duration = data.duration;
	}

	get name(): string {
		return this._name;
	}

	get description(): string {
		return this._description;
	}

	get date(): Date {
		return this._date;
	}

	get id(): string {
		return this._id;
	}

	get duration(): string {
		return this._duration;
	}

	public modifyCourse(data: CourseData): void {
		this._name = data.name;
		this._description = data.description;
		this._duration = data.duration;
		this._date = new Date();
	}

	private generateID(): string {
		const randomNumber = Math.ceil(Math.random() * 10);
		const id = Date.now() + randomNumber;
		return id.toString();
	}
}

// class CourseItemManager {
// 	private _itemsList;

// 	constructor() {
// 		this._itemsList = {};
// 	}

// 	public setCourse(course: CourseItem): void {
// 		this._itemsList[course.id] = course;
// 	}

// 	public deleteCourse(course: CourseItem): void {
// 		delete this._itemsList[course.id];
// 	}

// 	public modifySelectedCourse(course: CourseItem, data: CourseData): void {
// 		this._itemsList[course.id].modifyCourse(data);
// 	}

// 	// for deleting
// 	public print(): void {
// 		const a = Object.keys(this._itemsList);
// 		a.map((i) => { console.log(this._itemsList[i].name); });
// 		console.log('_____________');
// 	}
// }

// const inst1: CourseData = {
// 	name: 'pasha1',
// 	description: 'descr1',
// 	duration: 'durat1'
// };

// const inst2: CourseData = {
// 	name: 'pasha2',
// 	description: 'descr2',
// 	duration: 'durat2'
// };

// const inst3: CourseData = {
// 	name: 'pasha4',
// 	description: 'descr2',
// 	duration: 'durat2'
// };

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
