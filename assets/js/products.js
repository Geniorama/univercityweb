$(document).ready(function() {
    class Portfolio{
        constructor(categoria, nombre_producto, nombre_cliente, recurso){
            this.categoria = categoria;
            this.nombre_producto = nombre_producto;
            this.nombre_cliente = nombre_cliente;
            this.recurso = recurso;
        }
    
        crearProyecto(){
            var cadena='';
    
                    cadena += '<div class="col-xs-12 col-md-3 item-gallery" data-category='+ this.categoria +'>';
                    cadena += '<div class="item-gallery">';
                    cadena += '<img src="img/portafolio/u-distrital/'+this.recurso+'" alt="" class="img-fluid">';
                    cadena += '<div class="caption-masonry">';
                    cadena += '<h5>'+ this.categoria +'</h5>';
                    cadena += '<a href="#" class="link">' + this.nombre_producto + '</a>';
                    cadena += '<h4 class="customer">Cliente: <span class="cliente">' + this.nombre_cliente + '</span></h4>';
                    cadena += '<div class="buttons"><a href="img/portafolio/u-distrital/'+this.recurso+'" data-lightbox=' + this.nombre_producto + ' data-title=' + this.nombre_producto + '><i class="fas fa-search-plus"></i></a></div>';
                    cadena += '</div>'; 
                    cadena += '</div>'; 
                    cadena += '</div>';            
                                    
                    var divItem = $(cadena);
                $('#gallery-home').prepend(divItem);
        }
    }
    
   
    
    
    function mostrarPortafolio(){
        productos =[
            productoUno = new Portfolio("Agencia Digital", "Marketing", "Colliers", "cuadernousme4.jpg"),
            productoDos = new Portfolio("Producción Audiovisual", "Audiovisual", "Davivienda", "cuadernousme4.jpg"),   
        ]
    
        for(let item of productos){
            item.crearProyecto();
        }
    }
    
    mostrarPortafolio();  
});
