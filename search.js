const searchInput = document.querySelector("#siteSearchInput");
const searchResults = document.querySelector("#siteSearchResults");

if (searchInput && searchResults) {

    function searchSite() {
        const query = searchInput.value.trim().toLowerCase();

        searchResults.innerHTML = "";

        if (!query) {
            searchResults.classList.remove("active");
            return;
        }

        const matches = searchData.filter(item =>
            `${item.title} ${item.category} ${item.description}`
                .toLowerCase()
                .includes(query)
        );

        if (matches.length === 0) {
            searchResults.innerHTML =
                '<div class="search-empty">Ничего не найдено</div>';
        } else {
            matches.forEach(item => {
                const result = document.createElement("div");
                result.className = "search-result";

                const title = document.createElement("strong");
                title.textContent = item.title;

                const info = document.createElement("span");
                info.textContent = item.category;

                result.append(title, info);

                result.addEventListener("click", () => {
                    window.location.href = item.url;
                });

                searchResults.appendChild(result);
            });
        }

        searchResults.classList.add("active");
    }

    searchInput.addEventListener("input", searchSite);
}
window.addEventListener("load", () => {
    const id = decodeURIComponent(
        window.location.hash.slice(1)
    );

    if (!id) return;

    if (typeof openCharacterById === "function") {
        openCharacterById(id);
    } else {
        const target = document.querySelector("#id");

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            target.classList.add("search-highlight");

            setTimeout(() => {
                target.classList.remove("search-highlight");
            }, 3000);
        }
    }
});

window.addEventListener("load", () => {
    if (!window.location.hash) return;

    const targetId = decodeURIComponent(
        window.location.hash.substring(1)
    );

    const target = document.querySelector("#targetId");

    if (!target) return;

    target.scrollIntoView({
        behavior: "smooth",
        block: "center"
    });

    target.classList.add("search-highlight");

    setTimeout(() => {
        target.classList.remove("search-highlight");
    }, 3000);
});

window.addEventListener("load", () => {
    const id = decodeURIComponent(
        window.location.hash.slice(1)
    );

    if (!id) return;

    if (typeof openTrickById === "function") {
        openTrickById(id);
    } else {
        const target = document.querySelector("#id");

        if (target) {
            target.scrollIntoView({
                behavior: "smooth",
                block: "center"
            });

            target.classList.add("search-highlight");

            setTimeout(() => {
                target.classList.remove("search-highlight");
            }, 3000);
        }
    }
});