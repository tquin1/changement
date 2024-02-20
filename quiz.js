const quizContainer = document.getElementById('quiz');
const explanationModal = document.getElementById('explanationModal');
const explanationContainer = document.getElementById('explanation');
let currentSection = 0;
let currentQuestion = 0;

const sections = [
    {
        title: "Stratégies",
        introduction: "Commencer le secondaire peut être excitant et un peu difficile. En passant de la primaire au secondaire, tu pourrais te demander: 'comment est-ce que je peux m'adapter à ce nouveau chapitre et réussir?' Ce quiz est fait pour te donner des conseils pratiques basés sur l'expérience de ceux qui ont déja passé à travers la transition vers le secondaire.        ",
        introductionImage: "https://rods.sk.ca/wp-content/uploads/2022/08/teens.png",
        questions: [
            {
                question: "Quelle habitude de travail est importante pour se préparer pour le secondaire?",
                number: 1,
                answers: {
                    a: "Travailler à la dernière minute",
                    b: "Utiliser un calendrier pour organiser les tâches",
                    c: "Ignorer les devoirs",
                    d: "Pas participer aux clubs"                                      
                },
                correctAnswer: "b",
                title: "Organisation",
                explanation: "Utiliser un calendrier pour organiser tes devoirs est super important quand tu passes du primaire au secondaire. Au secondaire, tu auras plus de devoirs, des dates limites fixées et des matières différentes. <br><br>Planifier tes devoirs te aide à voir quand tu dois faire quoi et à diviser ton temps pour ne pas être trop stressé et être plus efficace. Attendre jusqu'à la dernière minute pour faire tes devoirs peut sembler qu'il marche au début, parce que c'est ce que je faisais aussi, mais ça ne marche pas à long terme. Ça seulement te stresse et éventuellement ça serait trop.<br><br>En faisant ça régulièrement, tu apprends une compétence qui te sera utile pendant toute ta éducation et vie de travail.",
                explanationImage: "https://nationaltoday.com/wp-content/uploads/2021/11/Calendar-Adjustment-Day.jpg"

            },
            {
                question: "Comment peux-tu mieux t'adapter à la pression sociale au secondaire?                ",
                number: 2,
                title: "Pression sociale",
                answers: {
                    a: "Ignorer complètement les relations sociales",
                    b: "Participer activement à des clubs, sports, et des activités",
                    c: "Éviter la communication avec les enseignants",
                    d: "Pas faire des amis"                                      
                },
                correctAnswer: "b",
                explanation: "T'impliquer dans des clubs et des activités à l'école est une bonne idée pour mieux gérer la pression sociale au secondaire. Ça te donne la chance de développer des compétences sociales, de rencontrer des amis qui aiment les mêmes choses que toi, et d'apprendre des nouveaux compétences. En plus, ça a l'air bien sur ton CV, peut t'aider à trouver un emploi, et les compétences sociales que tu apprends sont importantes dans le monde du travail.",                
                explanationImage: "https://i.cbc.ca/1.6710234.1673453469!/fileImage/httpImage/image.jpg_gen/derivatives/16x9_780/crestwood-011123.jpg"

            },
            {
                question: "Quelle attitude devrais-tu adopter envers l'école?",
                number: 3,
                title: "Attitude positive",
                answers: {
                    a: "Une attitude indifférente",
                    b: "Une attitude négative                    ",
                    c: "Une attitude positive                    ",
                    d: "Une attitude sceptique"                                      
                },
                correctAnswer: "c",
                explanation: "Il est très important d'avoir une attitude positive envers l'école, surtout quand tu passes du primaire au secondaire. Une attitude positive t'aide à apprendre et ça te motive. Si tu vois l'école comme une chance d'apprendre, de grandir et de découvrir de nouvelles choses, tu seras plus impliqué dans tes études. Avoir une attitude positive ne rend pas seulement l'école plus intéressante, mais c'est aussi essentiel pour surmonter les difficultés et réussir à passer au secondaire.<br><br>J'ai découvert que même si tu fais semblant d'aimer l'école, même si tu n'aimes pas vraiment, ça te donne de la motivation pour travailler. En tout cas, penser de manière négative ne t'aidera pas.                ",                
                explanationImage: "https://t4.ftcdn.net/jpg/01/15/20/75/360_F_115207580_US2etunH78I7iMYHOoNVvxQTCIdoPdRj.jpg"

            },
            {
                question: "Pourquoi devrais-tu pas avoir peur de demander de l'aide?",
                number: 4,
                title: "Demander de l'aide",
                answers: {
                    a: "Parce que demander de l'aide n'est pas nécessaire au secondaire                    ",
                    b: "Pour éviter d'être vu comme incapable                    ",
                    c: "Parce que ces ressources sont là pour t'aider                                      ",
                },
                correctAnswer: "c",
                explanation: "Il est très important de ne pas avoir peur de demander de l'aide, que ce soit aux profs, aux autres élèves, ou aux conseillers. Ça te donne le soutien que tu as besoin pour surmonter les difficultés en classe. En demandant de l'aide, tu montres que tu veux comprendre et apprendre les nouvelles choses, ce qui te prépare bien pour réussir. <br><br>Les profs et les conseillers sont là pour t'aider - il est leur emploi, et demander de l'aide rend ton expérience scolaire plus intéressante.                ",                
                explanationImage: "https://3d845520.rocketcdn.me/wp-content/uploads/2022/02/ask-for-help.jpg"

            },
            {
                question: "Pourquoi est-il aussi important d'apprendre à être indépendant dans tes études?",
                number: 5,
                title: "Autonomie",
                answers: {
                    a: "Parce que prendre l'initiative est crucial pour ton apprentissage                   ",
                    b: "Parce que tu n'as pas besoin de contrôler ton apprentissage au secondaire                    ",
                    c: "Pour éviter d'avoir plus de responsabilités                    ",
                },
                correctAnswer: "a",
                explanation: "Il est important d'apprendre à être indépendant dans tes études, car prendre l'initiative de comprendre les sujets toi-même est crucial pour ton apprentissage. En développant l'autonomie, tu gagnes la capacité de gérer efficacement le temps d'étude, de rechercher des ressources, et de résoudre des problèmes. Cette compétence te laisse une compréhension plus approfondie des sujets, renforce la confiance, et prépare les élèves à relever les défis académiques du secondaire. <br><br>Être capable de travailler et de résoudre des problèmes vous-même sera une partie essentielle de votre éducation et, éventuellement, votre vie professionnelle..                ",                
                explanationImage: "https://thumbs.dreamstime.com/b/hands-computer-desk-using-laptop-rustic-wood-background-cup-tea-book-globe-glasses-53253551.jpg"

            },
            {
                question: "Pourquoi est-il important d'apprendre des techniques de gestion du stress?",
                number: 6,
                title: "Gestion du stress",
                answers: {
                    a: "Tu devrais dépendre sur la procrastination pour gérer le stress ",
                    b: "Le stress n'affecte pas les étudiants au secondaire  ",
                    c: "Parce que le stress peut être très désavantageux au secondaire ",
                },
                correctAnswer: "c",
                explanation: "Il est vraiment important d'apprendre des façons de gérer le stress, comme la méditation, la respiration profonde ou l'exercice, quand tu passes au secondaire. Les classes à ce niveau peuvent être remplies et stressantes à cause des travaux et des interactions sociales. En utilisant des techniques de gestion du stress, tu as des outils pratiques pour prendre soin de ton bien-être mental et physique. La méditation, la respiration profonde et l'exercice sont des méthodes qui aident à diminuer le stress et à rester concentré, ce qui te permet de mieux faire.<br><br>Personnellement, j'aime diviser mes périodes de travail avec des pauses où je fais une petite promenade pour me relaxer, pour ne pas  sentir stressé pendant de longues périodes de travail.         ",                
                explanationImage: "https://t3.ftcdn.net/jpg/06/08/23/96/360_F_608239667_0Wq0lwLcSeYSvkMMXOl4di0GSB8tknWI.jpg"

            },
            {
                question: "Est-ce que l'école ou la vie sociale est plus importante?",
                number: 7,
                title: "Vie sociale et académique",
                answers: {
                    a: "Votre vie sociale n'a pas d'importance.",
                    b: "Il est important de trouver un équilibre entre les deux",
                    c: "Ne t'inquiète pas avec l'école",
                },
                correctAnswer: "b",
                explanation: "Il est important de trouver un équilibre entre passer du temps avec les autres et se concentrer sur les études au secondaire, parce que les deux sont extrèmement importants. Le secondaire peut être assez chargé avec les cours, mais si tu ignores la socialisation, ça peut te rendre seul et avoir des impacts négatifs sur ta santé mentale. <br><br>Par trouver un équilibre, tu peux profiter des côtés positifs de passer du temps avec les autres, comme renforcer des amitiés, réduire le stress, et avoir du support émotionnel, tout en continuant avec tes études. <br><br>Ne fais pas l’erreur de penser que l’un est beaucoup plus important que l’autre, parce que tu n'arriveras pas où tu veux sans les deux.           ",                
                explanationImage: "https://as2.ftcdn.net/v2/jpg/05/42/81/15/1000_F_542811575_hCICl0Avc5otAi0xLzxz5pkdfh8hhpNB.jpg"

            },
            {
                question: "Est-il important de prendre des notes?",
                number: 8,
                title: "Prendre des notes",
                answers: {
                    a: "Oui, essayez de prendre des notes dans tous les cours possibles",
                    b: "Il n'est pas trop important",
                    c: "No, ils sont un perte de temps.",
                },
                correctAnswer: "b",
                explanation: "Il est important de prendre de notes efficaces quand tu passes au secondaire, parce que c'est nécessaire pour bien réussir. La prise de notes efficace est une compétence de base qui aide à comprendre les idées, réviser et se préparer pour les évaluations. En organisant tes pensées de manière ordonnée, tu peux mieux retenir l'information et utiliser ton temps d'étude de façon optimale.<br><br> Pendant très longtemps, j’ai pensé que prendre des notes était une perte de temps. Mais c'était que j’étais juste habitué aux cours très faciles. Si tu continues à penser comme ça pendant le secondaire, tu n'obtineras pas de bons résultats. Prendre des notes, même si tu ne les regardes pas encore, force ton cerveau à lire les informations – ce que écouter ne fera pas.",                
                explanationImage: "https://static.vecteezy.com/system/resources/previews/007/143/573/non_2x/businessman-hand-are-taking-notes-on-paper-with-a-black-pen-and-using-a-laptop-computer-on-a-white-desk-in-the-office-photo.JPG"

            },
        
            {
                question: "Pourquoi est-il important d'être adaptable?",
                title: "Être adatptable",
                number: 9,
                answers: {
                    a: "Le secondaire n'apporte pas de changement",
                    b: "Tu devrais mettre toutes tes forces dans une seule chose",
                    c: "Parce que les choses changent vite et il faut avancer",
                },
                correctAnswer: "c",
                explanation: "Il est important d'être adaptable et prêt à t'ajuster aux changements quand tu es au secondaire, parce que c'est crucial de rester en contrôle. Au secondaire, tu peux rencontrer différents styles d'enseignement et des demandes académiques qui changent. Si tu es flexible, tu peux facilement t'adapter à ces ajustements, ce qui aide à diminuer le stress et à sentir que tu as le contrôle sur ta vie académique.<br><br>Les choses changent plus que tu voudrais, et parfois ça ne passe pas comme tu pensais, mais tu dois continuer. On ne peut pas changer ce qui s'est passé déja.                ",                
                explanationImage: "https://hips.hearstapps.com/hmg-prod/images/when-is-daylight-saving-time-1664999384.jpeg"

            },
        ]
    },
];

