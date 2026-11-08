const levelModal = document.querySelector("#levelModal");
const closeLevelModal = document.querySelector("#closeLevelModal");

const modalLevelNumber = document.querySelector("#modalLevelNumber");
const modalLevelTitle = document.querySelector("#modalLevelTitle");
const modalLevelDescription = document.querySelector("#modalLevelDescription");

const modalLevelVideo = document.querySelector("#modalLevelVideo");
const modalVideoSource = document.querySelector("#modalVideoSource");

const levelData = [
    {
        number: "ЗОНА 01",
        title: "ПЕРВЫЕ ШАГИ",
        description: "Заброшенный город становится первым испытанием. Здесь предстоит освоить основы паркура, научиться преодолевать препятствия и привыкнуть к необычному миру Vector. Каждый прыжок приближает к свободе.",
        video: "images/Vector_Level_1.mp4"
    },
    {
        number: "ЗОНА 02",
        title: "ЗОНА ОПАСНОСТИ",
        description: "Маршрут становится сложнее, а препятствия — непредсказуемее. Новые высоты, узкие проходы и опасные участки проверят реакцию и точность каждого движения. Ошибаться здесь становится всё сложнее.",
        video: "images/Vector_Level_2.mp4"
    },
    {
        number: "ЗОНА 03",
        title: "ПОСЛЕДНИЙ РУБЕЖ",
        description: "Впереди самое серьёзное испытание. Сложные маршруты требуют полной концентрации и мастерского владения паркуром. Это последний шаг на пути к свободе.",
        video: "images/Vector_Level_3.mp4"
    }
];

document.querySelectorAll(".level-card").forEach((card, index) => {

    card.style.cursor = "pointer";

    card.addEventListener("click", () => {

        const level = levelData[index];

        if (!level) return;

        modalLevelNumber.textContent = level.number;
        modalLevelTitle.textContent = level.title;
        modalLevelDescription.textContent = level.description;

        modalLevelVideo.pause();

        modalVideoSource.src = level.video;
        modalLevelVideo.load();

        levelModal.classList.add("active");
        document.body.style.overflow = "hidden";
    });

});

function closeLevelWindow() {

    levelModal.classList.remove("active");

    modalLevelVideo.pause();

    document.body.style.overflow = "";
}

closeLevelModal.addEventListener("click", closeLevelWindow);

levelModal.addEventListener("click", (event) => {

    if (event.target === levelModal) {
        closeLevelWindow();
    }

});

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape" && levelModal.classList.contains("active")) {
        closeLevelWindow();
    }

});
