var path = require('path');
// Server side controllers
var product = require('./../controllers/productController.js');
var review = require('./../controllers/reviewController.js');
var category = require('./../controllers/categoryController.js');
var brand = require('./../controllers/brandController.js');
var customer = require('./../controllers/customerController.js');
var order = require('./../controllers/orderController.js');

var authentication = require('./../controllers/authentication.js');
var passportService = require('./../services/passport');
var passport = require('passport');
var requireAuth = passport.authenticate('jwt', {session: false});
var requireLogin = passport.authenticate('local', {session: false});

module.exports = function(app){
  //Products
  app.get('/products/get', product.getAll);
  app.get('/products/get/:id', product.get);
  app.get('/product/filter/category/:id', product.filterCategory);
  app.get('/product/filter/brand/:id', product.filterBrand);
  app.put('/product/update/:id', product.updateQty);
  app.post('/addProduct', product.add);
  app.delete('/product/:id', product.delete);

  //Reviews
  app.get('/reviews/get', review.getAll);
  app.post('/addReview', review.add);
  app.get('/reviews/:id', review.get);

  //Categories
  app.post('/addCategory', category.add);
  app.get('/categories', category.getAll);
  app.get('/categories/get/:id', category.get);

  //Brands
  app.post('/addBrand', brand.add);
  app.get('/brands', brand.getAll);
  app.get('/brands/get/:id', brand.get);

  //Customer - temporary, just for CRUD demo - should use User instead with real services
  app.post('/addCustomer', customer.add);
  app.get('/customers/get', customer.getAll);
  app.delete('/customers/:id', customer.delete);

  //Order - Again, temporary - in Future will add real Shopping Cart +  Order Service
  app.post('/orders/new', order.add);
  app.get('/orders/get', order.getAll);


  //User
  app.post('/register', authentication.register);
  app.post('/login', requireLogin, authentication.login);
}
