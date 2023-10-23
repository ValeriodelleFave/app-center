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
        // {
        //     title: "endpoints", 
        //     link: "https://valeriodellefave.github.io/endpoints",
        //     isDone: false
        // },
        // {
        //     title: "ValeriodelleFave.github.io", 
        //     link: "https://valeriodellefave.github.io/",
        //     isDone: true
        // },
        {
            title: "Weather", 
            link: "https://valeriodellefave.github.io/weather",
            isDone: true
        },
        // {
        //     title: "form-generator", 
        //     link: "https://github.com/ValeriodelleFave/form-generator",
        //     isDone: false
        // },
        // {
        //     title: "js-test", 
        //     link: "https://github.com/ValeriodelleFave/js-test",
        //     isDone: false
        // },
        // {
        //     title: "human-muscles", 
        //     link: "https://github.com/ValeriodelleFave/human-muscles",
        //     isDone: false
        // },
        // {
        //     title: "AngularDevTools", 
        //     link: "https://github.com/ValeriodelleFave/AngularDevTools",
        //     isDone: false
        // },
        // {
        //     title: "db-manager", 
        //     link: "https://github.com/ValeriodelleFave/db-manager",
        //     isDone: false
        // },
        // {
        //     title: "my-store", 
        //     link: "https://github.com/ValeriodelleFave/my-store",
        //     isDone: false
        // },
        // {
        //     title: "istudy", 
        //     link: "https://github.com/ValeriodelleFave/istudy",
        //     isDone: false
        // },
        // {
        //     title: "guide", 
        //     link: "https://github.com/ValeriodelleFave/guide",
        //     isDone: false
        // },
        {
            title: "blog", 
            link: "https://github.com/ValeriodelleFave/blog",
            isDone: false
        },
        {
            title: "FitCalculator", 
            link: "https://valeriodellefave.github.io/FitCalculator",
            isDone: true
        },
        // {
        //     title: "Real_Life", 
        //     link: "https://github.com/ValeriodelleFave/Real_Life",
        //     isDone: false
        // },
    ];

    for (const app of apps) {
        const item = document.createElement("div");
        item.className = "item";
        item.onclick = () => { 
            document.getElementById("iframe").src = app.link;
            document.getElementById("iframe").scrollIntoView();
            // window.open(app.link, "_blank")
        };

        const itemImage = document.createElement("img");
        itemImage.src = app.isDone ? app.link + "/favicon.ico" : "";
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
