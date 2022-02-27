const getSecondaryInfo = (title, data) => {
    if (title === "Manager") {
        return `Office Number: ${data}`;
    } else
    if (title === "Engineer") {
        return `Github: <a href="https://github.com/${data}" target="_blank">${data}</a>`;
    } else
    if (title === "Student") {
        return `School: ${data}`;
    }
}

const displayTeamMember = (templateData) => {
    let str = "";
    templateData.forEach((employeeInfo) => {
    const { name, title, id, email, secondaryInfo } = employeeInfo;
    str += `
    <div class="card">
		<div class="card-header">
			<p class="name">${name}</p>
			<p class="title">${title}</p>
		</div>
		<div class="card-content">
			<div class="row">ID: ${id}</div>
			<div class="row">Email: <a href="mailto:${email}">${email}</a></div>
			<div class="row">${getSecondaryInfo(title, secondaryInfo)}</div>
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
