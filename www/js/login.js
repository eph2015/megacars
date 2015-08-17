$(document).ready(function(){
    $("#errorMsg").hide();
    $("#btnLogin").click(function(){
        var usu = $("#txtuser").val();
        var pass = $("#txtpassword").val();
        $.post("http://10.10.119.107//proyectos/php/login.php",{ usu : usu, pass : pass},function(respuesta){
            if (respuesta == true) {
                $.mobile.changePage("#home");
            }
			else{
                $.mobile.changePage('#pageError', 'pop', true, true);
                $("#errorMsg").fadeIn(300);
                $("#errorMsg").css("display", "block");
            }
        });
    });
});