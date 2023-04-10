import { __decorate } from "tslib";
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
    Helper.ɵprov = i0.ɵɵdefineInjectable({ factory: function Helper_Factory() { return new Helper(); }, token: Helper, providedIn: "root" });
    Helper = __decorate([
        Injectable({
            providedIn: 'root'
        })
    ], Helper);
    return Helper;
}());
export { Helper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDO0lBQUE7S0FtQkM7SUFsQlUsZUFBUSxHQUFmLFVBQWdCLEVBQUU7UUFDZCxJQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRCxJQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRU0sZ0JBQVMsR0FBaEIsVUFBaUIsZUFBZSxFQUFFLFdBQVc7UUFDekMsT0FBTyxTQUFTLENBQUMscUNBQXFDLEdBQUcsZUFBZSxHQUFHLFNBQVMsR0FBRyxXQUFXLENBQUMsQ0FBQztJQUN4RyxDQUFDOztJQWxCUSxNQUFNO1FBSGxCLFVBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7T0FDVyxNQUFNLENBbUJsQjtpQkF4QkQ7Q0F3QkMsQUFuQkQsSUFtQkM7U0FuQlksTUFBTSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7SW5qZWN0YWJsZX0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5cbkBJbmplY3RhYmxlKHtcbiAgICBwcm92aWRlZEluOiAncm9vdCdcbn0pXG5leHBvcnQgY2xhc3MgSGVscGVyIHtcbiAgICBzdGF0aWMgY29weURhdGEoaWQpIHtcbiAgICAgICAgY29uc3QgdmFsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoaWQpLmlubmVyVGV4dDtcbiAgICAgICAgY29uc3Qgc2VsQm94ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGV4dGFyZWEnKTtcbiAgICAgICAgc2VsQm94LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICAgICAgc2VsQm94LnN0eWxlLmxlZnQgPSAnMCc7XG4gICAgICAgIHNlbEJveC5zdHlsZS50b3AgPSAnMCc7XG4gICAgICAgIHNlbEJveC5zdHlsZS5vcGFjaXR5ID0gJzAnO1xuICAgICAgICBzZWxCb3gudmFsdWUgPSB2YWw7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoc2VsQm94KTtcbiAgICAgICAgc2VsQm94LmZvY3VzKCk7XG4gICAgICAgIHNlbEJveC5zZWxlY3QoKTtcbiAgICAgICAgZG9jdW1lbnQuZXhlY0NvbW1hbmQoJ2NvcHknKTtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChzZWxCb3gpO1xuICAgIH1cblxuICAgIHN0YXRpYyBtYWtCb3RVcmwoc3RhcnRpbmdNZXNzYWdlLCBwaG9uZU51bWJlcikge1xuICAgICAgICByZXR1cm4gZW5jb2RlVVJJKCdodHRwczovL2FwaS53aGF0c2FwcC5jb20vc2VuZD90ZXh0PScgKyBzdGFydGluZ01lc3NhZ2UgKyAnJnBob25lPScgKyBwaG9uZU51bWJlcik7XG4gICAgfVxufVxuIl19