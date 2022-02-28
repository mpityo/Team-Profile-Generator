const page = require('../src/page-template.js');

// ***** MOCK INFO ***** //
const mockTeam = require('../lib/mock_team');

test('check to see if webpage comes back with required elements', () => {
    expect(page(mockTeam)).toMatch(/mpityo@company.com/, /swilson/, /sasha/, /3/);
});