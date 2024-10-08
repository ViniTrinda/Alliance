class FormSubmit{
  constructor(settings){
    this.settings = settings;
    this.form = document.querySelector(settings.form);
    this.formButton = document.querySelector(settings.button);
    if(this.form){
      this.url = this.form.getAttribute('action');
    }
    this.sendForm = this.sendForm.bind(this); 
  }

  displaySuccess(event){
    const success = document.getElementById('success');
    success.style.display = 'flex';

    event.target.disabled = true;
    event.target.innerText = "Email Enviado";
  }

  displayError(event){
    const error = document.getElementById('error');
    error.style.display = 'flex';


    event.target.disabled = false;
    event.target.innerText = "enviar"
  }

  getFormObject(){
    const formObject = {};
    const fields = this.form.querySelectorAll("[name]");
    fields.forEach((field) =>{
      formObject[field.getAttribute('name')] = field.value;
    });
    
    // Define o remetente do email
    formObject._from = `${formObject.name} <${formObject.email}>`;

    return formObject;
  }

  async sendForm(event){
    event.preventDefault(); // Previne o redirecionamento da página
    try{
      this.onSubmission(event);
      await fetch(this.url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(this.getFormObject()),
      });
      this.displaySuccess(event);
    } catch (error) {
      this.displayError(event);
      console.log(error.message);
    }
  }

  onSubmission(event){
    event.target.disabled = true;
    event.target.innerText = "Enviando...";
  }

  init(){
    if(this.form) 
      this.formButton.addEventListener('click', (event) => this.sendForm(event)); 
    return this;
  }
}

const formSubmit = new FormSubmit({
  form : "[data-form]",
  button: "[data-button]",
});

formSubmit.init();
