
function login(){// validacion de 3 intentos 
    let userIncome;
    let passwordIncome;
    for(let i=0;i<3;i++){ 
        userIncome=prompt("Ingrese Usuario");
        passwordIncome=prompt("Ingrese Clave");
        for( const item of Usuarios){
            if(item.user == userIncome && item.password == passwordIncome){  
                validation = true;
                return item;
            }
    if(i==2){
            alert("Usuario Bloqueado");
            return false;
        }; 
    };
};
};
function showMenu(){// muestra opciones de menu
    selection=prompt("Menu principal seleccione una opcion:\n 1-Saldos\n 2-Extracciones\n 3-Depósitos\n 4-Cambio de clave \n 5-Salir" );
    return selection;
};
function extraction(balance,extract){ 
     alert("ingreso")//* resta saldo - lo pedido
    balance = balance- Number(extract);
    alert("su extraccion de: " + extract + " fue realizada con exito");
    showAccount(balance);
    return balance;
};
function deposit(balance,deposito){//* suma saldo + lo depositado
    balance =Number(balance) + Number(deposito);
    alert("su Depósito  de: " +  deposito + " fue realizada con éxito");
    showAccount(balance);
    return balance;
};
function case1 (selection, pesos , dolares){ //* consulta de saldos en cuenta pesos y dolares 
        if(selection==1){
            showAccount(pesos);
        }else if(selection==2){
            showAccount(dolares);
        }else if(selection==3){
            choice= showMenu();
        }else if(selection==5){
            validation = false;
        }else{
            error();
        }
};
function case2( selection){//* Extraccion en cuenta
    if(selection==1){
            amount = prompt("Ingrese monto a extraer en pesos");
                if(amount <= ActiveUSer.accountPesos){                                  
                        ActiveUSer.accountPesos = extraction(ActiveUSer.accountPesos,Number(amount));
                        choice = showMenu();
                }else{
                    alert("no posee ese saldo en la cuenta");
                    showAccount(ActiveUSer.accountPesos);
                }
    }else if(selection==2){
            amount = prompt("Ingrese monto a extraer en Dólares");
            if(amount <= ActiveUSer.accountDolares){
                ActiveUSer.accountDolares = extraction(ActiveUSer.accountDolares,Number(amount)); 
                    choice = showMenu();
            }else{
                alert("no posee ese saldo en la cuenta");
                showAccount( ActiveUSer.accountDolares);
            }
    }else if(selection==3){
        choice= showMenu();
    }else if(selection==5){
        validation = false;     
    }else{
        error();
    }
};
function case3(selection){//* deposito en cuenta 
    if(selection==1){
        amount = prompt("Ingrese monto a depositar en Pesos \n");
        if(amount >=1){
            ActiveUSer.accountPesos= deposit(ActiveUSer.accountPesos,amount);  
        }else{
            alert("Ingrese un valor válido");
            console.log("usuario ingresó un valor negativo");
        }
    }else if(selection==2){
        amount = prompt("ingrese monto a depositar en Dólares\n ");
        if(amount >=1){
            ActiveUSer.accountDolares= deposit(ActiveUSer.accountDolares,amount);
        }else{
            alert("Ingrese un valor válido");
            console.log("usuario ingresó un valor negativo");
        }
    }else if(selection==3){
        choice= showMenu();
    }else if(selection==5){
        access = false;
    }
    else {
        error();
    }
};
function passwordReset(password){
    confirm=prompt("ingrese su clave");;
    if(Number(confirm)===password){
        let newPass = prompt("ingrese su nueva clave");
        let verification=prompt("repita su nueva clave");
        if(newPass === verification){
            password = newPass; 
            alert( "su nueva clave es  "+password);
            console.log("Cambio de clave exitoso");

            return password;
        }
    }else{
        alert("La clave no se cambió")
        return password;
    }
};
let showAccount=(saldo)=> alert("Su saldo actual es de: " + saldo);
function error (){
    alert("Favor de ingresar una opcion correcta");
    return choice =showMenu();
};

function Movimiento(nombre, edad) {
    this.nombre = nombre;
    this.edad = edad;
    this.saludar = function() {
      console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
    };
}




  