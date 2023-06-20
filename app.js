(function(window) {
    window.extractData = function() {
        //var ret = $.Deferred();

        // function onError() {
        //     console.log('Loading error', arguments);
        //     //ret.reject();
        // }
        function processData(patient) {
            p = {}
            p['gender'] = patient['gender'];
            p['birth date'] = patient['birthDate']
            return p;
        }
        function onReady(client) {
            var p = {}
            var patient = client.patient.read().then(processData);

            // var genderx = patient[gender];
            // var birthdatex = patient[birthDate];
            // console.log(patient[name]);
            //var firstNamex = patient.name[0].given;
            //var lastNamex = patient.name[0].family;
            //console.log(birthdatex);
            //console.log(firstNamex);
            //console.log(lastNamex);
            //var p = {
                //firstName: firstNamex, //{value: firstNamex},
                //lastName: lastNamex, //{value: lastNamex},
                //birthdate: birthdatex, //{value: birthdatex},
                //gender: genderx, //{value: genderx}
            //};
            return client.patient.read().then(processData);
        }
        return FHIR.oauth2.ready().then(onReady).catch(function(e) {
            console.log('authorization failed')
            throw e;
        });
    };

    window.draw = function(p){
        $('#firstName').html(p.firstName);
        $('#lastName').html(p.lastName);
        $('#birth').html(p.birthdate);
        $('#gender').html(p.gender);
    };
}) (window);