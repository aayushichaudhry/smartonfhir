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
                    var p = {gender: {value: genderx}}
                    ret.resolve(p);
                })
            } else {
                onError();
            }
        }
        FHIR.oauth2.ready(onReady, onError);
        return ret.promise();
    };
}) (window);