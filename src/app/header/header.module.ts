import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { HeaderPageRoutingModule } from './header-routing.module';

import { HeaderPage } from './header.page';
import {MenuPrincipalPageModule} from "../menu-principal/menu-principal.module";

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        HeaderPageRoutingModule
    ],
    exports: [
        HeaderPage
    ],
    declarations: [HeaderPage]
})
export class HeaderPageModule {}
