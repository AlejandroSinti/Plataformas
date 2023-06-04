import { Categoria } from "./categoria";

export class Streams{
    nombre:string;
    categoria:Categoria
    streams:Streams[];
    constructor(nombre:string,categoria:Categoria)
    {
        this.nombre=nombre;
        this.categoria=categoria;
        this.streams=[];
    }
    listadostream():string []{
        return this.streams.map((stream)=>stream.nombre);
    }
    detallestream():any[]{
        return this.streams.map((stream)=>{
            return{nombre: stream.nombre, categoria:stream.categoria};
        });
    }
    agregarstream(stream:Streams){
        this.streams.push(stream)
    }
}