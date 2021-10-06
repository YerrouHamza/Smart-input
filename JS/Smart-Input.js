
                /* This Project Is Finshed And Is it Workeng */

/* Selecteds */

/* Selected Haed Card Fleb. */
const headCardFleb = document.querySelector('.input-card-fleb');

/* Slected For Containes Front card Fleb  */

    // selected for User Name Form.
    const userNameInput = document.querySelector('.user-name input'); // Get User Name Input.
        userNameInput.setAttribute('maxlength', '16'); // creat Attribute Max Length In User Name Input.
    const userNameMaxLenght = userNameInput.getAttribute('maxlength'); // Get Max Length Attribute From User Name Input.
    const coundUserName = document.querySelector('.user-name .cound'); // Get Cound From User Name Form.

    // Selected For Pasword Form
    const inputPassword = document.querySelector('.password input'); // Get passWord Input.
        inputPassword.setAttribute('minlength', '7'); // Creat Attribute Min Length In passWord Input.
        inputPassword.setAttribute('Maxlength', '16'); // Creat Attribute Max Length In passWord Input.
    const minLengthPassword = inputPassword.getAttribute('minlength'); // Get Min Length Attribute From passWord Input.
    const headIcon = document.querySelector('.head-icon'); // Get FatherElement For PassWord Icon: Lock And UnLock.
    const unLockIcon = document.querySelector('.icon-password'); // Get UnLock Icon From PassWord Form.
    const LockIcon = document.createElement('i'); // Creat Lock Icon For PassWord Form.
        LockIcon.setAttribute('class', 'uis uis-lock-alt icon-password'); // Creat Attribute Class Has Values In Lock Icon.
    const coundPassword = document.querySelector('.cound-password'); // Get Cound From passWord Form.
    
    // Slected For Button.
    const submitButton = document.querySelector('.btn-sing_in'); // Get Submit button.
    submitButton.classList.add('disbled'); // Set Class Disbled In Submit Button.

/* Selected For Containes Back card Fleb */

    // selected For Back User Name Form.
    const userNameInput_Back = document.querySelector('.back-user-name input'); // Get User Name Input.
        userNameInput_Back.setAttribute('maxlength', '16'); // creat Attribute Max Length In User Name Input.
    const userNameMaxLenght_Back = userNameInput_Back.getAttribute('maxlength'); // Get Max Length Attribute From User Name Input.
    const coundUserName_Back = document.querySelector('.back-user-name .back-cound'); // Get Cound From User Name Form.

    // Selected For Back Email Form.
    const emailInput_Back = document.querySelector('.back-email input'); // Get Email Inpute.
        emailInput_Back.setAttribute('maxlength', '50'); // Creat Attribut MaxLength = 20 In Email Input.
    const IconEmail_Back = document.querySelector('.back-email .back-icon-email') // Get Icon Email Input.

    // Selected For Back Pasword Form.
    const inputPassword_Back = document.querySelector('.back-password input'); // Get passWord Input.
        inputPassword_Back.setAttribute('minlength', '7'); // Creat Attribute Min Length In passWord Input.
        inputPassword_Back.setAttribute('Maxlength', '16'); // Creat Attribute Max Length In passWord Input.
    const minLengthPassword_Back = inputPassword_Back.getAttribute('minlength'); // Get Min Length Attribute From passWord Input.
    const headIcon_Back = document.querySelector('.back-head-icon'); // Get FatherElement For PassWord Icon: Lock And UnLock.
    const unLockIcon_Back = document.querySelector('.back-icon-password'); // Get UnLock Icon From PassWord Form.
    const LockIcon_Back = document.createElement('i'); // Creat Lock Icon For PassWord Form.
        LockIcon_Back.setAttribute('class', 'uis uis-lock-alt back-icon-password'); // Creat Attribute Class Has Values In Lock Icon.
    const coundPassword_Back = document.querySelector('.back-cound-password'); // Get Cound From passWord Form.

    // Selected Back Card Fleb Button Submit.
    const submitButton_Back = document.querySelector('.btn-sing_up');
    submitButton_Back.classList.add('disbled')


/* Selected Main Text For Creat Fleb Cart On Click In hem. */
const flebClickBack = document.querySelector('.main-text-front a');
const flebClickFront = document.querySelector('.main-text-back a');



