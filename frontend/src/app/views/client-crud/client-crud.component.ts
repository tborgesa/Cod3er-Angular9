import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-crud',
  templateUrl: './client-crud.component.html',
  styleUrls: ['./client-crud.component.css']
})
export class ClientCrudComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  navegateToClientCreate(): void {
    this.router.navigate(['/client/create'])
  }
}
