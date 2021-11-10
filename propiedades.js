let propiedades=[
    [837884, "Posadas", "Departamento", "Felix de Azara 1848", "La unidad se encuentra en el piso sexto teniendo una vista plena del centro de la ciudad y la plaza 9 de julio. Cuenta con un dormitorio en suite con placard, cocina living comedor integrado, barra divisoria, anafe eléctrico, horno eléctrico y termo-tanque eléctrico, lavadero aparte y un baño social completo, ventanas de aluminio y doble vidrio", "E", "V", 16000000],
    [877737, "Posadas", "Casa", "Zona ruta 213 y Jesús Nazareno Posadas", "Se alquila casa a estrenar de dos dormitorios , sin placares, Termotanque eléctrico , lavadero , garaje y luz conectada . Se aceptan niños y mascotas.", "E", "A", 28000],
    [792993, "Posadas", "Casa", "Av. Rademacher 4083", "Living comedor, cocina comedor, dos dormitorios grandes, más la posibilidad de cerrar un tercero dentro de los m2 construidos (ya previsto), garage, lavadero, patio trasero y jardín de frente con galería. 2 baños, uno en suite enorme que se puede subdividir sí es el caso.", "U", "V", 28000000],
    [751842, "Posadas", "Casa", "C. 180 a 3758", "Casa consta de: 2 dormitorios, Baño, Cocina - Comedor, Living, Altillo, Cochera cubierta, Lavadero cubierto, Parrilla cubierta, Patio amplio", "U", "V", 8240000],
    [731752, "Posadas", "Departamento", "Triquiñuelas 1744", "Cuenta con: Portero, Cocina con alacena y bajo mesada, Termotanque, Baño completo con bañera, Lavadero social, Terraza con parrilla.", "E", "V", 8000000],
    [741133, "Posadas", "Departamento", "Av. Domingo Cabred 1769", "En zona cercana al hospital y cercana a la Universidad Católica de Santa Fe. Excelente para estudiantes o persona sola. No niños-No mascotas", "E", "A", 8500],
    [785046, "Posadas", "Departamento", "Av. Gral. Lavalle, Av. Bustamante", "Departamento 56 mts cuadrados aproximadamente. En Planta baja.2 dorm. C/placard empotrado, Baño. Cocina (alacena y bajo mesada). Comedor, estar, lavadero cubierto patio trasero delimitado y hall ingreso protegido ( rejas. ).Ventanas con celosías metálicas y rejas en todo el perímetro/Posibilidad de compra y permuta. Aceptan niños y mascotas", "U", "A", 15000],
    [740962, "Posadas", "Casa", "Av. Comandante Espora 1894", "Vendo hermosa casa sobre Avenida Comandante Espora, Chacra 30, próxima al centro de la ciudad y a pocas cuadras de la costanera, cuenta con: 3 habitaciones, 2 baños - 1 en suite, Altillo en 2 habitaciones, Un segundo piso en la parte de la sala, Alacenas, Mesada de cocina, Patio, Garage para dos autos cubiertos, lavadero, termotanque.", "U", "V", 19000000],
    [739784, "Ituzaingó", "Casa", "Cordoba 1195","Cuenta con dos casas y una cabaña dentro del mismo terreno: Casa al frente: cuenta con 2 dormitorios uno de ellos con AA, living cocina/comedor todo integrado con AA más baño completo, Casa contra frente: cuenta con 3 dormitorios, uno de ellos con AA, living cocina/comedor todo integrado con AA más baño completo, Cabaña atrás: cuenta con 2 dormitorios uno de ellos con AA, living cocina/comedor todo integrado más baño completo, galería, parrilla, pileta de natación, deposito, Ingreso a la propiedad con portón automático, zona segura. Excelente ubicación, a cuatro cuadras del río.", "E", "V", 11000000],
    [458642, "Posadas", "Departamento", "Belgrano y Costanera 8888", "2° Piso iterno con cochera cubierta. Living. Cocina. Comedor. Amplio y moderno. Muy seguro y cercano al centro", "U", "V", 14400000],
    [721680, "Posadas", "Departamento", "Santa Fe 1111","Balcón de frente con buena vista. El edificio cuenta con cámaras de seguridad. Departamento de 3 dormitorios con placard, cocina amoblada con bajo mesada y alacena, cuenta con horno eléctrico, anafe con campana, living comedor, balcón y lavadero. Dos baños uno en suite, cuenta con aires en todos los ambientes,amoblamiento marca Johnson, griferias de primera calidad, piso de Porcelanato y aberturas de aluminio.", "E", "V", 31000000],
    [718449, "Ituzaingó", "Casa", "Mendoza y Chile 1111", "Hermosa casa a pocas cuadras del río, cocina amoblada con bajomesada y alacena, sala - estar, dormitorio principal con cama matrimonial con baño en suite y A.A, dos dormitorios con A.A, estantes y A.A, baño completo social con termotanque. Lavadero cubierto, parrilla con asador. Amplio patio. Servicios de agua y luz.", "U", "V", 15450000],
    [570164, "Posadas", "Departamento", "Gral Simon Bolivar 1521", "Pisos porcelanato, cerradura biométrica (huella digital, clave, tarjeta magnética y llave), horno, cocina y anafe (todo eléctrico), portero visor color de marca líder, aires acondicionados con tecnología de Gas ecológico, griferías y sanitarios de alta prestación, aberturas de aluminio anodizado natural de alta categoría.", "E", "V", 30000000],
    [726286, "Posadas", "Departamento", "Santa Fe 1199", "Cocina amoblada con alacena y bajo mesada. Living/Comedor con balcón. 3 Dormitorios con sus respectivos placares. Baño completo. Lavadero con termotanque. Garaje para un auto. Seguridad las 24hs.", "U", "V", 14000000],
    [766866, "Garupá", "Casa", "Ruta 105 1111", "CUENTA CON PLANTA BAJA: -LIVING PRINCIPAL -BAR -SALA DE TV -COMEDOR PRINCIPAL -COCINA COMEDOR DIARIO -BAÑO SOCIAL. PLANTA ALTA: -1 DORMITORIO EN SUITE DE 6X6, CON VESTIDOR, PLACARD DE CEDRO BAÑO CON BAÑERA, MAMPARA. - 2 DORMITORIOS CON PLACAR DE CEDRO DE PARED A PARED AREA DE SERVICIO: LAVADERO -HABITACIÓN - COCINA - BAÑO -GARAGE CUBIERTO PARA 2 AUTOS -DOS QUINCHOS CON PARRILLA -PISCINA DE 10x5 mts. EQUIPADA CON: -7 AIRES ACONDICIONADO -GRUPO ELECTRÓGENO -2 HELADERAS FRIGOBAR -3 TELEVISORES -COCINA -HORNO ELÉCTRICO -TELÉFONO FIJO -MICROONDAS -CAMAS -MESAS -SILLAS -JUEGO DE LIVING COMPLETO (TODO PERSONALIZADO Y A MEDIDA) -PERFORACIÓN DE AGUA -DIRECTV -LUZ TRIFASICA -PATIO CON PALMERAS Y FUENTES DE AGUA.", "E", "V", 72100000],
    [756748, "Posadas", "Departamento", "C. 20 de Junio 19", "Departamento planta baja. 3 habitaciones. Baño. Living-comedor. Lavadero. Garage.", "U", "V", 3100000],
    [748239, "Posadas", "Departamento", "C. Gómez Portiño 1642", "Departamento en 3° piso. 2 dormitorios. Baño social. Baño privado. Estar-comedor. Cocina. Balcón. Cochera.", "U", "V", 16480000],
    [745902, "Posadas", "Casa", "C. 122 3301", "2 habitaciones. Baño. Living. Cocina-comedor. Altillo. Garage. Amplia galeria.", "U", "V", 50000000],
    [755540, "Posadas", "Departamento", "Colon 1860", "Edificio Puerta Del Sol", "E", "A", 85000],
    [785860, "Posadas", "Casa", "Av. Tomas Guido 3984", "Listo para escriturar. Medidas del terreno: 10x30 (300Mts2). A metros de la Avenida Thomas Guido.", "U", "V", 7300000],
    [729092, "Posadas", "Departamento", "Tucuman 1493", "1 dormitorio con placar. Baño completo. Cocina con alacena y bajo emsada. Living/Comedor. Termotanque. Balcon. TErraza con SUM.", "E", "V", 12000000],
    [717370, "Posadas", "Casa", "Av. Francisco de Haro 2867", "3 dormitorios con placares. 2 baños completos. Living - Cocina - Comedor amoblada. Cochera cubierta para un auto. Pequeño patio con piscina.", "U", "V", 26780000],
    [701185, "Posadas", "Casa", "Pedro Mendez 2258", "2 habitaciones. Baño. Living comedor diario. Lavadero cubierto.", "U", "V", 14400000],
    [550626, "Posadas", "Casa", "Barrio Palomar", "Cuenta con 3 dormitorios con placares, cocina con amoblamientos de bajo mesada y alacena. quincho, parrilla, patio .cochera, terraza, un buen espacio que de preferencia podría ser utilizado para pileta.", "U", "V", 34000000],
    [11881, "Posadas", "Casa", "San Luis 1646", "250 mts construidos, cuenta con cocina totalmente amoblada con bajomesada y alacena, living con chimenea, comedor de amplias dimensiones con salida al patio, en la planta alta se encuentran 2 dormitorios con placares y balcón , dos baños, uno de ellos con jacussi y otro dormitorio con salida a la terraza, habitacion de servicio con baño privado, lavadero cubierto, todos los ambientes con AA, * Patio con quincho con parrilla y pileta, en la propiedad cuenta con un grupo electrogeno.", "U", "V", 170000000],
];
let enVenta=[];
let enAlquiler=[];