function buildIntroduction() {
    const section = sections[currentSection];
    const introductionHTML = `
        <div class="introduction">
            <p>${section.introduction}</p>
            <img src="${section.introductionImage}" alt="${section.title} Introduction" class="section-image"><br><br>
            <button class="start-btn" onclick="startSection()">Commencez le quiz</button>
        </div>
    `;
    quizContainer.innerHTML = introductionHTML;
}

function buildQuiz() {
    const section = sections[currentSection];
    const currentQuestionData = section.questions[currentQuestion];
    const answers = [];

    for (const letter in currentQuestionData.answers) {
        answers.push(
            `<label>
                <input type="radio" name="question" value="${letter}">
                ${letter}: ${currentQuestionData.answers[letter]}
            </label>`
        );
    }

    const questionHTML = `
    <center><img style="    margin-top: -0.3rem;
    margin-bottom: 1rem;
    border-radius: 3px;" src="${sections[currentSection].questions[currentQuestion].explanationImage}" alt="Question Explanation" class="section-image"></center>

       <div class="question"> <span style="display:inline; background-color: orange;
       color: white;
       border-radius: 4px;
       padding-right: 9px;
       padding-left: 9px;
       padding-top: 3px;
       padding-bottom: 3px;
       font-weight: bolder;">${currentQuestionData.number}</span>&#160;&#160;${currentQuestionData.question}</div><br>
        
        <div class="answers" id="answers">${answers.join('')}</div><br>
        <button class="submit-btn" onclick="submitAnswer()">Soumettre</button>
    `;

    quizContainer.innerHTML = questionHTML;
}

