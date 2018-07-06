import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';
import {AnnouncementsListComponent} from './announcements-list/announcements-list.component';
import {AnnouncementsCreatorComponent} from './announcements-creator/announcements-creator.component';
import {AnnouncementsEditorComponent} from './announcements-editor/announcements-editor.component';
import {AnnouncementsDetailsComponent} from './announcements-details/announcements-details.component';
import {CommonModule} from '@angular/common';
import {AnnouncementsComponent} from './announcements.component';



const routes= [
  {
    path: 'announcements',
    component: AnnouncementsComponent,
    children: [
      {
        path: '',
        component: AnnouncementsListComponent,
      },
      {
        path: 'create',
        component: AnnouncementsCreatorComponent,
      },
      {
        path: ':announcement_id',
        component: AnnouncementsDetailsComponent,
      },
      {
        path: ':announcement_id/edit',
        component: AnnouncementsEditorComponent,
      },
    ]

  }
];

@NgModule({
  declarations : [
    AnnouncementsComponent,
    AnnouncementsListComponent,
    AnnouncementsCreatorComponent,
    AnnouncementsEditorComponent,
    AnnouncementsDetailsComponent,
  ],
  imports : [
    RouterModule.forChild(routes),
    CommonModule,
  ],
  exports: [
    RouterModule
  ]
})
export class AnnouncementsRouterModule {}
