import { Router } from '@angular/router';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  client: Client = {
    name: '',
    phone: null,
    email: null
  }

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  createClient(): void {
    this.clientService.create(this.client).subscribe(
      () => {
        this.clientService.showMessage("Operação executada com sucesso")
        this.router.navigate(['/client'])
      }
    )
  }

  cancel(): void {
    this.router.navigate(['/client'])
  }
}
