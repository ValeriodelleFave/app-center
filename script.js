function setItems() {
    const container = document.getElementById("container");
    const apps = [
        {
            title: "Portfolio",
            link: "https://www.valeriodellefave.dev"
        },
        {
            title: "Budget Manager",
            link: "https://valeriodellefave.github.io/budget-manager"
        }
    ];

    for (const app of apps) {
        const item = document.createElement("div");
        item.className = "item";
        item.style.width = "100px";
        item.style.height = "100px";
        item.style.border = "1px solid black";
        item.style.cursor = "pointer";
        item.onclick = () => { location.href = app.link };

        const itemImage = document.createElement("div");
        itemImage.style.width = "100px";
        itemImage.style.height = "30px";
        itemImage.style.border = "1px solid black";
        item.appendChild(itemImage);

        const itemTitle = document.createElement("p");
        itemTitle.style.color = "red";
        itemTitle.innerHTML = app.title;
        item.appendChild(itemTitle);

        container.appendChild(item);
    }
}

setItems();