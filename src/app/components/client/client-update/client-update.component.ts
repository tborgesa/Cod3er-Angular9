import { ClientService } from './../client.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';

@Component({
  selector: 'app-client-update',
  templateUrl: './client-update.component.html',
  styleUrls: ['./client-update.component.scss']
})
export class ClientUpdateComponent implements OnInit {

  client: Client = {
    name: '',
    phone: null,
    email: null
  }

  constructor(private router: Router,
    private clientService: ClientService,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.clientService.readById(id).subscribe(client => {
      this.client = client
    })
  }

  updateClient(): void {
    this.clientService.update(this.client).subscribe(
      () => {
        this.clientService.showMessage("Registro atualizado com sucesso.")
        this.router.navigate(['/client'])
      }
    )
  }

  cancel(): void {
    this.router.navigate(['/client'])
  }
}
