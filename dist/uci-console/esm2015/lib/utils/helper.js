import { __decorate } from "tslib";
import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
let Helper = class Helper {
    static copyData(id) {
        const val = document.getElementById(id).innerText;
        const selBox = document.createElement('textarea');
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
    }
    static makBotUrl(startingMessage, phoneNumber) {
        return encodeURI('https://api.whatsapp.com/send?text=' + startingMessage + '&phone=' + phoneNumber);
    }
};
Helper.ɵprov = i0.ɵɵdefineInjectable({ factory: function Helper_Factory() { return new Helper(); }, token: Helper, providedIn: "root" });
Helper = __decorate([
    Injectable({
        providedIn: 'root'
    })
], Helper);
export { Helper };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBQyxVQUFVLEVBQUMsTUFBTSxlQUFlLENBQUM7O0FBS3pDLElBQWEsTUFBTSxHQUFuQixNQUFhLE1BQU07SUFDZixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDZCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsV0FBVztRQUN6QyxPQUFPLFNBQVMsQ0FBQyxxQ0FBcUMsR0FBRyxlQUFlLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7Q0FDSixDQUFBOztBQW5CWSxNQUFNO0lBSGxCLFVBQVUsQ0FBQztRQUNSLFVBQVUsRUFBRSxNQUFNO0tBQ3JCLENBQUM7R0FDVyxNQUFNLENBbUJsQjtTQW5CWSxNQUFNIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtJbmplY3RhYmxlfSBmcm9tICdAYW5ndWxhci9jb3JlJztcblxuQEluamVjdGFibGUoe1xuICAgIHByb3ZpZGVkSW46ICdyb290J1xufSlcbmV4cG9ydCBjbGFzcyBIZWxwZXIge1xuICAgIHN0YXRpYyBjb3B5RGF0YShpZCkge1xuICAgICAgICBjb25zdCB2YWwgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChpZCkuaW5uZXJUZXh0O1xuICAgICAgICBjb25zdCBzZWxCb3ggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZXh0YXJlYScpO1xuICAgICAgICBzZWxCb3guc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgICAgICBzZWxCb3guc3R5bGUubGVmdCA9ICcwJztcbiAgICAgICAgc2VsQm94LnN0eWxlLnRvcCA9ICcwJztcbiAgICAgICAgc2VsQm94LnN0eWxlLm9wYWNpdHkgPSAnMCc7XG4gICAgICAgIHNlbEJveC52YWx1ZSA9IHZhbDtcbiAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChzZWxCb3gpO1xuICAgICAgICBzZWxCb3guZm9jdXMoKTtcbiAgICAgICAgc2VsQm94LnNlbGVjdCgpO1xuICAgICAgICBkb2N1bWVudC5leGVjQ29tbWFuZCgnY29weScpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHNlbEJveCk7XG4gICAgfVxuXG4gICAgc3RhdGljIG1ha0JvdFVybChzdGFydGluZ01lc3NhZ2UsIHBob25lTnVtYmVyKSB7XG4gICAgICAgIHJldHVybiBlbmNvZGVVUkkoJ2h0dHBzOi8vYXBpLndoYXRzYXBwLmNvbS9zZW5kP3RleHQ9JyArIHN0YXJ0aW5nTWVzc2FnZSArICcmcGhvbmU9JyArIHBob25lTnVtYmVyKTtcbiAgICB9XG59XG4iXX0=