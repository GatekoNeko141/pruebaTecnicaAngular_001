import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-usuario',
  templateUrl: './detalle-usuario.component.html',
  styleUrls: ['./detalle-usuario.component.css']
})
export class DetalleUsuarioComponent implements OnInit {
  id: string | undefined;
  nombre: string | undefined;
  username: string | undefined;
  email:string | undefined;
  phone:string | undefined;
  website:string | undefined;
  address:string | undefined;
  zipcode:string | undefined;
  company:string | undefined;

  resultFiltered: any | undefined;

  comentarios: any[] = [];

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.id = params['id'];
      this.getDataUser(this.id);
    });
  }

  private async getDataUser(id: any): Promise<void> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/users/"+id, {
        method: 'GET',
        headers: {}
      });
    
      if (response.ok) {
        const result = await response.json();

        this.nombre = result.name;
        this.username = result.username;
        this.email = result.email;
        this.phone = result.phone;
        this.website = result.website;
        this.address = `${result.address.city}, ${result.address.street} - ${result.address.suite}`;
        this.zipcode = result.address.zipcode;
        this.company = `${result.company.name}, ${result.company.bs} - ${result.company.catchPhrase}`;

        this.getPosts(id);
      }
    } catch (err) {
      console.error(err);
    }
  }

  private async getPosts(id: number): Promise<void> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
        method: 'GET',
        headers: {}
      });
    
      if (response.ok) {
        const result = await response.json();
        this.resultFiltered = result.filter((item: { userId: any; }) => item.userId === parseInt(id as any));
      }
    } catch (err) {
      console.error(err);
    }
  }

  async cargarComentarios(postId: number): Promise<void> {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`, {
        method: 'GET',
        headers: {}
      });
    
      if (response.ok) {
        const result = await response.json();
        this.comentarios = result
      }
    } catch (err) {
      console.error(err);
    }
  }
  
}