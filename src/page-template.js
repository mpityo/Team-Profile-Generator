const getSecondaryInfo = (info) => {
    if (info.getRole() === "Manager") {
        return `Office Number: ${info.getNumber()}`;
    } else
    if (info.getRole() === "Engineer") {
        return `Github: <a href="https://github.com/${info.getGithub()}" target="_blank">${info.getGithub()}</a>`;
    } else
    if (info.getRole() === "Intern") {
        return `School: ${info.getSchool()}`;
    }
}

const displayTitleInfo = (role) => {
    if (role === "Manager") {
        return `&#9749; ${role}`;
    } else if (role === "Engineer") {
        return `&#128083; ${role}`;
    } else {
        return `&#127891; ${role}`;
    }
}

const displayTeamMember = (employeeInfo) => {
    const { name, id, email } = employeeInfo;
    return `
    <div class="card">
		<div class="card-header">
			<p class="name">${name}</p>
			<p class="role">${displayTitleInfo(employeeInfo.getRole())}</p>
		</div>
		<div class="card-content">
			<div class="row">ID: ${id}</div>
			<div class="row">Email: <a href="mailto:${email}">${email}</a></div>
			<div class="row">${getSecondaryInfo(employeeInfo)}</div>
		</div>
	</div>
    `;
}

const handleTeamMember = (templateData) => {
    if (templateData.length > 1) {
        let str = "";
        templateData.forEach((employeeInfo) => {
            str += displayTeamMember(employeeInfo);
        });
        return str;
    } else {
        return displayTeamMember(templateData[0]);
    } 
}

module.exports = (templateData) => {
return `
<!DOCTYPE HTML>
<html>
<head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link rel="stylesheet" href="style.css" />
    <title>Team Roster</title>
</head>

<body>
<header>
	<h1>Your Team</h1>
</header>

<main>
    ${handleTeamMember(templateData)}
</main>

</body>
</html>
     `;
};
