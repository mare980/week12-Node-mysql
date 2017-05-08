var inquirer = require('inquirer');
var mysql = require('mysql');

var connection = mysql.createConnection({
    host: 'localhost',
    port: 3306,

    user: 'root',

    password: '',
    database: 'Bamazon_DB'
});

connection.connect(function(err) {
    if (err) throw err;
    // console.log('Connection Successful!');
});


var menu = function(productname) {
        inquirer.prompt([{
            type: 'input',
            message: 'What is the ID of the product you would like to purchase?',
            name: 'choice'
        }, {
            type: 'input',
            message: 'How many units of the product would you like to buy? ',
            name: 'quant'
        }]).then(function(item) {
            inquirer.prompt({
                type: 'confirm',
                message: item.id + '| ' + product.name + ' | ' + department.name + ' | ' + product.price,
                name: 'confirm'
            }).then(function(confirm) {
                if (confirm.confirm) {
                console.log('POSTED');
                // TODO WRITE A BUNCH OF CODE
                console.log(itemname);
                sqlPost(item, itemname);
                menu(itemname);
                } else {
                menu();
                }
            });
        }
}




var sqlPost = function(item, productname) {
    

    connection.query('INSERT INTO items SET ?', {
        item_id: item.id,
        product_name: product.name,
        department_name: department.name,
        price: product.price,
        stock_quantity: 'None'
    }, function(err, res) {
        if (err) throw err;
    });
}


var buyItem = function(productname) {
    var itemList = [];

    connection.query('SELECT * FROM items', function(err, items) {
        if (err) throw err;

        for (var i = 0; i < items.length; i++) {
            // console.log(items[i].item_id + " | " + items[i].product_name + " | " + items[i].department_name + " | " + items[i].stock_quantity);


            console.log()
            itemList.push(items[i].product_name);
        };

        inquirer.prompt([{
            type: 'list',
            message: 'Select an item id to view.',
            choices: itemList,
            name: 'choice'
        }]).then(function(selection) {
            connection.query('SELECT * FROM items WHERE item_id in (?)', [selection.choice], function(err, result) {
                console.log(result);
            });

            menu(productname);

        });
    });



    // exit();
}



var exit = function() {
    connection.end();
}



menu();
