import {Component, ElementRef, OnInit, ViewChild, AfterViewInit} from '@angular/core';
import {DFADiagram} from '../automata-diagram/diagram';
import {Selectable} from '../models/selectable.model';
import {Observer} from 'rxjs/Observer';

// todo move to another file
export enum DfaCreatorSidebar {
  node_editor,
  edge_editor,
  blank,
}


@Component({
  selector: 'app-dfa-creator',
  templateUrl: './dfa-creator.component.html',
  styleUrls: ['./dfa-creator.component.css']
})
export class DfaCreatorComponent implements OnInit, AfterViewInit{
  current_sidebar: DfaCreatorSidebar = DfaCreatorSidebar.blank;

  // sidebars enums, this is needed becaues the template cannot access the Sidebar enum directly
  node_editor_sidebar = DfaCreatorSidebar.node_editor;
  edge_editor_sidebar = DfaCreatorSidebar.edge_editor;
  blank_sidebar = DfaCreatorSidebar.blank;

  @ViewChild('ControlsMenueContainer') controls_menue_container: ElementRef;
  show_controls_menu= false;

  @ViewChild('MainCanvas') canvas_ref: ElementRef;
  diagram: DFADiagram;

  constructor() { }

  ngOnInit() {

  }

  ngAfterViewInit(){
    this.diagram = new DFADiagram(this.canvas_ref.nativeElement);
    this.setEventListeners();
  }

  private setEventListeners() {

    // event handlers for document key events

    // this.canvas.addEventListener('keydown', (event: KeyboardEvent)=>{
    document.addEventListener('keydown', (event: KeyboardEvent)=>{
      // check if delete key is pressed

      // execute only if the delete is not pressed in an input element
      // todo, change condition to if not input element
      if(event.target !== document.body){
        return;
      }

      if(event.keyCode === 46){
        // console.log('Delete pressed');
        this.diagram.deleteSelectedNodesOrEdge();
      }
      else if(event.key.toLowerCase() == 'z' && event.ctrlKey){
        this.diagram.undoChanges();
      }
      else if(event.key.toLowerCase() == 'y' && event.ctrlKey){
        this.diagram.redoChanges();
      }
    });


    // The custom events emitted by createjs library does not support keyevents
    // Warning: inefficient
    document.addEventListener('keydown', (event: any) =>{
      if(event.keyCode == 16){
        // if the shift button was pressed
        this.diagram.switchToEdgeCreationMode();
      }
    });

    document.addEventListener('keyup', (event: any) =>{
      if(event.keyCode == 16){

        // if the shift button was released,
        this.diagram.switchToDefaultMode();
      }
    });


    // event listeners for diagram
    this.diagram.subscribeToNodeSelection((selection: Selectable[])=>{
      console.log('selected: ', selection);
    });

  }


  onUndoClick(event: any) {
    this.diagram.undoChanges();

    // remove focus from button after click, focus causes problems for shortcuts
    event.target.blur();
  }

  onRedoClick(event: any) {
    this.diagram.redoChanges();

    // remove focus from button after click, focus causes problems for shortcuts
    event.target.blur();
  }

  // controls menu callbacks
  onControlsBtnClick(){
    this.show_controls_menu = true;
  }

  closeControlsMenu(){
    this.show_controls_menu= false;
  }


}
