const functions = require('firebase-functions');
const firebase = require('firebase-admin');
const express = require('express');
const engines = require('consolidate');
const session = require("express-session");
 const FirebaseStore = require('connect-session-firebase')(session);
const app = express();
var firebase_web = require("firebase");

var bodyParser =require("body-parser");
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());



app.engine('hbs', engines.handlebars);
app.set('views','./views');
app.set('view engine', 'hbs');
app.enable('view cache');
var handlebars = require('handlebars');
// var helpers = require('handlebars-helpers');
// var helpers = require('template-helpers');
var helpers = require('handlebars-form-helpers').register(handlebars);


const hbs = require('express-handlebars');
var exhbs = hbs.create({
   defaultLayout: 'main',
    helpers      : helpers,
});


const appTwo = express();
appTwo.use(bodyParser.urlencoded({extended: true}));
appTwo.use(bodyParser.json());
appTwo.engine('hbs', engines.handlebars);
appTwo.set('views','./views');
appTwo.set('view engine', 'hbs');
appTwo.enable('view cache');

const appThree = express();
appThree.use(bodyParser.urlencoded({extended: true}));
appThree.use(bodyParser.json());
appThree.engine('hbs', engines.handlebars);
appThree.set('views','./views');
appThree.set('view engine', 'hbs');


const appFour = express();
appFour.use(bodyParser.urlencoded({extended: true}));
appFour.use(bodyParser.json());
appFour.engine('hbs', engines.handlebars);
appFour.set('views','./views');
appFour.set('view engine', 'hbs');

const appFive = express();
appFive.use(bodyParser.urlencoded({extended: true}));
appFive.use(bodyParser.json());
appFive.engine('hbs', engines.handlebars);
appFive.set('views','./views');
appFive.set('view engine', 'hbs');


const appSix = express();
appSix.use(bodyParser.urlencoded({extended: true}));
appSix.use(bodyParser.json());
appSix.engine('hbs', engines.handlebars);
appSix.set('views','./views');
appSix.set('view engine', 'hbs');


const appSeven = express();
appSeven.use(bodyParser.urlencoded({extended: true}));
appSeven.use(bodyParser.json());
appSeven.engine('hbs', engines.handlebars);
appSeven.set('views','./views');
appSeven.set('view engine', 'hbs');

const appEight = express();
appEight.use(bodyParser.urlencoded({extended: true}));
appEight.use(bodyParser.json());
appEight.engine('hbs', engines.handlebars);
appEight.set('views','./views');
appEight.set('view engine', 'hbs');

const appNine = express();
appNine.use(bodyParser.urlencoded({extended: true}));
appNine.use(bodyParser.json());
appNine.engine('hbs', engines.handlebars);
appNine.set('views','./views');
appNine.set('view engine', 'hbs');

const appTen = express();
appTen.use(bodyParser.urlencoded({extended: true}));
appTen.use(bodyParser.json());
appTen.engine('hbs', engines.handlebars);
appTen.set('views','./views');
appTen.set('view engine', 'hbs');

const appEleven = express();
appEleven.use(bodyParser.urlencoded({extended: true}));
appEleven.use(bodyParser.json());
appEleven.engine('hbs', engines.handlebars);
appEleven.set('views','./views');
appEleven.set('view engine', 'hbs');

const appTwelve = express();
appTwelve.use(bodyParser.urlencoded({extended: true}));
appTwelve.use(bodyParser.json());
appTwelve.engine('hbs', engines.handlebars);
appTwelve.set('views','./views');
appTwelve.set('view engine', 'hbs');

const appThirteen = express();
appThirteen.use(bodyParser.urlencoded({extended: true}));
appThirteen.use(bodyParser.json());
appThirteen.engine('hbs', engines.handlebars);
appThirteen.set('views','./views');
appThirteen.set('view engine', 'hbs');

const appFourteen = express();
appFourteen.use(bodyParser.urlencoded({extended: true}));
appFourteen.use(bodyParser.json());
appFourteen.engine('hbs', engines.handlebars);
appFourteen.set('views','./views');
appFourteen.set('view engine', 'hbs');


var nodemailer = require('nodemailer');

