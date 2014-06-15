var students = [{
    firstName: 'Peter',
    lastName: 'Ivanov',
    grade: 3,
}, {
    firstName: 'Milena',
    lastName: 'Grigorova',
    grade: 6,
}, {
    firstName: 'Gergana',
    lastName: 'Borisova',
    grade: 12,
}, {
    firstName: 'Boyko',
    lastName: 'Petrov',
    grade: 7,
}];

function createTableByArrayOfStudents(students) {

    var table = $('<table />');
    var titleRow = $('<tr />');
    var firstColHeading = $('<th />').text('First name');
    var secondColHeading = $('<th />').text('Last name');
    var thirdColHeading = $('<th />').text('Grade');

    titleRow.append(firstColHeading);
    titleRow.append(secondColHeading);
    titleRow.append(thirdColHeading);
    table.append(titleRow)

    for (var i = 0; i < students.length; i++) {
        var currRow = $('<tr />');

        var firstNameCol = $('<td />').text(students[i].firstName);
        var lastNameCol = $('<td />').text(students[i].lastName);
        var gradeCol = $('<td />').text(students[i].grade);

        currRow.append(firstNameCol);
        currRow.append(lastNameCol);
        currRow.append(gradeCol);

        table.append(currRow);
    }

    $('body').append(table);
}

createTableByArrayOfStudents(students);