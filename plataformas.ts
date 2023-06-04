import { Canales } from "./canales";

export class Plataforma {
nombre:string;
logo:string;
descripcion:string;
empresa:string;
canales:Canales[]
plataformas:Plataforma[];
constructor(nombre:string,logo:string,descripcion:string,empresa:string)
{
    this.nombre=nombre;
    this.logo=logo;
    this.descripcion=descripcion;
    this.empresa=empresa;
    this.canales=[];
    this.plataformas=[];
}

obtenerNombrePlataformas(): string[] {
    return this.plataformas.map((plataforma) => plataforma.nombre);
}

obtenerListadoPlataformas(): any[] {
    return this.plataformas.map((plataforma) => {
      return {nombre: plataforma.nombre,logo: plataforma.logo,descripcion: plataforma.descripcion,empresa: plataforma.empresa};
    });
}

agregarplataforma(plataforma:Plataforma){
    this.plataformas.push(plataforma)
}

}
