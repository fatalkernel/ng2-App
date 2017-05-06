import { Injectable } from '@angular/core';

declare let toastr: any

toastr.options = {
  "closeButton": true,
  "debug": false,
  "newestOnTop": false,
  "progressBar": true,
  "positionClass": "toast-bottom-right",
  "preventDuplicates": true,
  "onclick": null,
  "showDuration": "300",
  "hideDuration": "1000",
  "timeOut": "5000",
  "extendedTimeOut": "1000",
  "showEasing": "swing",
  "hideEasing": "linear",
  "showMethod": "fadeIn",
  "hideMethod": "fadeOut"
}
@Injectable()
export class ToastrService {

constructor() { }

success(message?: string, title?:string){
    toastr.success(message,title)
}


info(message?: string, title?:string){
    toastr.info(message,title)
}

warning(message?: string, title?:string){
    toastr.warning(message,title)
}

error(message?: string, title?:string){
    toastr.error(message,title)
}
}