function startSection() {
    currentQuestion = 0;
    buildQuiz();
}

function submitAnswer() {
    const selectedOption = document.querySelector('input[name="question"]:checked');
    if (!selectedOption) {
        alert("Choisissez une réponse");
        return;
    }

    const isCorrect = selectedOption.value === sections[currentSection].questions[currentQuestion].correctAnswer;
    selectedOption.parentElement.classList.add(isCorrect ? 'correct' : 'incorrect');

    const explanationHTML = `
        <div class="explanation">
            <h1 style="font-size:larger">${sections[currentSection].questions[currentQuestion].title}</h1>
            <p>${sections[currentSection].questions[currentQuestion].explanation}</p>
        </div>
    `;
    explanationContainer.innerHTML = explanationHTML;
    explanationModal.style.display = 'block';
}

function closeModal() {
    explanationModal.style.display = 'none';
}

function nextQuestion() {
    closeModal();
    currentQuestion++;
    const section = sections[currentSection];

    if (currentQuestion < section.questions.length) {
        buildQuiz();
    } else {
        currentQuestion = 0;
        currentSection++;

        if (currentSection < sections.length) {
            buildIntroduction();
        } else {
            alert("Merci d'avoir répondu au quiz d'introduction. Espérons que ces conseils t'aideras à réussir dans la transition du primaire au secondaire.");
        }
    }
}

buildIntroduction();
