const form = document.querySelector("#form");
const send = document.querySelector('#send');

form.addEventListener('submit', handleFormSubmit);
form.addEventListener('submit', validateForm);


function handleFormSubmit(event) {
    // Просим форму не отправлять данные самостоятельно
    event.preventDefault()
    console.log('Отправка!')
}
// Определяем функции для проверки формы
function validateForm() {

    // Получение значений элементов формы
    const name = document.myForm.name.value;
    const email = document.myForm.email.value;
    const mobile = document.myForm.phone.value;
    
    // Определяем переменные ошибок со значением по умолчанию
    let nameErr = true;
    let emailErr = true;
    let mobileErr = true;
    
    // Проверяем имя
    if(name == "") {
        console.log("Пожалуйста, введите ваше имя");
    } else {
        var regex = /^[a-zA-Z\s]+$/;                
        if(regex.test(name) === false) {
            console.log("Пожалуйста, введите правильное имя");
        } else {
            nameErr = false;
        }
    }
    
    // Проверяем адрес электронной почты
    if(email == "") {
        console.log("Пожалуйста, введите адрес вашей электронной почты");
    } else {
        // Регулярное выражение для базовой проверки электронной почты
        var regex = /^\S+@\S+\.\S+$/;
        if(regex.test(email) === false) {
            console.log("Пожалуйста, введите действительный адрес электронной почты");
        } else{
            emailErr = false;
        }
    }
    
    // Проверяем номер мобильного телефона
    if(mobile == "") {
        console.log("Пожалуйста, введите номер вашего мобильного телефона");
    } else {
        var regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
        if(regex.test(mobile) === false) {
            console.log( "Пожалуйста, введите действительный 10-значный номер мобильного телефона");
        } else{
            mobileErr = false;
        }
    }
    // Запрещаем отправку формы в случае ошибок
    if((nameErr || emailErr || mobileErr) == true) {
       return false;
    } else {
        // Создаем строки из входных данных для предварительного просмотра
        var dataPreview = "Вы ввели следующие данные: \n" +
                          "Имя: " + name + "\n" +
                          "Email: " + email + "\n" +
                          "Номер: " + mobile + "\n" ;
        // Отображаем входные данные в диалоговом окне перед отправкой формы
       console.log(dataPreview);
    }
};