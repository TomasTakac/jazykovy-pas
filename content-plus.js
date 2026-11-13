/* Jazykový pas: additional lessons, sentences, stories and gender words.
   add(lang, {units, sentences, stories, gender}); a unit with `after` is inserted after that unit id. */
(function(C){
  function add(c, o){
    const L = C[c]; if (!L) return;
    (o.units || []).forEach(u => {
      const i = u.after ? L.units.findIndex(x => x.id === u.after) : -1;
      if (i >= 0) L.units.splice(i + 1, 0, u); else L.units.push(u);
    });
    L.sentences = (L.sentences || []).concat(o.sentences || []);
    L.stories = (L.stories || []).concat(o.stories || []);
    if (o.gender && L.gender) for (const a in o.gender) L.gender.words[a] += '|' + o.gender[a];
    if (o.storyLevel && L.story) L.story.level = o.storyLevel;
  }

/* ───────── Nemčina ───────── */
add('de', {
storyLevel:'B1',
units: [
{id:'pocasie', after:'cas', title:'Počasie a príroda', desc:'O počasí sa rozpráva stále.', items:`
das Wetter | počasie | Wie ist das Wetter heute? | Aké je dnes počasie?
die Sonne | slnko | Die Sonne scheint. | Svieti slnko.
der Regen | dážď | Bei Regen bleiben wir zu Hause. | Keď prší, zostávame doma.
es regnet | prší | Es regnet schon den ganzen Tag. | Prší už celý deň.
es schneit | sneží | In den Bergen schneit es. | V horách sneží.
warm | teplý, teplo | Heute ist es sehr warm. | Dnes je veľmi teplo.
kalt | studený, zima | Im Winter ist es hier kalt. | V zime je tu zima.
der Wind | vietor | Der Wind ist heute stark. | Vietor je dnes silný.
der Himmel | obloha, nebo | Der Himmel ist ganz blau. | Obloha je úplne modrá.
der Wald | les | Wir gehen im Wald spazieren. | Ideme sa prechádzať do lesa.
der See | jazero | Der See ist sehr sauber. | Jazero je veľmi čisté. | der See = jazero, die See = more
das Gewitter | búrka | Heute Abend kommt ein Gewitter. | Dnes večer príde búrka.
`},
{id:'nakup', after:'jedlo', title:'Nakupovanie', desc:'V obchode, na trhu a pri pokladni.', items:`
der Supermarkt | supermarket | Der Supermarkt hat bis 22 Uhr offen. | Supermarket má otvorené do 22:00.
einkaufen | nakupovať | Ich gehe am Samstag einkaufen. | V sobotu idem nakupovať.
kosten | stáť (cena) | Was kostet das? | Koľko to stojí?
der Preis | cena | Der Preis ist zu hoch. | Cena je príliš vysoká.
günstig | výhodný, lacný | Das Angebot ist sehr günstig. | Tá ponuka je veľmi výhodná.
die Kasse | pokladňa | Bitte zahlen Sie an der Kasse. | Zaplaťte, prosím, pri pokladni.
bar zahlen | platiť v hotovosti | Kann ich bar zahlen? | Môžem platiť v hotovosti?
mit Karte | kartou | Ich zahle mit Karte. | Platím kartou.
die Tüte | taška (igelitka) | Brauchen Sie eine Tüte? | Potrebujete tašku?
die Größe | veľkosť | Haben Sie das in einer anderen Größe? | Máte to v inej veľkosti?
anprobieren | vyskúšať (oblečenie) | Kann ich die Jacke anprobieren? | Môžem si vyskúšať bundu?
Ich schaue nur. | Len sa pozerám. | Danke, ich schaue nur. | Ďakujem, len sa pozerám.
`},
{id:'hotel', after:'mesto', title:'Hotel a dovolenka', desc:'Ubytovanie, rezervácia a výlety.', items:`
das Hotel | hotel | Das Hotel liegt direkt am Strand. | Hotel leží priamo na pláži.
reservieren | rezervovať | Ich möchte ein Zimmer reservieren. | Chcel by som si rezervovať izbu.
das Einzelzimmer | jednoposteľová izba | Ein Einzelzimmer für zwei Nächte, bitte. | Jednoposteľovú izbu na dve noci, prosím.
das Doppelzimmer | dvojposteľová izba | Haben Sie noch ein Doppelzimmer frei? | Máte ešte voľnú dvojposteľovú izbu?
das Frühstück | raňajky | Ist das Frühstück inklusive? | Sú raňajky v cene?
der Schlüssel | kľúč | Hier ist Ihr Schlüssel. | Tu je váš kľúč.
der Koffer | kufor | Mein Koffer ist sehr schwer. | Môj kufor je veľmi ťažký.
der Ausflug | výlet | Morgen machen wir einen Ausflug. | Zajtra ideme na výlet.
die Sehenswürdigkeit | pamiatka | Welche Sehenswürdigkeit empfehlen Sie? | Ktorú pamiatku odporúčate?
der Strand | pláž | Wir liegen den ganzen Tag am Strand. | Celý deň ležíme na pláži.
die Unterkunft | ubytovanie | Wir suchen eine günstige Unterkunft. | Hľadáme lacné ubytovanie.
Gute Reise! | Šťastnú cestu! | Gute Reise und viel Spaß! | Šťastnú cestu a veľa zábavy!
`},
{id:'oblecenie', after:'byvanie', title:'Oblečenie', desc:'Čo si oblečieš a čo kúpiš.', items:`
die Kleidung | oblečenie | Ich kaufe selten neue Kleidung. | Zriedka kupujem nové oblečenie.
die Hose | nohavice | Die Hose ist zu lang. | Nohavice sú príliš dlhé.
das Hemd | košeľa | Er trägt ein weißes Hemd. | Má na sebe bielu košeľu.
das T-Shirt | tričko | Ich nehme das rote T-Shirt. | Beriem si červené tričko.
die Jacke | bunda | Nimm eine Jacke mit! | Zober si bundu!
der Pullover | sveter | Der Pullover ist schön warm. | Sveter je príjemne teplý.
die Schuhe | topánky | Meine Schuhe sind nass. | Moje topánky sú mokré. | Množné číslo.
das Kleid | šaty | Das Kleid steht dir gut. | Tie šaty ti pristanú.
tragen | nosiť, mať oblečené | Was trägst du heute? | Čo máš dnes na sebe?
anziehen | obliecť si | Ich ziehe mich schnell an. | Rýchlo sa oblečiem.
ausziehen | vyzliecť, vyzuť | Zieh bitte die Schuhe aus. | Vyzuj si, prosím, topánky.
passen | sedieť (veľkosťou) | Die Jacke passt perfekt. | Bunda sedí perfektne.
`},
{id:'technika', after:'praca', title:'Technika a internet', desc:'Mobil, počítač a správy.', items:`
das Handy | mobil | Mein Handy ist leer. | Mám vybitý mobil.
der Akku | batéria | Der Akku hält nur einen Tag. | Batéria vydrží len deň.
aufladen | nabiť | Ich muss mein Handy aufladen. | Musím si nabiť mobil.
das Passwort | heslo | Ich habe mein Passwort vergessen. | Zabudol som heslo.
herunterladen | stiahnuť | Du kannst die App kostenlos herunterladen. | Appku si môžeš stiahnuť zadarmo.
schicken | poslať | Schick mir bitte die Adresse. | Pošli mi, prosím, adresu.
die Nachricht | správa | Ich habe deine Nachricht bekommen. | Dostal som tvoju správu.
anrufen | zavolať | Ich rufe dich heute Abend an. | Zavolám ti dnes večer.
das WLAN | wifi | Wie ist das WLAN-Passwort? | Aké je heslo na wifi?
funktionieren | fungovať | Der Drucker funktioniert nicht. | Tlačiareň nefunguje.
speichern | uložiť | Vergiss nicht, die Datei zu speichern. | Nezabudni uložiť súbor.
der Bildschirm | obrazovka | Der Bildschirm ist kaputt. | Obrazovka je pokazená.
`},
{id:'perfekt', after:'opisy', title:'Minulý čas (Perfekt)', desc:'Najčastejšie tvary, ktoré v rozhovore použiješ.', items:`
ich habe gemacht | urobil som | Ich habe meine Hausaufgaben gemacht. | Urobil som si domáce úlohy. | machen → gemacht
ich bin gegangen | išiel som (pešo) | Ich bin früh nach Hause gegangen. | Išiel som skoro domov. | Slovesá pohybu majú sein.
ich habe gegessen | jedol som | Ich habe schon gegessen. | Už som jedol.
ich habe getrunken | pil som | Ich habe zu viel Kaffee getrunken. | Vypil som priveľa kávy.
ich habe gesehen | videl som | Hast du den Film gesehen? | Videl si ten film?
ich habe gelesen | čítal som | Ich habe das Buch zweimal gelesen. | Tú knihu som čítal dvakrát.
ich habe geschrieben | písal som | Ich habe dir eine E-Mail geschrieben. | Napísal som ti e-mail.
ich bin gekommen | prišiel som | Ich bin gestern spät gekommen. | Včera som prišiel neskoro.
ich bin gefahren | išiel som (dopravou) | Wir sind mit dem Zug gefahren. | Išli sme vlakom.
ich habe geschlafen | spal som | Ich habe schlecht geschlafen. | Spal som zle.
ich habe gesprochen | hovoril som | Ich habe mit dem Chef gesprochen. | Hovoril som so šéfom.
ich habe verstanden | pochopil som | Ich habe alles verstanden. | Všetkému som rozumel. | Bez ge-: verstehen → verstanden.
`},
{id:'pocity', after:'volno', title:'Pocity a vzťahy', desc:'Ako sa naozaj máš.', items:`
glücklich | šťastný | Ich bin heute sehr glücklich. | Dnes som veľmi šťastný.
traurig | smutný | Warum bist du so traurig? | Prečo si taký smutný?
wütend | nahnevaný | Er war wütend auf mich. | Bol na mňa nahnevaný.
nervös | nervózny | Vor der Prüfung bin ich nervös. | Pred skúškou som nervózny.
sich freuen | tešiť sa | Ich freue mich, dich zu sehen. | Teším sa, že ťa vidím.
lieben | ľúbiť, milovať | Ich liebe dich. | Ľúbim ťa.
mögen | mať rád | Ich mag dich sehr. | Mám ťa veľmi rád.
vermissen | chýbať (niekto mi) | Ich vermisse dich. | Chýbaš mi.
sich verlieben | zamilovať sa | Sie hat sich in ihn verliebt. | Zamilovala sa doňho.
streiten | hádať sa | Wir streiten fast nie. | Takmer sa nehádame.
die Beziehung | vzťah | Sie sind seit zwei Jahren in einer Beziehung. | Sú spolu už dva roky.
Es tut mir leid. | Je mi to ľúto. / Prepáč. | Es tut mir leid, das wollte ich nicht. | Prepáč, to som nechcel.
`},
{id:'frazy2', title:'Frázy pre pokročilých', desc:'Spojenia, vďaka ktorým znieš ako domáci.', items:`
Auf jeden Fall! | Určite! / Rozhodne! | Kommst du mit? – Auf jeden Fall! | Ideš s nami? – Určite!
Das klingt gut. | To znie dobre. | Pizza heute Abend? Das klingt gut! | Pizza dnes večer? To znie dobre!
Mal sehen. | Uvidíme. | Vielleicht komme ich. Mal sehen. | Možno prídem. Uvidíme.
Schade! | Škoda! | Du kannst nicht kommen? Schade! | Nemôžeš prísť? Škoda!
Das macht nichts. | To nevadí. | Du bist zu spät? Das macht nichts. | Meškáš? To nevadí.
Na klar! | Jasné! / Samozrejme! | Hilfst du mir? – Na klar! | Pomôžeš mi? – Jasné!
Kein Wunder. | Nečudo. | Du bist müde? Kein Wunder! | Si unavený? Nečudo!
Es lohnt sich. | Oplatí sa to. | Der Film ist lang, aber es lohnt sich. | Film je dlhý, ale oplatí sa.
Ich drücke dir die Daumen! | Držím ti palce! | Morgen ist die Prüfung? Ich drücke dir die Daumen! | Zajtra máš skúšku? Držím ti palce!
Im Großen und Ganzen | celkovo, v podstate | Im Großen und Ganzen bin ich zufrieden. | Celkovo som spokojný.
Ich habe den Eindruck | mám dojem | Ich habe den Eindruck, dass er traurig ist. | Mám dojem, že je smutný.
Das geht mich nichts an. | Do toho mi nič nie je. | Das ist ihr Problem, das geht mich nichts an. | To je jej problém, do toho mi nič nie je.
`}
],
sentences: [
["Ich {bin} gestern ins Kino gegangen.","Včera som išiel do kina.","gehen → Perfekt so sein."],
["Wir {haben} lange auf dich gewartet.","Dlho sme na teba čakali.",""],
["Ich {würde} gern mehr Zeit mit dir verbringen.","Rád by som s tebou trávil viac času.",""],
["Kannst du mir {sagen}, wie spät es ist?","Môžeš mi povedať, koľko je hodín?",""],
["Es ist wichtig, jeden Tag {zu} üben.","Je dôležité cvičiť každý deň.","zu + infinitív."],
["Ich habe {keine} Lust auf Arbeit.","Nemám chuť na prácu.","kein = žiadny."],
["{Wann} beginnt der Film?","Kedy začína film?",""],
["Ich {muss} morgen früh aufstehen.","Zajtra musím skoro vstávať.",""],
["Das Buch liegt {auf} dem Tisch.","Kniha leží na stole.","auf + datív = kde?"],
["Er ist {größer} als sein Bruder.","Je vyšší ako jeho brat.",""],
["Wir treffen uns {vor} dem Kino.","Stretneme sa pred kinom.",""],
["{Nachdem} ich gegessen hatte, ging ich schlafen.","Keď som sa najedol, išiel som spať.","nachdem + predminulý čas."],
["Ich bin {seit} einer Woche krank.","Som chorý už týždeň.",""],
["Kannst du bitte {leiser} sprechen?","Môžeš, prosím, hovoriť tichšie?",""],
["Ich {habe} mein Handy zu Hause vergessen.","Zabudol som mobil doma.",""]
],
stories: [
{title:'Ein neuer Job', level:'A2', paragraphs:[
 "Lena hat einen neuen Job in Graz. Am ersten Tag ist sie sehr nervös. Sie steht früh auf, trinkt schnell einen Kaffee und nimmt den Bus ins Büro.",
 "Ihre Kollegen sind freundlich. Ein Kollege zeigt ihr die Küche und erklärt ihr das Computersystem. Mittags essen sie zusammen in einem kleinen Restaurant.",
 "Am Abend ruft Lena ihre Mutter an. „Und, wie war es?“, fragt die Mutter. „Anstrengend, aber super“, sagt Lena. „Ich glaube, ich bleibe hier lange.“"],
 tr:[
 "Lena má novú prácu v Grazi. Prvý deň je veľmi nervózna. Vstane skoro, rýchlo vypije kávu a ide autobusom do kancelárie.",
 "Kolegovia sú priateľskí. Jeden kolega jej ukáže kuchynku a vysvetlí jej počítačový systém. Na obed jedia spolu v malej reštaurácii.",
 "Večer Lena zavolá mame. „Tak čo, aké to bolo?“ pýta sa mama. „Náročné, ale super,“ hovorí Lena. „Myslím, že tu zostanem dlho.“"],
 glossary:[{w:'nervös',sk:'nervózna'},{w:'steht früh auf',sk:'vstane skoro'},{w:'Kollegen',sk:'kolegovia'},{w:'erklärt',sk:'vysvetlí'},{w:'Mittags',sk:'na obed'},{w:'zusammen',sk:'spolu'},{w:'Anstrengend',sk:'náročné, namáhavé'},{w:'bleibe',sk:'zostanem'}],
 questions:[{q:'Wie fühlt sich Lena am ersten Tag?',options:['Müde','Nervös','Wütend','Traurig'],answer:1},
  {q:'Wo essen die Kollegen mittags?',options:['Im Büro','Zu Hause','In einem kleinen Restaurant','Im Park'],answer:2},
  {q:'Wen ruft Lena am Abend an?',options:['Ihre Mutter','Ihren Chef','Ihren Bruder','Eine Kollegin'],answer:0}]},
{title:'Das Handy im Zug', level:'B1', paragraphs:[
 "Als Peter in Wien aus dem Zug stieg, merkte er, dass sein Handy fehlte. Er hatte es auf dem Sitz liegen lassen. Der Zug fuhr gerade weiter nach Salzburg.",
 "Zum Glück gab es am Bahnhof einen Informationsschalter. Die Mitarbeiterin war sehr hilfsbereit und rief sofort den Zugbegleiter an. Er fand das Handy und versprach, es in Salzburg abzugeben.",
 "Zwei Tage später kam ein Paket mit dem Handy. Darin lag auch ein Zettel: „Viele Grüße aus Salzburg! Passen Sie nächstes Mal besser auf.“ Peter musste lachen."],
 tr:[
 "Keď Peter vo Viedni vystúpil z vlaku, všimol si, že mu chýba mobil. Nechal ho ležať na sedadle. Vlak práve pokračoval ďalej do Salzburgu.",
 "Našťastie bolo na stanici informačné okienko. Pracovníčka bola veľmi ochotná a hneď zavolala sprievodcovi. Ten mobil našiel a sľúbil, že ho v Salzburgu odovzdá.",
 "O dva dni neskôr prišiel balík s mobilom. Bol v ňom aj lístok: „Pozdravujeme zo Salzburgu! Nabudúce si dávajte lepší pozor.“ Peter sa musel zasmiať."],
 glossary:[{w:'aus dem Zug stieg',sk:'vystúpil z vlaku'},{w:'merkte',sk:'všimol si'},{w:'fehlte',sk:'chýbal'},{w:'liegen lassen',sk:'nechať ležať'},{w:'Zum Glück',sk:'našťastie'},{w:'hilfsbereit',sk:'ochotná'},{w:'versprach',sk:'sľúbil'},{w:'Zettel',sk:'lístok, papierik'}],
 questions:[{q:'Wo hat Peter sein Handy vergessen?',options:['Im Café','Auf dem Sitz im Zug','Am Informationsschalter','Im Hotel'],answer:1},
  {q:'Wer hat das Handy gefunden?',options:['Der Zugbegleiter','Ein Kind','Die Polizei','Peters Freund'],answer:0},
  {q:'Was lag im Paket neben dem Handy?',options:['Geld','Ein Zettel','Ein Foto','Ein Ticket'],answer:1}]}
]
});

/* ───────── Francúzština ───────── */
add('fr', {
storyLevel:'A2',
units: [
{id:'maison', title:'Bývanie', desc:'Byt, izby a veci doma.', items:`
l'appartement | byt | Mon appartement est au troisième étage. | Môj byt je na treťom poschodí.
la chambre | izba, spálňa | Ma chambre est petite mais jolie. | Moja izba je malá, ale pekná.
la cuisine | kuchyňa | On mange dans la cuisine. | Jeme v kuchyni.
la salle de bain | kúpeľňa | La salle de bain est à gauche. | Kúpeľňa je vľavo.
le lit | posteľ | Le lit est très confortable. | Posteľ je veľmi pohodlná.
la porte | dvere | Ferme la porte, s'il te plaît. | Zatvor dvere, prosím.
la clé | kľúč | J'ai perdu ma clé. | Stratil som kľúč.
le voisin | sused | Mon voisin est très sympa. | Môj sused je veľmi fajn.
habiter | bývať | J'habite à Bratislava. | Bývam v Bratislave.
ranger | upratať | Je dois ranger ma chambre. | Musím si upratať izbu.
`},
{id:'travail', title:'Práca a štúdium', desc:'Kancelária, škola a kolegovia.', items:`
le travail | práca | Je cherche du travail. | Hľadám prácu.
travailler | pracovať | Je travaille dans une banque. | Pracujem v banke.
le bureau | kancelária | Je suis au bureau jusqu'à six heures. | Som v kancelárii do šiestej.
le collègue | kolega | Mon collègue parle trois langues. | Môj kolega hovorí tromi jazykmi.
le patron | šéf | Le patron est en réunion. | Šéf je na porade.
la réunion | porada | La réunion commence à dix heures. | Porada začína o desiatej.
l'école | škola | Les enfants sont à l'école. | Deti sú v škole.
apprendre | učiť sa | J'apprends le français. | Učím sa po francúzsky.
le stage | stáž | Je fais un stage à Paris. | Robím stáž v Paríži.
les vacances | prázdniny, dovolenka | Bonnes vacances ! | Peknú dovolenku!
`},
{id:'loisirs', title:'Voľný čas', desc:'Koníčky, šport a stretnutia.', items:`
le sport | šport | Je fais du sport le week-end. | Cez víkend športujem.
jouer | hrať (sa) | On joue au foot ce soir ? | Zahráme si dnes večer futbal?
nager | plávať | J'aime nager dans la mer. | Rád plávam v mori.
lire | čítať | J'aime lire le soir. | Rád čítam večer.
la musique | hudba | Tu écoutes quelle musique ? | Akú hudbu počúvaš?
le cinéma | kino | On va au cinéma ce soir ? | Pôjdeme dnes večer do kina?
voyager | cestovať | J'adore voyager. | Zbožňujem cestovanie.
sortir | ísť von | On sort ce soir ? | Pôjdeme dnes večer von?
avoir envie de | mať chuť na | J'ai envie d'une glace. | Mám chuť na zmrzlinu.
le temps libre | voľný čas | Qu'est-ce que tu fais pendant ton temps libre ? | Čo robíš vo voľnom čase?
`},
{id:'achats', title:'Nakupovanie', desc:'V obchode, na trhu a pri pokladni.', items:`
le magasin | obchod | Le magasin ferme à vingt heures. | Obchod zatvára o ôsmej večer.
acheter | kúpiť | Je veux acheter un cadeau. | Chcem kúpiť darček.
le prix | cena | Le prix est raisonnable. | Cena je primeraná.
Combien ça coûte ? | Koľko to stojí? | Pardon, combien ça coûte ? | Prepáčte, koľko to stojí?
la taille | veľkosť | Vous avez une taille plus grande ? | Máte väčšiu veľkosť?
essayer | vyskúšať | Je peux essayer cette veste ? | Môžem si vyskúšať túto bundu?
payer | platiť | Je vais payer par carte. | Zaplatím kartou.
la caisse | pokladňa | La caisse est là-bas. | Pokladňa je tamto.
pas cher | lacný, nie drahý | Ce restaurant n'est pas cher. | Táto reštaurácia nie je drahá.
le sac | taška | Vous voulez un sac ? | Chcete tašku?
`},
{id:'sante', title:'Zdravie', desc:'U lekára a v lekárni.', items:`
le médecin | lekár | Je dois aller chez le médecin. | Musím ísť k lekárovi.
malade | chorý | Je suis malade depuis lundi. | Som chorý od pondelka.
J'ai mal à la tête. | Bolí ma hlava. | J'ai mal à la tête et j'ai de la fièvre. | Bolí ma hlava a mám horúčku.
la fièvre | horúčka | Tu as de la fièvre ? | Máš horúčku?
la pharmacie | lekáreň | La pharmacie est ouverte jusqu'à vingt heures. | Lekáreň je otvorená do ôsmej večer.
le médicament | liek | Prenez ce médicament trois fois par jour. | Užívajte tento liek trikrát denne.
se reposer | oddýchnuť si | Tu dois te reposer. | Musíš si oddýchnuť.
Ça va mieux. | Už je mi lepšie. | Merci, ça va mieux aujourd'hui. | Ďakujem, dnes je mi už lepšie.
Bon rétablissement ! | Skoré uzdravenie! | Tu es malade ? Bon rétablissement ! | Si chorý? Skoré uzdravenie!
l'hôpital | nemocnica | Il est à l'hôpital. | Je v nemocnici.
`},
{id:'expressions', title:'Frázy do rozhovoru', desc:'Hotové spojenia, vďaka ktorým znieš prirodzene.', items:`
Bien sûr ! | Samozrejme! | Tu viens ? – Bien sûr ! | Prídeš? – Samozrejme!
D'accord. | Dobre. / Súhlasím. | D'accord, à demain ! | Dobre, do zajtra!
Pas de problème ! | Žiadny problém! | Merci ! – Pas de problème ! | Ďakujem! – Žiadny problém!
Je ne sais pas. | Neviem. | Désolé, je ne sais pas. | Prepáč, neviem.
C'est génial ! | To je super! | On va à la plage ? C'est génial ! | Ideme na pláž? To je super!
Dommage ! | Škoda! | Tu ne peux pas venir ? Dommage ! | Nemôžeš prísť? Škoda!
Ce n'est pas grave. | To nevadí. | Tu es en retard ? Ce n'est pas grave. | Meškáš? To nevadí.
Ça dépend. | Záleží na tom. | Ça dépend du prix. | Záleží na cene.
À mon avis | podľa mňa | À mon avis, c'est trop cher. | Podľa mňa je to príliš drahé.
Bonne journée ! | Pekný deň! | Merci, bonne journée ! | Ďakujem, pekný deň!
`}
],
sentences: [
["Je {suis} allé au marché hier.","Včera som išiel na trh.","aller → passé composé s être."],
["Tu {as} vu ce film ?","Videl si ten film?",""],
["Nous {avons} mangé au restaurant.","Jedli sme v reštaurácii.",""],
["Je {vais} partir en vacances.","Pôjdem na dovolenku.",""],
["Il {pleut} depuis ce matin.","Prší od rána.",""],
["Je voudrais {réserver} une table pour deux.","Chcel by som rezervovať stôl pre dvoch.",""],
["Tu {peux} répéter, s'il te plaît ?","Môžeš to zopakovať, prosím?",""],
["Je n'ai {pas} faim.","Nie som hladný.",""],
["Elle est {plus} grande que moi.","Je vyššia ako ja.",""],
["On se {voit} à quelle heure ?","O koľkej sa stretneme?",""],
["J'{adore} cette ville.","Toto mesto zbožňujem.",""],
["Je {cherche} la gare.","Hľadám stanicu.",""],
["Il {fait} froid aujourd'hui.","Dnes je zima.",""],
["Qu'est-ce que tu {fais} ce soir ?","Čo robíš dnes večer?",""]
],
gender: {le:"chien=pes|chat=mačka|vélo=bicykel|marché=trh|café=káva|ciel=obloha", la:"tête=hlava|porte=dvere|chambre=izba|cuisine=kuchyňa|rue=ulica|semaine=týždeň"},
stories: [
{title:'Le week-end de Marc', level:'A1', paragraphs:[
 "Le samedi, Marc se lève tard. Il prend un petit-déjeuner avec du pain, du beurre et un grand café.",
 "L'après-midi, il fait du vélo avec son amie Sophie. Ils vont jusqu'au lac. Il fait beau et ils mangent une glace.",
 "Le soir, ils vont au cinéma. Le film est un peu triste, mais Marc aime beaucoup la musique. Quel bon week-end !"],
 tr:[
 "V sobotu Marc vstáva neskoro. Na raňajky si dá chlieb s maslom a veľkú kávu.",
 "Poobede sa ide bicyklovať s kamarátkou Sophie. Idú až k jazeru. Je pekne a dajú si zmrzlinu.",
 "Večer idú do kina. Film je trochu smutný, ale Marcovi sa veľmi páči hudba. Aký dobrý víkend!"],
 glossary:[{w:'se lève tard',sk:'vstáva neskoro'},{w:'petit-déjeuner',sk:'raňajky'},{w:'beurre',sk:'maslo'},{w:'fait du vélo',sk:'bicykluje'},{w:"jusqu'au lac",sk:'až k jazeru'},{w:'une glace',sk:'zmrzlina'},{w:'triste',sk:'smutný'}],
 questions:[{q:'Quand est-ce que Marc se lève le samedi ?',options:['Tôt','Tard','À six heures','Il ne se lève pas'],answer:1},
  {q:'Avec qui fait-il du vélo ?',options:['Avec son frère','Avec Sophie','Seul','Avec sa mère'],answer:1},
  {q:'Comment est le film ?',options:['Drôle','Un peu triste','Très long','Ennuyeux'],answer:1}]},
{title:'Perdue à Lyon', level:'A2', paragraphs:[
 "Anna visite Lyon pour la première fois. Elle cherche son hôtel, mais son téléphone n'a plus de batterie.",
 "Elle demande à une dame dans la rue : « Pardon, où est la place Bellecour ? » La dame sourit et répond : « C'est tout près. Allez tout droit, puis tournez à gauche. »",
 "Cinq minutes plus tard, Anna trouve son hôtel. Elle pense : « Les gens ici sont vraiment gentils ! »"],
 tr:[
 "Anna navštívi Lyon prvýkrát. Hľadá svoj hotel, ale mobil má vybitý.",
 "Opýta sa jednej pani na ulici: „Prepáčte, kde je námestie Bellecour?“ Pani sa usmeje a odpovie: „Je to celkom blízko. Choďte rovno a potom odbočte doľava.“",
 "O päť minút neskôr Anna nájde svoj hotel. Pomyslí si: „Ľudia sú tu naozaj milí!“"],
 glossary:[{w:'pour la première fois',sk:'prvýkrát'},{w:'cherche',sk:'hľadá'},{w:"n'a plus de batterie",sk:'je vybitý'},{w:'demande',sk:'pýta sa'},{w:'tout près',sk:'celkom blízko'},{w:'tournez à gauche',sk:'odbočte doľava'},{w:'vraiment gentils',sk:'naozaj milí'}],
 questions:[{q:'Pourquoi Anna ne peut pas utiliser son téléphone ?',options:['Il est cassé',"Il n'a plus de batterie","Elle l'a perdu","Il n'y a pas de réseau"],answer:1},
  {q:'Qui aide Anna ?',options:['Un policier','Une dame dans la rue','Un serveur','Son ami'],answer:1},
  {q:'Que pense Anna des gens de Lyon ?',options:['Ils sont gentils','Ils sont pressés','Ils sont froids','Elle ne sait pas'],answer:0}]}
]
});

/* ───────── Španielčina ───────── */
add('es', {
storyLevel:'A2',
units: [
{id:'casa', title:'Bývanie', desc:'Byt, izby a veci doma.', items:`
el piso | byt (v Španielsku) | Mi piso tiene dos habitaciones. | Môj byt má dve izby.
la habitación | izba | Mi habitación es muy luminosa. | Moja izba je veľmi svetlá.
la cocina | kuchyňa | Comemos en la cocina. | Jeme v kuchyni.
la cama | posteľ | La cama es muy cómoda. | Posteľ je veľmi pohodlná.
la puerta | dvere | Cierra la puerta, por favor. | Zatvor dvere, prosím.
la llave | kľúč | No encuentro mi llave. | Neviem nájsť kľúč.
el vecino | sused | Mi vecino es muy simpático. | Môj sused je veľmi milý.
limpiar | upratať, čistiť | Hoy tengo que limpiar la casa. | Dnes musím upratať dom.
alquilar | prenajať | Queremos alquilar un piso en Valencia. | Chceme si prenajať byt vo Valencii.
la casa | dom | Mi casa está cerca del mar. | Môj dom je blízko mora.
`},
{id:'trabajo', title:'Práca a štúdium', desc:'Kancelária, škola a kolegovia.', items:`
el trabajo | práca | Me gusta mucho mi trabajo. | Moja práca ma veľmi baví.
trabajar | pracovať | Trabajo en una empresa alemana. | Pracujem v nemeckej firme.
la oficina | kancelária | Estoy en la oficina hasta las seis. | Som v kancelárii do šiestej.
el compañero | kolega, spolužiak | Mi compañero es de Sevilla. | Môj kolega je zo Sevilly.
el jefe | šéf | El jefe está en una reunión. | Šéf je na porade.
la reunión | porada | La reunión empieza a las diez. | Porada začína o desiatej.
estudiar | študovať, učiť sa | Estudio español por la noche. | Večer sa učím po španielsky.
la escuela | škola | Los niños están en la escuela. | Deti sú v škole.
ganar | zarábať, vyhrať | Gana mucho dinero. | Zarába veľa peňazí.
las vacaciones | dovolenka, prázdniny | ¡Felices vacaciones! | Peknú dovolenku!
`},
{id:'ocio', title:'Voľný čas', desc:'Koníčky, šport a stretnutia.', items:`
el deporte | šport | Hago deporte tres veces por semana. | Športujem trikrát týždenne.
jugar | hrať (sa) | ¿Jugamos al fútbol? | Zahráme si futbal?
nadar | plávať | Me encanta nadar en el mar. | Zbožňujem plávať v mori.
leer | čítať | Me gusta leer antes de dormir. | Rád čítam pred spaním.
la música | hudba | ¿Qué música te gusta? | Aká hudba sa ti páči?
el cine | kino | ¿Vamos al cine esta noche? | Pôjdeme dnes večer do kina?
viajar | cestovať | Me encanta viajar. | Zbožňujem cestovanie.
salir | ísť von | ¿Salimos esta noche? | Pôjdeme dnes večer von?
tener ganas de | mať chuť | Tengo ganas de bailar. | Mám chuť tancovať.
el tiempo libre | voľný čas | ¿Qué haces en tu tiempo libre? | Čo robíš vo voľnom čase?
`},
{id:'compras', title:'Nakupovanie', desc:'V obchode, na trhu a pri pokladni.', items:`
la tienda | obchod | La tienda cierra a las nueve. | Obchod zatvára o deviatej.
comprar | kúpiť | Quiero comprar un regalo. | Chcem kúpiť darček.
el precio | cena | El precio es muy bueno. | Cena je veľmi dobrá.
¿Cuánto es? | Koľko to bude? | Perdone, ¿cuánto es? | Prepáčte, koľko to bude?
la talla | veľkosť | ¿Tiene una talla más grande? | Máte väčšiu veľkosť?
probarse | vyskúšať si | ¿Puedo probarme esta chaqueta? | Môžem si vyskúšať túto bundu?
pagar | platiť | Pago con tarjeta. | Platím kartou.
la caja | pokladňa | La caja está allí. | Pokladňa je tam.
el dinero | peniaze | No tengo dinero en efectivo. | Nemám pri sebe hotovosť.
la bolsa | taška | ¿Quiere una bolsa? | Chcete tašku?
`},
{id:'salud', title:'Zdravie', desc:'U lekára a v lekárni.', items:`
el médico | lekár | Tengo que ir al médico. | Musím ísť k lekárovi.
enfermo | chorý | Estoy enfermo desde el lunes. | Som chorý od pondelka.
Me duele la cabeza. | Bolí ma hlava. | Me duele la cabeza y tengo fiebre. | Bolí ma hlava a mám horúčku.
la fiebre | horúčka | ¿Tienes fiebre? | Máš horúčku?
la farmacia | lekáreň | La farmacia está abierta hasta las diez. | Lekáreň je otvorená do desiatej.
el medicamento | liek | Toma este medicamento tres veces al día. | Užívaj tento liek trikrát denne.
descansar | oddychovať | Tienes que descansar. | Musíš oddychovať.
Estoy mejor. | Už mi je lepšie. | Gracias, hoy estoy mejor. | Ďakujem, dnes mi je už lepšie.
¡Que te mejores! | Skoré uzdravenie! | ¿Estás enfermo? ¡Que te mejores! | Si chorý? Skoré uzdravenie!
el hospital | nemocnica | Está en el hospital. | Je v nemocnici.
`},
{id:'expresiones', title:'Frázy do rozhovoru', desc:'Hotové spojenia, vďaka ktorým znieš prirodzene.', items:`
¡Claro! | Jasné! / Samozrejme! | ¿Vienes? – ¡Claro! | Prídeš? – Jasné!
Vale. | Dobre. / Okej. | Vale, nos vemos mañana. | Dobre, uvidíme sa zajtra.
No pasa nada. | To nevadí. | ¿Llegas tarde? No pasa nada. | Meškáš? To nevadí.
No sé. | Neviem. | Lo siento, no sé. | Prepáč, neviem.
¡Qué guay! | To je super! (hovorovo) | ¿Vamos a la playa? ¡Qué guay! | Ideme na pláž? To je super!
¡Qué pena! | Škoda! | ¿No puedes venir? ¡Qué pena! | Nemôžeš prísť? Škoda!
Depende. | Záleží na tom. | Depende del precio. | Záleží na cene.
Creo que sí. | Myslím, že áno. | ¿Viene Ana? – Creo que sí. | Príde Ana? – Myslím, že áno.
En mi opinión | podľa mňa | En mi opinión, es demasiado caro. | Podľa mňa je to príliš drahé.
¡Que tengas un buen día! | Prajem pekný deň! | Gracias, ¡que tengas un buen día! | Ďakujem, prajem pekný deň!
`}
],
sentences: [
["Ayer {fui} a la playa.","Včera som išiel na pláž.","ir → fui (minulý čas)."],
["¿{Has} visto esta película?","Videl si tento film?",""],
["Hemos {comido} en un restaurante.","Jedli sme v reštaurácii.",""],
["{Está} lloviendo desde esta mañana.","Prší od rána.",""],
["Quiero {reservar} una mesa para dos.","Chcem rezervovať stôl pre dvoch.",""],
["¿Puedes {repetirlo}, por favor?","Môžeš to zopakovať, prosím?",""],
["No {tengo} hambre.","Nie som hladný.",""],
["Mi hermana es {mayor} que yo.","Moja sestra je staršia ako ja.",""],
["¿A qué hora {quedamos}?","O koľkej sa stretneme?","quedar = dohodnúť sa na stretnutí."],
["Me {encanta} esta ciudad.","Toto mesto zbožňujem.",""],
["{Busco} la estación de tren.","Hľadám železničnú stanicu.",""],
["Hoy hace mucho {frío}.","Dnes je veľká zima.",""],
["¿Qué {haces} esta noche?","Čo robíš dnes večer?",""],
["{Hay} un supermercado cerca de aquí.","Neďaleko je supermarket.","hay = je, sú (existuje)."]
],
gender: {el:"gato=mačka|vaso=pohár|dinero=peniaze|zapato=topánka|museo=múzeum|planeta=planéta", la:"cama=posteľ|puerta=dvere|cabeza=hlava|semana=týždeň|canción=pieseň|mujer=žena"},
stories: [
{title:'Un sábado en Madrid', level:'A2', paragraphs:[
 "Lucía vive en Madrid y trabaja en una librería. Cada mañana va al trabajo en metro y lee un libro durante el viaje.",
 "Hoy es sábado y no trabaja. Por la mañana pasea por el parque del Retiro con su perro. Después toma un café con su amiga Carmen.",
 "Por la noche, las dos amigas van a un concierto de flamenco. La música es fantástica y bailan hasta muy tarde."],
 tr:[
 "Lucía býva v Madride a pracuje v kníhkupectve. Každé ráno ide do práce metrom a počas cesty číta knihu.",
 "Dnes je sobota a nepracuje. Ráno sa prechádza so psom v parku Retiro. Potom si dá kávu s kamarátkou Carmen.",
 "Večer idú obe kamarátky na flamencový koncert. Hudba je fantastická a tancujú až do neskorej noci."],
 glossary:[{w:'librería',sk:'kníhkupectvo'},{w:'Cada mañana',sk:'každé ráno'},{w:'durante el viaje',sk:'počas cesty'},{w:'pasea',sk:'prechádza sa'},{w:'perro',sk:'pes'},{w:'Después',sk:'potom'},{w:'bailan',sk:'tancujú'},{w:'hasta muy tarde',sk:'až do neskorej noci'}],
 questions:[{q:'¿Dónde trabaja Lucía?',options:['En un hospital','En una librería','En un banco','En un restaurante'],answer:1},
  {q:'¿Con quién pasea por el parque?',options:['Con su perro','Con su madre','Con Carmen','Sola'],answer:0},
  {q:'¿Qué hacen por la noche?',options:['Van al cine','Van a un concierto','Cocinan en casa','Duermen'],answer:1}]},
{title:'La paella de la abuela', level:'A2', paragraphs:[
 "Todos los domingos, la familia de Diego come en casa de la abuela. La abuela siempre prepara una paella enorme.",
 "Este domingo Diego quiere aprender la receta. La abuela le enseña todo: el arroz, el azafrán, las verduras y el pollo. «El secreto es la paciencia», dice.",
 "Una semana después, Diego cocina la paella para sus amigos. No es tan buena como la de la abuela, pero todos comen dos platos."],
 tr:[
 "Každú nedeľu obeduje Diegova rodina u babky. Babka vždy pripraví obrovskú paellu.",
 "Túto nedeľu sa chce Diego naučiť recept. Babka mu ukáže všetko: ryžu, šafran, zeleninu a kuracie mäso. „Tajomstvom je trpezlivosť,“ hovorí.",
 "O týždeň neskôr Diego uvarí paellu pre kamarátov. Nie je taká dobrá ako babkina, ale všetci zjedia dva taniere."],
 glossary:[{w:'Todos los domingos',sk:'každú nedeľu'},{w:'enorme',sk:'obrovská'},{w:'receta',sk:'recept'},{w:'enseña',sk:'ukáže, naučí'},{w:'arroz',sk:'ryža'},{w:'paciencia',sk:'trpezlivosť'},{w:'cocina',sk:'varí'},{w:'platos',sk:'taniere'}],
 questions:[{q:'¿Dónde come la familia los domingos?',options:['En un restaurante','En casa de la abuela','En la playa','En casa de Diego'],answer:1},
  {q:'¿Cuál es el secreto de la abuela?',options:['El azafrán','La paciencia','El pollo','El vino'],answer:1},
  {q:'¿Qué pasa con la paella de Diego?',options:['Nadie la come','Todos comen dos platos','Se quema','La abuela la cocina'],answer:1}]}
]
});

/* ───────── Portugalčina (Brazília) ───────── */
add('pt', {
storyLevel:'A2',
units: [
{id:'casa', title:'Bývanie', desc:'Byt, izby a veci doma.', items:`
o apartamento | byt | Meu apartamento fica no centro. | Môj byt je v centre.
o quarto | izba, spálňa | Meu quarto é pequeno. | Moja izba je malá.
a cozinha | kuchyňa | Comemos na cozinha. | Jeme v kuchyni.
o banheiro | kúpeľňa, toaleta | O banheiro fica no corredor. | Kúpeľňa je na chodbe.
a cama | posteľ | A cama é muito confortável. | Posteľ je veľmi pohodlná.
a porta | dvere | Fecha a porta, por favor. | Zatvor dvere, prosím.
a chave | kľúč | Perdi a chave de casa. | Stratil som kľúč od domu.
o vizinho | sused | Meu vizinho é muito simpático. | Môj sused je veľmi milý.
limpar | upratať, čistiť | Hoje preciso limpar a casa. | Dnes musím upratať dom.
alugar | prenajať | Queremos alugar um apartamento. | Chceme si prenajať byt.
`},
{id:'trabalho', title:'Práca a štúdium', desc:'Kancelária, škola a kolegovia.', items:`
o trabalho | práca | Gosto muito do meu trabalho. | Moja práca ma veľmi baví.
trabalhar | pracovať | Trabalho numa empresa grande. | Pracujem vo veľkej firme.
o escritório | kancelária | Estou no escritório até as seis. | Som v kancelárii do šiestej.
o colega | kolega | Meu colega é de Lisboa. | Môj kolega je z Lisabonu.
o chefe | šéf | O chefe está numa reunião. | Šéf je na porade.
a reunião | porada | A reunião começa às dez. | Porada začína o desiatej.
estudar | študovať, učiť sa | Estudo português à noite. | Večer sa učím po portugalsky.
a escola | škola | As crianças estão na escola. | Deti sú v škole.
ganhar | zarábať, vyhrať | Ele ganha bem. | Dobre zarába.
as férias | dovolenka, prázdniny | Boas férias! | Peknú dovolenku!
`},
{id:'lazer', title:'Voľný čas', desc:'Koníčky, šport a stretnutia.', items:`
o esporte | šport | Faço esporte três vezes por semana. | Športujem trikrát týždenne.
jogar | hrať | Vamos jogar futebol? | Zahráme si futbal?
nadar | plávať | Adoro nadar no mar. | Zbožňujem plávať v mori.
ler | čítať | Gosto de ler antes de dormir. | Rád čítam pred spaním.
a música | hudba | Que tipo de música você gosta? | Akú hudbu máš rád?
o cinema | kino | Vamos ao cinema hoje? | Pôjdeme dnes do kina?
viajar | cestovať | Adoro viajar. | Zbožňujem cestovanie.
sair | ísť von | Vamos sair hoje à noite? | Pôjdeme dnes večer von?
estar com vontade de | mať chuť | Estou com vontade de dançar. | Mám chuť tancovať.
o tempo livre | voľný čas | O que você faz no tempo livre? | Čo robíš vo voľnom čase?
`},
{id:'compras', title:'Nakupovanie', desc:'V obchode, na trhu a pri pokladni.', items:`
a loja | obchod | A loja fecha às nove. | Obchod zatvára o deviatej.
comprar | kúpiť | Quero comprar um presente. | Chcem kúpiť darček.
o preço | cena | O preço está ótimo. | Cena je výborná.
Quanto é? | Koľko to bude? | Com licença, quanto é? | Prepáčte, koľko to bude?
o tamanho | veľkosť | Tem um tamanho maior? | Máte väčšiu veľkosť?
experimentar | vyskúšať | Posso experimentar esta camisa? | Môžem si vyskúšať túto košeľu?
pagar | platiť | Vou pagar com cartão. | Zaplatím kartou.
o caixa | pokladňa | O caixa fica ali. | Pokladňa je tam.
o dinheiro | peniaze | Não tenho dinheiro trocado. | Nemám drobné.
a sacola | taška | Quer uma sacola? | Chcete tašku?
`},
{id:'saude', title:'Zdravie', desc:'U lekára a v lekárni.', items:`
o médico | lekár | Preciso ir ao médico. | Musím ísť k lekárovi.
doente | chorý | Estou doente desde segunda. | Som chorý od pondelka.
Estou com dor de cabeça. | Bolí ma hlava. | Estou com dor de cabeça e febre. | Bolí ma hlava a mám horúčku.
a febre | horúčka | Você está com febre? | Máš horúčku?
a farmácia | lekáreň | A farmácia fica aberta até as dez. | Lekáreň je otvorená do desiatej.
o remédio | liek | Tome este remédio três vezes por dia. | Užívajte tento liek trikrát denne.
descansar | oddychovať | Você precisa descansar. | Musíš oddychovať.
Estou melhor. | Už mi je lepšie. | Obrigado, hoje estou melhor. | Ďakujem, dnes mi je lepšie.
Melhoras! | Skoré uzdravenie! | Você está doente? Melhoras! | Si chorý? Skoré uzdravenie!
o hospital | nemocnica | Ele está no hospital. | Je v nemocnici.
`},
{id:'expressoes', title:'Frázy do rozhovoru', desc:'Hotové spojenia, vďaka ktorým znieš prirodzene.', items:`
Claro! | Jasné! | Você vem? – Claro! | Prídeš? – Jasné!
Beleza! | V pohode! / Super! | Beleza, a gente se vê amanhã! | V pohode, uvidíme sa zajtra!
Não tem problema. | To nevadí. / Žiadny problém. | Chegou atrasado? Não tem problema. | Prišiel si neskoro? To nevadí.
Não sei. | Neviem. | Desculpa, não sei. | Prepáč, neviem.
Que legal! | To je super! | Vamos à praia? Que legal! | Ideme na pláž? To je super!
Que pena! | Škoda! | Você não pode vir? Que pena! | Nemôžeš prísť? Škoda!
Depende. | Záleží na tom. | Depende do preço. | Záleží na cene.
Acho que sim. | Myslím, že áno. | A Ana vem? – Acho que sim. | Príde Ana? – Myslím, že áno.
Na minha opinião | podľa mňa | Na minha opinião, é caro demais. | Podľa mňa je to príliš drahé.
Fica à vontade! | Cíť sa ako doma! | Entra, fica à vontade! | Poď ďalej, cíť sa ako doma!
`}
],
sentences: [
["Ontem eu {fui} ao cinema.","Včera som bol v kine.",""],
["Você já {viu} esse filme?","Už si videl ten film?",""],
["Nós {comemos} num restaurante.","Jedli sme v reštaurácii.",""],
["{Choveu} muito ontem.","Včera veľmi pršalo.",""],
["Quero {reservar} uma mesa para dois.","Chcem rezervovať stôl pre dvoch.",""],
["Você {pode} repetir, por favor?","Môžeš to zopakovať, prosím?",""],
["Não {estou} com fome.","Nie som hladný.",""],
["Minha irmã é {mais} velha que eu.","Moja sestra je staršia ako ja.",""],
["Que horas a gente se {encontra}?","O koľkej sa stretneme?",""],
["Eu {adoro} essa cidade.","Zbožňujem toto mesto.",""],
["Estou {procurando} a estação.","Hľadám stanicu.",""],
["Está {frio} hoje.","Dnes je zima.",""],
["O que você vai {fazer} hoje à noite?","Čo budeš robiť dnes večer?",""],
["{Tem} um mercado perto daqui.","Neďaleko je obchod.","tem = je, existuje (hovorovo)."]
],
gender: {o:"gato=mačka|copo=pohár|dinheiro=peniaze|sapato=topánka|museu=múzeum|planeta=planéta", a:"cama=posteľ|porta=dvere|cabeça=hlava|semana=týždeň|música=hudba|mulher=žena"},
stories: [
{title:'Um dia no Rio', level:'A2', paragraphs:[
 "Pedro mora no Rio de Janeiro e trabalha num hotel em Copacabana. Todo dia ele vai ao trabalho de bicicleta pela praia.",
 "No sábado ele não trabalha. De manhã, ele sobe o Pão de Açúcar com a namorada, Júlia. A vista é incrível!",
 "À noite, eles comem num restaurante perto da praia e depois escutam samba ao vivo. Pedro adora o Rio."],
 tr:[
 "Pedro býva v Riu de Janeiro a pracuje v hoteli na Copacabane. Každý deň ide do práce na bicykli popri pláži.",
 "V sobotu nepracuje. Ráno vyjde so svojou priateľkou Júliou na Cukrovú homoľu. Výhľad je neuveriteľný!",
 "Večer jedia v reštaurácii pri pláži a potom počúvajú živú sambu. Pedro Rio zbožňuje."],
 glossary:[{w:'Todo dia',sk:'každý deň'},{w:'de bicicleta',sk:'na bicykli'},{w:'sobe',sk:'vyjde hore'},{w:'namorada',sk:'priateľka (partnerka)'},{w:'vista',sk:'výhľad'},{w:'incrível',sk:'neuveriteľný'},{w:'escutam',sk:'počúvajú'},{w:'ao vivo',sk:'naživo'}],
 questions:[{q:'Onde Pedro trabalha?',options:['Num banco','Num hotel','Numa escola','Numa loja'],answer:1},
  {q:'Com quem ele sobe o Pão de Açúcar?',options:['Com a mãe','Com Júlia','Sozinho','Com um colega'],answer:1},
  {q:'O que eles fazem à noite?',options:['Vão ao cinema','Comem e escutam samba','Dormem cedo','Trabalham'],answer:1}]},
{title:'A feira de domingo', level:'A2', paragraphs:[
 "Todo domingo, dona Maria vai à feira do bairro. Ela compra frutas, legumes e flores para a casa.",
 "Hoje o vendedor de frutas tem uma novidade: um abacaxi enorme e muito doce. Ele dá um pedaço para dona Maria provar.",
 "Ela gosta tanto que compra dois. Em casa, ela faz um suco de abacaxi para os netos. Eles pedem mais um copo!"],
 tr:[
 "Každú nedeľu chodí pani Maria na trh vo svojej štvrti. Kupuje ovocie, zeleninu a kvety do domu.",
 "Dnes má predavač ovocia novinku: obrovský a veľmi sladký ananás. Dá pani Marii kúsok na ochutnanie.",
 "Tak veľmi jej chutí, že kúpi dva. Doma urobí vnúčatám ananásový džús. Pýtajú si ešte jeden pohár!"],
 glossary:[{w:'feira',sk:'trh'},{w:'bairro',sk:'štvrť'},{w:'legumes',sk:'zelenina'},{w:'novidade',sk:'novinka'},{w:'abacaxi',sk:'ananás'},{w:'pedaço',sk:'kúsok'},{w:'provar',sk:'ochutnať'},{w:'netos',sk:'vnúčatá'}],
 questions:[{q:'Quando dona Maria vai à feira?',options:['Todo sábado','Todo domingo','Toda segunda','Todo dia'],answer:1},
  {q:'Qual é a novidade do vendedor?',options:['Um abacaxi enorme','Flores novas','Peixe fresco','Um bolo'],answer:0},
  {q:'O que ela faz com o abacaxi?',options:['Um bolo','Um suco','Uma salada','Nada'],answer:1}]}
]
});

/* ───────── Ruština ───────── */
add('ru', {
storyLevel:'A2',
units: [
{id:'dom', title:'Bývanie', desc:'Byt, izby a veci doma.', items:`
квартира | byt | Квартира на третьем этаже. | Byt je na treťom poschodí.
комната | izba | Это моя комната. | To je moja izba.
кухня | kuchyňa | Мы ужинаем на кухне. | Večeriame v kuchyni.
ванная | kúpeľňa | Ванная справа. | Kúpeľňa je vpravo.
кровать | posteľ | Кровать очень удобная. | Posteľ je veľmi pohodlná.
дверь | dvere | Закрой дверь, пожалуйста. | Zatvor dvere, prosím.
ключ | kľúč | Я потерял ключ. | Stratil som kľúč.
сосед | sused | Мой сосед очень добрый. | Môj sused je veľmi dobrý.
убирать | upratovať | Сегодня я буду убирать квартиру. | Dnes budem upratovať byt.
снимать квартиру | prenajímať si byt | Мы снимаем квартиру в центре. | Prenajímame si byt v centre.
`},
{id:'rabota', title:'Práca a štúdium', desc:'Kancelária, škola a kolegovia.', items:`
работа | práca | Мне нравится моя работа. | Moja práca sa mi páči.
работать | pracovať | Я буду работать дома. | Budem pracovať z domu.
офис | kancelária | Я в офисе до шести. | Som v kancelárii do šiestej.
коллега | kolega | Мой коллега из Минска. | Môj kolega je z Minska.
начальник | šéf | Начальник сейчас на совещании. | Šéf je teraz na porade.
совещание | porada | Совещание начинается в десять. | Porada začína o desiatej.
учиться | študovať, učiť sa | Я хочу учиться в университете. | Chcem študovať na univerzite.
школа | škola | Дети в школе. | Deti sú v škole.
зарабатывать | zarábať | Он хочет больше зарабатывать. | Chce viac zarábať.
отпуск | dovolenka | Я в отпуске до понедельника. | Som na dovolenke do pondelka.
`},
{id:'dosug', title:'Voľný čas', desc:'Koníčky, šport a stretnutia.', items:`
спорт | šport | Я люблю спорт. | Mám rád šport.
играть | hrať (sa) | Давай играть в футбол! | Poďme hrať futbal!
плавать | plávať | Я люблю плавать в море. | Rád plávam v mori.
читать | čítať | Я люблю читать перед сном. | Rád čítam pred spaním.
музыка | hudba | Какая музыка тебе нравится? | Aká hudba sa ti páči?
кино | kino | Пойдём в кино? | Pôjdeme do kina?
путешествовать | cestovať | Летом мы будем путешествовать. | V lete budeme cestovať.
гулять | prechádzať sa | Вечером мы любим гулять в парке. | Večer sa radi prechádzame v parku.
свободное время | voľný čas | Что ты делаешь в свободное время? | Čo robíš vo voľnom čase?
друзья | priatelia | В субботу у меня встреча с друзьями. | V sobotu mám stretnutie s priateľmi.
`},
{id:'pokupki', title:'Nakupovanie', desc:'V obchode, na trhu a pri pokladni.', items:`
магазин | obchod | Магазин закрывается в девять. | Obchod zatvára o deviatej.
покупать | kupovať | Я не хочу ничего покупать. | Nechcem nič kupovať.
цена | cena | Какая цена? | Aká je cena?
Сколько с меня? | Koľko platím? | Извините, сколько с меня? | Prepáčte, koľko platím?
размер | veľkosť | У вас есть другой размер? | Máte inú veľkosť?
примерить | vyskúšať (oblečenie) | Можно примерить? | Môžem si to vyskúšať?
платить | platiť | Можно платить картой? | Môžem platiť kartou?
касса | pokladňa | Касса там. | Pokladňa je tam.
деньги | peniaze | У меня нет денег. | Nemám peniaze.
пакет | taška (igelitka) | Вам нужен пакет? | Potrebujete tašku?
`},
{id:'zdorovje', title:'Zdravie', desc:'U lekára a v lekárni.', items:`
врач | lekár | Мне нужен врач. | Potrebujem lekára.
болеть | byť chorý | Я не люблю болеть. | Nerád som chorý.
У меня болит голова. | Bolí ma hlava. | У меня болит голова, я иду домой. | Bolí ma hlava, idem domov.
температура | teplota, horúčka | У тебя температура? | Máš teplotu?
аптека | lekáreň | Аптека открыта до десяти. | Lekáreň je otvorená do desiatej.
лекарство | liek | Это лекарство очень помогает. | Tento liek veľmi pomáha.
отдыхать | oddychovať | Тебе нужно отдыхать. | Potrebuješ oddychovať.
Мне лучше. | Je mi lepšie. | Спасибо, сегодня мне лучше. | Ďakujem, dnes je mi lepšie.
Выздоравливай! | Uzdrav sa! | Ты болеешь? Выздоравливай! | Si chorý? Uzdrav sa!
больница | nemocnica | Где ближайшая больница? | Kde je najbližšia nemocnica?
`},
{id:'frazy', title:'Frázy do rozhovoru', desc:'Hotové spojenia, vďaka ktorým znieš prirodzene.', items:`
Конечно! | Samozrejme! | Ты придёшь? – Конечно! | Prídeš? – Samozrejme!
Хорошо. | Dobre. | Хорошо, до завтра! | Dobre, do zajtra!
Ничего страшного. | To nevadí. | Ты опоздал? Ничего страшного. | Meškal si? To nevadí.
Не знаю. | Neviem. | Извини, не знаю. | Prepáč, neviem.
Здорово! | Super! | Мы идём на пляж? Здорово! | Ideme na pláž? Super!
Жаль! | Škoda! | Ты не можешь прийти? Жаль! | Nemôžeš prísť? Škoda!
Посмотрим. | Uvidíme. | Может быть, я приду. Посмотрим. | Možno prídem. Uvidíme.
Я думаю, да. | Myslím, že áno. | Анна придёт? – Я думаю, да. | Príde Anna? – Myslím, že áno.
По-моему | podľa mňa | По-моему, это слишком дорого. | Podľa mňa je to príliš drahé.
Добро пожаловать! | Vitajte! | Добро пожаловать к нам! | Vitajte u nás!
`}
],
sentences: [
["Вчера я {был} в кино.","Včera som bol v kine.",""],
["Ты {видел} этот фильм?","Videl si tento film?",""],
["Мы {ужинали} в ресторане.","Večerali sme v reštaurácii.",""],
["Сегодня идёт {дождь}.","Dnes prší.","Doslova „ide dážď“."],
["Я хочу {заказать} столик на двоих.","Chcem si objednať stôl pre dvoch.",""],
["Повторите, {пожалуйста}.","Zopakujte, prosím.",""],
["Я не {голоден}.","Nie som hladný.",""],
["Моя сестра {старше} меня.","Moja sestra je staršia ako ja.",""],
["Во {сколько} встречаемся?","O koľkej sa stretneme?",""],
["Мне очень {нравится} этот город.","Toto mesto sa mi veľmi páči.",""],
["Я {ищу} вокзал.","Hľadám stanicu.",""],
["Сегодня очень {холодно}.","Dnes je veľká zima.",""],
["{Где} здесь аптека?","Kde je tu lekáreň?",""],
["Я {могу} тебе помочь.","Môžem ti pomôcť.",""]
],
gender: {'он':"брат=brat|телефон=telefón|магазин=obchod|ключ=kľúč|сыр=syr|парк=park", 'она':"семья=rodina|сестра=sestra|кухня=kuchyňa|комната=izba|неделя=týždeň|дочь=dcéra", 'оно':"утро=ráno|метро=metro|лето=leto|солнце=slnko|место=miesto|радио=rádio"},
stories: [
{title:'Выходные на даче', level:'A2', paragraphs:[
 "Летом семья Петровых каждые выходные ездит на дачу. Дача находится в деревне, недалеко от города.",
 "Папа работает в саду, мама готовит обед, а дети купаются в реке. Вечером все пьют чай на веранде.",
 "В воскресенье они возвращаются домой. Машина полная: яблоки, огурцы и цветы. Все устали, но счастливы."],
 tr:[
 "V lete jazdí rodina Petrovovcov každý víkend na chatu. Chata je na dedine neďaleko mesta.",
 "Otec pracuje v záhrade, mama varí obed a deti sa kúpu v rieke. Večer všetci pijú čaj na verande.",
 "V nedeľu sa vracajú domov. Auto je plné: jablká, uhorky a kvety. Všetci sú unavení, ale šťastní."],
 glossary:[{w:'каждые выходные',sk:'každý víkend'},{w:'Дача',sk:'chata (letný dom)'},{w:'деревне',sk:'dedine'},{w:'саду',sk:'záhrade'},{w:'купаются',sk:'kúpu sa'},{w:'реке',sk:'rieke'},{w:'возвращаются',sk:'vracajú sa'},{w:'устали',sk:'sú unavení'}],
 questions:[{q:'Куда ездит семья летом?',options:['На море','На дачу','В Москву','В горы'],answer:1},
  {q:'Что делают дети?',options:['Работают в саду','Купаются в реке','Готовят обед','Спят'],answer:1},
  {q:'Что они везут домой?',options:['Рыбу','Яблоки, огурцы и цветы','Хлеб','Ничего'],answer:1}]},
{title:'Первый урок', level:'A2', paragraphs:[
 "Марта из Братиславы начала учить русский язык. Сначала алфавит казался ей очень трудным.",
 "Но её учитель сказал: «Многие буквы ты уже знаешь. Например, М, А и К такие же, как в словацком». Марта удивилась.",
 "Через месяц она уже читала короткие тексты. Теперь она мечтает поехать в Санкт-Петербург и посмотреть Эрмитаж."],
 tr:[
 "Marta z Bratislavy sa začala učiť po rusky. Najprv sa jej azbuka zdala veľmi ťažká.",
 "Ale jej učiteľ povedal: „Mnohé písmená už poznáš. Napríklad M, A a K sú také isté ako v slovenčine.“ Marta sa čudovala.",
 "O mesiac už čítala krátke texty. Teraz sníva o tom, že pôjde do Petrohradu a pozrie si Ermitáž."],
 glossary:[{w:'начала',sk:'začala'},{w:'Сначала',sk:'najprv'},{w:'казался',sk:'zdal sa'},{w:'буквы',sk:'písmená'},{w:'удивилась',sk:'čudovala sa'},{w:'Через месяц',sk:'o mesiac'},{w:'короткие',sk:'krátke'},{w:'мечтает',sk:'sníva'}],
 questions:[{q:'Что казалось Марте трудным?',options:['Грамматика','Алфавит','Произношение','Числа'],answer:1},
  {q:'Что сказал учитель?',options:['Многие буквы она уже знает','Русский очень трудный','Нужно учить каждый день','Алфавит не нужен'],answer:0},
  {q:'О чём мечтает Марта?',options:['Поехать в Санкт-Петербург','Купить машину','Стать учителем','Жить в Москве'],answer:0}]}
]
});

})(window.CONTENT);
