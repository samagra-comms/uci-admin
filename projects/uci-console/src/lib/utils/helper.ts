import {Injectable} from '@angular/core';

@Injectable({
    providedIn: 'root'
})
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
