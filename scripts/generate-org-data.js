Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
}

var names = ['John', 'Trish', 'Bart', 'Jan', 'Koen', 'Kato', 'Kobe', 'Cindy', 'Jenny', 'Marie', 'Wim'];
var jobDescriptions = ['VP Engineering', 'Development', 'Testing', 'Customer Support', 'Training', 'Accounting']

var nbrOfEmployees = 0;


var getOneEmployee = function() {
    nbrOfEmployees++;
    return {
        name: names.randomElement(),
        title: jobDescriptions.randomElement()
    };
}

var addWholeTeam = function(theBoss) {
    var employees = [];
    for (var i = 0; i < 7; i++) {
        employees.push(getOneEmployee());
    };
    theBoss.children = employees;
    return theBoss;
}

var generateOrganigram = function(maxNbrOfEmployees) {

    if (maxNbrOfEmployees == 0) {
        return [];
    }
    var theBoss = getOneEmployee();
    var nbrOfChildren = Math.min(maxNbrOfEmployees - 1, 7);
    var employees = [];
    for (var i = 0; i < nbrOfChildren; i++) {
        var subOrganigram = generateOrganigram(Math.floor((maxNbrOfEmployees - 1 - nbrOfChildren) / 7));
        if (subOrganigram.length != 0) {
            employees.push(subOrganigram);
            theBoss.children = employees;
        }
    };
    return theBoss;
};


if (require.main === module) {
    var organigram = generateOrganigram(20000);
    console.log(JSON.stringify(organigram));
    console.log(nbrOfEmployees + ' in tha house')
}