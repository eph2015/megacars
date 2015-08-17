
        $(function() {

            $("#enviadatos").click(function() {
				var elNum_nomina = $("#num_nomina").val();

				var laCuadrilla_ini = $("#cuadrilla_ini").val();
				var elAuto_salida = $("#auto_salida option:selected").text();
  				var elModelo_salida = $("#modelo_salida option:selected").text();
				var elNivel_gas_salida = $('input:radio[name=gasolina_ini]:checked').val();
				var elNum_eco_ini = $('#num_eco_ini').val();
				var elKilometraje_ini = $("#kilometraje_ini").val();
				
		              $.ajax({
                      type: "POST",
                      url: "http://10.10.119.107/Proyectos/php/conecta1.php",
         	
					  data: ({
						  cuadrilla_ini: laCuadrilla_ini,
						  num_nom: elNum_nomina,
						  auto_salida: elAuto_salida,
						  modelo_salida: elModelo_salida,
						  gasolina_salida: elNivel_gas_salida,
						  num_eco_ini: elNum_eco_ini,
						  kilometraje_ini: elKilometraje_ini
					  }),
                      cache: false,
                      dataType: "text",

                      success: onSuccess

                    });
					
				
				
                
            });

        
            function onSuccess(data)
    
	        {
				$('#form_salida')[0].reset();
		 	    $.mobile.changePage('#datos_enviados', 'pop', true, true);            
	
//        alert(data);
            }
			
        });