const firebaseApp = firebase.initializeApp(
    functions.config().firebase
);
 var config2 = {
<<<<<<< HEAD
    apiKey: "AIzaSyA4TPdvFAbqie_t0s038Sqp4CJhRbltL8Y",
    authDomain: "y-shopping.firebaseapp.com",
     databaseURL: "https://y-shopping.firebaseio.com",
    projectId: "y-shopping",
    appId: "1:911282489225:web:3fee7dd0aea858df"
=======
    apiKey: "",  //left blank purposely
    authDomain: "",  //left blank purposely
     databaseURL: "",    //left blank purposely
    projectId: "" //left blank purposely
>>>>>>> f08344b9874829bf38b47e58392c032b6c8c51ce
 };
const firebaseApp_web = firebase_web.initializeApp(config2);

function Cart(oldCart) {
      oldCart = oldCart ? oldCart : {};
    
    this.items = oldCart.items || {};
    this.totalQty = oldCart.totalQty || 0;
    this.totalPrice = oldCart.totalPrice || 0;
    
      this.add = function(item, id) {
        var storedItem = this.items[id];
        if (!storedItem) {
            storedItem = this.items[id] = {item: item, qty: 0, price: 0};
        }
        storedItem.qty++;
        storedItem.price = storedItem.item.price;
        this.totalQty++;
        this.totalPrice += storedItem.item.price;
    };
    
       this.removeItem = function(id) {
        this.totalQty -= this.items[id].qty;
        this.totalPrice -= this.items[id].price;
        delete this.items[id];
    };
    
        this.generateArray = function() {
        var arr = [];
        for (var id in this.items) {
            arr.push(this.items[id]);
        }
        return arr;
    };
}



