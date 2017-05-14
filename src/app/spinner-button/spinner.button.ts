import { Component ,QueryList, ContentChildren, ViewChild, AfterContentInit, Output, EventEmitter, Input} from '@angular/core';


@Component({
  selector: 'spinner-button',
  templateUrl: './spinner.button.html',
})

export class SpinnerButton{
	@Input() lable: string = 'click';
	@Input() showProgress: boolean = false;

	ngAfterViewInit() {
		console.log(this.lable);
		console.log(this.showProgress);
	}
}