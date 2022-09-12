const renderManager = function (manager) {
    return `
                    <div class="card col-3">
                        <div class="card-header bg-info">
                            <h4>${manager.name}</h4>
                            <h4>Manager</h4>
                        </div>
                        <div class="card-body">
                            <p>ID: ${manager.id}</p>
                            <p>Email: <a href="mailto:${manager.email}">${manager.email}</a></p>
                            <p>Office Number: ${manager.officeNumber}</p>
                        </div>
                    </div>    
    `;
}

const renderEngineer = function (engineer) {
    return `
                    <div class="card col-3">
                        <div class="card-header bg-info">
                            <h4>${engineer.name}</h4>
                            <h4>Engineer</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${engineer.id}</p>
                            <p class="email">Email: <a href="mailto:${engineer.email}">${engineer.email}</a></p>
                            <p class="github">Github: <a href="https://github.com/${engineer.github}">${engineer.github}</a></p>
                        </div>
                    </div>    
    `;
}

const renderIntern = function (intern) {
    return `
                    <div class="card col-3">
                        <div class="card-header bg-info">
                            <h4>${intern.name}</h4>
                            <h4>Intern</h4>
                        </div>
                        <div class="card-body">
                            <p class="id">ID: ${intern.id}</p>
                            <p class="email">Email: <a href="mailto:${intern.email}">${intern.email}</a></p>
                            <p class="school">School: ${intern.school}</p>
                        </div>
                    </div>  
    `;
}

renderHTML = (data) => {
    cardArray = [];

    for (var i = 0; i < data.length; i++) {

        const employee = data[i];
        const role = employee.getRole();

        if (role === 'Manager') {
            const managerCard = renderManager(employee);
            cardArray.push(managerCard);
        }

        if (role === 'Engineer') {
            const engineerCard = renderEngineer(employee);
            cardArray.push(engineerCard);
        }

        if (role === 'Intern') {
            const internCard = renderIntern(employee);
            cardArray.push(internCard);
        }  
    }

    const employeeCards = cardArray.join('');
    // console.log(employeeCards);

    const renderTeam = renderTeamPage(employeeCards);
    return renderTeam;
}

const renderTeamPage = function (employeeCards) {
    return `
<!DOCTYPE html>
<html lang = "en">
    <head>
        <meta charset = "UTF-8">
        <meta name = "viewport" content = "width = device-width, initial-scale = 1.0">
        <title>My Team</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
    </head>
    
    <body>
        <header class="navbar bg-primary">
            <div class="container-fluid justify-content-center">
                <span class="h1">My Team Profile</span>
            </div>
        </header>

        <main>
            <div class = "container">
                <div class="row justify-content-center">
                    ${employeeCards}
                </div>
            </div>
        </main>

        <script 
            src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/js/bootstrap.bundle.min.js" 
            integrity="sha384-u1OknCvxWvY5kfmNBILK2hRnQC3Pr17a+RTT6rIHI7NnikvbZlHgTPOOmMi466C8" 
            crossorigin="anonymous">
        </script>
</html>    
`;
}

module.exports = renderHTML;