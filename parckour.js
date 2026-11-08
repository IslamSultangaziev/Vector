const tricksData = {

    easy: [
        {
        id:"easy-card1",
        name: "WEBSTER PRE X2",
        description: "Комбинация двух элементов Webster с использованием предварительного движения.",
        fullDescription: "Webster Pre x2 — сложная акробатическая комбинация, в названии которой обозначены два последовательных элемента Webster и предварительное движение. Она выглядит зрелищно благодаря быстрому переходу между элементами.",
        gif: "images/easy1.mp4",
        video: "../images/Webster_pre_x2.mp4"
        },
        {
        id:"easy-card2",
        name: "SPEDD VAULT TO GAINER",
        description: "Комбинация скоростного преодоления препятствия и гейнера.",
        fullDescription: "Speed Vault to Gainer — связка, объединяющая скоростное преодоление препятствия и последующее вращение назад с перемещением вперёд. Комбинация отличается динамичным переходом от одного элемента к другому.",
        gif: "images/easy2.mp4",
        video: "../images/Speed_Vault_to_Gainer.mp4"
        },
        {
        id:"easy-card3",
        name: "ПРЫШОК НА ЯЩИК",
        description: "Прыжок на возвышенную поверхность",
        fullDescription: "Прыжок на ящик — элемент, при котором персонаж перемещается с поверхности на расположенную выше платформу. В игре он помогает преодолевать перепады высоты и продолжать движение по уровню.",
        gif: "images/easy3.gif.mp4",
        video: "../images/Прыжок_на_ящик.mp4"
        }
    ],

    hard: [
        {
        id:"hard-card1",
        name: "САЛЬТО НАЗАД",
        description: "Вращение назад с перемещением вперёд.",
        fullDescription: "Гейнер — воздушный элемент, сочетающий вращение назад с движением вперёд. В игре он выглядит эффектно благодаря необычному направлению перемещения и вращения персонажа.",
        gif: "images/hard1.gif.mp4",
        video: "../images/Сальто_назад.mp4"
        },
        {
        id:"hard-card2",
        name: "360 + Kong",
        description: "Комбинация вращения на 360 градусов и хранилища Конга.",
        fullDescription: "360 + Kong — комбинированный элемент, объединяющий полный оборот на 360 градусов и Kong Vault. Связка выделяется сменой направления движения и переходом к преодолению препятствия.",
        gif: "images/hard2.mp4",
        video: "../images/360_+_Kong.mp4"
        },
        {
        id:"hard-card3",
        name: "САЛЬТО НАЗАД НА ПЕРЕКЛАДИНЕ",
        description: "Воздушное вращение после движения на перекладине.",
        fullDescription: "Flyaway — элемент, связанный с движением на перекладине и последующим отпусканием опоры. В игре персонаж отталкивается от перекладины и выполняет вращение назад в воздухе.",
        gif: "images/hard3.gif.mp4",
        video: "../images/Сальто_назад_на_перекладине.mp4"
        }
    ],

    impossible: [
        {
        id:"impossible-card1",
        name: "ДАБЛ-КОНГ",
        description: "Двойное преодоление препятствия в одном движении.",
        fullDescription: "Дабл Конг — усложнённый вариант хранилища Конга, состоящий из двух последовательных фаз преодоления препятствия. В игре этот трюк выглядит как длинное и динамичное движение.",
        gif: "images/impossible1.gif.mp4",
        video: "../images/Дабл_Конг.mp4"
        },
        {
        id:"impossible-card2",
        name: "ДВОЙНОЙ А-ТВИСТ",
        description: "Воздушная комбинация с двойным вращением.",
        fullDescription: "Двойной А-твист — сложный акробатический элемент, в котором сочетаются вращение тела и два поворота вокруг вертикальной оси. В игре он выделяется быстрым и зрелищным вращением персонажа.",
        gif: "images/impossible2.gif.mp4",
        video: "../images/Двойной_А_Твист.mp4"
        },
        {
        id:"impossible-card3",
        name: "Front Flip → Round Off → Side Flip",
        description: "Связка из фронтального сальто, рандата и бокового сальто.",
        fullDescription: "Front Flip → Round Off → Side Flip — комбинация из трёх последовательных акробатических элементов. Она начинается с фронтального вращения, продолжается рандатом и завершается боковым сальто. Связка выглядит динамично благодаря чередованию разных направлений движения.",
        gif: "images/impossible3(2).mp4",
        video: "../images/Front_Flip_+_Round_Off_+_Side_Flip.mp4"
        }
    ]
};

const trickIndexes = {
    easy: 0,
    hard: 0,
    impossible: 0
};

function renderTrick(category) {

    const index = trickIndexes[category];
    const trick = tricksData[category][index];

    const card = document.getElementById(category + "-card");
    const dots = document.getElementById(category + "-dots");

    card.innerHTML = `
        <video autoplay muted loop playsinline class="trick-gif"
            src="${trick.gif}"
            alt="${trick.name}">
        </video>

        <div class="trick-info">
        <span>${category.toUpperCase()}</span>
        <h3>${trick.name}</h3>
        <p>${trick.description}</p>

        <button class="trick-details-btn"
                onclick="openTrick('${category}')">
            ПОДРОБНЕЕ
        </button>
        </div>
    `;

    dots.innerHTML = "";

    tricksData[category].forEach((item, i) => {

        const dot = document.createElement("button");

        dot.className = "slider-dot" +
        (i === index ? " active" : "");

        dot.setAttribute("aria-label", "Трюк " + (i + 1));

        dot.addEventListener("click", () => {
        trickIndexes[category] = i;
        renderTrick(category);
        });

        dots.appendChild(dot);

    });

}

function changeTrick(category, direction) {

    const total = tricksData[category].length;

    trickIndexes[category] =
        (trickIndexes[category] + direction + total) % total;

    renderTrick(category);
}
function openTrickById(id) {

    for (const category in tricksData) {

        const index = tricksData[category].findIndex(
            trick => trick.id === id
        );

        if (index !== -1) {

            trickIndexes[category] = index;

            renderTrick(category);

            const card = document.getElementById(category + "-card");

            card.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            card.classList.add("search-highlight");

            setTimeout(() => {
                card.classList.remove("search-highlight");
            }, 3000);

            return;
        }
    }
}

window.openTrickById = openTrickById;

const trickModal = document.querySelector("#trickModal");
const trickVideo = document.querySelector("#trickVideo");
const trickVideoSource = document.querySelector("#trickVideoSource");

function openTrick(category) {

    const trick = tricksData[category][trickIndexes[category]];

    document.querySelector("#modalTrickCategory").textContent =
        category.toUpperCase();

    document.querySelector("#modalTrickName").textContent =
        trick.name;

    document.querySelector("#modalTrickDescription").textContent =
        trick.fullDescription;

    trickVideoSource.src = trick.video;
    trickVideo.load();

    trickModal.classList.add("active");
    document.body.style.overflow = "hidden";
}


function closeTrick() {

    trickModal.classList.remove("active");

    trickVideo.pause();
    trickVideoSource.src = "";
    trickVideo.load();

    document.body.style.overflow = "";
}

document.querySelector("#closeTrickModal")
    .addEventListener("click", closeTrick);

trickModal.addEventListener("click", function(event) {
    if (event.target === trickModal) {
        closeTrick();
    }
});

document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closeTrick();
    }
});


renderTrick("easy");
renderTrick("hard");
renderTrick("impossible");

setInterval(() => {
    changeTrick("easy", 1);
    changeTrick("hard", 1);
    changeTrick("impossible", 1);
}, 4000);