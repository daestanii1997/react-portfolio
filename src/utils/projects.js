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
        weather,
        scheduler,
        artBeats,
    ],
    title: [
        'Weather Search',
        'Daily Scheduler',
        'ArtBeats',
    ],
    github: [
        'https://github.com/daestanii1997/weather-app',
        'https://github.com/daestanii1997/Daily-Schedule',
        'https://github.com/JeremyBlau/Artbeats.git',
    ],
    deployed: [
        'https://weather-app-dvs.netlify.app/',
        'https://daestanii1997.github.io/Daily-Schedule/',
        'https://jeremyblau.github.io/ArtBeats/',
    ]
}

export {Projects, allProjects};