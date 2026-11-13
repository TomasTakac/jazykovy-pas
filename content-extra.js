/* Jazykový pas: dialogues (role-play), grammar mini-lessons, high-frequency words and more stories.
   Dialogue line: [role, target, Slovak]; role 0 = partner, 1 = you.
   Grammar: {id, level, title, intro, points:[…], practice:[[sentence with {gap}, Slovak, note]]} */
(function(C){
  function ext(c, o){
    const L = C[c]; if (!L) return;
    L.units.push(...(o.units || []));
    L.stories = (L.stories || []).concat(o.stories || []);
    L.dialogues = (L.dialogues || []).concat(o.dialogues || []);
    L.grammar = (L.grammar || []).concat(o.grammar || []);
  }

/* ───────── Nemčina ───────── */
ext('de', {
units:[
{id:'otazky', level:'A1', title:'Otázky a malé slová', desc:'Kto, čo, kde, kedy… bez nich sa nezaobídeš.', items:`
wer | kto | Wer ist das? | Kto je to?
was | čo | Was machst du? | Čo robíš?
wo | kde | Wo wohnst du? | Kde bývaš?
wohin | kam | Wohin fährst du? | Kam ideš?
woher | odkiaľ | Woher kommst du? | Odkiaľ si?
wann | kedy | Wann beginnt der Kurs? | Kedy začína kurz?
warum | prečo | Warum lernst du Deutsch? | Prečo sa učíš nemčinu?
wie | ako | Wie heißt du? | Ako sa voláš?
wie viel | koľko | Wie viel kostet das? | Koľko to stojí?
welcher | ktorý | Welcher Zug fährt nach Wien? | Ktorý vlak ide do Viedne?
nicht | nie, ne- | Ich verstehe das nicht. | Tomu nerozumiem.
auch | aj, tiež | Ich komme auch. | Prídem aj ja.
`},
{id:'male', level:'A2', title:'Malé užitočné slová', desc:'Najčastejšie slová v každom rozhovore.', items:`
noch | ešte | Ich habe noch Zeit. | Ešte mám čas.
schon | už | Bist du schon fertig? | Už si hotový?
nur | len | Ich habe nur fünf Euro. | Mám len päť eur.
sehr | veľmi | Das ist sehr gut. | To je veľmi dobré.
viel | veľa | Ich habe viel Arbeit. | Mám veľa práce.
wenig | málo | Ich habe wenig Zeit. | Mám málo času.
alles | všetko | Alles ist gut. | Všetko je v poriadku.
nichts | nič | Ich habe nichts gesagt. | Nič som nepovedal.
etwas | niečo | Möchtest du etwas trinken? | Chceš sa niečoho napiť?
hier | tu | Ich wohne hier. | Bývam tu.
dort | tam | Dort ist der Bahnhof. | Tam je stanica.
vielleicht | možno | Vielleicht komme ich morgen. | Možno prídem zajtra.
`},
{id:'slovesa2', level:'A2', title:'Ďalšie časté slovesá', desc:'Slovesá, ktoré počuješ každý deň.', items:`
finden | nájsť; myslieť si | Wie findest du das? | Čo si o tom myslíš?
nehmen | vziať | Ich nehme den Bus. | Pôjdem autobusom.
bringen | priniesť | Bringst du mir ein Glas Wasser? | Prinesieš mi pohár vody?
brauchen | potrebovať | Ich brauche Hilfe. | Potrebujem pomoc.
glauben | veriť; myslieť si | Ich glaube dir. | Verím ti.
bleiben | zostať | Ich bleibe heute zu Hause. | Dnes zostanem doma.
liegen | ležať | Das Buch liegt auf dem Tisch. | Kniha leží na stole.
stehen | stáť | Das Auto steht vor dem Haus. | Auto stojí pred domom.
fragen | pýtať sa | Darf ich dich etwas fragen? | Môžem sa ťa niečo opýtať?
antworten | odpovedať | Er antwortet nicht. | Neodpovedá.
helfen | pomôcť | Kann ich Ihnen helfen? | Môžem vám pomôcť?
zeigen | ukázať | Kannst du mir den Weg zeigen? | Môžeš mi ukázať cestu?
`}
],
stories:[
{title:'Mein Tag', level:'A1', paragraphs:[
 "Ich heiße Jana. Ich wohne in Bratislava. Jeden Morgen trinke ich Kaffee und esse Brot mit Käse.",
 "Um acht Uhr fahre ich mit dem Bus zur Arbeit. Ich arbeite in einem Büro. Meine Kollegen sind nett.",
 "Am Abend koche ich und lese ein Buch. Um elf Uhr gehe ich ins Bett. Gute Nacht!"],
 tr:["Volám sa Jana. Bývam v Bratislave. Každé ráno pijem kávu a jem chlieb so syrom.","O ôsmej idem autobusom do práce. Pracujem v kancelárii. Moji kolegovia sú milí.","Večer varím a čítam knihu. O jedenástej idem do postele. Dobrú noc!"],
 glossary:[{w:'Jeden Morgen',sk:'každé ráno'},{w:'Käse',sk:'syr'},{w:'zur Arbeit',sk:'do práce'},{w:'nett',sk:'milí'},{w:'koche',sk:'varím'},{w:'ins Bett',sk:'do postele'}],
 questions:[{q:'Wo wohnt Jana?',options:['In Wien','In Bratislava','In Berlin','In Prag'],answer:1},
  {q:'Wie fährt sie zur Arbeit?',options:['Mit dem Auto','Mit dem Bus','Mit dem Fahrrad','Zu Fuß'],answer:1},
  {q:'Was macht sie am Abend?',options:['Sie kocht und liest','Sie arbeitet','Sie schwimmt','Sie tanzt'],answer:0}]}
],
dialogues:[
{id:'cafe', level:'A1', title:'V kaviarni', scene:'Objednávaš si vo viedenskej kaviarni.', roles:['Čašníčka','Ty'], lines:[
 [0,"Guten Tag! Was darf es sein?","Dobrý deň! Čo si dáte?"],
 [1,"Ich hätte gern einen Kaffee, bitte.","Dal by som si kávu, prosím."],
 [0,"Mit Milch oder schwarz?","S mliekom alebo čiernu?"],
 [1,"Mit Milch, bitte.","S mliekom, prosím."],
 [0,"Möchten Sie auch etwas essen?","Dáte si aj niečo na jedenie?"],
 [1,"Ja, ein Stück Apfelkuchen.","Áno, kúsok jablkového koláča."],
 [0,"Gern. Das macht sieben Euro fünfzig.","Rado sa stalo. Bude to sedem eur päťdesiat."],
 [1,"Kann ich mit Karte zahlen?","Môžem platiť kartou?"],
 [0,"Natürlich. Bitte schön!","Samozrejme. Nech sa páči!"]]},
{id:'weg', level:'A1', title:'Kde je stanica?', scene:'Si v Mníchove a hľadáš stanicu.', roles:['Okoloidúca','Ty'], lines:[
 [1,"Entschuldigung, wo ist der Bahnhof?","Prepáčte, kde je stanica?"],
 [0,"Gehen Sie hier geradeaus und an der Ampel links.","Choďte tu rovno a na semafore doľava."],
 [1,"Ist es weit?","Je to ďaleko?"],
 [0,"Nein, etwa zehn Minuten zu Fuß.","Nie, asi desať minút pešo."],
 [1,"Kann ich auch mit dem Bus fahren?","Môžem ísť aj autobusom?"],
 [0,"Ja, die Linie 58 fährt direkt dorthin.","Áno, linka 58 ide priamo tam."],
 [1,"Vielen Dank!","Ďakujem pekne!"],
 [0,"Gern geschehen. Gute Reise!","Rado sa stalo. Šťastnú cestu!"]]},
{id:'arzt', level:'A2', title:'U lekára', scene:'Nie je ti dobre, a tak ideš k lekárke.', roles:['Lekárka','Ty'], lines:[
 [0,"Guten Morgen. Was fehlt Ihnen?","Dobré ráno. Čo vás trápi?"],
 [1,"Ich habe seit zwei Tagen Halsschmerzen.","Už dva dni ma bolí hrdlo."],
 [0,"Haben Sie auch Fieber?","Máte aj horúčku?"],
 [1,"Ja, gestern Abend hatte ich 38 Grad.","Áno, včera večer som mal 38 stupňov."],
 [0,"Ich verschreibe Ihnen ein Medikament. Nehmen Sie es dreimal täglich.","Predpíšem vám liek. Užívajte ho trikrát denne."],
 [1,"Muss ich zu Hause bleiben?","Musím zostať doma?"],
 [0,"Ja, ruhen Sie sich bis Freitag aus.","Áno, oddychujte do piatku."],
 [1,"Danke, Frau Doktor. Auf Wiedersehen!","Ďakujem, pani doktorka. Dovidenia!"]]},
{id:'pohovor', level:'B1', title:'Pracovný pohovor', scene:'Uchádzaš sa o prácu v rakúskej firme.', roles:['Personalistka','Ty'], lines:[
 [0,"Erzählen Sie uns bitte etwas über sich.","Povedzte nám, prosím, niečo o sebe."],
 [1,"Ich komme aus der Slowakei und arbeite seit fünf Jahren im Vertrieb.","Som zo Slovenska a päť rokov pracujem v predaji."],
 [0,"Warum möchten Sie bei uns arbeiten?","Prečo chcete pracovať u nás?"],
 [1,"Ihre Firma ist international, und ich möchte mich weiterentwickeln.","Vaša firma je medzinárodná a chcem sa ďalej rozvíjať."],
 [0,"Was sind Ihre Stärken?","Aké sú vaše silné stránky?"],
 [1,"Ich bin zuverlässig und arbeite gern im Team.","Som spoľahlivý a rád pracujem v tíme."],
 [0,"Wann könnten Sie anfangen?","Kedy by ste mohli nastúpiť?"],
 [1,"Meine Kündigungsfrist beträgt einen Monat.","Moja výpovedná lehota je jeden mesiac."],
 [0,"Gut, wir melden uns nächste Woche bei Ihnen.","Dobre, ozveme sa vám budúci týždeň."]]},
{id:'homeoffice', level:'B2', title:'Diskusia s kolegom', scene:'S kolegom debatuješ o práci z domu.', roles:['Kolega','Ty'], lines:[
 [0,"Ich finde, wir sollten wieder jeden Tag ins Büro kommen.","Myslím, že by sme mali zase chodiť každý deň do kancelárie."],
 [1,"Da bin ich anderer Meinung. Im Homeoffice bin ich viel produktiver.","V tom mám iný názor. Z domu som oveľa produktívnejší."],
 [0,"Aber der persönliche Kontakt fehlt doch.","Ale predsa chýba osobný kontakt."],
 [1,"Das stimmt zwar, aber wir könnten uns zweimal pro Woche treffen.","To je síce pravda, ale mohli by sme sa stretávať dvakrát týždenne."],
 [0,"Ein Kompromiss also. Was sagt der Chef dazu?","Takže kompromis. Čo na to šéf?"],
 [1,"Meiner Ansicht nach wird er zustimmen, wenn die Ergebnisse stimmen.","Podľa mňa bude súhlasiť, ak budú výsledky v poriadku."],
 [0,"Na gut, lass es uns morgen vorschlagen.","No dobre, navrhnime to zajtra."]]}
],
grammar:[
{id:'artikel', level:'A1', title:'Členy der, die, das', intro:'Každé podstatné meno má v nemčine rod. Uč sa ho vždy spolu so slovom.', points:[
 'der = mužský rod: der Mann, der Tisch',
 'die = ženský rod: die Frau, die Lampe. Množné číslo má vždy die: die Kinder',
 'das = stredný rod: das Kind, das Buch',
 'Pomôcky: slová na -ung, -heit, -keit sú vždy die (die Zeitung). Na -chen vždy das (das Mädchen).',
 'Neurčitý člen: ein (pri der a das), eine (pri die).'],
 practice:[["{Die} Zeitung liegt auf dem Tisch.","Noviny ležia na stole.","-ung → die"],["{Das} Mädchen heißt Anna.","Dievča sa volá Anna.","-chen → das"],["{Der} Zug kommt um acht.","Vlak príde o ôsmej.",""],["Ich habe {eine} Frage.","Mám otázku.","die Frage → eine"]]},
{id:'v2', level:'A1', title:'Sloveso na 2. mieste', intro:'Najdôležitejšie pravidlo nemeckého slovosledu.', points:[
 'V hlavnej vete je sloveso vždy na 2. mieste: Ich lerne heute Deutsch.',
 'Ak začneš inak, podmet ide až za sloveso: Heute lerne ich Deutsch.',
 'Otázka s opytovacím slovom: Wo wohnst du?',
 'Otázka bez opytovacieho slova začína slovesom: Wohnst du in Wien?'],
 practice:[["Heute {lerne} ich Deutsch.","Dnes sa učím nemčinu.",""],["Am Montag {habe} ich frei.","V pondelok mám voľno.",""],["Wo {wohnst} du?","Kde bývaš?",""],["{Kommst} du morgen?","Prídeš zajtra?",""]]},
{id:'akkusativ', level:'A2', title:'Akuzatív (koho? čo?)', intro:'Predmet vety je v akuzatíve. Mení sa len mužský rod.', points:[
 'der → den, ein → einen: Ich sehe den Mann. Ich brauche einen Stuhl.',
 'die, das a množné číslo zostávajú rovnaké: Ich kaufe die Jacke, das Buch.',
 'Akuzatív majú vždy predložky für, durch, ohne, gegen, um.'],
 practice:[["Ich sehe {den} Mann.","Vidím toho muža.","der → den"],["Ich brauche {einen} Stuhl.","Potrebujem stoličku.","ein → einen"],["Das Geschenk ist für {den} Vater.","Darček je pre otca.","für + akuzatív"],["Ich kaufe {die} Jacke.","Kupujem tú bundu.","die zostáva die"]]},
{id:'dativ', level:'A2', title:'Datív (komu? čomu?)', intro:'Datív odpovedá na otázku komu a nasleduje po niektorých predložkách.', points:[
 'der a das → dem, die → der, množné číslo → den: dem Mann, der Frau, den Kindern',
 'Datív majú vždy predložky aus, bei, mit, nach, seit, von, zu.',
 'Niektoré slovesá chcú vždy datív: helfen, danken, gefallen, gehören.'],
 practice:[["Ich fahre mit {dem} Bus.","Idem autobusom.","mit + datív"],["Ich helfe {der} Frau.","Pomáham tej žene.","die → der"],["Das Buch gehört {dem} Kind.","Kniha patrí dieťaťu.","das → dem"],["Ich wohne bei {meinen} Eltern.","Bývam u rodičov.","množné číslo → meinen"]]},
{id:'perfekt-g', level:'A2', title:'Perfekt: haben alebo sein?', intro:'V reči sa o minulosti hovorí takmer vždy v perfekte.', points:[
 'haben/sein + príčastie na konci vety: Ich habe gegessen.',
 'Väčšina slovies má haben.',
 'Slovesá pohybu a zmeny stavu majú sein: Ich bin gefahren. Er ist eingeschlafen.',
 'Príčastie: ge- + kmeň + -t (gemacht) alebo -en (gesehen).'],
 practice:[["Ich {habe} Pizza gegessen.","Jedol som pizzu.",""],["Wir {sind} nach Berlin gefahren.","Išli sme do Berlína.","pohyb → sein"],["Er {ist} spät gekommen.","Prišiel neskoro.",""],["Hast du den Film {gesehen}?","Videl si ten film?",""]]},
{id:'nebensatz', level:'B1', title:'Vedľajšie vety', intro:'Po weil, dass, wenn, obwohl a ob ide sloveso na úplný koniec.', points:[
 'Ich bleibe zu Hause, weil ich krank bin.',
 'Ak je vedľajšia veta na začiatku, hlavná veta začína slovesom: Wenn es regnet, bleibe ich zu Hause.',
 'Pri dvoch slovesách ide vyčasované sloveso úplne na koniec: …, dass ich kommen kann.'],
 practice:[["Ich lerne Deutsch, weil ich in Wien arbeiten {will}.","Učím sa nemecky, lebo chcem pracovať vo Viedni.",""],["Ich weiß, dass du müde {bist}.","Viem, že si unavený.",""],["Wenn es regnet, {bleibe} ich zu Hause.","Keď prší, zostanem doma.",""],["Er sagt, dass er nicht kommen {kann}.","Hovorí, že nemôže prísť.",""]]},
{id:'konj2', level:'B2', title:'Konjunktiv II', intro:'Želania, podmienky a zdvorilé prosby.', points:[
 'Wenn ich Zeit hätte, würde ich reisen.',
 'hätte = mal by som, wäre = bol by som, könnte = mohol by som, würde + infinitív = by som',
 'Zdvorilo: Könnten Sie mir helfen? Ich hätte gern …',
 'Minulosť: Wenn ich das gewusst hätte, wäre ich gekommen.'],
 practice:[["Wenn ich reich {wäre}, würde ich reisen.","Keby som bol bohatý, cestoval by som.",""],["{Könnten} Sie das Fenster öffnen?","Mohli by ste otvoriť okno?",""],["Ich {hätte} gern ein Wasser.","Dal by som si vodu.",""],["Wenn ich das gewusst hätte, {wäre} ich gekommen.","Keby som to bol vedel, bol by som prišiel.",""]]}
]
});

/* ───────── Francúzština ───────── */
ext('fr', {
units:[
{id:'questions', level:'A1', title:'Otázky a malé slová', desc:'Kto, kde, ako, prečo… bez nich sa nezaobídeš.', items:`
qui | kto | Qui est-ce ? | Kto je to?
où | kde | Où habites-tu ? | Kde bývaš?
comment | ako | Comment tu t'appelles ? | Ako sa voláš?
pourquoi | prečo | Pourquoi tu apprends le français ? | Prečo sa učíš po francúzsky?
combien | koľko | Combien coûte ce livre ? | Koľko stojí táto kniha?
quel | ktorý, aký | Quel train va à Paris ? | Ktorý vlak ide do Paríža?
aussi | aj, tiež | Moi aussi ! | Aj ja!
très | veľmi | C'est très bon. | Je to veľmi dobré.
beaucoup | veľa, veľmi | J'ai beaucoup de travail. | Mám veľa práce.
encore | ešte | Tu es encore là ? | Ešte si tu?
`},
{id:'verbes2', level:'A2', title:'Ďalšie časté slovesá', desc:'Slovesá, ktoré počuješ každý deň.', items:`
prendre | vziať | Je prends le bus. | Pôjdem autobusom.
mettre | dať, položiť | Mets ton manteau ! | Obleč si kabát!
dire | povedať | Qu'est-ce que tu dis ? | Čo hovoríš?
voir | vidieť | Je vois la mer ! | Vidím more!
trouver | nájsť | Je ne trouve pas mes clés. | Neviem nájsť kľúče.
donner | dať | Tu peux me donner le sel ? | Môžeš mi podať soľ?
attendre | čakať | J'attends le train. | Čakám na vlak.
chercher | hľadať | Je cherche un hôtel. | Hľadám hotel.
comprendre | rozumieť | Tu comprends ? | Rozumieš?
croire | veriť, myslieť si | Je te crois. | Verím ti.
`}
],
stories:[
{title:'Un voyage imprévu', level:'B1', paragraphs:[
 "L'été dernier, Paul devait partir en Espagne avec des amis. Mais deux jours avant le départ, ses amis ont annulé le voyage.",
 "Au lieu de rester à la maison, Paul a décidé de partir seul. Il a pris le train jusqu'à Barcelone et a dormi dans une auberge de jeunesse.",
 "Là-bas, il a rencontré des voyageurs du monde entier. Finalement, ce voyage imprévu est devenu le plus beau souvenir de son été."],
 tr:["Minulé leto mal Paul ísť s kamarátmi do Španielska. Ale dva dni pred odchodom kamaráti cestu zrušili.","Namiesto toho, aby zostal doma, sa Paul rozhodol ísť sám. Išiel vlakom až do Barcelony a spal v hosteli.","Tam stretol cestovateľov z celého sveta. Nakoniec sa z tejto neplánovanej cesty stala jeho najkrajšia spomienka na leto."],
 glossary:[{w:'devait partir',sk:'mal odísť'},{w:'le départ',sk:'odchod'},{w:'ont annulé',sk:'zrušili'},{w:'Au lieu de',sk:'namiesto'},{w:'seul',sk:'sám'},{w:'auberge de jeunesse',sk:'hostel'},{w:'voyageurs',sk:'cestovatelia'},{w:'imprévu',sk:'neplánovaný'},{w:'souvenir',sk:'spomienka'}],
 questions:[{q:'Où Paul devait-il partir ?',options:['En Italie','En Espagne','Au Portugal','En Grèce'],answer:1},
  {q:'Pourquoi est-il parti seul ?',options:['Ses amis ont annulé','Il voulait être seul',"Il n'avait pas d'amis",'Il a perdu son billet'],answer:0},
  {q:'Où a-t-il dormi ?',options:['Dans un hôtel de luxe','Dans une auberge de jeunesse','Chez un ami','Dans le train'],answer:1}]}
],
dialogues:[
{id:'cafe', level:'A1', title:'V kaviarni', scene:'Objednávaš si v parížskej kaviarni.', roles:['Čašník','Ty'], lines:[
 [0,"Bonjour ! Qu'est-ce que je vous sers ?","Dobrý deň! Čo vám prinesiem?"],
 [1,"Bonjour ! Je voudrais un café, s'il vous plaît.","Dobrý deň! Chcel by som kávu, prosím."],
 [0,"Un café crème ou un expresso ?","Kávu so smotanou alebo espresso?"],
 [1,"Un café crème, s'il vous plaît.","Kávu so smotanou, prosím."],
 [0,"Et avec ceci ?","Ešte niečo?"],
 [1,"Un croissant aussi.","Aj croissant."],
 [0,"Très bien. Ça fait cinq euros.","Výborne. Bude to päť eur."],
 [1,"Je peux payer par carte ?","Môžem platiť kartou?"],
 [0,"Bien sûr. Bonne journée !","Samozrejme. Pekný deň!"]]},
{id:'chemin', level:'A1', title:'Kde je stanica?', scene:'Si v Lyone a hľadáš stanicu.', roles:['Okoloidúca','Ty'], lines:[
 [1,"Pardon, madame, où est la gare ?","Prepáčte, pani, kde je stanica?"],
 [0,"Allez tout droit, puis tournez à droite.","Choďte rovno, potom odbočte doprava."],
 [1,"C'est loin ?","Je to ďaleko?"],
 [0,"Non, c'est à dix minutes à pied.","Nie, je to desať minút pešo."],
 [1,"Merci beaucoup !","Ďakujem veľmi pekne!"],
 [0,"De rien. Bon voyage !","Niet za čo. Šťastnú cestu!"]]},
{id:'medecin', level:'A2', title:'U lekára', scene:'Nie je ti dobre, a tak ideš k lekárovi.', roles:['Lekár','Ty'], lines:[
 [0,"Bonjour. Qu'est-ce qui ne va pas ?","Dobrý deň. Čo vás trápi?"],
 [1,"J'ai mal à la gorge depuis deux jours.","Už dva dni ma bolí hrdlo."],
 [0,"Vous avez de la fièvre ?","Máte horúčku?"],
 [1,"Oui, un peu. J'ai trente-huit.","Áno, trochu. Mám tridsaťosem."],
 [0,"Je vous donne un médicament. Prenez-le trois fois par jour.","Dám vám liek. Užívajte ho trikrát denne."],
 [1,"Je dois rester à la maison ?","Musím zostať doma?"],
 [0,"Oui, reposez-vous jusqu'à vendredi.","Áno, oddychujte do piatku."],
 [1,"Merci, docteur. Au revoir !","Ďakujem, pán doktor. Dovidenia!"]]},
{id:'entretien', level:'B1', title:'Pracovný pohovor', scene:'Uchádzaš sa o prácu vo francúzskej firme.', roles:['Personalistka','Ty'], lines:[
 [0,"Parlez-moi un peu de vous.","Povedzte mi niečo o sebe."],
 [1,"Je suis slovaque et je travaille dans la vente depuis cinq ans.","Som Slovák a päť rokov pracujem v predaji."],
 [0,"Pourquoi voulez-vous travailler chez nous ?","Prečo chcete pracovať u nás?"],
 [1,"Parce que votre entreprise est internationale et que je veux progresser.","Pretože vaša firma je medzinárodná a chcem sa zlepšovať."],
 [0,"Quelles sont vos qualités ?","Aké sú vaše silné stránky?"],
 [1,"Je suis fiable et j'aime travailler en équipe.","Som spoľahlivý a rád pracujem v tíme."],
 [0,"Très bien. Nous vous recontacterons la semaine prochaine.","Výborne. Ozveme sa vám budúci týždeň."]]}
],
grammar:[
{id:'articles', level:'A1', title:'Členy le, la, les, un, une', intro:'Aj vo francúzštine má každé podstatné meno rod.', points:[
 'le = mužský rod (le livre), la = ženský rod (la maison)',
 "Pred samohláskou sa skracuje na l': l'ami, l'eau",
 'Množné číslo má les: les livres',
 'Neurčitý člen: un (mužský), une (ženský), des (množné číslo)'],
 practice:[["{La} maison est grande.","Dom je veľký.",""],["J'ai {un} frère.","Mám brata.",""],["{Les} enfants jouent.","Deti sa hrajú.",""],["C'est {une} bonne idée.","To je dobrý nápad.",""]]},
{id:'etre-avoir', level:'A1', title:'Slovesá être a avoir', intro:'Dve najdôležitejšie slovesá. Treba ich vedieť naspamäť.', points:[
 'être = byť: je suis, tu es, il est, nous sommes, vous êtes, ils sont',
 "avoir = mať: j'ai, tu as, il a, nous avons, vous avez, ils ont",
 "Vek sa hovorí s avoir: J'ai trente ans.",
 "Aj pocity často s avoir: J'ai faim (som hladný), J'ai peur (bojím sa)."],
 practice:[["Nous {sommes} slovaques.","Sme Slováci.",""],["Ils {ont} deux enfants.","Majú dve deti.",""],["Vous {êtes} très gentil.","Ste veľmi milý.",""],["Tu {as} quel âge ?","Koľko máš rokov?",""]]},
{id:'passe', level:'A2', title:'Passé composé', intro:'Minulý čas, ktorý sa používa v reči.', points:[
 'avoir/être + príčastie: mangé, fini, vendu',
 "Väčšina slovies má avoir: J'ai mangé.",
 'Slovesá pohybu (aller, venir, partir, arriver…) majú être a zhodu: Elle est allée.',
 "Zápor: Je n'ai pas mangé."],
 practice:[["J'{ai} mangé une pizza.","Zjedol som pizzu.",""],["Elle {est} allée au cinéma.","Išla do kina.","pohyb → être"],["Nous {avons} fini le travail.","Dokončili sme prácu.",""],["Je n'ai {pas} vu ce film.","Nevidel som ten film.",""]]},
{id:'subj', level:'B1', title:'Subjunktív', intro:'Po vyjadrení vôle, potreby a citov.', points:[
 'Po il faut que, je veux que, bien que, pour que',
 'Tvorí sa z tvaru ils v prítomnom čase: ils parlent → que je parle',
 'Nepravidelné: être → que je sois, avoir → que j\'aie, faire → que je fasse, aller → que j\'aille'],
 practice:[["Il faut que tu {viennes}.","Musíš prísť.",""],["Je veux que tu {sois} heureux.","Chcem, aby si bol šťastný.",""],["Bien qu'il {fasse} froid, on sort.","Hoci je zima, ideme von.",""]]}
]
});

/* ───────── Španielčina ───────── */
ext('es', {
units:[
{id:'preguntas', level:'A1', title:'Otázky a malé slová', desc:'Kto, kde, ako, prečo… bez nich sa nezaobídeš.', items:`
quién | kto | ¿Quién es? | Kto je to?
qué | čo | ¿Qué quieres? | Čo chceš?
dónde | kde | ¿Dónde vives? | Kde bývaš?
cuándo | kedy | ¿Cuándo empieza la película? | Kedy začína film?
por qué | prečo | ¿Por qué aprendes español? | Prečo sa učíš po španielsky?
cómo | ako | ¿Cómo te llamas? | Ako sa voláš?
cuánto | koľko | ¿Cuánto cuesta el billete? | Koľko stojí lístok?
cuál | ktorý | ¿Cuál prefieres? | Ktorý chceš radšej?
también | aj, tiež | Yo también. | Aj ja.
muy | veľmi | Es muy bonito. | Je to veľmi pekné.
`},
{id:'verbos2', level:'A2', title:'Ďalšie časté slovesá', desc:'Slovesá, ktoré počuješ každý deň.', items:`
decir | povedať | ¿Qué dices? | Čo hovoríš?
ver | vidieť | Quiero ver el mar. | Chcem vidieť more.
dar | dať | ¿Me das el agua? | Podáš mi vodu?
saber | vedieť | No lo sé. | Neviem.
poner | položiť, dať | Pon la mesa, por favor. | Prestri stôl, prosím.
llegar | prísť, doraziť | El tren llega a las tres. | Vlak príde o tretej.
pasar | stať sa; stráviť | ¿Qué pasa? | Čo sa deje?
deber | mať (povinnosť) | Debes descansar. | Mal by si oddychovať.
llevar | nosiť; niesť | Llevo una chaqueta roja. | Mám na sebe červenú bundu.
conocer | poznať | ¿Conoces a mi hermano? | Poznáš môjho brata?
`}
],
stories:[
{title:'Un vecino misterioso', level:'B1', paragraphs:[
 "Desde hace un mes, en el piso de al lado vive un hombre muy misterioso. Nunca saluda y siempre lleva gafas de sol, incluso por la noche.",
 "Los vecinos empezaron a hablar. Algunos decían que era un espía; otros, que era un actor famoso escondido de los periodistas.",
 "Un día, Marta encontró por error una carta suya en su buzón. Era de una editorial: el hombre misterioso era un escritor que estaba terminando su primera novela."],
 tr:["Už mesiac býva vo vedľajšom byte veľmi záhadný muž. Nikdy nezdraví a vždy nosí slnečné okuliare, dokonca aj v noci.","Susedia sa začali rozprávať. Niektorí hovorili, že je to špión, iní, že je to slávny herec, ktorý sa skrýva pred novinármi.","Jedného dňa Marta omylom našla vo svojej schránke jeho list. Bol z vydavateľstva: záhadný muž bol spisovateľ, ktorý dokončoval svoj prvý román."],
 glossary:[{w:'al lado',sk:'vedľa'},{w:'misterioso',sk:'záhadný'},{w:'gafas de sol',sk:'slnečné okuliare'},{w:'incluso',sk:'dokonca'},{w:'espía',sk:'špión'},{w:'escondido',sk:'skrytý'},{w:'periodistas',sk:'novinári'},{w:'por error',sk:'omylom'},{w:'buzón',sk:'poštová schránka'},{w:'editorial',sk:'vydavateľstvo'},{w:'novela',sk:'román'}],
 questions:[{q:'¿Qué lleva siempre el vecino?',options:['Un sombrero','Gafas de sol','Una maleta','Un perro'],answer:1},
  {q:'¿Qué pensaban algunos vecinos?',options:['Que era un espía','Que era médico','Que era profesor','Que era policía'],answer:0},
  {q:'¿Quién era en realidad?',options:['Un actor','Un escritor','Un espía','Un periodista'],answer:1}]}
],
dialogues:[
{id:'cafeteria', level:'A1', title:'V kaviarni', scene:'Raňajkuješ v kaviarni v Madride.', roles:['Čašník','Ty'], lines:[
 [0,"¡Hola! ¿Qué le pongo?","Dobrý deň! Čo vám prinesiem?"],
 [1,"Un café con leche, por favor.","Kávu s mliekom, prosím."],
 [0,"¿Algo para comer?","Niečo na jedenie?"],
 [1,"Sí, una tostada con tomate.","Áno, hrianku s paradajkou."],
 [0,"Muy bien. ¿Algo más?","Výborne. Ešte niečo?"],
 [1,"No, gracias. ¿Cuánto es?","Nie, ďakujem. Koľko to bude?"],
 [0,"Son cuatro euros con cincuenta.","Štyri eurá päťdesiat."],
 [1,"Aquí tiene. ¡Gracias!","Nech sa páči. Ďakujem!"]]},
{id:'camino', level:'A1', title:'Kde je stanica?', scene:'Si v Seville a hľadáš stanicu.', roles:['Okoloidúca','Ty'], lines:[
 [1,"Perdone, ¿dónde está la estación?","Prepáčte, kde je stanica?"],
 [0,"Siga todo recto y luego gire a la izquierda.","Choďte rovno a potom odbočte doľava."],
 [1,"¿Está lejos?","Je to ďaleko?"],
 [0,"No, a unos diez minutos andando.","Nie, asi desať minút pešo."],
 [1,"¡Muchas gracias!","Veľmi pekne ďakujem!"],
 [0,"De nada. ¡Buen viaje!","Niet za čo. Šťastnú cestu!"]]},
{id:'medico', level:'A2', title:'U lekára', scene:'Nie je ti dobre, a tak ideš k lekárke.', roles:['Lekárka','Ty'], lines:[
 [0,"Buenos días. ¿Qué le pasa?","Dobrý deň. Čo vám je?"],
 [1,"Me duele la garganta desde hace dos días.","Už dva dni ma bolí hrdlo."],
 [0,"¿Tiene fiebre?","Máte horúčku?"],
 [1,"Sí, un poco. Anoche tenía treinta y ocho.","Áno, trochu. Včera večer som mal tridsaťosem."],
 [0,"Le voy a recetar un medicamento. Tómelo tres veces al día.","Predpíšem vám liek. Užívajte ho trikrát denne."],
 [1,"¿Tengo que quedarme en casa?","Musím zostať doma?"],
 [0,"Sí, descanse hasta el viernes.","Áno, oddychujte do piatku."],
 [1,"Gracias, doctora. ¡Adiós!","Ďakujem, pani doktorka. Dovidenia!"]]},
{id:'entrevista', level:'B1', title:'Pracovný pohovor', scene:'Uchádzaš sa o prácu v španielskej firme.', roles:['Personalistka','Ty'], lines:[
 [0,"Háblenos un poco de usted.","Povedzte nám niečo o sebe."],
 [1,"Soy eslovaco y trabajo en ventas desde hace cinco años.","Som Slovák a päť rokov pracujem v predaji."],
 [0,"¿Por qué quiere trabajar con nosotros?","Prečo chcete pracovať u nás?"],
 [1,"Porque su empresa es internacional y quiero seguir aprendiendo.","Pretože vaša firma je medzinárodná a chcem sa ďalej učiť."],
 [0,"¿Cuáles son sus puntos fuertes?","Aké sú vaše silné stránky?"],
 [1,"Soy responsable y me gusta trabajar en equipo.","Som zodpovedný a rád pracujem v tíme."],
 [0,"Perfecto. Le llamaremos la semana que viene.","Výborne. Zavoláme vám budúci týždeň."]]}
],
grammar:[
{id:'ser-estar', level:'A1', title:'Ser alebo estar?', intro:'Obe slovesá znamenajú byť, ale používajú sa inak.', points:[
 'ser: kto si, odkiaľ, povolanie a trvalé vlastnosti: Soy eslovaco. Es médico.',
 'estar: kde si a ako sa cítiš: Estoy en casa. Estoy cansado.',
 'Pozor: Es aburrido (je nudný) × Está aburrido (nudí sa).'],
 practice:[["{Soy} de Eslovaquia.","Som zo Slovenska.",""],["{Estoy} muy cansado.","Som veľmi unavený.",""],["Madrid {está} en España.","Madrid je v Španielsku.","poloha → estar"],["Mi madre {es} profesora.","Moja mama je učiteľka.","povolanie → ser"]]},
{id:'gustar', level:'A1', title:'Me gusta', intro:'gustar funguje opačne ako „mať rád“: to, čo sa páči, je podmet.', points:[
 'Me gusta el café (jedna vec), Me gustan los libros (viac vecí)',
 'Me gusta + infinitív: Me gusta viajar.',
 'te gusta (tebe), le gusta (jemu, jej), nos gusta (nám)'],
 practice:[["Me {gusta} el chocolate.","Mám rád čokoládu.",""],["Me {gustan} los perros.","Mám rád psov.","množné číslo → gustan"],["¿Te {gusta} bailar?","Rád tancuješ?",""],["A ella le {gustan} las flores.","Ona má rada kvety.",""]]},
{id:'pasado', level:'A2', title:'Minulý čas (indefinido)', intro:'Pre ukončené deje v minulosti.', points:[
 'Ayer comí paella.',
 '-ar: hablé, hablaste, habló. -er/-ir: comí, comiste, comió',
 'Nepravidelné: ir/ser → fui, tener → tuve, hacer → hice, estar → estuve',
 'Typické slová: ayer, el año pasado, la semana pasada'],
 practice:[["Ayer {hablé} con mi madre.","Včera som hovoril s mamou.",""],["El año pasado {fui} a México.","Minulý rok som bol v Mexiku.",""],["¿Qué {hiciste} el fin de semana?","Čo si robil cez víkend?",""],["Ella {comió} en casa.","Jedla doma.",""]]},
{id:'subjuntivo', level:'B1', title:'Subjuntivo', intro:'Po želaniach, pocitoch a niektorých spojkách.', points:[
 'quiero que, espero que, para que, aunque (= aj keby)',
 'Tvorí sa z tvaru yo: hablo → hable, como → coma',
 'Nepravidelné: ser → sea, ir → vaya, tener → tenga, hacer → haga'],
 practice:[["Espero que {tengas} suerte.","Dúfam, že budeš mať šťastie.",""],["Quiero que {vengas} mañana.","Chcem, aby si prišiel zajtra.",""],["Te lo digo para que lo {sepas}.","Hovorím ti to, aby si to vedel.",""]]}
]
});

/* ───────── Portugalčina ───────── */
ext('pt', {
units:[
{id:'perguntas', level:'A1', title:'Otázky a malé slová', desc:'Kto, kde, ako, prečo… bez nich sa nezaobídeš.', items:`
quem | kto | Quem é ele? | Kto je on?
o que | čo | O que você quer? | Čo chceš?
onde | kde | Onde você mora? | Kde bývaš?
como | ako | Como você se chama? | Ako sa voláš?
por que | prečo | Por que você aprende português? | Prečo sa učíš po portugalsky?
quanto | koľko | Quanto custa o ingresso? | Koľko stojí vstupenka?
qual | ktorý | Qual você prefere? | Ktorý chceš radšej?
também | aj, tiež | Eu também. | Aj ja.
muito | veľmi; veľa | Está muito quente. | Je veľmi horúco.
aqui | tu | Eu moro aqui. | Bývam tu.
`},
{id:'verbos2', level:'A2', title:'Ďalšie časté slovesá', desc:'Slovesá, ktoré počuješ každý deň.', items:`
dizer | povedať | O que você disse? | Čo si povedal?
ver | vidieť | Quero ver o mar. | Chcem vidieť more.
dar | dať | Você me dá a água? | Podáš mi vodu?
saber | vedieť | Você sabe onde fica? | Vieš, kde to je?
pôr | položiť, dať | Pode pôr aqui. | Môžete to položiť sem.
chegar | prísť | O ônibus chega às três. | Autobus príde o tretej.
levar | vziať, niesť | Vou levar um guarda-chuva. | Vezmem si dáždnik.
conhecer | poznať | Você conhece o meu irmão? | Poznáš môjho brata?
achar | myslieť si; nájsť | Achei a chave! | Našiel som kľúč!
precisar | potrebovať | Preciso de um táxi. | Potrebujem taxík.
`}
],
stories:[
{title:'O primeiro dia em São Paulo', level:'B1', paragraphs:[
 "Quando a Eva chegou a São Paulo, ficou impressionada com o tamanho da cidade. Os prédios pareciam não ter fim e o trânsito era intenso.",
 "No primeiro dia, ela se perdeu no metrô e pediu ajuda a um senhor. Ele não só explicou o caminho, mas também a acompanhou até a estação certa.",
 "Mais tarde, num restaurante, a garçonete recomendou um prato típico, o virado à paulista. Eva percebeu que, apesar do caos, os paulistanos eram muito acolhedores."],
 tr:["Keď Eva prišla do São Paula, ohromila ju veľkosť mesta. Zdalo sa, že budovy nemajú konca, a doprava bola hustá.","Prvý deň sa stratila v metre a požiadala o pomoc jedného pána. Ten jej nielen vysvetlil cestu, ale ju aj odprevadil až na správnu stanicu.","Neskôr jej v reštaurácii čašníčka odporučila typické jedlo, virado à paulista. Eva si uvedomila, že napriek chaosu sú obyvatelia São Paula veľmi pohostinní."],
 glossary:[{w:'impressionada',sk:'ohromená'},{w:'tamanho',sk:'veľkosť'},{w:'prédios',sk:'budovy'},{w:'trânsito',sk:'doprava'},{w:'se perdeu',sk:'stratila sa'},{w:'acompanhou',sk:'odprevadil'},{w:'certa',sk:'správna'},{w:'prato típico',sk:'typické jedlo'},{w:'apesar do',sk:'napriek'},{w:'acolhedores',sk:'pohostinní'}],
 questions:[{q:'O que impressionou a Eva?',options:['O tamanho da cidade','A praia','O frio','O silêncio'],answer:0},
  {q:'O que o senhor fez?',options:['Ignorou a Eva','Acompanhou a Eva até a estação','Vendeu um bilhete','Chamou um táxi'],answer:1},
  {q:'Como eram os paulistanos, segundo a Eva?',options:['Frios','Acolhedores','Apressados','Tristes'],answer:1}]}
],
dialogues:[
{id:'cafe', level:'A1', title:'V kaviarni', scene:'Raňajkuješ v kaviarni v Riu.', roles:['Čašník','Ty'], lines:[
 [0,"Oi, bom dia! O que vai ser?","Ahoj, dobré ráno! Čo si dáte?"],
 [1,"Um café com leite, por favor.","Kávu s mliekom, prosím."],
 [0,"Quer comer alguma coisa?","Dáte si niečo na jedenie?"],
 [1,"Sim, um pão de queijo.","Áno, syrový chlebík (pão de queijo)."],
 [0,"Mais alguma coisa?","Ešte niečo?"],
 [1,"Não, obrigado. Quanto é?","Nie, ďakujem. Koľko to bude?"],
 [0,"São doze reais.","Je to dvanásť reálov."],
 [1,"Posso pagar com cartão?","Môžem platiť kartou?"],
 [0,"Claro! Tenha um bom dia!","Jasné! Pekný deň!"]]},
{id:'caminho', level:'A1', title:'Kde je stanica?', scene:'Si v Lisabone a hľadáš stanicu.', roles:['Okoloidúca','Ty'], lines:[
 [1,"Com licença, onde fica a estação?","Prepáčte, kde je stanica?"],
 [0,"Siga em frente e depois vire à direita.","Choďte rovno a potom odbočte doprava."],
 [1,"É longe?","Je to ďaleko?"],
 [0,"Não, uns dez minutos a pé.","Nie, asi desať minút pešo."],
 [1,"Muito obrigado!","Ďakujem veľmi pekne!"],
 [0,"De nada. Boa viagem!","Niet za čo. Šťastnú cestu!"]]},
{id:'medico', level:'A2', title:'U lekára', scene:'Nie je ti dobre, a tak ideš k lekárke.', roles:['Lekárka','Ty'], lines:[
 [0,"Bom dia. O que você está sentindo?","Dobrý deň. Čo vás trápi?"],
 [1,"Estou com dor de garganta há dois dias.","Už dva dni ma bolí hrdlo."],
 [0,"Está com febre?","Máte horúčku?"],
 [1,"Sim, um pouco. Ontem à noite tive trinta e oito.","Áno, trochu. Včera večer som mal tridsaťosem."],
 [0,"Vou receitar um remédio. Tome três vezes por dia.","Predpíšem vám liek. Užívajte ho trikrát denne."],
 [1,"Preciso ficar em casa?","Musím zostať doma?"],
 [0,"Sim, descanse até sexta.","Áno, oddychujte do piatku."],
 [1,"Obrigado, doutora. Tchau!","Ďakujem, pani doktorka. Dovidenia!"]]},
{id:'entrevista', level:'B1', title:'Pracovný pohovor', scene:'Uchádzaš sa o prácu v brazílskej firme.', roles:['Personalistka','Ty'], lines:[
 [0,"Fale um pouco sobre você.","Povedzte niečo o sebe."],
 [1,"Sou eslovaco e trabalho com vendas há cinco anos.","Som Slovák a päť rokov pracujem v predaji."],
 [0,"Por que você quer trabalhar aqui?","Prečo chcete pracovať tu?"],
 [1,"Porque a empresa é internacional e eu quero crescer.","Pretože firma je medzinárodná a chcem rásť."],
 [0,"Quais são os seus pontos fortes?","Aké sú vaše silné stránky?"],
 [1,"Sou responsável e gosto de trabalhar em equipe.","Som zodpovedný a rád pracujem v tíme."],
 [0,"Ótimo. Entraremos em contato na semana que vem.","Výborne. Ozveme sa vám budúci týždeň."]]}
],
grammar:[
{id:'ser-estar', level:'A1', title:'Ser, estar a ficar', intro:'Tri slovesá, ktoré sa často prekladajú ako byť.', points:[
 'ser: kto si, odkiaľ, povolanie a vlastnosti: Sou eslovaco.',
 'estar: stav a dočasná situácia: Estou cansado. Estou em casa.',
 'ficar: kde sa niečo nachádza: Onde fica o hotel?'],
 practice:[["Eu {sou} da Eslováquia.","Som zo Slovenska.",""],["Hoje eu {estou} cansado.","Dnes som unavený.",""],["Onde {fica} a praia?","Kde je pláž?","poloha → ficar"],["Ela {é} médica.","Je lekárka.",""]]},
{id:'voce', level:'A1', title:'Você a a gente', intro:'V Brazílii sa oslovuje inak ako v Portugalsku.', points:[
 'você = ty aj vy, sloveso je v 3. osobe: Você fala inglês?',
 'a gente = my (hovorovo), sloveso v 3. osobe jednotného čísla: A gente vai.',
 'nós = my (spisovne): Nós vamos.'],
 practice:[["Você {fala} português?","Hovoríš po portugalsky?",""],["A gente {vai} à praia.","Ideme na pláž.",""],["Nós {vamos} ao cinema.","Ideme do kina.",""],["Você {mora} aqui?","Bývaš tu?",""]]},
{id:'passado', level:'A2', title:'Minulý čas', intro:'Pretérito perfeito pre ukončené deje.', points:[
 'Ontem eu comi peixe.',
 '-ar: falei, falou. -er: comi, comeu. -ir: abri, abriu',
 'Nepravidelné: ir/ser → fui, foi. ter → tive, teve. fazer → fiz, fez'],
 practice:[["Ontem eu {falei} com a minha mãe.","Včera som hovoril s mamou.",""],["Ela {foi} ao Rio.","Išla do Ria.",""],["O que você {fez} no domingo?","Čo si robil v nedeľu?",""],["Nós {comemos} muito bem.","Jedli sme veľmi dobre.",""]]},
{id:'subjuntivo', level:'B1', title:'Subjuntivo', intro:'Po želaniach a po quando a se v budúcnosti.', points:[
 'Espero que você venha.',
 'Budúci subjuntivo po quando a se: Quando você chegar, me liga.',
 'Nepravidelné: ser → seja, ir → vá, ter → tenha'],
 practice:[["Espero que você {venha}.","Dúfam, že prídeš.",""],["Quando você {chegar}, me avisa.","Keď prídeš, daj mi vedieť.",""],["Se você {quiser}, a gente sai.","Ak chceš, pôjdeme von.",""]]}
]
});

/* ───────── Ruština ───────── */
ext('ru', {
units:[
{id:'voprosy', level:'A1', title:'Otázky a malé slová', desc:'Kto, kde, ako, prečo… bez nich sa nezaobídeš.', items:`
кто | kto | Кто это? | Kto je to?
что | čo | Что это? | Čo je to?
где | kde | Где ты живёшь? | Kde bývaš?
куда | kam | Куда ты идёшь? | Kam ideš?
откуда | odkiaľ | Откуда ты? | Odkiaľ si?
почему | prečo | Почему ты учишь русский? | Prečo sa učíš po rusky?
как | ako | Как тебя зовут? | Ako sa voláš?
сколько | koľko | Сколько стоит билет? | Koľko stojí lístok?
какой | aký, ktorý | Какой автобус идёт в центр? | Ktorý autobus ide do centra?
тоже | tiež | Я тоже. | Ja tiež.
`},
{id:'glagoly2', level:'A2', title:'Ďalšie časté slovesá', desc:'Slovesá, ktoré počuješ každý deň.', items:`
видеть | vidieť | Я вижу море! | Vidím more!
сказать | povedať | Что ты сказал? | Čo si povedal?
взять | vziať | Можно взять? | Môžem si vziať?
дать | dať | Дай мне воды, пожалуйста. | Daj mi vodu, prosím.
понимать | rozumieť | Ты меня понимаешь? | Rozumieš mi?
ждать | čakať | Я жду автобус. | Čakám na autobus.
искать | hľadať | Я ищу гостиницу. | Hľadám hotel.
помогать | pomáhať | Я помогаю маме. | Pomáham mame.
спрашивать | pýtať sa | Он часто спрашивает. | Často sa pýta.
отвечать | odpovedať | Почему ты не отвечаешь? | Prečo neodpovedáš?
`}
],
stories:[
{title:'Потерянный кот', level:'B1', paragraphs:[
 "Вчера вечером у моей соседки Оли пропал кот Барсик. Она искала его везде: в подъезде, во дворе и даже в соседнем парке.",
 "Мы повесили объявления на каждом доме и написали в чате нашего района. Многие соседи предложили помочь, но кота нигде не было.",
 "А утром Оля открыла шкаф и увидела Барсика. Он спокойно спал на её свитере. Оказалось, что он всю ночь был дома!"],
 tr:["Včera večer sa mojej susede Oľge stratil kocúr Barsik. Hľadala ho všade: na chodbe, na dvore a dokonca aj v susednom parku.","Vyvesili sme oznamy na každý dom a napísali sme do četu našej štvrte. Mnohí susedia ponúkli pomoc, ale kocúra nebolo nikde.","Ráno Oľga otvorila skriňu a uvidela Barsika. Pokojne spal na jej svetri. Ukázalo sa, že bol celú noc doma!"],
 glossary:[{w:'пропал',sk:'stratil sa'},{w:'искала',sk:'hľadala'},{w:'везде',sk:'všade'},{w:'подъезде',sk:'na chodbe (vo vchode)'},{w:'дворе',sk:'dvore'},{w:'объявления',sk:'oznamy'},{w:'района',sk:'štvrte'},{w:'нигде',sk:'nikde'},{w:'шкаф',sk:'skriňa'},{w:'Оказалось',sk:'ukázalo sa'}],
 questions:[{q:'Кто пропал?',options:['Собака','Кот','Попугай','Ребёнок'],answer:1},
  {q:'Что сделали соседи?',options:['Повесили объявления','Позвонили в полицию','Купили нового кота','Ничего'],answer:0},
  {q:'Где был Барсик?',options:['В парке','В шкафу','У соседей','На улице'],answer:1}]}
],
dialogues:[
{id:'kafe', level:'A1', title:'V kaviarni', scene:'Objednávaš si v kaviarni v Petrohrade.', roles:['Čašníčka','Ty'], lines:[
 [0,"Здравствуйте! Что будете заказывать?","Dobrý deň! Čo si objednáte?"],
 [1,"Чай с лимоном, пожалуйста.","Čaj s citrónom, prosím."],
 [0,"Что-нибудь ещё?","Ešte niečo?"],
 [1,"Да, кусок торта.","Áno, kúsok torty."],
 [0,"Хорошо. С вас триста рублей.","Dobre. Platíte tristo rubľov."],
 [1,"Можно картой?","Môžem kartou?"],
 [0,"Конечно. Приятного аппетита!","Samozrejme. Dobrú chuť!"]]},
{id:'doroga', level:'A1', title:'Kde je stanica?', scene:'Hľadáš železničnú stanicu.', roles:['Okoloidúca','Ty'], lines:[
 [1,"Извините, где вокзал?","Prepáčte, kde je stanica?"],
 [0,"Идите прямо, потом налево.","Choďte rovno, potom doľava."],
 [1,"Это далеко?","Je to ďaleko?"],
 [0,"Нет, минут десять пешком.","Nie, asi desať minút pešo."],
 [1,"Большое спасибо!","Veľká vďaka!"],
 [0,"Пожалуйста. Счастливого пути!","Niet za čo. Šťastnú cestu!"]]},
{id:'vrach', level:'A2', title:'U lekára', scene:'Nie je ti dobre, a tak ideš k lekárke.', roles:['Lekárka','Ty'], lines:[
 [0,"Здравствуйте. На что жалуетесь?","Dobrý deň. Čo vás trápi?"],
 [1,"У меня два дня болит горло.","Už dva dni ma bolí hrdlo."],
 [0,"Температура есть?","Máte teplotu?"],
 [1,"Да, вчера вечером было тридцать восемь.","Áno, včera večer som mal tridsaťosem."],
 [0,"Я выпишу вам лекарство. Принимайте три раза в день.","Predpíšem vám liek. Užívajte ho trikrát denne."],
 [1,"Мне нужно оставаться дома?","Musím zostať doma?"],
 [0,"Да, отдыхайте до пятницы.","Áno, oddychujte do piatku."],
 [1,"Спасибо, доктор. До свидания!","Ďakujem, pani doktorka. Dovidenia!"]]},
{id:'sobesedovanie', level:'B1', title:'Pracovný pohovor', scene:'Uchádzaš sa o prácu v medzinárodnej firme.', roles:['Personalistka','Ty'], lines:[
 [0,"Расскажите немного о себе.","Povedzte niečo o sebe."],
 [1,"Я из Словакии и уже пять лет работаю в продажах.","Som zo Slovenska a už päť rokov pracujem v predaji."],
 [0,"Почему вы хотите работать у нас?","Prečo chcete pracovať u nás?"],
 [1,"Ваша компания международная, и я хочу развиваться.","Vaša firma je medzinárodná a chcem sa rozvíjať."],
 [0,"Какие у вас сильные стороны?","Aké sú vaše silné stránky?"],
 [1,"Я ответственный и люблю работать в команде.","Som zodpovedný a rád pracujem v tíme."],
 [0,"Отлично. Мы свяжемся с вами на следующей неделе.","Výborne. Ozveme sa vám budúci týždeň."]]}
],
grammar:[
{id:'azbuka', level:'A1', title:'Azbuka pre Slováka', intro:'Polovicu písmen už poznáš. Pozor na zradné.', points:[
 'Rovnako ako v slovenčine: А, К, М, О, Т',
 'Zradné: В = v, Н = n, Р = r, С = s, У = u, Х = ch',
 'Nové: Ж = ž, Ч = č, Ш = š, Щ = šč, Ы = y, Э = e',
 'Е = je, Ё = jo, Ю = ju, Я = ja. Ь zmäkčuje predchádzajúcu spoluhlásku.'],
 practice:[["Это {ресторан}.","To je reštaurácia.","р = r, с = s, н = n"],["Я пью {чай}.","Pijem čaj.","ч = č"],["Это мой {брат}.","To je môj brat.",""],["Где {метро}?","Kde je metro?",""]]},
{id:'rod', level:'A1', title:'Rod podstatných mien', intro:'Rod spoznáš podľa koncovky.', points:[
 'Mužský rod končí na spoluhlásku: стол, дом',
 'Ženský rod končí na -а, -я: мама, неделя',
 'Stredný rod končí na -о, -е: окно, море',
 'Na -ь môže byť mužský (день) aj ženský rod (ночь).'],
 practice:[["Это мой {дом}.","To je môj dom.",""],["Это моя {мама}.","To je moja mama.","моя = ženský rod"],["Это моё {окно}.","To je moje okno.","моё = stredný rod"],["Где {моя} сестра?","Kde je moja sestra?",""]]},
{id:'proshloe', level:'A2', title:'Minulý čas', intro:'Tvorí sa podobne ako v slovenčine, podľa rodu.', points:[
 'он был, она была, оно было, они были',
 'Kmeň + -л, -ла, -ло, -ли: делать → делал, делала',
 'Nemení sa podľa osoby: я был, ты был, он был'],
 practice:[["Вчера я {был} дома.","Včera som bol doma.",""],["Она {была} в Праге.","Bola v Prahe.",""],["Мы {были} в кино.","Boli sme v kine.",""],["Что ты {делал} вчера?","Čo si robil včera?",""]]},
{id:'padezhi', level:'B1', title:'Pády po predložkách', intro:'Podobne ako v slovenčine rozhoduje otázka kde alebo kam.', points:[
 'в/на + lokál (kde?): в Праге, на работе',
 'в/на + akuzatív (kam?): в Прагу, на работу',
 'из, от, до, у + genitív: из Словакии, у меня',
 'с + inštrumentál (s kým?): с другом'],
 practice:[["Я живу в {Праге}.","Bývam v Prahe.","kde? → lokál"],["Я еду в {Прагу}.","Idem do Prahy.","kam? → akuzatív"],["Я из {Словакии}.","Som zo Slovenska.","из + genitív"],["Я иду в кино с {другом}.","Idem do kina s kamarátom.","с + inštrumentál"]]}
]
});

})(window.CONTENT);
