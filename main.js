const botao = document.getElementById("botao")



botao.addEventListener("click", evt => {
  //valores
  let seg = 0
  const timer = _ => {
    seg += 0.1

    //ifs pra mudar as cores diante o timer  
    if (seg <= 0.3) {
      document.getElementById('circle').style.backgroundColor = "orange"
      console.log("Disparou")
    } else {
      document.getElementById('circle').style.backgroundColor = "black"
      //fim dos ifs

    }
    //timer
    if (seg < 0.5) setTimeout(timer, 100) //o setTimeout cria um timer com um delay que pode ser defnido
    //fim do timer

  }
  timer()
})