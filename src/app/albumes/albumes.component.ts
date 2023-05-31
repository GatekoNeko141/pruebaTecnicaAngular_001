import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-albumes',
  templateUrl: './albumes.component.html',
  styleUrls: ['./albumes.component.css']
})
export class AlbumesComponent implements OnInit {
  listPhotos: any[] = [];
  title: string | undefined;
  image: string | undefined;

  constructor() {
  }

  ngOnInit(): void{
    this.getDataPhotos()
  }

  private async getDataPhotos(): Promise<void> {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/photos", {
        method: 'GET',
        headers: {}
      });
    
      if (response.ok) {
        const result = await response.json();
        this.listPhotos = result;
      }
    } catch (err) {
      console.error(err);
    }
  }

  async cargarInfoAlbum(idAlbum: number): Promise<void> {
    try {
      const response = await fetch(`https://jsonplaceholder.typicode.com/photos/${idAlbum}`, {
        method: 'GET',
        headers: {}
      });
    
      if (response.ok) {
        const result = await response.json();
        this.title = result.title;
        this.image = result.url;
      }
    } catch (err) {
      console.error(err);
    }
  }
}
