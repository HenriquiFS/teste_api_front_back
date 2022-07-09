async function getContent() {
  try {
    const response = await fetch('http://localhost:4567/')
    // console.log(response)
    const data = await response.json()
    console.log(data)
    showUsers(data)
  } catch (error) {
    console.log(error)
  }
}

getContent()

function showUsers(users) {
  let output = ''
  for(let user of users){
    output += `<li>
      Nome: ${user.name} <br/>
      Email: ${user.email} <br/>
      Telefone: ${user.phone} <br/>
      Nome da empresa: ${user.company.name} <br/>
      Cidade: ${user.address.city} <br/>
    </li>`
  }
  document.querySelector('#lista_de_contatos').innerHTML = output
}

document.getElementsByTagName("input")[0].addEventListener("keyup", function(){
    var buscador = this.value,
        pessoas = document.getElementsByTagName("li");
    for(var i=0; i < pessoas.length; i++){
        if(pessoas[i].innerHTML.toLowerCase().search(buscador.toLowerCase()) >= 0)
            pessoas[i].style.display = "block";
        else
        pessoas[i].style.display = "none";        
    }
});
