import { Injectable } from '@angular/core';
// import { Response, Request, RequestOptions, RequestMethod, Http } from '@angular/http';
// import { Observable } from 'rxjs';

// import 'rxjs/add/operator/map';

import { CourseItem } from '../../entities';

@Injectable()
export class CourseService {

	constructor() {
	}

	public getCourseItems(): CourseItem[]  {
		return [
			new CourseItem({
				name: 'Title 1',
				description: 'dess aasddd ddddddd ddddd ddddddd dddddcr1',
				duration: 'durat1'
			}),
			new CourseItem({
				name: 'Title 2',
				description: 'description 2',
				duration: 'durat2'
			}),
			new CourseItem({
				name: 'Title 3',
				description: 'description 3',
				duration: 'durat3'
			}),
			new CourseItem({
				name: 'Title 4',
				description: 'description 4',
				duration: 'durat4'
			}),
			new CourseItem({
				name: 'Title 5',
				description: 'description 5',
				duration: 'durat5'
			})
		];
	}
}
