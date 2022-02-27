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

const displayTeamMember = (templateData) => {
    let str = "";
    templateData.forEach((employeeInfo) => {
    const { name, id, email, secondaryInfo } = employeeInfo;
    str += `
    <div class="card">
		<div class="card-header">
			<p class="name">${name}</p>
			<p class="role">${employeeInfo.getRole()}</p>
		</div>
		<div class="card-content">
			<div class="row">ID: ${id}</div>
			<div class="row">Email: <a href="mailto:${email}">${email}</a></div>
			<div class="row">${getSecondaryInfo(employeeInfo)}</div>
		</div>
	</div>
    `;
    });
    return str;
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
    ${displayTeamMember(templateData)}
</main>

</body>
</html>
     `;
};
