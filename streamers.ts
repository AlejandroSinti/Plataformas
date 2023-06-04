import { Streams } from "./stream";

export class Streamer{
    nombre:string;
    descripcion:string;
    listaredes:string;
    streams:Streams;
    streamers:Streamer[];
    constructor(nombre:string,descripcion:string,listaredes:string,streams:Streams)
    {
        this.nombre=nombre;
        this.descripcion=descripcion;
        this.listaredes=listaredes;
        this.streams=streams;
        this.streamers=[];
    }
    listadostreamer(): string[] {
        return this.streamers.map((streamer)=> streamer.nombre);
    }

    detallestreamer():any{
        return this.streamers.map((streamer)=>{
            return {nombre: streamer.nombre, descripcion: streamer.descripcion, listaredes: streamer.listaredes,streams:streamer.streams}
        });
    }

    agregarstreamer(streamer:Streamer){
        this.streamers.push(streamer)
    }
}