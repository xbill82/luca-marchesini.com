define(["jquery","backbone","models/Show"],
  function($, Backbone, Show) {
    var Collection = Backbone.Collection.extend({
      model: Show,
      showsHash: {},

      initialize: function() {
      	 this.push(new Show({
      	 	id: 0,
          name: 'sorcieres',
          title: 'La Danse des Sorcières',
          youtubeID: 'taLPgu72eic',
          shortDesc: "Il ne faut jamais dire que les sorcières n’existent pas, car ça les dérangerait. Ou alors il faut être bien rusé... ",
          longDesc: "La Danse des Sorcières est un spectacle familial où l’on va titiller l’imaginaire mystérieux qui vit autour des êtres surnaturels hostiles: sorcières, ogres, géants méchants ou stupides, lutins malicieux, etc… Une ambiance inquiétante mais également beaucoup de suspense et d’humour dans ces contes souvent facétieux, où la ruse du héros le sauve in-extrémis du danger. Ce spectacle est destiné au jeune public à partir de 5 ans et s’adapte à tous les créneaux d’âge.",
          artIntro: "Les bois d’Italie et de Galice, au plus profond de la nuit, abritent d’étranges farandoles autour de grands feux de camp. Tout le monde a entendu parler de ça: ces femmes là, on les appelle « le macare », « le strie », « las meigas ». Leurs danses sont rythmées par de mystérieuses paroles magiques... Peu d’entre nous ont eu le malheur (ou la chance) de les rencontrer; ceux qui en sont revenus l’ont raconté. Et leurs histoires n’ont jamais cessé de nous faire peur, d’exercer sur nous un charme magique...",
          duration: 50,
          audience: 'family',
          age: 5
         }));

         this.push(new Show({
          id: 1,
          name: 'abrazos',
          title: 'Abrazos',
          shortDesc: "A chacun d’entre nous, même à M. Tout-le-monde, il est arrivé au moins une fois dans la Vie quelque chose d’étonnant, d’émouvant ou tout simplement d’insolite...",
          longDesc: "Abrazos est un spectacle de récits de vie issus d’une collecte que je mène sans arrêt dans mon entourage proche ou lointain. Il s’agit de personnes « normales », inconnues, qui m’ont raconté des moments tout à fait surprenants et émouvants de leur vie. AA l’intérieur de certaines histoires, des poèmes sont venus trouver leur place. Le fil conducteur qui relie les récits est l’histoire d’une de mes « migrations », mon déménagement de Grenade à Montpellier. En racontant ce voyage, parsemé d’imprévus et de situations comiques, j’explore les nuances qui se dessinent dans les différences entre le mot français et ses homologues espagnols et italiens: des nuances d'où se dégage un sens nouveau.",
          artIntro: "Des récits extraordinaires provenants de vies tout à fait ordinaires. A chacun d’entre nous, même à M. Tout-le-monde, il est arrivé au moins une fois dans la Vie quelque chose d’étonnant, d’émouvant ou tout simplement d’insolite. Parfois, lorsque je m'y attends le moins, quelqu’un me raconte quelque chose qui lui est arrivé, ou j’entends une conversation dans le tramway (ou à la poste, ou au restaurant) et je me dis « tiens, cette histoire est faite pour être racontée! ». C’est comme ça que j’ai commencé ma collecte auprès des gens que je connaissais. Mais ne croyez pas que je me suis mis à espionner les gens dans les lieux publics! Les histoires, ce sont les gens qui me les ont racontées. D’ailleurs, je suis sur que vous aussi, vous en avez une...",
          audience: 'adult',
          duration: 90
         }));

         this.push(new Show({
          id: 2,
          name: 'talaya',
          title: 'Le Rêve de Talaya',
          shortDesc: "Granada, Andalucía, España. Talaya est un pêcheur simple et modeste qui n’est jamais sorti de son petit village Lújar. Mais une nuit, un rêve perturbe sa tranquillité",
          longDesc: "Il s’agit d’un spectacle de narration orale qui met en scène des légendes inédites de la tradition orale andalouse récoltées par les anthropologues de l’association La Tortuga en 2009 dans la province de Granada.<br/>Le conte du Rêve de Talaya sert de “conte tiroir” dans lequel s’insèrent des légendes, des contes et des récits de vie étroitement liés à ce terroir, point de croisement de quatre cultures (arabe, chrétienne, gitane et juive) et réceptacle de croyances.",
          artIntro: "Granada, Andalucía, España. Talaya est un pêcheur simple et modeste qui n’est jamais sorti de son petit village Lújar. Mais une nuit, un rêve perturbe sa tranquillité. Un rêve qui lui promet des grandeurs, qui l’invite au voyage. Le voyage de Talaya ce n’est pas un voyage onirique, c’est un voyage dans les terres qui l’entourent, les terres qui lui demandent d’écouter ses histoires, histoires d’ici et maintenant.",
          audience: 'adult',
          duration: 80
         }));

         this.push(new Show({
          id: 3,
          name: 'europe',
          title: 'Le Voyage en Europe',
          shortDesc: "Chaque pays un un personnage, chaque personnage un conte. Tu veux monter?",
          longDesc: "Ce spectacle est né d’un projet d’atelier itinérant d’expression artistique. Pendant l’hiver 2010 j’ai voyagé avec Perrine Boyer en Argentine et au Chili, pour travailler avec des organisations d’aide aux enfants en difficultés.<br/>Nous avons proposé dans les écoles, orphelinats et centres médicaux, un spectacle de narration orale associé à des ateliers d’expression corporelle et plastique.<br/> Ce spectacle a évolué pendant les deux mois de voyage, se nourrissant des regards des centaines d’enfant qu’on a rencontrés. Je le propose aujourd'hui aux enfants de mon propre continent.",
          artIntro: "Il y a un train, comme ceux d’antan, qui parcourt toute l’Europe. Il n’a pas peur de la mer, des montagnes, de la neige ou de la chaleur: lui, il voyage en s’arrêtant dans des lieux inattendus, des villages cachés où nous attendent des personnages qui ont des histoires à raconter. Chaque pays un un personnage, chaque personnage un conte. Tu veux monter?",
          duration: 80,
          audience: 'young',
          age: [4, 8]
         }));

         this.push(new Show({
          id: 4,
          name: 'marsala',
          title: 'La Mer et Moi',
          shortDesc: "Pourquoi est-elle si infinie? Qu’est ce qu’elle cache dans ses profondeurs? Qui a mis autant de sel dedans? La mer me déconcerte. Depuis toujours.",
          longDesc: "La Mer et Moi est un spectacle de contes dont la thématique centrale est la mer. Un monologue relie les histoires à un discours principal dés le début du spectacle. Des chansons jouées au piano apportent ce que je ne sais pas dire par les mots.",
          artIntro: "Pourquoi est-elle si infinie? Qu’est ce qu’elle cache dans ses profondeurs? Qui a mis autant de sel dedans?<br/>La mer me déconcerte. Depuis toujours.<br/>Le sel, le sable, l'odeur de la crème solaire me renvoient à tout un tas de questions brûlantes que, au fil des années, des histoires ont su apaiser. Ces histoires sont venues me chercher dans mon château de sable et m'ont sorti pour naviguer dans l'immensité de la mer.<br/>Sans même que je m'en rende compte...",
          duration: 80,
          audience: 'adult'
         }));

         this.push(new Show({
          id: 5,
          name: 'lucavidesonsac',
          title: 'Luca Vide son Sac!',
          youtubeID: '3YRq8KrZUGo',
          shortDesc: "Les histoires, elles nous choisissent, c’est pour ça qu’elles nous viennent à l’esprit.",
          longDesc: "Une suite d’histoires qui se dessine au moment où le spectacle commence ou bien que l’on peut piocher au préalable de mon répertoire. Si j'ai assez d’avance, je peux aussi travailler des nouvelles histoires dans le but de rapprocher la séance à un thème donné (dicté par le cadre d’un festival ou d’un événement). La durée aussi peut varier en fonction des publics, des âges ou des impératifs de l’organisation.<br/>Ça peut se faire en plein air, en salle ou en balade, il suffit de demander.",
          artIntro: "Pourquoi se priver de liberté quand on peut tout simplement raconter les histoires qui nous viennent à l’esprit? Mais c’est pas que de mon esprit que je parle, non. C’est de l’esprit (ou de l’âme) qui se dégage du moment que l’on passe ensemble, public et conteur. Parfois on dirait que les histoires étaient là avant qu’on arrive, alors on a qu'à les laisser venir. Les histoires, elles nous choisissent, c’est pour ça qu’elles nous viennent à l’esprit.",
          duration: 60,
          audience: 'family',
          age: 4
         }));
      },

      add: function(model) {
        this.showsHash[model.get('name')] = model;
        Backbone.Collection.prototype.add.apply(this, arguments);
      }
      
    });

    return Collection;
  });