<<<<<<< HEAD
app.get("/",(request, response) =>{ 
    console.log("MODE:",process.env.NODE_ENV);
=======
app.get("/",(request, response) =>{    
>>>>>>> f08344b9874829bf38b47e58392c032b6c8c51ce
    function getFacts(){
    var ref = firebaseApp.database().ref('products');
    return ref.once('value').then(snap => snap.val());   
}
  getFacts().then(facts => {
      console.log("home products",facts);
     response.render('home-new',{facts})       
       return null;    
    }).catch(error => {
              console.log('error', error);
            });       
});

var cookieParser = require("cookie-parser");
appSeven.use(session({
      store: new FirebaseStore({
        database: firebaseApp.database()
      }),
      name: '__session',
      secret: 'mysupersecret',
      resave: false,
      saveUninitialized: false,
      cookie: {maxAge : 10*60*1000 },
      secure: true
    }));
appSeven.use(cookieParser('mysupersecret'));

appSeven.get("/auth/login",(req,res) => {
    console.log("step 1, login url");
    res.render("login.hbs", {error: null});
});     

appSeven.post("/auth/loginPost",(req,res)=>{   
                var email=req.body.email ;
    var password =req.body.password ;
    console.log("step 2, login/auth url");
    firebaseApp_web.auth().signInWithEmailAndPassword(email, password).then((user)=>{
        console.log("user 2:",user);
        console.log("the person is signed in");
        
      req.session.user = JSON.stringify(user);
      req.session.count = 0;
      console.log("req.session.user in loginPost: ",req.session.user);
      console.log("is mail verified",user.user.emailVerified);
      if(user.user.emailVerified === false){
         var err= "Email address is not verified. Check mail box.";
          res.render("login.hbs", {error:err});
      }
      else {
          res.redirect("/auth/auth-shopping-cart");
      }
        return  null;
    }).catch(function(error) {
  var errorCode = error.code; var errorMessage = error.message;
  console.log("errorCode: ",errorCode); console.log("errorMessage: ",errorMessage);
  var err;
  if(errorCode === "auth/user-not-found") err = "Please Sign Up";
  if(errorCode === "auth/invalid-password") err = "Password must be at least six characters."; 
  if(errorCode === "auth/wrong-password") err = "The password is wrong";
  if(errorCode === "auth/invalid-email") err= "Invalid Email";
  res.render("login.hbs", {error: err} ); 
});
return res.locals.session = req.session;
})

appSeven.get("/signUp", (req,res) => {
    res.render("signup.hbs", {error: null});
});


appSeven.post("/signup/auth",(req,res)=>{
    var email=req.body.email;
    var password =req.body.password    
    firebaseApp_web.auth().createUserWithEmailAndPassword(email, password).then(function(){        
        var user = firebaseApp_web.auth().currentUser;
                user.sendEmailVerification().then(function() {
                console.log("email send for verification");
                return null;
        }).catch(function(error) {
        console.log("error happen while sending verification mail: ",error);
        });
          res.redirect("/auth/login");
      return null;  
    }).catch(function(error) {
  var errorCode = error.code; var errorMessage = error.message;
  console.log("errorCode: ",errorCode);  console.log("errorMessage: ",errorMessage);
      var err;
  if(errorCode === "auth/email-already-in-use") err = "The provided email is already in use by an existing user. Please choose another";
  if(errorCode === "auth/weak-password") err = "Password must be at least six characters." ;
  if(errorCode === "auth/invalid-email") err = "Invalid Email.";
  
  res.render("login.hbs", {error: err} );
});
})

appSeven.get("/auth/auth-shopping-cart", (req,res) => {   
  if (req.session.user){
      if(req.session.count === 0 ){
          var userAuth = firebaseApp_web.auth().currentUser;
          req.session.userAuth = JSON.stringify(userAuth);
          req.session.count++;
          res.locals.session = req.session;
      }
  
      var userSession = req.session.user ? req.session.user : JSON.stringify({"user":{"uid":"1"} }) ; 
      var userAuthjson = req.session.userAuth;
      console.log("userAuthjson(388)---", userAuthjson);
      if(JSON.parse(userSession).user.uid === JSON.parse(userAuthjson).uid){
  console.log("redirected to Cart");
        res.redirect('/shopping-cart');
  }
      else {
          console.log("redirected to login url");
    res.redirect("/auth/login");
      }
  } else {
      console.log("redirected to login url");
    res.redirect("/auth/login");
  }
});

appSeven.get('/add-to-cart/:idp', function(req, res){
    var productTitle = req.params.idp;
    var ref = firebaseApp.database().ref('products');
    var cart = new Cart(req.session.cart ? req.session.cart : {}); 
     ref.orderByChild('title').equalTo(productTitle).on('child_added',function(snap,err){
        if(err){
            console.log("error",err);
            return res.redirect('/');
        }
        else{
            console.log("Products from session",snap.val());
         cart.add(snap.val(), snap.key);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/auth/auth-shopping-cart');
        return null;
        }     
    });
     return res.locals.session = req.session;
});

appSeven.get('/remove/:idtitle',function(req,res){
       var productTitle = req.params.idtitle;
    var ref = firebaseApp.database().ref('products');
    console.log("remove -- cart found ")
    var cart = new Cart(req.session.cart ? req.session.cart : {});
         ref.orderByChild('title').equalTo(productTitle).on('child_added',function(snap,err){
        if(err){
            console.log("error",err);
            return res.redirect('/');
        }
        else{
            console.log("Products to reduceByOne",snap.val());
            var productid= snap.key;
           cart.removeItem(productid);
        req.session.cart = cart;
        res.redirect('/shopping-cart');
        return null;
        }     
    });        
});

appSeven.get('/list/add-to-cart/:idp', function(req, res){
    var productTitle = req.params.idp;
    var ref = firebaseApp.database().ref('products');
    var cart = new Cart(req.session.cart ? req.session.cart : {});
 
     ref.orderByChild('title').equalTo(productTitle).on('child_added',function(snap,err){
        if(err){
            console.log("error",err);
            return res.redirect('/');
        }
        else{
            console.log("Products from session",snap.val());
         cart.add(snap.val(), snap.key);
        req.session.cart = cart;
        console.log(req.session.cart);
        res.redirect('/auth/auth-shopping-cart');
        return null;
        }
    });
     return res.locals.session = req.session;
});

appSeven.get('/shopping-cart', function(req, res) {
    console.log("step 4, shopping-cart url");
    var cart = new Cart(req.session.cart); 
    if(!req.session.cart){
        console.log("session at 529:", req.session.cart);
      return res.render('cart2' ,{products:null});
  } 
  console.log("session 532",req.session.cart);
  res.render('cart2', {products: cart.generateArray(), totalPrice: cart.totalPrice} ); 
});




appTwo.get("/select/:pname",(request, response) =>{
     var ref = firebaseApp.database().ref('products');
    var pname = request.params.pname;
    ref.orderByChild('title').equalTo(pname).on('child_added',function(snap,err){
        if(err){
            console.log("error",err);
        }
        else {
            var fact = snap.val();
        console.log(fact);
        response.render('productDetails',{fact});
        return null;
        }        
    });    
});



appThree.get("/categories/clothing/:type",(request,response) =>{
        var type = request.params.type;
 var ref = firebaseApp.database().ref('categories/clothing/'+type);
     ref.orderByChild('title').on('value',function(snap){
        var facts = snap.val();
        console.log(facts);
        response.render('product',{facts});
        return null;
    });    
});



appFour.get('/contact_us', (request,response) =>{
    response.render('contactUs.hbs');
});



appFive.get("/about_us", (req,res) =>{
    res.render("aboutUs.hbs");
});


appNine.use(cookieParser());
appNine.get("/checkMail/:email", (req,res) => {
    var email= req.params.email;
    console.log("email sent for confirm:", email);
    res.render("checkMail.hbs",{email});
});



appEight.post('/shopping-cart/send/final',(req,res) =>{
 
        if(typeof(req.body.pName)==='string'){
        content1 = '<td style=" border: 1px solid black; border-collapse: collapse;">'+req.body.pName+'</td>';
    }
    else {
          var content1 = req.body.pName.reduce(function(a,b){
        return a + '<td style=" border: 1px solid black; border-collapse: collapse;">'+b+'</td>';
    },'');
    }
    
        if(typeof(req.body.pPrice)==='string'){
        content2 = '<td style=" border: 1px solid black; border-collapse: collapse;">$'+req.body.pPrice+'</td>';
    }
    else {
          var content2 = req.body.pPrice.reduce(function(a,b){
        return a + '<td style=" border: 1px solid black; border-collapse: collapse;">$'+b+'</td>';
    },'');
    }
    
          if(typeof(req.body.pQty)==='string'){
        content3 = '<td style=" border: 1px solid black; border-collapse: collapse;">'+req.body.pQty+'</td>';
    }
    else {
          var content3 = req.body.pQty.reduce(function(a,b){
        return a + '<td style=" border: 1px solid black; border-collapse: collapse;">'+b+'</td>';
    },'');
    }
    
           if(typeof(req.body.pPriceTotal)==='string'){
        content4 = '<td style=" border: 1px solid black; border-collapse: collapse;">$'+req.body.pPriceTotal+'</td>';
    }
    else {
          var content4 = req.body.pPriceTotal.reduce(function(a,b){
        return a + '<td style=" border: 1px solid black; border-collapse: collapse;">$'+b+'</td>';
    },'');
    }
    
             if(typeof(req.body.pPriceTotal)==='string'){
        content5 = req.body.pPriceTotal;
    }
    else {
          var content5 = req.body.pPriceTotal.reduce(function(a,b){
        return parseInt(a, 10) + parseInt(b, 10);
    },0);
    }
    
     const output2 = `$${content5}`;      
    var transporter = nodemailer.createTransport({
 service: 'gmail',
 secure: true,
 auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD
    }
});

var datetime = new Date();
 var newReceipt = firebase.database().ref("Internal-Receipt").push();
     newReceipt.set({
    name: req.body.name,
    email: req.body.mailOne,
    ShippingAddress : req.body.shippingAddress,
    ShippingCity: req.body.shippingCity,
    ShippingState: req.body.shippingState,
    ShippingZip: req.body.shippingZip,
    MainPhone: req.body.phoneOne,
    Company: req.body.company,
    Products: req.body.pName,
    GrossTotal: content5,
    OrderDate: datetime.toISOString().slice(0,10),
    OrderTime: datetime.toISOString().slice(11,19)
  }, function(error) {
    if (error) {
      res.send("Some error occured !"+error);
      newReceipt.remove();
    } else {
         console.log("Order Placed successfully,key is:"+newReceipt.key);
       var subjectname= `Receipt From WholeSale Website`;


       
       const output = `
    <h3>Receipt ID: ${newReceipt.key}</h3>
    <h3>Shipping Details:</h3>

    <ul>
    <li><strong>Name</strong>: ${req.body.name} </li>
    <li><strong>Company</strong>: ${req.body.company} </li>
    <li><strong>Address</strong>: ${req.body.shippingAddress} </li>
    <li><strong>City</strong>: ${req.body.shippingCity} </li>
    <li><strong>State</strong>: ${req.body.shippingState} </li>
    <li><strong>Zip</strong>: ${req.body.shippingZip} </li>
    <li><strong>Phone</strong>: ${req.body.phoneOne} </li>
  
    </ul>
    `;    
       
       const mailOptions = {
  from: 'gupta.ayush1997@gmail.com', // sender address
  to: req.body.mailOne, // list of receivers
  subject: subjectname, // Subject line
     html: output+'<p><h3>Product Details</h3><p/>'+'<div><table style=" width:75%; border: 1px solid black; border-collapse: collapse;"><tbody><tr style=" border: 1px solid black; border-collapse: collapse;"><td style=" border: 1px solid black; border-collapse: collapse;"><strong>Product:</strong></td>'+content1+'</tr><tr style=" border: 1px solid black; border-collapse: collapse;"><td style=" border: 1px solid black; border-collapse: collapse;"><strong>Price/Item:</strong></td>'+content2+'</tr><tr style=" border: 1px solid black; border-collapse: collapse;"><td style=" border: 1px solid black; border-collapse: collapse;"><strong>Qty:</strong></td>'+content3+'</tr><tr style=" border: 1px solid black; border-collapse: collapse;"><td style=" border: 1px solid black; border-collapse: collapse;"><strong>Total:</strong></td>'+content4+'</tr></tr><tr style=" border: 1px solid black; border-collapse: collapse;"><td style=" border: 1px solid black; border-collapse: collapse;"><strong>Gross Total:</strong></td><td style=" border: 1px solid black; border-collapse: collapse;">'+output2+'</td></tr></tbody></table>'// plain text body

};
      transporter.sendMail(mailOptions, function (err, info) {
        if(err)
         console.log(err)
         else
          console.log(info);
});
var finalEmail= (req.body.mailOne);
res.redirect('/checkMail/'+finalEmail);
    }
  });
});



appSix.post('/shopping-cart/send',(req,res) => {
    var array1 = [];
  var sum=0
    console.log("type:",typeof(req.body));
             console.log("req.body:",req.body);
    res.render("checkout.hbs",{products: req.body.products ,  
    helpers:{
        multiply: function(thing1, thing2){  return thing1*thing2; }
    }});
});


appSeven.get('/upload',(req,res)=>{
    res.render('productDetails.hbs');
});

appSeven.post('/upload',(req,res)=>{
    
    	var ref = firebaseApp.database().ref('sellers');
var sellerObj = ref.push({
Url: req.body.url,
Item: req.body.item,
ImageScale: req.body.ImageScale,
BodyPart: req.body.BodyPart
});
    var sellerID = sellerObj.key;
    console.log("sellerID",sellerID);
    res.redirect("/seller-info/"+sellerID);
});

appSeven.get("/seller-info/:sellerID",(req,res)=>{
    var sellerID = req.params.sellerID;
    var url= 'https://gotrybuy.com/sellers/'+sellerID;
    res.render("seller_info.hbs",{sellerID:sellerID, url:url});
});
    


exports.app = functions.https.onRequest(app);
exports.appTwo = functions.https.onRequest(appTwo);
exports.appThree=functions.https.onRequest(appThree);   
exports.appFour = functions.https.onRequest(appFour);
exports.appFive = functions.https.onRequest(appFive);
exports.appSix = functions.https.onRequest(appSix);
exports.appSeven = functions.https.onRequest(appSeven);
exports.appEight = functions.https.onRequest(appEight);
exports.appNine = functions.https.onRequest(appNine);



