import { Component, Input, OnInit } from '@angular/core';
import {TabulatorFull as Tabulator} from 'tabulator-tables';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tabla-usuarios',
  templateUrl: './tabla-usuarios.component.html',
  styleUrls: ['./tabla-usuarios.component.css']
})
export class TablaUsuariosComponent implements OnInit {
  @Input() columnNames: any[] = [
    {title: "#", field: "id", sorter: "number", headerFilter:"input", width: '70'},
    {title:"Nombre", field:"name", sorter:"string", headerFilter:"input"},
    {title:"Usuario", field:"username", sorter:"string"},
    {title:"Telefono", field:"phone", sorter:"string"},
    {title:"Correo", field:"email", sorter:"string"},
    {title:"Sitio Web", field:"website", sorter:"string"}
  ];

  tab = document.createElement('div');

  constructor(private router: Router) {
  }

  ngOnInit(): void{
    let table = document.querySelector('#my-tabular-table') as HTMLDivElement;
    this.drawTable(table);
  }

  private drawTable(html: HTMLDivElement): void {
    let table = new Tabulator(this.tab, {
      reactiveData: true,
      resizableRows: false,
      columns: this.columnNames,
      layout:"fitColumns",
      pagination: true,
      paginationSize: 6,
      ajaxURL:"https://jsonplaceholder.typicode.com/users"
    });
    html.appendChild(this.tab);

    table.on("rowClick", (e, row) =>{
      this.redireccionar(row.getIndex());
    });
  }
  
  redireccionar(id: string) {
    this.router.navigate(['detalle-usuario', id]);
  }
}
