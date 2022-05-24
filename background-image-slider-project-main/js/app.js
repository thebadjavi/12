const pictures = [
  "contBcg-0",
  "contBcg-1",
  "contBcg-2",
  "contBcg-3",
  "contBcg-4"
];
console.log("holi")
let currentPic=0;

const buttons = document.querySelectorAll('.btn')
//const img = document.querySelectorAll('.img-container')
const pruebas = document.querySelectorAll('.img-container')
 
let urlNext=`url('img/${pictures[currentPic]}.jpeg')`
 
//let urlImagen =  "url('" + img_path + pictures[position] + ".jpeg')";
/*


    let urlprev='url(../imgcontBcg-$(curre'
    document.querySelector("img-container").getElementsByClassName.backgroundImage=urlprev;
*/
 buttons.forEach(function(button){
button.addEventListener('click',function(e){

  if (button.classList.contains('btn-left')){

    currentPic++;
    if(currentPic==-1){
      currentPic=4
    }
    
    if(currentPic==4){
      currentPic=1
    }
   
    //pruebas.body.style.backgroundImage = urlNext

    console.log(currentPic)
    console.log(pictures)
 
     
 




  }
  else{
    console.log("derecha")

  }



})




})

// buena suerte
 
