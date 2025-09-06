import { Component } from '@angular/core';
import { signal } from '@angular/core';
import {computed} from "@angular/core";
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';

interface Pozo {
  nombre: string;
  ubicacion: string;
  produccion_diaria: string;
  estado: 'activo' | 'inactivo';
}

@Component({
  selector: 'app-principal',
  imports: [FormsModule],
  templateUrl: './principal.html',
  styleUrl: './principal.scss'
})
export class Principal {
  title = signal('Gestión de Pozos');

  // Señal que contiene la lista de pozos
  items = signal<Pozo[]>([]);

  // Señales para inputs del formulario
  nombre = signal('');
  ubicacion = signal('');
  produccion_diaria = signal('');
  estado = signal<'activo' | 'inactivo' | ''>('');

  // Computed para porcentaje de pozos activos
  porcentajeActivos = computed(() => {
    const total = this.items().length;
    if (total === 0) return 0;
    const activos = this.items().filter(p => p.estado === 'activo').length;
    return Math.round((activos / total) * 100);
  });

  // Función para agregar pozo a la lista
  agregarPozo() {
    if (!this.nombre() || !this.ubicacion() || !this.produccion_diaria() || !this.estado()) return;

    this.items.set([
      ...this.items(),
      {
        nombre: this.nombre(),
        ubicacion: this.ubicacion(),
        produccion_diaria: this.produccion_diaria(),
        estado: this.estado() as 'activo' | 'inactivo'
      }
    ]);

    // Limpiar formulario
    this.nombre.set('');
    this.ubicacion.set('');
    this.produccion_diaria.set('');
    this.estado.set('');
  }
}
