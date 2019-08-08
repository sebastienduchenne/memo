var fs = require('fs');
var ExifImage = require('exif').ExifImage;

/*
lister fichier du dossier spécifié

pour chaque fichier
    récup date et heure
    si le nom commence par DSC
        ajouter une heure
        Royan_2019_07_22_9h36m25s - APN
    si le nom commence par IMG
        Royan_2019_07_22_9h36m25s - moto G6
*/

var path = process.argv[2];
console.log(path)

fs.readdirSync(path).forEach(file => {
    //console.log(file);

    try {
        new ExifImage({ image : 'photos/'+file }, function (error, exifData) {
            if (error)
                console.log('Error: '+error.message);
            else {
                //console.log(exifData); // Do something with your data!
                var date = exifData.exif.CreateDate
                //console.log(date); // Do something with your data!
                var nameFile = "";
                
                if(file.substring(0,3) === "DSC"){
                    var dd = date.substring(11,13)
                    var integer = parseInt(dd, 10);
                    console.log(integer)
                    integer = integer + 1;
                    console.log(integer)
                    date = date.substring(0,11)+integer+date.substring(13,19)

                    nameFile  = "Royan - " + date + "s - APN.jpg"
                } else if (file.substring(0,3) === "IMG"){
                    nameFile  = "Royan - " + date + "s - moto G6.jpg"
                }
                
                var nameFile2 = nameFile.replace(":","-");
                nameFile2 = nameFile2.replace(":","-");
                nameFile2 = nameFile2.replace(":","h");
                nameFile2 = nameFile2.replace(":","m");
                //console.log(formDate);

                console.log(nameFile2)
                //fs.renameSync("photos/"+file, "photos/"+formDate)
            }

        });
    } catch (error) {
        console.log('Error: ' + error.message);
    }

});



