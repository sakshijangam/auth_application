# auth_application
login page using jwt token and mongose db

backend 

signup :
  
  method post 

  {name email password}

login :
  
  method post 
  
  { email password}

  server side validation using joi lib

  middelware :- authorization of JWT token

npx create-react-app //setup

npm start

npm init -y /initialization

npm i express (framwork)   jsonwebtoken (jwt token) bcrypt   (encryption)  body-parser  (req-body to server)  dotenv   (management of enviroment)    mongoose (db connection)  joi  (serverside validation)  cors (other port requt to our web) 

npm -g nodemon (module to track changes and update) 

  database:-
  
           altas monodb 
                       
                       cluster0 connect compass with string(url) peovided by cluster0 (update your pass)
  
  frontend:-
      
      login/signup:-jwt token pass after  authorization then only succesful login
      
      name :- required
      
      email:- validation on @gmail.com
      
      password:- least 4 chara

  recording of running application
          
          
          https://drive.google.com/file/d/1Idr0E3ovWmloiIgK5cZPHMEqsuUmMUH6/view?usp=drivesdk




ARCHITECTURE OG APPLICATION


  react app  <-------->   node app <------->  mongodb







  
