import {Component, ContentChildren,TemplateRef, QueryList } from '@angular/core';


@Component({
  selector: 'collapsible-component',
  templateUrl: './collapsible.component.html'
})
export class CollapsibleComponent{
@ContentChildren(TemplateRef) views: QueryList<TemplateRef<any>>;

public unCollapsed: TemplateRef<any>;
public collapsed: TemplateRef<any>;

isCollapsed:boolean = true;

ngAfterViewInit() {
  console.log('ngAfterViewInit '+this.views.length);
  this.unCollapsed = this.views.first;
  console.log(this.unCollapsed);
  this.collapsed = this.views.last;
  console.log(this.collapsed);
}

}