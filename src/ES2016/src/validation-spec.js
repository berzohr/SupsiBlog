import {
    checkName,
    checkUser,
    checkEmail,
    allIsValid,
    validName,
    validSurname,
    validUsername,
    validPassword,
    validConfirmPassword
} from './validation';


describe('Validation script testing:', function() {
    //preparing mock for input form
    let mock = {
        value: "",
        innerHTML: "",
        classList: {
            add: () => {},
            remove: () => {}
        },
    };

    //test functions
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

    it('Check the validity of validName() function: ', () => {
        spyOn(document, 'getElementById').and.returnValue(mock);
        spyOn(mock.classList, 'add');
        spyOn(mock.classList, 'remove');

        mock.value = "My Name";
        validName.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('valid');
        expect(mock.classList.remove).toHaveBeenCalledWith('invalid');
        expect(mock.innerHTML).toBe('<i class=\"fas fa-check\"></i>');

        mock.value = "MyName*!";
        validName.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('invalid');
        expect(mock.classList.remove).toHaveBeenCalledWith('valid');
        expect(mock.innerHTML).toBe('<i class="fas fa-times"></i>');
    });

    it('Check the validity of validSurname() function: ', () => {
        spyOn(document, 'getElementById').and.returnValue(mock);
        spyOn(mock.classList, 'add');
        spyOn(mock.classList, 'remove');

        mock.value = "My Name";
        validSurname.call(mock);

        expect(mock.classList.add).toHaveBeenCalledWith('valid');
        expect(mock.classList.remove).toHaveBeenCalledWith('invalid');
        expect(mock.innerHTML).toBe('<i class=\"fas fa-check\"></i>');

        mock.value = "MyName*!";
        validSurname.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('invalid');
        expect(mock.classList.remove).toHaveBeenCalledWith('valid');
        expect(mock.innerHTML).toBe('<i class="fas fa-times"></i>');
    });

    it('Check the validity of validUsername() function: ', () => {
        spyOn(document, 'getElementById').and.returnValue(mock);
        spyOn(mock.classList, 'add');
        spyOn(mock.classList, 'remove');

        mock.value = " ";
        validUsername.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('valid');
        expect(mock.classList.remove).toHaveBeenCalledWith('invalid');
        expect(mock.innerHTML).toBe('<i class=\"fas fa-check\"></i>');

        mock.value = "MyName*!";
        validUsername.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('invalid');
        expect(mock.classList.remove).toHaveBeenCalledWith('valid');
        expect(mock.innerHTML).toBe('<i class="fas fa-times"></i>');

        mock.value = "My Name";
        validUsername.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('invalid');
        expect(mock.classList.remove).toHaveBeenCalledWith('valid');
        expect(mock.innerHTML).toBe('<i class="fas fa-times"></i>');
    });

    it('Check the validity of validPassword() function: ', () => {
        spyOn(document, 'getElementById').and.returnValue(mock);
        spyOn(mock.classList, 'add');
        spyOn(mock.classList, 'remove');

        mock.value = "Pass1234";
        validPassword.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('valid');
        expect(mock.classList.remove).toHaveBeenCalledWith('invalid');
        expect(mock.innerHTML).toBe('<i class=\"fas fa-check\"></i>');

        mock.value = "only5";
        validPassword.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('invalid');
        expect(mock.classList.remove).toHaveBeenCalledWith('valid');
        expect(mock.innerHTML).toBe('<i class="fas fa-times"></i>');

        mock.value = "My!=213jajdlks";
        validPassword.call(mock);
        expect(mock.classList.add).toHaveBeenCalledWith('invalid');
        expect(mock.classList.remove).toHaveBeenCalledWith('valid');
        expect(mock.innerHTML).toBe('<i class="fas fa-times"></i>');
    });

    it('Check the validity of validConfirmPassword() function: ', () => {
        let mockPass = { value: "", innerHTML: ""};
        let spy = spyOn(document, 'getElementById');
        spy.withArgs("confirmPasswordValid").and.returnValue(mock);
        spy.withArgs("password").and.returnValue(mockPass);
        spyOn(mock.classList, 'add');
        spyOn(mock.classList, 'remove');
        //spyOn(mockPass.value, 'value');

        mock.value = "falsePassword";
        mockPass.value = "myBestPass1234";
        validConfirmPassword().call(mock, mockPass);

    });


    xit('check if all input are valid', () => {
        expect(allIsValid()).toBe(false);
    });
});