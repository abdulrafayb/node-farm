module.exports = (temp, product) => {
  let output = temp.replace(/{%PRODUCTNAME%}/g, product.productName);
  output = output.replace(/{%IMAGE%}/g, product.image);
  output = output.replace(/{%PRICE%}/g, product.price);
  output = output.replace(/{%FROM%}/g, product.from);
  output = output.replace(/{%NUTRIENTS%}/g, product.nutrients);
  output = output.replace(/{%QUANTITY%}/g, product.quantity);
  output = output.replace(/{%DESCRIPTION%}/g, product.description);
  output = output.replace(/{%ID%}/g, product.id);

  if (!product.organic)
    output = output.replace(/{%NOT_ORGANIC%}/g, 'not-organic');

  return output;
};

/* we can create our own modules and export something from them like a function, and then import this function into another module and then use that function there */

/* in node.js every single file is treated as a module */

/* there are different ways of exporting something from a module and here we are gonna use module.exports, so in each module we have access to a variable called module and on there we can set the exports property and that we then set to whatever we want to export, and in our case its a anonymous function because it doesn't have a name */