// FUNCION DE FILTRO REUTILIZABLE
function filtrarPor(array,e,cond){
    let arrayTemp = new Array();
    
    array.forEach(function (element,i){

        if(array[i][e]==cond){
            arrayTemp.push(array[i]);
        }
    });
    
    return (arrayTemp);
    
}

// FUNCION ORDENAR METODO BURBUJA

function burbuja(array){
    let aux,n;
    n = array.length;

    for(let k=1;k<n;k++){
        for(let i=0;i<(n-k);i++){
            if(array[i][0]>array[i+1][0]){
                aux = array[i];
                array[i] = array[i+1];
                array[i+1] = aux;
            }
        }
    }
}

// FUNCION AGREGA LAS VENTAS Y LOS ORDENA POR BURBUJA
function venta() {

    enVenta = filtrarPor(propiedades,6,"V");
    burbuja(enVenta);
    console.log(enVenta);
}



// FUNCION AGREGA LOS ALQUILERES Y ORDENA POR METODO SORT
function alquiler(propiedades) {
    for (let i = 0; i < propiedades.length; i++) {
        if (propiedades[i][6]=="A") {
            enAlquiler.push(propiedades[i]);
        }
    }
    // FILTRO

    enAlquiler.sort(function(a,b){
        return a[0] - b[0];
    })
    console.log(enAlquiler);
}
alquiler(propiedades);

