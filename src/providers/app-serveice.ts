import { NgModule } from '@angular/core';
import { AppHttp } from './app-http/app-http';
import { AppApi } from './app-api/app-api';
@NgModule({
	providers: [
        AppHttp,
        AppApi
    ]
})
export class AppServeiceProviderModule {
}
