import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {StorageService} from '../shared/services/storage.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit(): void {
  }

  onLogout() {
    StorageService.clearAll();
    this.router.navigate(['/login']);
  }

}
