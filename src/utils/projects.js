import artBeats from '/art-beats.png';
import scheduler from '/scheduler.png';
import weather from '/weather.png';

class Projects {
    constructor(id, image, title, github, deployed) {
        this.id = id;
        this.image = image;
        this.title = title;
        this.github = github;
        this.deployed = deployed;
    }
}

const allProjects = {
    image: [
        artBeats,
        scheduler,
        weather,
    ],
    title: [
        'ArtBeats',
        'Daily Scheduler',
        'Weather Search',
    ],
    github: [
        'https://github.com/JeremyBlau/Artbeats.git',
        'https://github.com/daestanii1997/Daily-Schedule',
        'https://github.com/daestanii1997/Weather-Search',
    ],
    deployed: [
        'https://jeremyblau.github.io/ArtBeats/',
        'https://daestanii1997.github.io/Daily-Schedule/',
        'https://daestanii1997.github.io/Weather-Search/',
    ]
}

export {Projects, allProjects};