import mongoose from 'mongoose';

// connexion
mongoose.connect('mongodb://localhost/<database>', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});


const db = mongoose.connection;
db.on('error', console.error.bind(console, 'DB connection error!'));
db.once('open', function (){
  console.log("Connexion à la base OK");
});


// schéma
const schema = new mongoose.Schema({
    name: String, // on précise le type
    pseudo : { type : String, match: /^[a-zA-Z0-9-_]+$/ },
    password: String,
    auteur : Schema.ObjectId,
});


// modèle
const User = mongoose.model('User', schema);


// insérer données
const user = new User({
    name: 'Stack',
    password: 'Overflow',
});

user.save((err) => {
    if (err) throw err;
    console.log('User saved!');
});


// lire des données
User.findOne(
    { name: 'stack' },
    (err, user) => {
        if (err) throw err;

        if (!user) { console.log('No user was found'); } 
        else { console.log('User was found'); }
    }
);


// mettre à jour
CommentaireArticleModel.update(
    { pseudo : 'Atinux' }, 
    { pseudo : 'Nikita' }, 
    { multi : true }, // modifier toutes les entrées, sinon que la 1ère
    function (err) {
        if (err) { throw err; }
        console.log('Pseudos modifiés !');
    }
);


// supprimer
Model.remove(
    { pseudo : 'Nikita' }, 
    function (err) {
        if (err) { throw err; }
        console.log('Commentaires avec pseudo Nikita supprimés !');
    }
);


// déconnexion
mongoose.connection.close();
