function toggling(ingredient, button) {
  button.on('click', function(){
    ingredient.toggle()
    button.toggleClass("active")
  })
}

$(document).ready(function() {

  var btnPepperoni = $(".btn-pepperonni")
  var btnMushrooms = $(".btn-mushrooms")
  var btnGreenPeppers = $(".btn-green-peppers")
  var btnSauce = $(".btn-sauce")
  var btnCrust =$(".btn-crust")

  var greenPeppers = $(".green-pepper")
  var mushroom = $(".mushroom")
  var pepperoni = $(".pep")
  var sauce = $(".sauce-white")
  var crust = $(".crust")

  toggling(pepperoni,btnPepperoni )
  toggling(mushroom,btnMushrooms )
  toggling(greenPeppers,btnGreenPeppers )
  toggling(sauce,btnSauce )

  crust.removeClass('crust-gluten-free')

  btnCrust.on('click', function(){
    console.log("hola")
    crust.toggleClass("crust-gluten-free")
  })


})
