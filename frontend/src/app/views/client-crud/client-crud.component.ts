import { HeaderService } from './../../components/template/header/header.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) {
    headerService.headerData = {
      title: 'Clientes',
      icon: 'person',
      routeUrl: '/client'
    }
  }
  ngOnInit(): void {
  }

  navegateToClientCreate(): void {
    this.router.navigate(['/client/create'])
  }
}
