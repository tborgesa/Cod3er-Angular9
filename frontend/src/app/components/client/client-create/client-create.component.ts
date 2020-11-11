import { Router } from '@angular/router';
import { ClientService } from './../client.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client-create',
  templateUrl: './client-create.component.html',
  styleUrls: ['./client-create.component.css']
})
export class ClientCreateComponent implements OnInit {

  constructor(private clientService: ClientService, private router: Router) { }

  ngOnInit(): void {
  }

  createClient(): void {
    this.clientService.showMessage("Operação executada com sucesso");
  }

  cancel(): void {
    this.router.navigate(['/client'])
  }
}
