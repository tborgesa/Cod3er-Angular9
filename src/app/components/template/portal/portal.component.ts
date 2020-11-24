import { PortalService } from './portal.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-portal',
  templateUrl: './portal.component.html',
  styleUrls: ['./portal.component.scss']
})
export class PortalComponent implements OnInit {

  constructor(private portalService: PortalService) { }

  ngOnInit(): void {
  }

  get isDark(): boolean {
    return this.portalService.isDark
  }
}
