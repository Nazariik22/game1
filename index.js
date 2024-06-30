import { state, domElement } from './state.js'



let p = document.createElement('p');
p.insertAdjacentHTML('beforeend', ``)
const progectGame1 = {
    users: [
        { name: "", img: "", result: 0 },
        { name: "", img: "", result: 0 }],
    position: '',
    gamer: true,
    gameOver: false,
    modal(m) {
        function modalClose(modal, info) {
            modal.style.display = info;
        }
        m.img_user.forEach(item => {
            for (let i = 0; i < state.img.length; i++) {
                item.insertAdjacentHTML('beforeend', `
                    <img src='./img/${state.img[i]}' class='img_new'>
                    `)
            }
        })
        let img = Array.from(document.getElementsByClassName('img_new'))
        img.forEach((item, index) => {
            item.addEventListener('click', () => {
                index < 3 ?
                    this.users[0].img = state.img[index] :
                    this.users[1].img = state.img[index - 3];
            })
        })
        m.close.addEventListener('click', () => modalClose(m.modal, 'none'));
        m.button[1].addEventListener('click', () => modalClose(m.modal, 'flex'));
        m.modal_btn.addEventListener('click', (e) => {
            modalClose(m.modal, 'none')
            this.users.forEach((item, index) => item.name = m.input[index].value)
            this.userInfo()
        });

    },
    schema(arr) {
        let container = document.getElementsByClassName('container')[0];
        container.innerHTML = '';
        for (let i = 0; i < arr.length; i++) {
            let section = document.createElement('section')
            section.classList.add('sectionSchema');
            for (let j = 0; j < arr[i].length; j++) {
                let div = document.createElement('div');
                div.classList.add('divSchema');
                section.append(div);
            }
            container.append(section)
        }
        
    },
    userInfo() {
        domElement.gamers.innerHTML = '';
        this.users.forEach(item =>
            domElement.gamers.insertAdjacentHTML('beforeend', `
                <div class="user">
                    <img src="./img/${item.img}" alt="">
                    <div class="userName">${item.name}</div>
                    <div class="userResult">${item.result}</div>
                </div>
                `)
        )
    },
    cords(e, i) {
        if (this.gamer) {
            e.insertAdjacentHTML('beforeend', `X`)
            this.gamer = false
            state.game[i] = 1
            return 0
        }
        e.insertAdjacentHTML('beforeend', `O`)
        this.gamer = true
        state.game[i] = 2
    },
    audit(s) {
        if (state.game.indexOf(0) == -1) {
            this.gameOver = true
            return 0
        }
        for (let i = 0; i < state.combo.length; i++) {
            let n = 0, x = 0;
            for (let j = 0; j < 3; j++) {
                if (s[state.combo[i][j]] == 1) {
                    n += 1
                    x = 0
                } else if (s[state.combo[i][j]] == 2) {
                    x += 1
                    n = 0
                }
            }
            if (x == 3) {
                this.users[1].result += 1
                this.userInfo()
                this.gameOver = true
                return 0
            }
            if (n == 3) {
                this.users[0].result += 1
                this.userInfo()
                this.gameOver = true
                return 0
            }



        }

    },
    render() {
        this.modal(domElement);
        this.schema(state.schema);
        this.position = Array.from(document.getElementsByClassName('divSchema'))
        this.position.forEach((item, index) =>
            item.addEventListener('click', () => {
                state.game[index] == 0 && !this.gameOver && this.cords(item, index);
                !this.gameOver && this.audit(state.game)
            }))
        domElement.button[0].addEventListener('click',()=>{
            this.gamer=true,
            this.gameOver=false
            for (let i = 0; i < state.game.length; i++) state.game[i]=0
            this.position.forEach(item=>item.innerHTML='')
        })

    }
}
progectGame1.render()

