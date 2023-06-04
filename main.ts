import { Plataforma } from "./plataformas";
import { Canales } from "./canales";
import { Streamer } from "./streamers";
import { Streams } from "./stream";
import { Categoria } from "./categoria";

//Plataformas
const plataforma1 = new Plataforma (
    "Disney","Aqui va el logo","Plataforma de streaming","Disney"
)
const plataforma2 = new Plataforma (
    "Amazon","Aqui va el logo","Plataforma de streaming","Amazon"
)
const plataforma3 = new Plataforma (
    "Netflix","Aqui va el logo","Plataforma de streaming","Netflix" 
)
//Categorias
const Musica = new Categoria(
    "Musica","Descripción de categoria","Aqui va la imagen"
)
const Politica = new Categoria(
    "Politica","Descripcion de categoria","Aqui va la imagen"
)
const Videojuegos = new Categoria(
    "Videojuegos","Descripcion de categoria","Aqui va la imagen"
)

//Streams
const stream1 = new Streams(
    "nombredelstream1",Musica
)
const stream2 = new Streams(
    "nombredelstream2",Politica
)
const stream3 = new Streams(
    "nombredelstream3",Videojuegos
)
//Streamers
const streamer1 = new Streamer(
    "nombrestreamer1","Descripción del streamer","Aqui va la lista de redes",stream1
)
const streamer2 = new Streamer(
    "nombrestreamer2","Descripción del streamer","Aqui va la lista de redes",stream2
)
const streamer3 = new Streamer(
    "nombrestreamer3","Descripción del streamer","Aqui va la lista de redes",stream3
)
//Canales
const canal1 = new Canales(
    "nombre del canal 1","Aqui va el banner","Nombre del streamer","Aqui va la descripcion",plataforma1,streamer1
)
const canal2 = new Canales(
    "nombre del canal 2","Aqui va el banner","Nombre del streamer","Aqui va la descripcion",plataforma2,streamer2
)
const canal3 = new Canales(
    "nombre del canal 3","Aqui va el banner","Nombre del streamer","Aqui va la descripcion",plataforma3,streamer3
)

//Trae un listado de las plataformas (solo nombre)
const plataformas = [plataforma1, plataforma2, plataforma3];
const nombresPlataformas = plataformas.map((plataforma) => plataforma.nombre);
console.log(nombresPlataformas);

//Trae un listado con los detalles de las plataformas
plataforma1.plataformas.push(plataforma2, plataforma3);
const listadoPlataformas = plataforma1.obtenerListadoPlataformas();
console.log(listadoPlataformas);

//Agrega una nueva plataforma con todos sus detalles
plataforma1.agregarplataforma(plataforma3);
console.log(plataforma1);

//Trae un listado de los canales (solo el nombre)
const canales = [canal1,canal2,canal3];
const nombresCanales = canales.map((canal) => canal.nombre);
console.log(nombresCanales);

//Trae un listado de los detalles de los canales
canal1.canales.push(canal1,canal2,canal3);
const listadoCanales= canal1.detallescanales();
console.log(listadoCanales);

//Agrega un nuevo canal con todos sus detalles
canal1.agregarcanal(canal3);
console.log(canal1);

// Trae un listado de los streamers (solo nombre)
const streamers = [streamer1,streamer2,streamer3];
const nombreStremers = streamers.map((streamer)=> streamer.nombre);
console.log(nombreStremers);

//Trae un listado de los detalles de los streamers
streamer1.streamers.push(streamer1,streamer2,streamer3);
const listadoStreamers=streamer1.detallestreamer();
console.log(listadoStreamers);

//Agrega un nuevo streamer con todos sus detalles
streamer1.agregarstreamer(streamer3);
console.log(streamer1);

// Trae un listado de los streams (solo nombre)
const streams = [stream1,stream2,stream3];
const nombreStreams = streams.map((stream)=>stream.nombre);
console.log(nombreStreams);

//Trae un listado de los detalles de los streams
stream1.streams.push(stream1,stream2,stream3);
const listadoStreams=stream1.detallestream();
console.log(listadoStreams);

//Agrega un nuevo stream con todos sus detalles
stream1.agregarstream(stream3);
console.log(stream1);

//Agregar un canal a un streamer (No hace falta agregar aun canal a un streamer ya que ya viene de por si en la clase :) )
//Agregar un stream a un streamer (Tampoco hace falta agregar un stream a un streamer ya que no exitiria un stream sin streamer por lo que ya esta de por si en la clase :) )