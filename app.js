(function(window) {
    window.extractData = function() {
        //var ret = $.Deferred();

        // function onError() {
        //     console.log('Loading error', arguments);
        //     //ret.reject();
        // }

        function onReady(client) {
            var patient = client.patient.read();

            var genderx = patient.gender;
            var birthdatex = patient.birthdate;
            var firstNamex = patient.name[0].given;
            var lastNamex = patient.name[0].family;
            console.log('genderx');
            console.log(birthdatex);
            console.log(firstNamex);
            console.log(lastNamex);
            var p = {
                firstName: firstNamex, //{value: firstNamex},
                lastName: lastNamex, //{value: lastNamex},
                birthdate: birthdatex, //{value: birthdatex},
                gender: genderx, //{value: genderx}
            };
            return p;
        }
        console.log('ready');
        return FHIR.oauth2.ready().then(console.log('authorization success')).catch( console.log('authorization failed'));
    };

    window.draw = function(p){
        $('#firstName').html(p.firstName);
        $('#lastName').html(p.lastName);
        $('#birth').html(p.birthdate);
        $('#gender').html(p.gender);
    };
}) (window);