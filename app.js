(function(window) {
    window.extractData = function() {
        var ret = $.Deferred();

        function onError() {
            console.log('Loading error', arguments);
            ret.reject();
        }

        function onReady(app) {
            if (app.hasOwnProperty('patient')) {
                var patient = app.patient;
                var pt = patient.read();

                $.when(pt).fail(onError);
                $.when(pt).done(function(patient){
                    var genderx = patient.gender;
                    var birthdatex = patient.birthdate;
                    var firstNamex = patient.name[0].given;
                    var lastNamex = patient.name[0].family;
                    console.log(genderx);
                    console.log(birthdatex);
                    console.log(firstNamex);
                    console.log(lastNamex);
                    var p = {
                        firstName: firstNamex, //{value: firstNamex},
                        lastName: lastNamex, //{value: lastNamex},
                        birthdate: birthdatex, //{value: birthdatex},
                        gender: genderx, //{value: genderx}
                    };
                    ret.resolve(p);
                });
            } else {
                onError();
            }
        }
        FHIR.oauth2.ready(onReady, onError);
        return ret.promise();
    };

    window.draw = function(p){
        $('#firstName').html(p.firstName);
        $('#lastName').html(p.lastName);
        $('#birth').html(p.birthdate);
        $('#gender').html(p.gender);
    };
}) (window);