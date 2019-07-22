import { Observable } from 'rxjs';

export abstract class BaseApiService {

    constructor() { }

    protected handleError(error: any) {
        const applicationError = error.headers.get('Application-Error');

        // either applicationError in header or model error in body
        if (applicationError) {
            // tslint:disable-next-line: deprecation
            return Observable.throw(applicationError);
        }

        let modelStateErrors = '';
        const serverError = error.json();

        if (!serverError.type) {
            for (const key in serverError) {
                if (serverError[key]) {
                    modelStateErrors += serverError[key] + '\n';
                }
            }
        }

        modelStateErrors = modelStateErrors = '' ? null : modelStateErrors;
        // tslint:disable-next-line: deprecation
        return Observable.throw(modelStateErrors || 'Server error');
    }
}