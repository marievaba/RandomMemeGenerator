# Random Meme Generator
This is a page meant to generate random memes for fun. 
All you have to do is slide the slider to express how you're feeling at the moment and then press the "show me the magic!" button.
https://random-meeme.herokuapp.com

let suurus=prompt("Sisestage kirja suurus:")
let pealkiri=prompt("Sisestage kirja teema pealkiri")
let fail=prompt("Kas kirjaga on kaasas fail?")
    if (suurus > 1 || pealkiri=="" || fail == "ei"){
        console.log("Kiri on spämm")
}
    else {
        console.log("Kiri ei ole spämm")
    }
