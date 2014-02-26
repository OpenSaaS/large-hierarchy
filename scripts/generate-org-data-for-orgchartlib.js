Array.prototype.randomElement = function() {
    return this[Math.floor(Math.random() * this.length)]
}

var names = ['John', 'Trish', 'Bart', 'Jan', 'Koen', 'Kato', 'Kobe', 'Cindy', 'Jenny', 'Marie', 'Wim'];
var jobDescriptions = ['VP Engineering', 'Development', 'Testing', 'Customer Support', 'Training', 'Accounting']

var nbrOfEmployees = 0;
var autoId = 0;
var orgChart = [];


var getOneEmployee = function(bossId) {
    nbrOfEmployees++;
    var name = names.randomElement();
    return {
        id: autoId++,
        parent: bossId,
        description: jobDescriptions.randomElement(),
        email: 'email@example.com',
        title: name,
        label: name,
        phone: "352-206-7599",
        image: "demo/images/photos/q.png"
    };
}

var generateOrganigram = function(maxNbrOfEmployees, bossId) {

    if (maxNbrOfEmployees == 0) {
        return [];
    }
    var theBoss = getOneEmployee(bossId);
    orgChart.push(theBoss);
    var nbrOfChildren = Math.min(maxNbrOfEmployees - 1, 8);
    for (var i = 0; i < nbrOfChildren; i++) {
        var subOrganigram = generateOrganigram(Math.floor((maxNbrOfEmployees - 1 - nbrOfChildren) / 8), theBoss.id);
        if (subOrganigram.length != 0) {
            orgChart.concat(subOrganigram);
        }
    };
    return orgChart;
};


if (require.main === module) {
    var organigram = generateOrganigram(70000, null);
    //console.log(nbrOfEmployees + ' in tha house');
    console.log('var data = ' + JSON.stringify(organigram));
}