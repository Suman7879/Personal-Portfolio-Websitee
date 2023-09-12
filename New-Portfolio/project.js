let projectData = [
    {
        image: 'img/paint.jpg',
        name: 'Food-Website',
        detail: 'A food web consists of all the food chains in a single ecosystem. Each living thing in an ecosystem is part of multiple food chains. Each food chain is one possible path that energy and nutrients may take as they move through the ecosystem.',
        github: 'https://lnkd.in/gR_MtCEZ',
        live: 'https://github.com/Suman7879/Food-Website.git',
        tags: '#HTML,  #css'
    },
    {
        image: 'img/project-2.png',
        name: 'Gym-Website',
        detail: 'A fitness website is a place to introduce people to the fitness parlor, the philosophy, and any special focuses. Besides these, a site can achieve so much more. With the right tools, it helps to manage a schedule, appointments, and payments.',
        github: 'https://lnkd.in/gR_MtCEZ',
        live: '#https://github.com/Suman7879/Gym-website.git',
        tags: '#HTML, #css'
    },
    {
        image: 'img/project-3.png',
        name: 'Tic-Tac-Toe',
        detail: 'Tic Tac Toe is traditionally played on a grid. Players take turns placing a mark in one of the cells of the grid. The goal of the game is for players to position their marks so that they make a continuous line of three cells.',
        github: 'https://lnkd.in/gR_MtCEZ',
        live: 'https://github.com/Suman7879/Tic-Tac-Toe.git',
        tags: '#javascript #HTML #CSS'
    },
    {
        image: 'img/project-4.png',
        name: 'Education-Website',
        detail: 'Educational sites make learning more enjoyable and appealing to students, which is very important in todays world. It is critical to use instructional websites since every student can be certain that the material provided is accurate',
        github: 'https://lnkd.in/gR_MtCEZ',
        live: '#https://github.com/Suman7879/Education-Website.git',
        tags: '#HTML, #css'
    },
    {
        image: 'img/project-5.png',
        name: 'Dance-Website',
        detail: 'Do dancers need a websiteJasper likens a website to a business card—its a way for casting directors, dance companies, and agents to get an idea of who you are and what youre capable of. But even if youre not ready to go pro, a website is still a good idea.',
        github: 'https://lnkd.in/gR_MtCEZ',
        live: '#https://github.com/Suman7879/Dance-Website.git',
        tags: '#fullstack '
    },
    {
        image: 'img/project-6.png',
        name: 'New-Business-Website',
        detail: 'A business website is an online platform that represents a company or organization on the internet. It serves as a digital storefront where potential customers can learn about the business, browse products or services.',
        github: 'https://lnkd.in/gR_MtCEZ',
        live: '#https://github.com/Suman7879/New-Business-Website.git',
        tags: '#fullstack'
    },
    {
        image: 'img/project-7.png',
        name: 'Movie-Website',
        detail: 'the purpose of movie websites is to pique interest and sell tickets, they generally include: Plenty of video, including trailers, Easy access to show times and online ticket purchasing, Cast bios and other general info.',
        github: 'https://lnkd.in/gR_MtCEZ',
        live: 'https://github.com/Suman7879/Movie-Website.git',
        tags: '#javascript #HTML , #CSS'
    },
    {
        image: 'img/project-8.png',
        name: 'Ecommerce-Website',
        detail: 'Much like a traditional physical retail store, e-commerce websites allow consumers and businesses to buy and sell to one another on a designated platform. The main difference between e-commerce and physical commerce.',
        github: '#https://lnkd.in/gR_MtCEZ',
        live: 'https://github.com/Suman7879/Ecommerce-Website-Clone.git',
        tags: '#HTML #CSS'
    },
]


const createProjectCards = (data) => {
    let projectContainer = document.querySelector(".project-container");

    projectContainer.innerHTML += `
    <div class="project-card" data-tags="${data.tags}">
                <div class="project-wrapper">
                    <div class="project-thumbnail">
                        <img src="img/close.png" class="close-btn" alt="">
                        <img src="${data.image}" class="project-img" alt="">
                        <span class="tags">${data.tags}</span>
                    </div>

                    <div class="project-body">
                        <h1 class="project-name">${data.name}</h1>
                        <p class="project-detail">${data.detail}</p>
                            <a href="${data.github}" class="btn">Github</a>
                            <a href="${data.live}" class="btn">See Live</a>
                    </div>
                </div>
            </div>
    `;
}

projectData.forEach(data=> createProjectCards(data));