/* Add Event Listener */
    /* Add Front Front Card Fleb */
userNameInput.addEventListener('keyup', userName_Front); // Creat Event Listener For Front UserName Input.
inputPassword.addEventListener('keyup', password_Front); // Creat Event Listener For Front PassWord Input.

    /* Add For Back Card Fleb */
userNameInput_Back.addEventListener('keyup', userName_Back); // Creat Event Listener For Back UserName Input.
inputPassword_Back.addEventListener('keyup', password_Back); // Creat Event Listener For Back PassWord Input.
emailInput_Back.addEventListener('keyup', email_Back); // Creat Event Listener For Back Email Input.

    /* Add For Click To Fleb Card */
flebClickBack.addEventListener('click', flebCardToBack); // Creat Event Listener For On Click Fleb Card To Back Face .
flebClickFront.addEventListener('click', flebCardTofront); // Creat Event Listener For On Click Fleb Card To Front Face.


/* Functions */


/* Creat Function For Containes Front card Fleb  */
        // Function For Front Card Fleb username input.
    function userName_Front(){

        // creat function for on keyup in input get it length and set in cound number.
        coundUserName.textContent = userNameMaxLenght - userNameInput.value.length;


        // Get Function For Add And Remove Class Disbled From Submit Button.
        submitBtnFunction();
    }

        // Function For PassWord Input.
    function password_Front(){

        // creat function for on keyup in input get it length and set in cound number.
        coundPassword.textContent = inputPassword.value.length;


        // Creat if Condichen For Add And Remove Lock And UnLock Icons.
        if (inputPassword.value.length >= 7){
            unLockIcon.remove(); // Remove UnLock Icon From fatherElement.
            LockIcon.remove(); // Remove Lock Icon If FatherElement Has It Beffor.
            headIcon.appendChild(LockIcon); // Add Lock Icon In FatherElement.
        } else{
            LockIcon.remove(); // Else That Remove All Lock Icon From FatherElement.
            headIcon.appendChild(unLockIcon); // Else That Add UnLock Icon In FatherElement.
        }

        // Creat if Condichen For Add And Remove Color Classes Active And Error.
            // If For Add And Remove Error Class
        if (inputPassword.value.length > 0){ 
            inputPassword.classList.add('error'); // Add Class Error For Border PassWord Input.
            coundPassword.classList.add('error'); // Add Class Error In Cound passWord.
            unLockIcon.classList.add('error'); // Add Class Error In UnLock Icon.
        } else{
            inputPassword.classList.remove('error'); // Else That Remove Class Active For Border PassWord Input.
            coundPassword.classList.remove('error'); // Else That Remove Class Error In Cound passWord.
            unLockIcon.classList.remove('error'); // Else That Remove Class Error In UnLock Icon.
        } 
        
        if (inputPassword.value.length >= 7){
            inputPassword.classList.remove('error'); // remove Class Error For Border PassWord Input.
            coundPassword.classList.remove('error'); // Remove Class Error In Cound passWord.
            inputPassword.classList.add('active'); // Add Class Active For Border PassWord Input.
            coundPassword.classList.add('active'); // Add Class Active In Cound passWord.
            LockIcon.classList.add('active'); // Add Class Active In Lock Icon.
        } else{
            inputPassword.classList.remove('active'); // Else That Remove Class Active For Border PassWord Input.
            coundPassword.classList.remove('active'); // Else That Remove Class Active In Cound passWord.
            LockIcon.classList.remove('active');  // Else That Remove Class Active In Lock Icon.
        }
        
        // Get Function For Add And Remove Class Disbled From Submit Button.
        submitBtnFunction();
    }


    // Submit Button Function For Add And Remove Class Disbled.
    function submitBtnFunction() {
        // Creat If Condition For Add And Remove Class Disbled If UserName Input Has't Length Value Or PassWord Input Has Length Value Small 7.
        if ( userNameInput.value.length == 0 || inputPassword.value.length < 7){
            submitButton.classList.add('disbled'); // Add Class Disbled In Submit Button.
        } else{
            submitButton.classList.remove('disbled'); // Else That  Remove Class Disbled From Submit Button.
        }
    }

