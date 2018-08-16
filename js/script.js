$(document).ready(function () {
	Materialize.updateTextFields();
	$("#btnOrdenar").hide();

	$("#btnAceptar").click(inicio);
	$("#btnOrdenar").click(ordenar);
	var arr;
});


function inicio(){
	$("#resultado").empty();
	$("#proceso").empty();
	var cantidad = $("#txtNumeros").val();
	
	console.log("cantidad de numeros: "+cantidad);
	if (cantidad>0 && cantidad <=12) {
		$("#columna1").empty();
		for (var i = 1; i <= cantidad; i++) {	
			$("#columna1").append('<div class="input-field col  s6 m3 l1 center">        <input id="txtnum'+i+'" type="text" class="validate center">        <label for="txtnum'+i+'">Número '+i+'</label>      </div>');
		}
		$("#btnOrdenar").show();

	} else {
		Materialize.toast('Ingrese un numero entre 1 y 12!', 4000);
	}//cierre else if

}//cierre funcion de inicio


function ordenar() {
	$("#resultado").empty();
	$("#proceso").empty();
	
	var cantidad = $("#txtNumeros").val();
	var arreglo=[];
	for (var i = 1; i <= cantidad; i++) {
		var valor = $("#txtnum"+i).val();
		arreglo.push(""+valor);
	}
	var radio=$('input:radio[name=group1]:checked').val();
	
	if (radio==null) {
		Materialize.toast("Debe seleccionar un Algoritmo",4000);
	} else if(radio==1){
		bubblesort(arreglo);
	}else if(radio==2){
		selectionSort(arreglo);
	}else if(radio==3){
		insertionSort(arreglo)
	}else if(radio==4){
		arr=arreglo;
		quicksort(0,(arreglo.length-1));
	}else if(radio==5){
		ordenacionShell(arreglo);
	}
	
	console.log("arr: "+arreglo);
	arr=arreglo;

	
}

function proceso(arreglo) {
	$("#resultado").empty();
	for(var i = 0; i < arreglo.length - 1; i++)
	{
		for(var j = 0; j < arreglo.length - 1; j++)
		{
			if (parseInt(arreglo[j]) < parseInt(arreglo[j + 1]))
			{
				var tmp = arreglo[j+1];
				arreglo[j+1] = arreglo[j];
				arreglo[j] = parseInt(tmp);
				console.log("proceso: "+arreglo);
			}
		}
	}
	for(var i = arreglo.length-1;i >= 0; i--)
	{
		console.log("arr: "+arreglo[i]);
		$("#resultado").append('<div class="input-field col  s6 m1 l1">        <input value="'+arreglo[i]+'" id="txtres'+i+'"  placeholder="'+arreglo[i]+'" type="text" class="center" >        <label for="txtres'+i+'" class="active">Número '+(arreglo.length-i)+'</label>      </div>');
	}
}// cierre funcion de proceso del algoritmo

function bubblesort(arreglo){
	var i,j,AUX;
 for(i=0;i<=arreglo.length-1;i++){ //avanza
	 for(j=arreglo.length-1;j>=i;j--){ //retrocede
			 if(parseInt(arreglo[j-1])>parseInt(arreglo[j])){ //si a > p intercambio
			 	AUX=arreglo[j-1];
			 	arreglo[j-1]=arreglo[j];
			 	arreglo[j]=parseInt(AUX);
			 	imprimirShell(arreglo);
			 }
	}
}

for(var i = 0;i < arreglo.length; i++)
	{
		console.log("arr: "+arreglo[i]);
		$("#resultado").append('<div class="input-field col  s6 m1 l1">        <input value="'+arreglo[i]+'" id="txtres'+i+'"  placeholder="'+arreglo[i]+'" type="text" class="center" >        <label for="txtres'+i+'" class="active">Número '+(i+1)+'</label>      </div>');
	}
}

function selectionSort(arreglo)
{
	var i, j;
	var min, temp;
	for (i = 0; i < arreglo.length; i++){
		min = i;
		for (j = i+1; j < arreglo.length; j++){

			if (arreglo[j] < arreglo[min]){
				min = j;

			}
			
		}
		
		temp = arreglo[i];

		arreglo[i] = arreglo[min];

		arreglo[min] = temp;

		console.log("proceso, "+arreglo);
		imprimirShell(arreglo);
	}

	for (var i = 0; i < arreglo.length; i++) {
		//console.log("arr: "+arreglo[i]);
		$("#resultado").append('<div class="input-field col  s6 m1 l1">        <input value="'+arreglo[i]+'" id="txtres'+i+'"  placeholder="'+arreglo[i]+'" type="text" class="center" >        <label for="txtres'+i+'" class="active">Número '+(i+1)+'</label>      </div>');
	}

}

