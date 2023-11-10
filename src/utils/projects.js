import artBeats from '/art-beats.png';
import lacks from '/lacks.png';
import quiz from '/quiz.png';
import scheduler from '/scheduler.png';
import weather from '/weather.png';
import notes from '/note-taker.png'

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
        lacks,
        quiz,
        scheduler,
        weather,
        notes,
    ],
    title: [
        'ArtBeats',
        'Lacks',
        'Coding Quiz',
        'Daily Scheduler',
        'Weather Search',
        'Note Taker'
    ],
    github: [
        'https://github.com/JeremyBlau/Artbeats.git',
        'https://github.com/daestanii1997/lacks',
        'https://github.com/daestanii1997/Coding-Quiz',
        'https://github.com/daestanii1997/Daily-Schedule',
        'https://github.com/daestanii1997/Weather-Search',
        'https://github.com/daestanii1997/note-taker'
    ],
    deployed: [
        'https://jeremyblau.github.io/ArtBeats/',
        'https://lacks-production.up.railway.app/',
        'https://daestanii1997.github.io/Coding-Quiz/',
        'https://daestanii1997.github.io/Daily-Schedule/',
        'https://daestanii1997.github.io/Weather-Search/',
        'https://note-taker-production-76ce.up.railway.app/'
    ]
}

export {Projects, allProjects};