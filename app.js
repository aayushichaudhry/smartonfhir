(function(window) {
    window.extractData = function() {
        function processData(patient) {
            p = {}
            p['gender'] = patient['gender'];
            p['birth date'] = patient['birthDate'];
            p['first name'] = patient['name'][0]['family'];
            p['last name'] = patient['name'][0]['given'];
            return p;
        }
        function onReady(client) {
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