//BOTONES Y TABLAS

btnAgregar = document.getElementById("btnAgregar");
btnMostrar = document.getElementById("btnMostrar");
let propiedadesAgregadas = [];

eventos();
function eventos(){

    btnAgregar.addEventListener("click",agregar);
}

function agregar(){

    const localidad = document.getElementById("localidad").value;
    const tipo = document.getElementById("tipo");
    const tipoUser = tipo.value;
    const direccion = document.getElementById("direccion").value;
    const descripcion = document.getElementById("descripcion").value;
    const condicion = document.getElementById("condicion");
    const condUser = condicion.value;
    const estado = document.getElementById("estado");
    const estUser = estado.value;
    const precio = document.getElementById("pesos").value;

    propiedadesAgregadas.push(String(localidad));
    propiedadesAgregadas.push(String(tipoUser));
    propiedadesAgregadas.push(String(direccion));
    propiedadesAgregadas.push(String(descripcion));
    propiedadesAgregadas.push(String(condUser));
    propiedadesAgregadas.push(String(estUser));
    propiedadesAgregadas.push(Number(precio));
    console.log(propiedadesAgregadas);
}


    function borrarSegunCodigo(propiedades, row) {
        propiedades = propiedades.slice(0); // make copy
        propiedades.splice(row - 1, 1);
        return propiedades;
     }
     
     console.log(deleteRow(propiedades, /numero de la fila empezando por 1/));