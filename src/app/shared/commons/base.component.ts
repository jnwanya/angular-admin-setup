import {ToastrService} from 'ngx-toastr';


export class BaseComponent {
  options = {timeOut: 5000, easing: 'ease-in', closeButton: true, theme: 'bootstrap', positionClass: 'toast-bottom-right', progressBar: true}
  constructor(public toast: ToastrService) {
  }

  successMessage(message: string, timeOut?: number) {
    const option = timeOut ? {...this.options, timeOut} : {...this.options};
    this.toast.success(message, 'Success' , option);
  }

  errorMessage(message: string, timeOut?: number) {
    const option = timeOut ? {...this.options, timeOut} : {...this.options};
    this.toast.error(message, 'Error', option);
  }

  informationMessage(message: string, timeOut?: number) {
    const option = timeOut ? {...this.options, timeOut} : {...this.options};
    this.toast.info(message, 'Information', option);
  }

  handleHttpRequestError(errorResponse: any) {
    console.log('error response', errorResponse);
    if (errorResponse.error.message) {
      if (errorResponse.error.status === 404) {
        this.errorMessage('Sorry, Requested resource is currently unavailable', 6000);
      } else {
        this.errorMessage(errorResponse.error.message);
      }
    } else {
        this.errorMessage('Sorry, Temporarily unable to process request.', 6000);
    }

  }
}
