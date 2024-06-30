const state = {
    img: ["logo_1.png", "logo_2.png", "logo_3.png","logo_4.png","logo_5.png","logo_6.png"],
    combo: [
        [0, 1, 2], [3, 4, 5],
        [6, 7, 8], [0, 3, 6],
        [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [2, 4, 6],
    ],
    schema: [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    game: [0, 0, 0, 0, 0, 0, 0, 0, 0]
}
const domElement = {
    modal: document.getElementsByClassName('modal')[0],
    close: document.getElementsByClassName('close')[0],
    img_user: Array.from(document.getElementsByClassName('img_user')),
    modal_btn: document.getElementsByClassName('modal_btn')[0],
    input: document.getElementsByTagName('input'),
    button: document.querySelectorAll('.menu>button'),
    gamers: document.getElementsByClassName('gamers')[0]

}
export { state, domElement }
//?Варіації:
//*[0,1,2]
//*[3,4,5]
//*[6,7,8]