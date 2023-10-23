function calcular(){

    var nota1 = parseFloat(a1.value);
    var nota2 = parseFloat(r1.value);
    var nota3 = parseFloat(a2.value);
    var nota4 = parseFloat(r2.value);
    var nota5 = parseFloat(a3.value);
    var nota6 = parseFloat(r3.value);
    
    var maior1 = 0;
    var maior2 = 0;
    var maior3 = 0;


     //1 trimestre
    maior1 = Math.max(nota1,nota2);
         //2 trimestre
    if (nota3 >= nota4){
        maior2 = nota3;  
    
        }
        else {
            maior2 = nota4;
            }
        
        //3 trimestre
        if (nota5 >= nota6){
            maior3 = nota5;  
        
            }
            else {
                maior3 = nota6;
                }

    media = ((maior1+maior2+maior3)/3);

    result.innerHTML = ("Média Final. " + media);

}