/* Creat Function For Containes Back card Fleb  */
    // Function For Back Card Fleb username input.
    function userName_Back(){

        // creat function for on keyup in input get it length and set in cound number.
        coundUserName_Back.textContent = userNameMaxLenght_Back - userNameInput_Back.value.length;


        // Get Function For Add And Remove Class Disbled From Back Card Fleb Submit Button.
        submitBtn_Back();
    }

    // Function For Back card Fleb PassWord Input.
    function email_Back(){

        if (emailInput_Back.value.length > 0){
            emailInput_Back.classList.add('active'); // Set Class Active In Border Email Input.
            IconEmail_Back.classList.add('active'); // Set Class Active In Email Icon.
        } else{
            emailInput_Back.classList.remove('active'); // Else remove Class Active From Border Email Input.
            IconEmail_Back.classList.remove('active'); // Else Remove Class Active From Email Icon.
        }

        // Get Function For Add And Remove Class Disbled From Back Card Fleb Submit Button.
        submitBtn_Back();
    }

    // Function For Back card Fleb PassWord Input.
    function password_Back(){

        // creat function for on keyup in input get it length and set in cound number.
        coundPassword_Back.textContent = inputPassword_Back.value.length;


        // Creat if Condichen For Add And Remove Lock And UnLock Icons.
        if (inputPassword_Back.value.length >= 7){
            unLockIcon_Back.remove(); // Remove UnLock Icon From fatherElement.
            LockIcon_Back.remove(); // Remove Lock Icon If FatherElement Has It Beffor.
            headIcon_Back.appendChild(LockIcon_Back); // Add Lock Icon In FatherElement.
        } else{
            LockIcon_Back.remove(); // Else That Remove All Lock Icon From FatherElement.
            headIcon_Back.appendChild(unLockIcon_Back); // Else That Add UnLock Icon In FatherElement.
        }

        // Creat if Condichen For Add And Remove Color Classes Active And Error.
            // If For Add And Remove Error Class
        if (inputPassword_Back.value.length > 0){ 
            inputPassword_Back.classList.add('error'); // Add Class Error For Border PassWord Input.
            coundPassword_Back.classList.add('error'); // Add Class Error In Cound passWord.
            unLockIcon_Back.classList.add('error'); // Add Class Error In UnLock Icon.
        } else{
            inputPassword_Back.classList.remove('error'); // Else That Remove Class Active For Border PassWord Input.
            coundPassword_Back.classList.remove('error'); // Else That Remove Class Error In Cound passWord.
            unLockIcon_Back.classList.remove('error'); // Else That Remove Class Error In UnLock Icon.
        } 
        
        if (inputPassword_Back.value.length >= 7){
            inputPassword_Back.classList.remove('error'); // remove Class Error For Border PassWord Input.
            coundPassword_Back.classList.remove('error'); // Remove Class Error In Cound passWord.
            inputPassword_Back.classList.add('active'); // Add Class Active For Border PassWord Input.
            coundPassword_Back.classList.add('active'); // Add Class Active In Cound passWord.
            LockIcon_Back.classList.add('active'); // Add Class Active In Lock Icon.
        } else{
            inputPassword_Back.classList.remove('active'); // Else That Remove Class Active For Border PassWord Input.
            coundPassword_Back.classList.remove('active'); // Else That Remove Class Active In Cound passWord.
            LockIcon_Back.classList.remove('active');  // Else That Remove Class Active In Lock Icon.
        }
        
        // Get Function For Add And Remove Class Disbled From Back Card Fleb Submit Button.
        submitBtn_Back();
    }

/* Back Card Fleb Submit Button Function For Add And Remove Class Disbled. */
    function submitBtn_Back() {
        // Creat If Condition For Add And Remove Class Disbled If UserName Input Has't Length Value Or PassWord Input Has Length Value Small 7.
        if ( userNameInput_Back.value.length == 0 || emailInput_Back.value.length == 0 || inputPassword_Back.value.length < 7){
            submitButton_Back.classList.add('disbled'); // Add Class Disbled In Submit Button.
        } else{
            submitButton_Back.classList.remove('disbled'); // Else That  Remove Class Disbled From Submit Button.
        }
    }




/* Fleb Card Function. */

    function  flebCardToBack(){
        headCardFleb.classList.add('fleb');
    }

    function  flebCardTofront(){
        headCardFleb.classList.remove('fleb');
    }