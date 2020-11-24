import { ClientService } from './../client.service';
import { Client } from './../client.model';
import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-client-delete',
  templateUrl: './client-delete.component.html',
  styleUrls: ['./client-delete.component.scss']
})
export class ClientDeleteComponent implements OnInit {

  client: Client

  constructor(
    private dialogRef: MatDialogRef<ClientDeleteComponent>,
    private clientService: ClientService,
    @Inject(MAT_DIALOG_DATA) data
  ) {
    this.client = data.client
  }

  ngOnInit(): void {
  }

  close(): void {
    this.dialogRef.close()
  }

  delete(): void {
    this.clientService.delete(this.client.id).subscribe(() => {
      this.clientService.showMessage("Registro excluido com sucesso")
      this.dialogRef.close()
    })
  }
}
