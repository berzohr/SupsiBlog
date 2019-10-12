import { checkName, checkUser, checkEmail, allIsValid } from './validation';


describe('Validation script testing:', function() {

    it('check the validity of a name', () => {
        expect(checkName("My Name")).toBe(true);
        expect(checkName("My Name 1234")).toBe(false);
        expect(checkName("My Name  **")).toBe(false);
    });

    it('check the validity of a username', () => {
        expect(checkUser("Username")).toBe(true);
        expect(checkUser("Username1234")).toBe(true);
        expect(checkName("User name")).toBe(true);
        expect(checkUser("Username1234*$")).toBe(false);
    });

    it('check the validity of a email', () => {
        expect(checkEmail("name@domain.com")).toBe(true);
        expect(checkEmail("name1234@domain23.co.uk")).toBe(true);
        expect(checkEmail("userdomain.com")).toBe(false);
        expect(checkEmail("@domain.com")).toBe(false);
    });

    if('check if all input are valid', () => {
        expect(allIsValid()).toBe(false);
    });
});