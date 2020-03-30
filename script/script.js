const initialize = document.getElementById('btnInitialize')
const containerGame = document.getElementById('container')
const firstBtn = document.getElementById('first-option')
const secondBtn = document.getElementById('second-option')
const thirdBtn = document.getElementById('third-option')
const progress = document.getElementById('progress-bar')
const showFinish = document.getElementById('result')
const skipBtn = document.getElementById('nextQuestion')

initialize.addEventListener('click', function () {
    containerGame.style.display = 'block'
    initialize.style.display = 'none'
})



const questions = [
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'No',
            'Que falta de respeto',
            'Nox2',
        ],

        opcionCorrecta:0

    },
    {
        pregunta: '¿Cuanto es 2+2?',
        opciones: [
            '1',
            '4',
            '2',
            '16',
        ],
        opcionCorrecta: 1,
    },
    {
        pregunta: '¿Cual es la capital de Memezuela?',
        opciones: [
            'Merida',
            'Delta Amacuro',
            'Yaracui',
            'Maracaibo',
        ],
        opcionCorrecta: 3,
    },
    {
        pregunta: '¿Por que no hay team?',
        opciones: [
            'Eso nunca existio, es un mito',
            'Si hay pero eres manco',
            '¿Que es team?',
            'Lol es 1 vs 1',
        ],
        opcionCorrecta: 0,
    },
    {
        pregunta: '¿Garen top con ignite es gay?',
        opciones: [
            'Definitivamente',
            'No, yo lo uso.',
            'No, asi lo usan los main',
            'Es de preferencia de cada jugador',
        ],
        opcionCorrecta: 0,
    },
    {
        pregunta: '¿Los JG gankean?',
        opciones: [
            'Si claro, y te ayudan a ganar linea',
            'No, solo farmean la Q hasta lateGame',
            'Por supuesto',
            'GG report jg',
        ],
        opcionCorrecta: 3,
    },
    {
        pregunta: '¿Flamear es malo?',
        opciones: [
            'Es parte del competitivo',
            'CLARO QUE SI, MANCO DE MIERDA',
            'GG no team',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 1,
    },
    {
        pregunta: '¿Deberian nerfear a Garen?',
        opciones: [
            'Definitivamente',
            'DEMACIA',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Como se llama el evento que se forma cuando ashe,lissandra y/o sejuani esta en el otro team?',
        opciones: [
            'La ultima caza',
            'La venganza',
            'La batalla por el freljor',
            'ninguno',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿El support debe ceder kills?',
        opciones: [
            'Sí wey, como chingados no',
            'Solo debe estar AFK con yuumi',
            'Nel pastel, que culpa tengo yo que el adc este manco.',
            'Flamear al adc e ir a top a suportear, dejando al adc 1vs2 y disfrutar el 2vs1 en top',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
    {
        pregunta: '¿Es marico el que lo lea?',
        opciones: [
            'Definitivamente',
            'Por supuesto',
            'Indudablemente',
            'Sin lugar a dudas',
        ],
        opcionCorrecta: 2,
    },
]

let puntuacion = 0;
let porcentaje = Math.round(100/questions.length)
let questionIndex = 0;

skipBtn.addEventListener('click', () =>{
    questionIndex++;
    renderQuestion()
    if(questionIndex === questions.length - 1 ) {
        containerGame.style.display = 'none'
        showFinish.style.display = 'flex'
        showFinish.innerHTML = ` 
            <div class="modal_container">
                <h2>Has finalizado y no importa tu puntaje, igual eres manco</h2>
                <p class="style">${puntuacion}</p>
                <a class="btn btn-primary" href="" role="button">Volver a perder</a>
            </div>`
    }
})

function onOptionClick(clickedOption) {
    const questionInfo = questions[questionIndex];
    if (questionInfo.opcionCorrecta === clickedOption) {
        puntuacion++;
    }
    if (questionIndex < questions.length - 1) {
        questionIndex++
        porcentaje += Math.round(100/questions.length)
        
    } else if(questionIndex === questions.length - 1 ) {
       if(puntuacion >= 17) {
        containerGame.style.display = 'none'
        showFinish.style.display = 'flex'
        showFinish.innerHTML = `
            <div class="modal_container">
                <h2>Has ganado y no importa tu puntaje, igual eres manco</h2>
                <p class="style">${puntuacion}</p>
                <a class="btn btn-primary" href="" role="button">Volver a perder</a>
            </div>`
       }else {
            containerGame.style.display = 'none'
            showFinish.style.display = 'flex'
            showFinish.innerHTML = `
                <div class="modal_container">
                    <h2>Has finalizado y no importa tu puntaje, igual eres manco</h2>
                    <p class="style">${puntuacion}</p>
                    <a class="btn btn-primary" href="" role="button">Volver a perder</a>
                    </div>`
        }
    }
    renderQuestion();
}

function renderQuestion() {
    const questionContainer = document.getElementById('question-container');
    const optionsContainer = document.getElementById('options');
    const progressBarContainer = document.getElementById('progress-bar');
    const indicator = document.getElementById('indicador')

    const questionInfo = questions[questionIndex];

    questionContainer.innerText = questionInfo.pregunta;

    optionsContainer.innerHTML = questionInfo.opciones.map((opcion, index) => {

        const buttonContainer = `<div class="option"><button id="${index}-option" type="button" class="btn btn-primary btn-lg btn-block">${opcion}</button></div>`

        return buttonContainer
    }).join('')

    questionInfo.opciones.forEach((opcion, index) => {
        document.getElementById(`${index}-option`).addEventListener('click', () => onOptionClick(index))
    })

    progressBarContainer.innerHTML = `<div id="progress-bar" class="progress-bar progress-bar-striped progress-bar-animated" role="progressbar" style="width: ${porcentaje}%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">${porcentaje}%</div>`

    indicator.innerHTML = ` <h3>${questionIndex + 1}/${questions.length}</h3>`
}

renderQuestion()
