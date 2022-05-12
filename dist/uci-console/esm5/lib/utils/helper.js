import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
var Helper = /** @class */ (function () {
    function Helper() {
    }
    Helper.copyData = function (id) {
        var val = document.getElementById(id).innerText;
        var selBox = document.createElement('textarea');
        selBox.style.position = 'fixed';
        selBox.style.left = '0';
        selBox.style.top = '0';
        selBox.style.opacity = '0';
        selBox.value = val;
        document.body.appendChild(selBox);
        selBox.focus();
        selBox.select();
        document.execCommand('copy');
        document.body.removeChild(selBox);
    };
    Helper.makBotUrl = function (startingMessage, phoneNumber) {
        return encodeURI('https://api.whatsapp.com/send?text=' + startingMessage + '&phone=' + phoneNumber);
    };
    Helper.ɵfac = function Helper_Factory(t) { return new (t || Helper)(); };
    Helper.ɵprov = i0.ɵɵdefineInjectable({ token: Helper, factory: Helper.ɵfac, providedIn: 'root' });
    return Helper;
}());
export { Helper };
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Helper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFFekM7SUFBQTtLQXNCQztJQWxCVSxlQUFRLEdBQWYsVUFBZ0IsRUFBRTtRQUNkLElBQU0sR0FBRyxHQUFHLFFBQVEsQ0FBQyxjQUFjLENBQUMsRUFBRSxDQUFDLENBQUMsU0FBUyxDQUFDO1FBQ2xELElBQU0sTUFBTSxHQUFHLFFBQVEsQ0FBQyxhQUFhLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLEtBQUssQ0FBQyxRQUFRLEdBQUcsT0FBTyxDQUFDO1FBQ2hDLE1BQU0sQ0FBQyxLQUFLLENBQUMsSUFBSSxHQUFHLEdBQUcsQ0FBQztRQUN4QixNQUFNLENBQUMsS0FBSyxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUM7UUFDdkIsTUFBTSxDQUFDLEtBQUssQ0FBQyxPQUFPLEdBQUcsR0FBRyxDQUFDO1FBQzNCLE1BQU0sQ0FBQyxLQUFLLEdBQUcsR0FBRyxDQUFDO1FBQ25CLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ2xDLE1BQU0sQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNmLE1BQU0sQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNoQixRQUFRLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQzdCLFFBQVEsQ0FBQyxJQUFJLENBQUMsV0FBVyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFFTSxnQkFBUyxHQUFoQixVQUFpQixlQUFlLEVBQUUsV0FBVztRQUN6QyxPQUFPLFNBQVMsQ0FBQyxxQ0FBcUMsR0FBRyxlQUFlLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Z0VBbEJRLE1BQU07a0RBQU4sTUFBTSxXQUFOLE1BQU0sbUJBRkgsTUFBTTtpQkFIdEI7Q0F3QkMsQUF0QkQsSUFzQkM7U0FuQlksTUFBTTtrREFBTixNQUFNO2NBSGxCLFVBQVU7ZUFBQztnQkFDUixVQUFVLEVBQUUsTUFBTTthQUNyQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSGVscGVyIHtcbiAgICBzdGF0aWMgY29weURhdGEoaWQpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVyVGV4dDtcbiAgICAgICAgY29uc3Qgc2VsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgc2VsQm94LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHNlbEJveC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBzZWxCb3gudmFsdWUgPSB2YWw7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsQm94KTtcbiAgICAgICAgc2VsQm94LmZvY3VzKCk7XG4gICAgICAgIHNlbEJveC5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZWxCb3gpO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtCb3RVcmwoc3RhcnRpbmdNZXNzYWdlLCBwaG9uZU51bWJlcikge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJKCdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD90ZXh0PScgKyBzdGFydGluZ01lc3NhZ2UgKyAnJnBob25lPScgKyBwaG9uZU51bWJlcik7XG4gICAgfVxufVxuIl19