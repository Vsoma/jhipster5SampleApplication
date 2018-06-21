import { NgModule } from '@angular/core';

import { Jhipster5SampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [Jhipster5SampleApplicationSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [Jhipster5SampleApplicationSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class Jhipster5SampleApplicationSharedCommonModule {}
