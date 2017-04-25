import { Component ,QueryList, ContentChildren, ViewChild, AfterContentInit, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'multi-state-button-group',
  templateUrl: './multiStateButton.html',
})
export class MultiStateButton implements AfterContentInit{
@ContentChildren("button") buttons: QueryList<any>;

@ViewChild("selected") selected ;

@Output() state:EventEmitter<number> = new EventEmitter<number>();

indexToShow = 0;
itemToRemove:any = null;
ngAfterContentInit() {
	//console.log(this.buttons);
		this.displayButton();
	}

displayButton(){

		if(this.indexToShow > this.buttons.length-1){
			this.indexToShow=0;
		}
		this.state.emit(this.indexToShow);
		this.buttons.forEach((item, index)=>{
		//console.log('index '+index);
		//console.log(item);
		if(this.indexToShow== index){
				if(this.itemToRemove!=null){
					this.selected.nativeElement.removeChild(this.itemToRemove.nativeElement);
				}
				this.selected.nativeElement.appendChild(item.nativeElement);
				console.log(this.indexToShow);
				this.itemToRemove = item;
			}
		});

		this.indexToShow++;
	}
}