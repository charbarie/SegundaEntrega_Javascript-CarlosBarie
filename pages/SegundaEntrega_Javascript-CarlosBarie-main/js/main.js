
let amount;
let choice = 0;
let option;
let validation = false;
let ActiveUSer = {};
ActiveUSer = login();
console.log(ActiveUSer);/* 
 if(ActiveUSer !=false){
    choice= showMenu();
    while(choice != 5 && validation === true){
        switch(choice){
            case "1": // envia la opcion y los datos almacenados en Active user
                case1(option = prompt(" 1-Consulta cuenta en pesos\n 2-Consulta cuenta en dólares\n 3-Volver al Menu principal\n 5-salir"));
                break; 
            case "2": // envia saldo en las cuentas y la opcion
                case2( option = prompt(" 1-Extracción en pesos\n 2-Extracción en Dólares\n 3-Volver al Menu principal\n 5-Salir"));
                break;
            case "3":
                case3(option = prompt(" 1-Depósito en pesos\n 2-Depósito en Dólares\n 3-Volver al menu principal \n 5-Salir"));
                break;
            case "4":
                ActiveUSer.password= passwordReset(ActiveUSer.password);
                choice= showMenu();
                break;
            default:
                error();
                break;
        };
    };
};
alert("Gracias por utilizar el servicio"); */