import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'shared-document-editor',
  templateUrl: './document-editor.component.html',
  styleUrls: ['./document-editor.component.css']
})
export class DocumentEditorComponent implements OnInit, AfterViewInit {
  @ViewChild('Wrapper') editor_wrapper: ElementRef;

  editor_options = {
    bounds : undefined,

  };

  constructor() {
    this.editor_options.bounds = this.editor_wrapper;
  }

  ngOnInit() {

  }

  ngAfterViewInit(){


  }

}
