import { ClientService } from '../client.service';
import { Component, OnInit } from '@angular/core';
import { Client } from '../client.model';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ClientDeleteComponent } from '../client-delete/client-delete.component';
import { read } from 'fs';

@Component({
  selector: 'app-client-read',
  templateUrl: './client-read.component.html',
  styleUrls: ['./client-read.component.css']
})
export class ClientReadComponent implements OnInit {

  clients: Client[]
  displayedColumns = ['name', 'phone', 'email', 'action']

  constructor(
    private clientService: ClientService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.readClients()
  }

  confirmDelete(client: Client): void {
    const dialogConfig = new MatDialogConfig();

    dialogConfig.disableClose = true;
    dialogConfig.autoFocus = true;
    dialogConfig.data = {
      client: client
    };

    const dialogRef = this.dialog.open(ClientDeleteComponent, dialogConfig);
    dialogRef.afterClosed().subscribe(() => {
      this.readClients()
    });
  }

  readClients(): void {
    this.clientService.read().subscribe(clients => {
      this.clients = clients
    })
  }
}
