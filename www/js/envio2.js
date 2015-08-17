
        $(function() {

            $("#enviadatos_2").click(function() {
               
				var elAuto_llegada = $("#auto_llegada option:selected").text();
  				var elModelo_llegada = $("#modelo_llegada option:selected").text();
				var elNivel_gas_llegada = $('input:radio[name=gasolina_fin]:checked').val();
				var elNum_eco_fin = $('#num_eco_fin').val();
				var elKilometraje_fin = $("#kilometraje_fin").val();
				var elComentario = $("#comentarios").val();				
                    $.ajax({
                      type: "POST",
                      url: "http://10.10.119.107/proyectos/php/conecta2.php",
                      //data: ({name: elNombre, mail: elMail, telefono: elTelefono }),
					  data: ({
						  auto_llegada: elAuto_llegada,
						  modelo_llegada: elModelo_llegada,
						  gasolina_llegada: elNivel_gas_llegada,
						  num_eco_fin: elNum_eco_fin,
						  kilometraje_fin: elKilometraje_fin,
						  comentarios: elComentario
					  }),
                      cache: false,
                      dataType: "text",
                      success: onSuccess
                    });
					
				
				
                
            });

        
            function onSuccess(data)
            {
	   			$('#form_llegada')[0].reset();
	   			$.mobile.changePage('#datos_enviados', 'pop', true, true);            
	   
//        alert(data);
            }

        });
