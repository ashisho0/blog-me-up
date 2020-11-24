import { Injectable } from "@angular/core";
import { ToastrService } from "ngx-toastr"



@Injectable()
export class NotifyService {
    constructor(public toastr: ToastrService) {
    }

    showSuccess(str: string) {
        this.toastr.success(str);
    }

    showInfo(str: string) {
        this.toastr.info(str);
    }

    showWarning(str: string) {
        this.toastr.warning(str);
    }

    showError(str: string) {
        // this.toastr.success(str);
        debugger;
    }
}
