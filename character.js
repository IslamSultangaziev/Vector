const characterPopup = document.querySelector("#characterPopup");

const popupImage = document.querySelector("#popupCharacterImage");
const popupType = document.querySelector("#popupCharacterType");
const popupName = document.querySelector("#popupCharacterName");
const popupDescription = document.querySelector("#popupCharacterDescription");

const popupVideo = document.querySelector("#popupCharacterVideo");
const popupVideoSource = document.querySelector("#popupCharacterVideoSource");

const popupClose = document.querySelector("#characterPopupClose");

const charactersData = [
  {
    type: "ГЛАВНЫЙ ГЕРОЙ",
    name: "БЕГЛЕЦ",
    description: "Главный герой серии. Раб, который вырвался на свободу и теперь вынужден скрываться от преследователей. Когда-то он был всего лишь одним из бесчисленных клерков, влачивших рабское существование внутри системы, пока однажды ему всё не надоело. Его дерзкий побег подлил масла в тлеющий огонь сопротивления, и Корпорация хочет, чтобы этот огонь был потушен навсегда. Погоня продолжается.",
    video: "images/Vector_Level_1.mp4",
    image: "images/Runner.webp"
  },
  {
    type: "ПРЕСЛЕДОВАТЕЛЬ",
    name: "ОХОТНИК",
    description: "Один из антагонистов в игре Vector. Его цель — преследовать главного героя и обезвредить того электрошокером.",
    video: "images/video5431807846050210533.mp4",
    image: "images/Hunter_Character.webp",
  },
  {
    type: "ДОП.ПЕРСОНАЖ",
    name: "МАСКА",
    description: "Хорошему охотнику требуется быть хотя бы немножко безумным. Он же относился к своей работе слишком серьезно и полностью сошел с ума. Теперь, ставший обузой для своего начальства, он просто бежит без цели, наслаждаясь каждым моментом.",
    video: "images/video5431807846050210536.mp4",
    image: "images/Mask.webp",
  },
  {
    type: "ДОП.ПЕРСОНАЖ",
    name: "Микки",
    description: "Раньше Микки возглавляла группу сопротивления в другом городе, очень похожем на тот, в котором она сейчас оказалась. И она знает, как организовывать повстанцев, что делает ее очень опасной для Корпорации.",
    video: "images/video5431807846050210538.mp4",
    image: "images/Micki_Heroes.webp"
  },
  {
    type: "ДОП.ПЕРСОНАЖ",
    name: "Дансер",
    description: "Самый утонченный клон на рынке, прекрасная компаньонша, стильная, харизматичная, идеальная во всех отношениях. С одним единственным недостатком — такую душу нелегко приручить. Теперь она бежит к свободе, и награда за ее голову будет действительно высокой, если кто-нибудь сможет её поймать.",
    video: "images/video5431807846050210555.mp4",
    image: "images/Dancer.webp"
  },
  {
    type: "ДОП.ПЕРСОНАЖ",
    name: "Тень",
    description: "Персонаж, являющийся отсылкой к другой игре от Nekki: «Бой с тенью». Его происхождение строго засекречено, и даже само его существование категорически отрицается Корпорацией. В конце концов, он клон воина из другого, гораздо более жестокого времени. Он не помнит, кем он был, но считает, что есть другие миры, в которые он должен вернуться.",
    video: "images/video5431807846050210549.mp4",
    image: "images/Shadow.webp"
  },
];

document.querySelectorAll(".character-card").forEach(card => {
    card.addEventListener("click", () => {

    const index = Number(card.dataset.character);
        const character = charactersData[index];

      if (!character) return;

      popupImage.src = character.image;
      popupImage.alt = character.name;

      popupType.textContent = character.type;
      popupName.textContent = character.name;
      popupDescription.textContent = character.description;

      popupVideoSource.src = character.video;
      popupVideo.load();

      characterPopup.classList.add("active");

      document.body.style.overflow = "hidden";

    });
});


function closeCharacterPopup() {

  characterPopup.classList.remove("active");

  popupVideo.pause();
  popupVideoSource.src = "";
  popupVideo.load();

  document.body.style.overflow = "";

}

popupClose.addEventListener("click", closeCharacterPopup);

characterPopup.addEventListener("click", event => {

  if (event.target === characterPopup) {
    closeCharacterPopup();
  }

});

document.addEventListener("keydown", event => {

  if (event.key === "Escape" &&
      characterPopup.classList.contains("active")) {

    closeCharacterPopup();

  }

});

