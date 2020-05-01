import {LoggingInterceptor } from './logging-interceptor';

import{HTTP_INTERCEPTORS} from '@angular/common/http';

export const httpInterceptorsProviders =[

    { provide: HTTP_INTERCEPTORS, useClass: LoggingInterceptor, multi: true }

];

