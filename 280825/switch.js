//switch
let optUser = prompt("Dame unas opcion de las siguintes: 1.ATDMV, 2. Impasse , 3. Queen");

switch(optUser){
 case "1" :
    console.log("ATDMV");
    break;

    case "2" :
       console.log("Impasse");
    break;

    case "3":
     console.log("Queen");
        break;
     default:
        console.log("Opcion no valida");
        break;

}

