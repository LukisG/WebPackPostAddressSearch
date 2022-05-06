import form from "./form";


const renderForm = () => {
    let formElement = document.createElement("form");
    formElement.classList.add("form-inline");
    formElement.innerHTML = form();
    console.log(form);
    document.querySelector("main").appendChild(formElement);

}

export default renderForm;