var Redis = require("ioredis");


//connexion DB
var redis = new Redis({
  port: 6380, // Redis port
  host: "127.0.0.1", // Redis host
  //family: 4, // 4 (IPv4) or 6 (IPv6)
  //password: "auth",
  //db: 0
});


//requête
redis.set("foo", "bar");//ajouter un paire clé-valeur
redis.get("foo", function(err, result) {//get la valeur de la clé foo
  console.log("result:"+result);
});
redis.del("foo");//supprimer la clé foo

//redis.disconnect();