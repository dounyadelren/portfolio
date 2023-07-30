import { createI18n } from 'vue-i18n';

const i18n = createI18n({
  locale: 'fr',
  messages: {
    fr: {
      'messages': {
        'greetings': 'Hello, je m\'appelle Dounya',
        'dev': 'Développeuse web',
        'resume': 'Mon CV'
      },
      "menu": {
        'web': 'Projets web',
        'ui': 'Conceptions UI'
      },
      "web": {
        'implement': "Implémenté en ",
        'nicolas': 'Collaboratrice professionnelle et impliquée',
        'founder': 'fondateur de Streammind',
        'prevon': 'Ce projet consistait à reproduire les fonctionnalités du site BetaSeries; i.e. avoir un suivi de ses séries, ses films préférés, avec un aspect réseau social (système d\'amis, de récompenses, statistiques partagées, blocages, notifications, commentaires etc...)',
        'rocketfeed': 'Ce projet est un effort de groupe et aussi une de mes plus grandes fiertés. C\'est un agrégateur de news sans redirection vers la source de l\'information. Tout y est paramétrable, l\'utilisateur peut contrôler le type d\'information qu\'il voit ainsi que la source. Le plus intéréssant a été l\'intégration des réseaux sociaux dans le feed comme Youtube ou Twitter. Sur ce projet je suis l\'auteur de la charte graphique ainsi que de l\'UX entière. Je l\'ai présenté avec un groupe de 5 développeurs en tant que projet de fin d\'année et ensemble nous avons obtenu la note maximale.',
        'glass': 'J\'ai créé cette landing page en suivant un tutoriel sur Youtube sur le glassmorphisme. C\'est un style que j\'affectionne particulièrement car beaucoup utilisé notamment chez Apple par sa sobriété et son aspect passe partout',
        'coco': 'Immensément créative et jamais à court d\'idées',
        'fullstack': 'Développeur web full-stack'
      }
    },
    en: {
      'messages': {
        'greetings': 'Hello, my name is Dounya',
        'dev': 'I am a Web developer',
        'resume': 'My resume'
      },
      "menu": {
        'web': 'Web projects',
        'ui': 'UI Conceptions'
      },
      "web": {
        'implement': "Implemented in ",
        'nicolas': 'Professional and involved collaborator',
        'founder': 'Streammind founder',
        'prevon': 'This project consisted in reproducing the functionalities of the BetaSeries website; i.e. having a follow-up on your shows, your favorite films, with a social network aspect (system of friends, rewards, shared statistics, blocked users, notifications, comments etc...)',
        'rocketfeed': 'This project is a group effort and also one of my greatest prides. It is a news aggregator who is not redirecting to the source of the information. Everything is configurable, the user can control the type of information he sees as well as the source. The most interesting part was the integration of social networks in the stream like Youtube or Twitter. On this project, I am the author of the graphic charter as well as the entire UX. I presented it with a group of 5 developers as an end-of-year project and together we got the maximum grade.',
        'glass': 'I created this landing page by following a Youtube tutorial on glassmorphism. It is a style that I particularly fancy because it is used a lot (especially Apple products), due to its sobriety and its ordinary-looking appearance',
        'coco': 'Immensely creative and never runs out ideas',
        'fullstack': 'Full stack web developer'
      }
    }
  }
});

export default i18n;
