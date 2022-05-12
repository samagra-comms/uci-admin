import { Injectable } from '@angular/core';
import * as i0 from "@angular/core";
export class Helper {
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
}
Helper.ɵfac = function Helper_Factory(t) { return new (t || Helper)(); };
Helper.ɵprov = i0.ɵɵdefineInjectable({ token: Helper, factory: Helper.ɵfac, providedIn: 'root' });
/*@__PURE__*/ (function () { i0.ɵsetClassMetadata(Helper, [{
        type: Injectable,
        args: [{
                providedIn: 'root'
            }]
    }], null, null); })();
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaGVscGVyLmpzIiwic291cmNlUm9vdCI6Im5nOi8vQHNhbWFncmEteC91Y2ktY29uc29sZS8iLCJzb3VyY2VzIjpbImxpYi91dGlscy9oZWxwZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsT0FBTyxFQUFDLFVBQVUsRUFBQyxNQUFNLGVBQWUsQ0FBQzs7QUFLekMsTUFBTSxPQUFPLE1BQU07SUFDZixNQUFNLENBQUMsUUFBUSxDQUFDLEVBQUU7UUFDZCxNQUFNLEdBQUcsR0FBRyxRQUFRLENBQUMsY0FBYyxDQUFDLEVBQUUsQ0FBQyxDQUFDLFNBQVMsQ0FBQztRQUNsRCxNQUFNLE1BQU0sR0FBRyxRQUFRLENBQUMsYUFBYSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ2xELE1BQU0sQ0FBQyxLQUFLLENBQUMsUUFBUSxHQUFHLE9BQU8sQ0FBQztRQUNoQyxNQUFNLENBQUMsS0FBSyxDQUFDLElBQUksR0FBRyxHQUFHLENBQUM7UUFDeEIsTUFBTSxDQUFDLEtBQUssQ0FBQyxHQUFHLEdBQUcsR0FBRyxDQUFDO1FBQ3ZCLE1BQU0sQ0FBQyxLQUFLLENBQUMsT0FBTyxHQUFHLEdBQUcsQ0FBQztRQUMzQixNQUFNLENBQUMsS0FBSyxHQUFHLEdBQUcsQ0FBQztRQUNuQixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUNsQyxNQUFNLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDZixNQUFNLENBQUMsTUFBTSxFQUFFLENBQUM7UUFDaEIsUUFBUSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QixRQUFRLENBQUMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBRUQsTUFBTSxDQUFDLFNBQVMsQ0FBQyxlQUFlLEVBQUUsV0FBVztRQUN6QyxPQUFPLFNBQVMsQ0FBQyxxQ0FBcUMsR0FBRyxlQUFlLEdBQUcsU0FBUyxHQUFHLFdBQVcsQ0FBQyxDQUFDO0lBQ3hHLENBQUM7OzREQWxCUSxNQUFNOzhDQUFOLE1BQU0sV0FBTixNQUFNLG1CQUZILE1BQU07a0RBRVQsTUFBTTtjQUhsQixVQUFVO2VBQUM7Z0JBQ1IsVUFBVSxFQUFFLE1BQU07YUFDckIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge0luamVjdGFibGV9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogJ3Jvb3QnXG59KVxuZXhwb3J0IGNsYXNzIEhlbHBlciB7XG4gICAgc3RhdGljIGNvcHlEYXRhKGlkKSB7XG4gICAgICAgIGNvbnN0IHZhbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGlkKS5pbm5lclRleHQ7XG4gICAgICAgIGNvbnN0IHNlbEJveCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RleHRhcmVhJyk7XG4gICAgICAgIHNlbEJveC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgICAgIHNlbEJveC5zdHlsZS5sZWZ0ID0gJzAnO1xuICAgICAgICBzZWxCb3guc3R5bGUudG9wID0gJzAnO1xuICAgICAgICBzZWxCb3guc3R5bGUub3BhY2l0eSA9ICcwJztcbiAgICAgICAgc2VsQm94LnZhbHVlID0gdmFsO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHNlbEJveCk7XG4gICAgICAgIHNlbEJveC5mb2N1cygpO1xuICAgICAgICBzZWxCb3guc2VsZWN0KCk7XG4gICAgICAgIGRvY3VtZW50LmV4ZWNDb21tYW5kKCdjb3B5Jyk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoc2VsQm94KTtcbiAgICB9XG5cbiAgICBzdGF0aWMgbWFrQm90VXJsKHN0YXJ0aW5nTWVzc2FnZSwgcGhvbmVOdW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGVuY29kZVVSSSgnaHR0cHM6Ly9hcGkud2hhdHNhcHAuY29tL3NlbmQ/dGV4dD0nICsgc3RhcnRpbmdNZXNzYWdlICsgJyZwaG9uZT0nICsgcGhvbmVOdW1iZXIpO1xuICAgIH1cbn1cbiJdfQ==