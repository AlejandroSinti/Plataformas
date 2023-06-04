import { Plataforma } from "./plataformas";
import { Streamer } from "./streamers";

export class Canales{
    nombre:string;
    banner:string;
    nombrestreamer:string;
    descripcion:string;
    plataforma:Plataforma;
    streamer:Streamer;
    canales:Canales[]
    constructor(nombre:string,banner:string,nombrestreamer:string,descripcion:string,plataforma:Plataforma,streamer:Streamer)
    {
        this.nombre=nombre;
        this.banner=banner;
        this.nombrestreamer=nombrestreamer;
        this.descripcion=descripcion;
        this.plataforma=plataforma;
        this.streamer=streamer;
        this.canales=[];
    }
    
    listadocanales():String[] {
        return this.canales.map((canal)=>canal.nombre)
    }

    detallescanales(): any[]{
        return this.canales.map((canal)=>{
         return {nombre: canal.nombre, Banner:canal.banner, nombredelstreamer:canal.nombrestreamer,descripcion:canal.descripcion,plataforma:canal.plataforma,streamer:canal.streamer}
        });
    }
    agregarcanal(canal:Canales){
        this.canales.push(canal)
}

}