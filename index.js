const {writeFile, copyFile } = require('./util/generate-site');
const {addMember} = require('./util/prompt-user');
const pageTemplate = require('./src/page-template');

// ***** MOCK INFO ***** //
const mock = require('./lib/mock_team');

addMember()
    .then((teamInformation) => {
        return pageTemplate(teamInformation); // Replace with mock for quick testing and display
    })
    .then((htmlData) => {
        return writeFile(htmlData);
    })
    .then((writeFileResponse) => {
        console.log(writeFileResponse);
        return copyFile();
    })
    .then((copyFileResponse) => {
        console.log(copyFileResponse);
    })
    .catch((err) => {
        console.log(err);
    });