function insertionSort(arreglo){

	var i, j, index;
	for (i=1; i < arreglo.length; i++){
		index = arreglo[i];
		j = i;
		while ((j > 0) && (arreglo[j-1] > index)) {
			arreglo[j] = arreglo[j-1];
			j = j - 1;
			
			
		}
		
		arreglo[j] = index;
		//console.log("proceso: "+arreglo);
		imprimirShell(arreglo);
	}

	for (var i = 0; i < arreglo.length; i++) {
		//console.log("metodo insercion: "+arreglo[i]);
		$("#resultado").append('<div class="input-field col  s6 m1 l1">        <input value="'+arreglo[i]+'" id="txtres'+i+'"  placeholder="'+arreglo[i]+'" type="text" class="center" >        <label for="txtres'+i+'" class="active">Número '+(i+1)+'</label>      </div>');
	}

}//cierre Algoritmo de insercion


function quicksort(primero,ultimo){
    //definimos variables indices
    i = primero
    j = ultimo

    //sacamos el pivote de la mitad del arreglo
    pivote = arr[parseInt((i+j)/2)];

    iteracionQS(i,j,pivote,primero,ultimo)

}

function iteracionQS(i,j,pivote,primero,ultimo){

        //mientras arreglo[i] sea menor a pivote
        while(arr[i]<pivote)
        	i++;
        //mientras j sea mayor a pivote
        while(arr[j]>pivote)
        	j--;

        //si el indice i es menor o igual a j entonces intercambiamos
        if(i<=j){

            //variable temporal auxiliar para guardar valor de arreglo[j]
            aux=arr[j];

            //intercambiamos los valores de arreglo[j] y arreglo[i]
            arr[j] = arr[i]
            arr[i] = aux

            // incrementamos y decrementamos i y j
            i++;
            j--;

            imprimirArreglo(arr);
            console.log("arreglo1: "+arr);
        }

        //repetimos
        if(i<j){
        //hacemos una pausa de medio segundo
        
        
        	iteracionQS(i,j,pivote,primero,ultimo)
        
    }else{
         //si primero es menor a j llamamos la funcion nuevamente
         if(primero<j){

                    //pausa de medio segundo

                    setTimeout(function(){
                    	quicksort(primero,j);
                    },1000);

                }
                        //si ultimo es mayor que i llamamos la funcion nuevamente
                        if(ultimo>i){

                        //pausa de medio segundo
                        
                        setTimeout(function(){
                        	quicksort(i,ultimo)
                        }
                        ,1000);
                    }
                }
            }


            function imprimirArreglo(){
            	
            	for(i_=0;i_<arr.length;i_++){
            		$("#resultado").append(' <a class="btn-floating btn-large waves-effect waves-light red">'+arr[i_]+'</a>');
            	}
            	$("#resultado").append("<br>");
            }
            function imprimirShell(arr){
            	
            	for(i_=0;i_<arr.length;i_++){
            		$("#proceso").append(' <a class="btn-floating btn-large waves-effect waves-light red">'+arr[i_]+'</a>');
            	}
            	$("#proceso").append("<br>");
            }
            function imprimirinsercion(arr){
            	
            	for(i_=0;i_<arr.length;i_++){
            		$("#proceso").append(' <a class="btn-floating btn-large waves-effect waves-light red">'+arr[i_]+'</a>');
            	}
            	$("#proceso").append("<br>");
            }

            function ordenacionShell(v) {
            	var N = v.length;
            	var incremento = N;
            	do {
            		incremento = incremento / 2;
            		for (var k = 0; k < incremento; k++) {
            			for (var i = incremento + k; i < N; i += incremento) {
            				var j = i;
            				while (j - incremento >= 0 && v[j] < v[j - incremento]) {
            					var tmp = v[j];
            					v[j] = v[j - incremento];
            					v[j - incremento] = tmp;
            					j -= incremento;
            					console.log("proceso. "+v);
            					imprimirShell(v);
            				}

            			}

            		}

            	} while (incremento > 1);

            	console.log("Shell: "+v);
            	for(var i = 0;i < v.length; i++)
            	{

            		$("#resultado").append('<div class="input-field col  s6 m1 l1">        <input value="'+v[i]+'" id="txtres'+i+'"  placeholder="'+v[i]+'" type="text" class="center" >        <label for="txtres'+i+'" class="active">Número '+(i+1)+'</label>      </div>');
            	}


    } // cierre funcion de shellSort




    function solonumeros(e){
    	var key=window.Event ? e.which : e.keyCode
    	return(key >=48 && key <=57)
    }