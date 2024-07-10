import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BirdComponent } from './bird/bird.component';
import { ObstacleComponent } from './obstacle/obstacle.component';
import { IonicModule } from '@ionic/angular';



@NgModule({
  declarations: [
    BirdComponent,
    ObstacleComponent,
  ],
  exports: [
    BirdComponent,
    ObstacleComponent
  ],
  imports: [
    IonicModule,
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ComponentsModule { }
