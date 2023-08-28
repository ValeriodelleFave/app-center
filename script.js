function setItems() {
    const container = document.getElementById("container");
    const apps = [
        {
            title: "Portfolio",
            link: "https://www.valeriodellefave.dev",
            isDone: true
        },
        {
            title: "Budget Manager",
            link: "https://valeriodellefave.github.io/budget-manager",
            isDone: true
        },
        {
            title: "endpoints", 
            link: "https://github.com/ValeriodelleFave/endpoints",
            isDone: true
        },
        {
            title: "ValeriodelleFave.github.io", 
            link: "https://github.com/ValeriodelleFave/ValeriodelleFave.github.io",
            isDone: true
        },
        {
            title: "budget-manager", 
            link: "https://github.com/ValeriodelleFave/budget-manager",
            isDone: true
        },
        {
            title: "form-generator", 
            link: "https://github.com/ValeriodelleFave/form-generator",
            isDone: false
        },
        {
            title: "js-test", 
            link: "https://github.com/ValeriodelleFave/js-test",
            isDone: false
        },
        {
            title: "human-muscles", 
            link: "https://github.com/ValeriodelleFave/human-muscles",
            isDone: false
        },
        {
            title: "AngularDevTools", 
            link: "https://github.com/ValeriodelleFave/AngularDevTools",
            isDone: false
        },
        {
            title: "db-manager", 
            link: "https://github.com/ValeriodelleFave/db-manager",
            isDone: false
        },
        {
            title: "my-store", 
            link: "https://github.com/ValeriodelleFave/my-store",
            isDone: false
        },
        {
            title: "istudy", 
            link: "https://github.com/ValeriodelleFave/istudy",
            isDone: false
        },
        {
            title: "guide", 
            link: "https://github.com/ValeriodelleFave/guide",
            isDone: false
        },
        {
            title: "app-center", 
            link: "https://github.com/ValeriodelleFave/app-center",
            isDone: true
        },
        {
            title: "FitCalculator", 
            link: "https://github.com/ValeriodelleFave/FitCalculator",
            isDone: false
        },
        {
            title: "Real_Life", 
            link: "https://github.com/ValeriodelleFave/Real_Life",
            isDone: false
        }
    ];

    for (const app of apps) {
        const item = document.createElement("div");
        item.className = "item";
        item.onclick = () => { window.open(app.link, "_blank")};

        const itemImage = document.createElement("img");
        itemImage.src = app.isDone ? app.link + "/favicon.ico" : "https://www.bing.com/images/blob?bcid=qObT1g42DgIGmJFpww91r0QOOZmm.....9I";
        itemImage.className = "item-image";
        item.appendChild(itemImage);

        const itemTitle = document.createElement("span");
        itemTitle.className = "item-title";
        itemTitle.innerHTML = app.title;
        item.appendChild(itemTitle);

        container.appendChild(item);
    }
}

setItems();
