// Procurar o botão
document.querySelector("#add-time")
//Quando clicar no botão
.addEventListener('click', cloneField)


//Executar uma ação
function cloneField() {
        //Duplicar os campos. Que campos?
        const newFieldsContainer = document.querySelector('.schedule-item').cloneNode(true) //boolean: true or false
        
        //Pegar os campos. Que campos?
        const fields = newFieldsContainer.querySelectorAll('input')

        //Para cada campo, limpar
        fields.forEach(function(field){
            //Pegar o field do momento e o limpa
            field.value = ""
        })

        //Colocar na página: onde?
        document.querySelector('#schedule-items').appendChild(newFieldsContainer)
}