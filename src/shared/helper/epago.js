var sha512 = require('js-sha512');

/*global Epago*/
export function startPayment() {
    var transaction = buildTransaction();

    var authenticator = buildAuthentication(transaction);
    
    var form = new Epago.Form({
        environment: 'quality',

        authentication: authenticator,
        transaction: transaction,

        listeners: {
            afterPay: function (response) {
                if (response.success) {
                    if (response.data.processor.result.accepted) {
                        console.info({ ecommerceCapureResponse: response });
                        console.info("AUTHORIZED");
                    }
                    else {
                        console.info({ ecommerceCapureResponse: response });
                        console.info("DENIED");
                    }
                }
                else {
                    console.info({ ecommerceCapureResponse: response });
                    console.info("ERROR");
                }
            }
        }
    });
    form.render('#cart-container');
}

function buildTransaction() {
    // Genere el número de orden, este es solo un ejemplo
    var number = (new Date()).getTime() + "";

    // Seteo de los datos de transacción
    var transaction = {
        "order": { // Obligatorio
            // Seteo del número de pedido
            "number": number, // Obligatorio - string(200)
            // Seteo del código de país
            "country": { // Obligatorio
                "code": "PER" // Obligatorio - [PER]
            },
            // Seteo del código de moneda
            "currency": { // Obligatorio
                "code": "PEN" // Obligatorio - [PEN]
            },
            //Seteo del monto
            "amount": 10.10, // Obligatorio - float
            // Seteo del cliente
            "customer": { // Obligatorio
                "identifer": "a123456a-d123-4e3a-bcf4-aea1234f5f93", // Opcional - string(200)
                "name": "Javier", // Obligatorio - string(200)
                "lastName": "Pérez", // Obligatorio - string(200)
                // Seteo de datos de dirección
                "address": { // Obligatorio
                    "country": "PER", // Obligatorio - [PER]
                    // Códigos de área de Perú (Departamento / Provincia / Distrito)
                    "levels": [ // Obligatorio
                        "LIMA", // Obligatorio - string(200)
                        "LIMA", // Obligatorio - string(200)
                        "SAN ISIDRO" // Obligatorio - string(200)
                    ],
                    // Dirección
                    "line1": "Ca Nueve 1802", // Obligatorio - string(200)
                    // Código postal
                    "zip": "15036" // Obligatorio - string(200)
                },
                // Seteo del email y teléfono
                "email": "test@test.com", // Obligatorio - string(200)
                "phone": "999888777", // Obligatorio - string(200)
                // Seteo del tipo y número de documento
                "document": { // Obligatorio
                    "type": "DNI", // Obligatorio - [DNI, CE]
                    "number": "44556677" // Obligatorio - string(200)
                }
            },
            // Seteo de los datos de envío
            "shipping": { // Obligatorio
                "name": "Javier", // Obligatorio - string(200)
                "lastName": "Pérez", // Obligatorio - string(200)
                // Seteo de datos de dirección
                "address": { // Obligatorio
                    "country": "PER", // Obligatorio - [PER]
                    // Códigos de área de Perú (Departamento / Provincia / Distrito)
                    "levels": [ // Obligatorio
                        "LIMA", // Obligatorio - string(200)
                        "LIMA", // Obligatorio - string(200)
                        "SAN ISIDRO" // Obligatorio - string(200)
                    ],
                    // Dirección
                    "line1": "Ca Nueve 1802", // Obligatorio - string(200)
                    // Código postal
                    "zip": "15036" // Obligatorio - string(200)
                },
                "email": "test@test.com", // Obligatorio - string(200)
                "phone": "999555666", // Obligatorio - string(200)
                "document": { // Obligatorio
                    "type": "DNI", // Obligatorio - [DNI, CE]
                    "number": "44556677" // Obligatorio - string(200)
                }
            },
            // Seteo de los datos de facturación
            "billing": { // Opcional
                "name": "Javier",
                "lastName": "Pérez",
                "address": {
                    "country": "PER",
                    "levels": [
                        "LIMA",
                        "LIMA",
                        "SAN ISIDRO"
                    ],
                    "line1": "Ca Nueve 1802",
                    "zip": "15036"
                },
                "email": "test@test.com",
                "phone": "999555666",
                "document": {
                    "type": "DNI",
                    "number": "44556677"
                }
            },
            // Seteo de los datos de producto
            "products": [{ // Obligatorio
                "name": "Llavero", // Obligatorio - string(200)
                "quantity": 1, // Obligatorio - integer
                "unitAmount": 10.10, // Obligatorio - float
                "amount": 10.10, // Obligatorio - float
                "sku": "1020304005060", // Obligatorio - string(200)
                "category": "Electro", // Obligatorio - string(200)
                "discount": 0, // Obligatorio - float
                "shipping": 0, // Obligatorio - float que hago con esto?
            }],
            "features": { // Opcional
                "readonlyFields": ['cardholderName'] // Opcional - [cardholderName]
            },
        },
        // Seteo de los datos de configuración
        "settings": { // Obligatorio
            "paymentMethods": ['Tarjetas-Credito-Debito'], // Obligatorio - [definido por ePago]
            "brands": ['VISA', 'MSCD', 'AMEX', 'DINC'], // Obligatorio - [VISA, MSCD, AMEX, DINC]
            "language": "es_PE", // Obligatorio - [es_PE]
            "businessService": "WEB" // Obligatorio - [WEB]
        }
    };
    return transaction;
}


function buildAuthentication(transaction) {
    // poner aca las credenciales
    const apiKey = '';
    const secretKey = '';

    const signature = generateSignature(transaction, apiKey, secretKey);

    var authenticator = {
        identifier: apiKey,
        signature: signature,
    }

    return authenticator;
}

function generateSignature(transaction, apiKey, secretKey) {
    const orderNumber = transaction.order.number;
    const currencyCode = transaction.order.currency.code;
    const amount = transaction.order.amount;
  
    const rawSignature =  apiKey + orderNumber + currencyCode + amount + secretKey
    const signature = sha512(rawSignature);
    return signature;
  }