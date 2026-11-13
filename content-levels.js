/* Jazykový pas: CEFR levels for all lessons, plus B1–C2 lessons, sentences and stories.
   lvl(lang, {levels:{unitId:'A1'}, units:[{…, level:'B2'}], sentences:[[t, sk, note, level]], stories:[{…, level}]}) */
(function(C){
  function lvl(c, o){
    const L = C[c]; if (!L) return;
    for (const id in (o.levels || {})) { const u = L.units.find(x => x.id === id); if (u) u.level = o.levels[id]; }
    L.units.push(...(o.units || []));
    L.sentences = (L.sentences || []).concat(o.sentences || []);
    L.stories = (L.stories || []).concat(o.stories || []);
  }

/* ───────── Nemčina ───────── */
lvl('de', {
levels:{zaklady:'A1', rodina:'A1', slovesa:'A1', cas:'A1', pocasie:'A1', jedlo:'A1', mesto:'A1', byvanie:'A1',
  nakup:'A2', hotel:'A2', oblecenie:'A2', praca:'A2', technika:'A2', opisy:'A2', perfekt:'A2', volno:'A2', pocity:'A2', zdravie:'A2',
  spojky:'B1', frazy:'B1', predlozky:'B1', frazy2:'B1'},
units:[
{id:'kariera', level:'B1', title:'Práca a kariéra', desc:'Pohovor, plat a postup v práci.', items:`
die Stelle | pracovné miesto | Ich habe eine neue Stelle gefunden. | Našiel som si nové miesto.
das Gehalt | plat | Das Gehalt ist nicht schlecht. | Plat nie je zlý.
der Lebenslauf | životopis | Schick mir bitte deinen Lebenslauf. | Pošli mi, prosím, svoj životopis.
das Vorstellungsgespräch | pracovný pohovor | Morgen habe ich ein Vorstellungsgespräch. | Zajtra mám pracovný pohovor.
die Überstunden | nadčasy | Diese Woche mache ich viele Überstunden. | Tento týždeň robím veľa nadčasov. | Množné číslo.
die Verantwortung | zodpovednosť | Sie trägt viel Verantwortung. | Nesie veľkú zodpovednosť.
befördert werden | byť povýšený | Er ist letztes Jahr befördert worden. | Minulý rok ho povýšili.
der Arbeitgeber | zamestnávateľ | Mein Arbeitgeber zahlt pünktlich. | Môj zamestnávateľ platí načas.
die Fortbildung | školenie, ďalšie vzdelávanie | Nächste Woche habe ich eine Fortbildung. | Budúci týždeň mám školenie.
selbstständig | samostatne zárobkovo činný | Seit einem Jahr bin ich selbstständig. | Už rok podnikám.
in Teilzeit | na čiastočný úväzok | Sie arbeitet in Teilzeit. | Pracuje na čiastočný úväzok.
die Kündigungsfrist | výpovedná lehota | Die Kündigungsfrist beträgt drei Monate. | Výpovedná lehota je tri mesiace.
`},
{id:'medien', level:'B1', title:'Médiá a správy', desc:'Noviny, televízia a názory.', items:`
die Nachrichten | správy (spravodajstvo) | Hast du heute die Nachrichten gesehen? | Videl si dnes správy? | Množné číslo.
der Artikel | článok | Ich habe einen interessanten Artikel gelesen. | Čítal som zaujímavý článok.
die Sendung | relácia | Die Sendung beginnt um acht. | Relácia začína o ôsmej.
berichten | informovať | Die Zeitung berichtet über den Streik. | Noviny informujú o štrajku.
die Meinung | názor | Was ist deine Meinung? | Aký je tvoj názor?
die Umfrage | prieskum, anketa | Laut einer Umfrage sind die meisten zufrieden. | Podľa prieskumu je väčšina spokojná.
die Werbung | reklama | Im Fernsehen gibt es zu viel Werbung. | V televízii je priveľa reklamy.
veröffentlichen | zverejniť | Die Firma will die Zahlen bald veröffentlichen. | Firma chce čísla čoskoro zverejniť.
die Quelle | zdroj | Aus welcher Quelle stammt das? | Z akého zdroja to pochádza?
glaubwürdig | dôveryhodný | Die Information ist nicht glaubwürdig. | Tá informácia nie je dôveryhodná.
aktuell | aktuálny | Das Thema ist sehr aktuell. | Téma je veľmi aktuálna.
die Schlagzeile | titulok (v novinách) | Die Schlagzeile ist übertrieben. | Titulok je prehnaný.
`},
{id:'diskusia', level:'B2', title:'Diskusia a argumentácia', desc:'Ako vyjadriť a obhájiť názor.', items:`
einerseits | na jednej strane | Einerseits ist das Angebot gut. | Na jednej strane je ponuka dobrá.
andererseits | na druhej strane | Andererseits ist es sehr teuer. | Na druhej strane je to veľmi drahé.
Ich bin der Meinung, dass | som toho názoru, že | Ich bin der Meinung, dass wir warten sollten. | Som toho názoru, že by sme mali počkať.
Da bin ich anderer Meinung. | V tom mám iný názor. | Tut mir leid, da bin ich anderer Meinung. | Prepáč, v tom mám iný názor.
Ich stimme dir zu. | Súhlasím s tebou. | In diesem Punkt stimme ich dir zu. | V tomto bode s tebou súhlasím.
der Vorteil | výhoda | Ein großer Vorteil ist die Lage. | Veľkou výhodou je poloha.
der Nachteil | nevýhoda | Der Nachteil ist der hohe Preis. | Nevýhodou je vysoká cena.
zwar | síce | Das Auto ist zwar alt, aber zuverlässig. | Auto je síce staré, ale spoľahlivé. | zwar … aber = síce …, ale
im Gegensatz zu | na rozdiel od | Im Gegensatz zu dir mag ich Kaffee. | Na rozdiel od teba mám rád kávu.
Das überzeugt mich nicht. | To ma nepresviedča. | Dein Argument überzeugt mich nicht. | Tvoj argument ma nepresviedča.
abwägen | zvážiť (pre a proti) | Wir müssen die Vor- und Nachteile abwägen. | Musíme zvážiť výhody a nevýhody.
Meiner Ansicht nach | podľa môjho názoru | Meiner Ansicht nach ist das zu riskant. | Podľa mňa je to príliš riskantné.
`},
{id:'formalne', level:'B2', title:'Formálna komunikácia', desc:'E-maily, úrady a pracovná korešpondencia.', items:`
Sehr geehrte Damen und Herren | Vážené dámy a páni | Sehr geehrte Damen und Herren, ich schreibe Ihnen wegen meiner Bestellung. | Vážené dámy a páni, píšem vám kvôli mojej objednávke.
Mit freundlichen Grüßen | S pozdravom | Mit freundlichen Grüßen, Marek Novák | S pozdravom, Marek Novák
sich wenden an | obrátiť sa na | Bitte wenden Sie sich an unseren Kundenservice. | Obráťte sa, prosím, na náš zákaznícky servis.
die Anfrage | požiadavka, dopyt | Vielen Dank für Ihre Anfrage. | Ďakujeme za vašu požiadavku.
bezüglich | ohľadom | Ich habe eine Frage bezüglich der Rechnung. | Mám otázku ohľadom faktúry.
im Anhang | v prílohe | Im Anhang finden Sie meinen Lebenslauf. | V prílohe nájdete môj životopis.
die Frist | lehota | Die Frist endet am Freitag. | Lehota končí v piatok.
vereinbaren | dohodnúť | Können wir einen Termin vereinbaren? | Môžeme si dohodnúť termín?
zur Verfügung stehen | byť k dispozícii | Für Fragen stehe ich gern zur Verfügung. | Pri otázkach som rád k dispozícii.
Vielen Dank im Voraus | vopred ďakujem | Vielen Dank im Voraus für Ihre Hilfe. | Vopred ďakujem za vašu pomoc.
berücksichtigen | zohľadniť | Bitte berücksichtigen Sie meine Wünsche. | Zohľadnite, prosím, moje želania.
die Rückmeldung | spätná väzba, odpoveď | Ich freue mich auf Ihre Rückmeldung. | Teším sa na vašu odpoveď.
`},
{id:'svet', level:'B2', title:'Spoločnosť a životné prostredie', desc:'Témy zo správ a diskusií.', items:`
die Umwelt | životné prostredie | Wir müssen die Umwelt schützen. | Musíme chrániť životné prostredie.
der Klimawandel | klimatická zmena | Der Klimawandel betrifft uns alle. | Klimatická zmena sa týka nás všetkých.
nachhaltig | udržateľný | Wir wollen nachhaltig leben. | Chceme žiť udržateľne.
die Gesellschaft | spoločnosť | Die Gesellschaft verändert sich schnell. | Spoločnosť sa rýchlo mení.
die Regierung | vláda | Die Regierung plant neue Gesetze. | Vláda plánuje nové zákony.
die Wahl | voľby | Die Wahl findet im Herbst statt. | Voľby sa konajú na jeseň.
die Steuer | daň | Die Steuer auf Benzin ist hoch. | Daň z benzínu je vysoká.
die Arbeitslosigkeit | nezamestnanosť | Die Arbeitslosigkeit ist gesunken. | Nezamestnanosť klesla.
die Gleichberechtigung | rovnoprávnosť | Gleichberechtigung ist ein wichtiges Ziel. | Rovnoprávnosť je dôležitý cieľ.
schützen | chrániť | Wie können wir das Klima schützen? | Ako môžeme chrániť klímu?
verursachen | spôsobiť | Autos verursachen viel Lärm. | Autá spôsobujú veľa hluku.
die Lösung | riešenie | Wir brauchen eine schnelle Lösung. | Potrebujeme rýchle riešenie.
`},
{id:'idiomy', level:'C1', title:'Idiómy', desc:'Obrazné spojenia, ktoré rodení hovoriaci používajú stále.', items:`
Schwein haben | mať šťastie | Mit dem Wetter hatten wir wirklich Schwein. | S počasím sme mali naozaj šťastie.
Ich verstehe nur Bahnhof. | Vôbec nerozumiem. | Bei Physik verstehe ich nur Bahnhof. | Vo fyzike ničomu nerozumiem.
Das ist nicht mein Bier. | To nie je moja vec. | Was er macht, ist nicht mein Bier. | Čo robí on, nie je moja vec.
den Nagel auf den Kopf treffen | trafiť klinec po hlavičke | Mit dieser Antwort hast du den Nagel auf den Kopf getroffen. | Touto odpoveďou si trafil klinec po hlavičke.
jemandem auf den Keks gehen | liezť niekomu na nervy | Der Lärm geht mir auf den Keks. | Ten hluk mi lezie na nervy.
ins Fettnäpfchen treten | šliapnuť vedľa, strápniť sa | Mit dieser Frage bin ich ins Fettnäpfchen getreten. | Touto otázkou som šliapol vedľa.
die Nase voll haben | mať plné zuby | Ich habe die Nase voll vom Regen. | Mám plné zuby dažďa.
um den heißen Brei herumreden | chodiť okolo horúcej kaše | Red nicht um den heißen Brei herum! | Nechoď okolo horúcej kaše!
etwas auf die lange Bank schieben | odkladať niečo | Ich schiebe die Steuererklärung immer auf die lange Bank. | Daňové priznanie vždy odkladám.
Tomaten auf den Augen haben | nevidieť niečo zjavné | Hast du Tomaten auf den Augen? Das Schild ist doch da! | Si slepý? Tabuľa je predsa tu!
Da steppt der Bär. | Tam je poriadna zábava. | Komm zur Party, da steppt der Bär! | Poď na párty, bude tam poriadna zábava!
Das ist mir Wurst. | Je mi to fuk. | Ob wir Pizza oder Pasta essen, ist mir Wurst. | Či zjeme pizzu alebo cestoviny, je mi to fuk.
`},
{id:'abstrakt', level:'C1', title:'Abstraktné a odborné výrazy', desc:'Slová z článkov, práce a štúdia.', items:`
die Voraussetzung | predpoklad | Gute Deutschkenntnisse sind eine Voraussetzung für die Stelle. | Dobrá znalosť nemčiny je predpokladom pre toto miesto.
die Auswirkung | dopad | Welche Auswirkung hat das auf uns? | Aký to má na nás dopad?
der Zusammenhang | súvislosť | Ich sehe keinen Zusammenhang. | Nevidím žiadnu súvislosť.
die Herausforderung | výzva | Das ist eine große Herausforderung. | To je veľká výzva.
beeinflussen | ovplyvniť | Das Wetter kann unsere Laune beeinflussen. | Počasie môže ovplyvniť našu náladu.
gewährleisten | zaručiť, zabezpečiť | Wir können die Sicherheit nicht gewährleisten. | Nemôžeme zaručiť bezpečnosť.
die Maßnahme | opatrenie | Das ist eine sinnvolle Maßnahme. | To je rozumné opatrenie.
erheblich | značný, výrazne | Die Kosten sind erheblich gestiegen. | Náklady výrazne stúpli.
vorhanden | k dispozícii, existujúci | Alle Unterlagen sind vorhanden. | Všetky podklady sú k dispozícii.
die Entwicklung | vývoj | Die Entwicklung ist positiv. | Vývoj je pozitívny.
ermöglichen | umožniť | Das Stipendium soll ein Studium im Ausland ermöglichen. | Štipendium má umožniť štúdium v zahraničí.
hinsichtlich | čo sa týka, vzhľadom na | Hinsichtlich der Kosten gibt es noch Fragen. | Čo sa týka nákladov, sú ešte otázky.
`},
{id:'nuansy', level:'C2', title:'Partikuly a jemné nuansy', desc:'Malé slová, vďaka ktorým znieš ako rodený hovoriaci.', items:`
halt | proste (partikula) | Das ist halt so. | Tak to proste je.
eben | proste, práve | Dann machen wir es eben morgen. | Tak to proste urobíme zajtra.
doch | ale áno; predsa | Du kommst nicht? – Doch! | Neprídeš? – Ale áno!
mal | zjemňuje prosbu | Komm mal her! | Poď sem!
ruhig | kľudne (povolenie) | Du kannst ruhig später kommen. | Kľudne môžeš prísť neskôr.
eigentlich | vlastne | Was willst du eigentlich? | Čo vlastne chceš?
sowieso | aj tak | Ich wollte sowieso gehen. | Aj tak som chcel ísť.
Na und? | No a čo? | Ich bin älter als du. – Na und? | Som starší ako ty. – No a čo?
Jein. | Áno aj nie. | Hast du Lust? – Jein. | Máš chuť? – Áno aj nie.
der Feierabend | koniec pracovného dňa | Schönen Feierabend! | Pekný večer po práci!
das Fernweh | túžba cestovať do diaľky | Im Winter habe ich oft Fernweh. | V zime často túžim cestovať niekam ďaleko.
die Schadenfreude | škodoradosť | Das war pure Schadenfreude. | To bola čistá škodoradosť.
`}
],
sentences:[
["Das Problem {wurde} schnell gelöst.","Problém bol rýchlo vyriešený.","Trpný rod.","B1"],
["{Obwohl} er viel arbeitet, verdient er wenig.","Hoci veľa pracuje, zarába málo.","","B1"],
["Es {lohnt} sich, früh anzufangen.","Oplatí sa začať skoro.","","B1"],
["Wenn ich mehr Zeit gehabt {hätte}, wäre ich gekommen.","Keby som mal viac času, bol by som prišiel.","Konjunktiv II minulý.","B2"],
["Je länger ich darüber nachdenke, {desto} unsicherer werde ich.","Čím dlhšie nad tým premýšľam, tým som neistejší.","","B2"],
["Er tut so, {als} ob er nichts wüsste.","Robí, akoby nič nevedel.","als ob + Konjunktiv II.","B2"],
["{Angesichts} der Lage müssen wir handeln.","Vzhľadom na situáciu musíme konať.","angesichts + genitív.","C1"],
["Die Entscheidung ist noch nicht getroffen {worden}.","Rozhodnutie ešte nebolo prijaté.","Trpný rod v perfekte.","C1"]
],
stories:[
{title:'Homeoffice – Fluch oder Segen?', level:'B2', paragraphs:[
 "Seit der Pandemie arbeiten viele Menschen von zu Hause aus. Einerseits sparen sie Zeit, weil der lange Arbeitsweg wegfällt. Andererseits fühlen sich manche einsam und vermissen den direkten Kontakt zu ihren Kollegen.",
 "Studien zeigen, dass die Produktivität im Homeoffice nicht unbedingt sinkt. Entscheidend ist jedoch, dass klare Regeln vereinbart werden: feste Arbeitszeiten, regelmäßige Besprechungen und ein ruhiger Arbeitsplatz.",
 "Viele Firmen setzen deshalb auf ein hybrides Modell. Die Mitarbeiter verbringen zwei oder drei Tage im Büro und arbeiten den Rest der Woche zu Hause. So lassen sich die Vorteile beider Welten verbinden."],
 tr:[
 "Od pandémie pracuje veľa ľudí z domu. Na jednej strane šetria čas, pretože odpadá dlhá cesta do práce. Na druhej strane sa niektorí cítia osamelí a chýba im priamy kontakt s kolegami.",
 "Štúdie ukazujú, že produktivita pri práci z domu nemusí nutne klesať. Rozhodujúce však je dohodnúť jasné pravidlá: pevný pracovný čas, pravidelné porady a tiché pracovné miesto.",
 "Mnohé firmy preto stavia na hybridný model. Zamestnanci strávia dva alebo tri dni v kancelárii a zvyšok týždňa pracujú doma. Tak sa dajú spojiť výhody oboch svetov."],
 glossary:[{w:'Einerseits',sk:'na jednej strane'},{w:'Arbeitsweg',sk:'cesta do práce'},{w:'wegfällt',sk:'odpadá'},{w:'Andererseits',sk:'na druhej strane'},{w:'einsam',sk:'osamelí'},{w:'unbedingt',sk:'nutne'},{w:'Entscheidend',sk:'rozhodujúce'},{w:'vereinbart',sk:'dohodnuté'},{w:'hybrides Modell',sk:'hybridný model'},{w:'verbinden',sk:'spojiť'}],
 questions:[{q:'Was ist ein Vorteil des Homeoffice?',options:['Man spart Zeit für den Arbeitsweg','Man trifft mehr Kollegen','Man verdient mehr','Man arbeitet weniger'],answer:0},
  {q:'Was ist laut Text entscheidend?',options:['Ein großes Büro','Klare Regeln','Ein neuer Computer','Mehr Urlaub'],answer:1},
  {q:'Was ist ein hybrides Modell?',options:['Nur im Büro arbeiten','Nur zu Hause arbeiten','Teils im Büro, teils zu Hause','Nachts arbeiten'],answer:2}]},
{title:'Die Kunst des Nichtstuns', level:'C1', paragraphs:[
 "In einer Gesellschaft, die Leistung über alles stellt, gilt Nichtstun oft als Zeitverschwendung. Wer sich eine Pause gönnt, muss sich nicht selten rechtfertigen.",
 "Dabei belegen zahlreiche Untersuchungen, dass gerade Phasen der Muße die Kreativität fördern. Das Gehirn verarbeitet in Ruhe Eindrücke und knüpft neue Verbindungen, die im hektischen Alltag kaum entstehen würden.",
 "Insofern ist bewusstes Nichtstun keineswegs Faulheit, sondern eine Voraussetzung für gute Ideen. Vielleicht sollten wir uns öfter erlauben, einfach aus dem Fenster zu schauen."],
 tr:[
 "V spoločnosti, ktorá stavia výkon nad všetko, sa nič nerobenie často považuje za stratu času. Kto si dopraje prestávku, musí sa neraz ospravedlňovať.",
 "Pritom množstvo výskumov dokazuje, že práve chvíle pokojného oddychu podporujú kreativitu. Mozog v pokoji spracúva dojmy a vytvára nové spojenia, ktoré by v hektickom každodennom živote sotva vznikli.",
 "Vedomé nič nerobenie preto vôbec nie je lenivosť, ale predpoklad dobrých nápadov. Možno by sme si mali častejšie dovoliť jednoducho sa pozerať z okna."],
 glossary:[{w:'Leistung',sk:'výkon'},{w:'Zeitverschwendung',sk:'strata času'},{w:'gönnt',sk:'dopraje si'},{w:'rechtfertigen',sk:'ospravedlňovať sa'},{w:'belegen',sk:'dokazujú'},{w:'Muße',sk:'pokojný oddych'},{w:'fördern',sk:'podporujú'},{w:'keineswegs',sk:'vôbec nie'},{w:'Faulheit',sk:'lenivosť'},{w:'Voraussetzung',sk:'predpoklad'}],
 questions:[{q:'Wie wird Nichtstun in der Gesellschaft oft gesehen?',options:['Als Zeitverschwendung','Als Sport','Als Pflicht','Als Kunstform'],answer:0},
  {q:'Was fördern Phasen der Muße laut Text?',options:['Den Stress','Die Kreativität','Die Faulheit','Den Hunger'],answer:1},
  {q:'Was ist bewusstes Nichtstun laut Autor?',options:['Faulheit','Eine Voraussetzung für gute Ideen','Ein Problem','Unmöglich'],answer:1}]}
]
});

/* ───────── Francúzština ───────── */
lvl('fr', {
levels:{bases:'A1', gens:'A1', verbes:'A1', nombres:'A1', cafe:'A1', ville:'A1', temps:'A1', adjectifs:'A1',
  maison:'A2', travail:'A2', loisirs:'A2', achats:'A2', sante:'A2', expressions:'A2'},
units:[
{id:'liens', level:'B1', title:'Spojky a súvislosti', desc:'Ako spájať myšlienky do dlhších viet.', items:`
parce que | pretože | Je reste à la maison parce que je suis malade. | Zostanem doma, pretože som chorý.
donc | takže, teda | Il pleut, donc je prends un parapluie. | Prší, takže si beriem dáždnik.
pourtant | a predsa, napriek tomu | Il est riche, pourtant il n'est pas heureux. | Je bohatý, a predsa nie je šťastný.
quand | keď | Quand j'étais petit, j'habitais à Nitra. | Keď som bol malý, býval som v Nitre.
si | ak | Si tu veux, on peut sortir. | Ak chceš, môžeme ísť von.
bien que | hoci | Bien que ce soit cher, je l'achète. | Hoci je to drahé, kúpim to. | Po bien que nasleduje subjunktív.
pendant que | zatiaľ čo | Je cuisine pendant que tu fais les courses. | Varím, zatiaľ čo ty nakupuješ.
afin de | aby | Je travaille afin de payer mes études. | Pracujem, aby som zaplatil štúdium.
d'abord | najprv | D'abord, on mange, ensuite on sort. | Najprv sa najeme, potom ideme von.
enfin | konečne, nakoniec | Enfin, le week-end ! | Konečne víkend!
`},
{id:'sentiments', level:'B1', title:'Pocity a názory', desc:'Ako sa cítiš a čo si myslíš.', items:`
triste | smutný | Pourquoi tu es triste ? | Prečo si smutný?
en colère | nahnevaný | Il est en colère contre moi. | Je na mňa nahnevaný.
inquiet | ustarostený | Je suis inquiet pour l'examen. | Robím si starosti kvôli skúške.
fier | hrdý | Je suis fier de toi. | Som na teba hrdý.
surpris | prekvapený | J'ai été très surpris. | Bol som veľmi prekvapený.
Je pense que | myslím si, že | Je pense que tu as raison. | Myslím si, že máš pravdu.
Je trouve que | zdá sa mi, že | Je trouve que c'est trop cher. | Zdá sa mi, že je to príliš drahé.
J'en ai marre ! | Mám toho dosť! | J'en ai marre de ce bruit ! | Mám dosť toho hluku!
avoir peur | báť sa | Les enfants ont peur du noir. | Deti sa boja tmy.
Tu me manques. | Chýbaš mi. | Je pense à toi, tu me manques. | Myslím na teba, chýbaš mi.
`},
{id:'debat', level:'B2', title:'Diskusia a argumentácia', desc:'Ako vyjadriť a obhájiť názor.', items:`
d'un côté | na jednej strane | D'un côté, c'est pratique. | Na jednej strane je to praktické.
d'un autre côté | na druhej strane | D'un autre côté, c'est cher. | Na druhej strane je to drahé.
Je ne suis pas d'accord. | Nesúhlasím. | Désolé, je ne suis pas d'accord. | Prepáč, nesúhlasím.
l'avantage | výhoda | L'avantage, c'est le prix. | Výhodou je cena.
l'inconvénient | nevýhoda | Le seul inconvénient, c'est le bruit. | Jedinou nevýhodou je hluk.
en revanche | naopak, zato | Il est timide ; en revanche, sa sœur est très ouverte. | Je hanblivý, zato jeho sestra je veľmi otvorená.
Il est vrai que | je pravda, že | Il est vrai que c'est difficile. | Je pravda, že je to ťažké.
néanmoins | napriek tomu | C'est risqué, néanmoins j'essaie. | Je to riskantné, napriek tomu to skúsim.
convaincre | presvedčiť | Il est difficile de le convaincre. | Je ťažké ho presvedčiť.
en fin de compte | nakoniec, v konečnom dôsledku | En fin de compte, c'est ta décision. | Nakoniec je to tvoje rozhodnutie.
`},
{id:'formel', level:'B2', title:'Formálna komunikácia', desc:'E-maily, úrady a pracovná korešpondencia.', items:`
Madame, Monsieur | Vážená pani, vážený pán (v liste) | Madame, Monsieur, je vous écris au sujet de ma commande. | Vážená pani, vážený pán, píšem vám ohľadom mojej objednávky.
au sujet de | ohľadom | J'ai une question au sujet de la facture. | Mám otázku ohľadom faktúry.
ci-joint | v prílohe | Veuillez trouver ci-joint mon CV. | V prílohe nájdete môj životopis.
Cordialement | S pozdravom | Cordialement, Marek Novák | S pozdravom, Marek Novák
la demande | žiadosť | Merci pour votre demande. | Ďakujeme za vašu žiadosť.
le délai | lehota | Le délai est de deux semaines. | Lehota je dva týždne.
confirmer | potvrdiť | Pouvez-vous confirmer le rendez-vous ? | Môžete potvrdiť stretnutie?
Je reste à votre disposition. | Som vám k dispozícii. | Pour toute question, je reste à votre disposition. | V prípade otázok som vám k dispozícii.
Merci d'avance. | Vopred ďakujem. | Merci d'avance pour votre réponse. | Vopred ďakujem za vašu odpoveď.
Pourriez-vous | mohli by ste | Pourriez-vous m'envoyer les documents ? | Mohli by ste mi poslať dokumenty?
`},
{id:'idiomes', level:'C1', title:'Idiómy', desc:'Obrazné spojenia, ktoré Francúzi používajú stále.', items:`
Ce n'est pas la mer à boire. | Nie je to až také ťažké. | Allez, ce n'est pas la mer à boire ! | No tak, nie je to až také ťažké!
avoir le cafard | mať depku | Le dimanche soir, j'ai souvent le cafard. | V nedeľu večer mávam často depku.
poser un lapin | nechať niekoho čakať (neprísť) | Il m'a posé un lapin hier soir. | Včera večer neprišiel a nechal ma čakať.
coûter les yeux de la tête | stáť majland | Cet appartement coûte les yeux de la tête. | Ten byt stojí majland.
tomber dans les pommes | odpadnúť | Il faisait si chaud qu'elle est tombée dans les pommes. | Bolo také teplo, že odpadla.
avoir un poil dans la main | byť lenivý | Mon frère a un poil dans la main. | Môj brat je lenivec.
mettre son grain de sel | miešať sa do niečoho | Il faut toujours qu'il mette son grain de sel. | Vždy sa do toho musí miešať.
Il pleut des cordes. | Leje ako z krhly. | Prends un parapluie, il pleut des cordes ! | Zober si dáždnik, leje ako z krhly!
avoir la flemme | nechce sa mi | J'ai la flemme de faire la vaisselle. | Nechce sa mi umývať riad.
C'est du gâteau ! | To je hračka! | L'examen ? C'est du gâteau ! | Skúška? To je hračka!
`},
{id:'familier', level:'C2', title:'Hovorová francúzština', desc:'Slová, ktoré počuješ na ulici a vo filmoch.', items:`
quand même | aj tak, predsa | Il pleut, mais on sort quand même. | Prší, ale aj tak ideme von.
du coup | takže (hovorovo) | Il pleuvait, du coup on est restés à la maison. | Pršalo, takže sme zostali doma.
bref | skrátka | Bref, c'était une soirée géniale. | Skrátka, bol to super večer.
genre | akože (hovorovo) | Il était genre super content. | Bol akože strašne spokojný.
carrément | úplne, rovno | C'est carrément génial ! | To je úplne geniálne!
franchement | úprimne | Franchement, je n'en sais rien. | Úprimne, neviem o tom nič.
n'importe quoi | hlúposti; hocičo | Tu dis n'importe quoi ! | Hovoríš hlúposti!
Ça me saoule. | Otravuje ma to. | Ce bruit, ça me saoule. | Ten hluk ma otravuje.
Laisse tomber. | Nechaj tak. / Zabudni na to. | Laisse tomber, ce n'est pas grave. | Nechaj tak, to nevadí.
Tant pis ! | Nedá sa nič robiť! / Smola! | Le magasin est fermé ? Tant pis ! | Obchod je zatvorený? Nedá sa nič robiť!
`}
],
sentences:[
["Il faut que tu {viennes} demain.","Musíš zajtra prísť.","Po il faut que nasleduje subjunktív.","B1"],
["Si j'{avais} le temps, je voyagerais plus.","Keby som mal čas, viac by som cestoval.","si + imparfait, potom kondicionál.","B1"],
["Bien qu'il {soit} tard, je travaille encore.","Hoci je neskoro, ešte pracujem.","bien que + subjunktív.","B2"],
["Si j'avais su, je ne {serais} pas venu.","Keby som to bol vedel, nebol by som prišiel.","","B2"],
["C'est le livre {dont} je t'ai parlé.","To je kniha, o ktorej som ti hovoril.","dont = o ktorom/ktorej.","B2"],
["{Quoi} qu'il arrive, je serai là.","Nech sa stane čokoľvek, budem tu.","","C1"]
],
stories:[
{title:'La vie à la campagne', level:'B2', paragraphs:[
 "De plus en plus de citadins quittent les grandes villes pour s'installer à la campagne. Ils recherchent le calme, un logement plus spacieux et un rythme de vie moins stressant.",
 "Pourtant, ce choix n'est pas sans inconvénients. Dans certains villages, les commerces ont fermé, les transports en commun sont rares et il faut prendre la voiture pour le moindre trajet.",
 "Grâce au télétravail, beaucoup trouvent néanmoins un équilibre. Ils travaillent depuis chez eux et ne se rendent en ville qu'une ou deux fois par semaine."],
 tr:[
 "Čoraz viac obyvateľov miest opúšťa veľké mestá a sťahuje sa na vidiek. Hľadajú pokoj, priestrannejšie bývanie a menej stresujúci životný rytmus.",
 "Táto voľba však nie je bez nevýhod. V niektorých dedinách obchody zatvorili, verejná doprava je zriedkavá a na každú cestu treba sadnúť do auta.",
 "Vďaka práci z domu však mnohí nachádzajú rovnováhu. Pracujú z domu a do mesta chodia len raz alebo dvakrát týždenne."],
 glossary:[{w:'citadins',sk:'obyvatelia miest'},{w:"s'installer",sk:'usadiť sa'},{w:'spacieux',sk:'priestranný'},{w:'inconvénients',sk:'nevýhody'},{w:'commerces',sk:'obchody'},{w:'transports en commun',sk:'verejná doprava'},{w:'le moindre trajet',sk:'každá (aj krátka) cesta'},{w:'néanmoins',sk:'napriek tomu'},{w:'équilibre',sk:'rovnováha'},{w:'se rendent',sk:'chodia'}],
 questions:[{q:'Que recherchent les citadins à la campagne ?',options:['Plus de bruit',"Le calme et plus d'espace",'Des magasins','Un nouveau travail'],answer:1},
  {q:'Quel est un inconvénient de la vie au village ?',options:['Il y a trop de voitures','Les transports en commun sont rares','Les logements sont petits','Il fait trop chaud'],answer:1},
  {q:'Comment beaucoup trouvent un équilibre ?',options:['Grâce au télétravail','Ils retournent en ville','Ils achètent un vélo','Ils changent de métier'],answer:0}]}
]
});

/* ───────── Španielčina ───────── */
lvl('es', {
levels:{basicos:'A1', gente:'A1', verbos:'A1', numeros:'A1', comida:'A1', ciudad:'A1', tiempo:'A1', adjetivos:'A1',
  casa:'A2', trabajo:'A2', ocio:'A2', compras:'A2', salud:'A2', expresiones:'A2'},
units:[
{id:'conectores', level:'B1', title:'Spojky a súvislosti', desc:'Ako spájať myšlienky do dlhších viet.', items:`
porque | pretože | Me quedo en casa porque estoy enfermo. | Zostanem doma, pretože som chorý.
entonces | tak, potom | Entonces, ¿qué hacemos? | Tak čo urobíme?
sin embargo | avšak, napriek tomu | Es caro; sin embargo, lo compro. | Je to drahé, napriek tomu to kúpim.
cuando | keď | Cuando era pequeño, vivía en Nitra. | Keď som bol malý, býval som v Nitre.
si | ak | Si quieres, podemos salir. | Ak chceš, môžeme ísť von.
aunque | hoci | Aunque llueve, salimos. | Hoci prší, ideme von.
mientras | zatiaľ čo | Cocino mientras tú compras. | Varím, zatiaľ čo ty nakupuješ.
para que | aby | Te lo explico para que lo entiendas. | Vysvetlím ti to, aby si tomu rozumel. | Po para que nasleduje subjuntivo.
primero | najprv | Primero comemos y luego salimos. | Najprv sa najeme a potom ideme von.
por fin | konečne | ¡Por fin es viernes! | Konečne je piatok!
`},
{id:'sentimientos', level:'B1', title:'Pocity a názory', desc:'Ako sa cítiš a čo si myslíš.', items:`
triste | smutný | Hoy estoy un poco triste. | Dnes som trochu smutný.
enfadado | nahnevaný | ¿Por qué estás enfadado? | Prečo si nahnevaný?
preocupado | ustarostený | Estoy preocupado por el examen. | Robím si starosti kvôli skúške.
orgulloso | hrdý | Estoy orgulloso de ti. | Som na teba hrdý.
sorprendido | prekvapený | Me quedé sorprendido. | Bol som prekvapený.
Creo que | myslím, že | Creo que tienes razón. | Myslím, že máš pravdu.
Me parece que | zdá sa mi, že | Me parece que va a llover. | Zdá sa mi, že bude pršať.
¡Estoy harto! | Mám toho dosť! | ¡Estoy harto de esperar! | Mám dosť čakania!
tener miedo | báť sa | No hay que tener miedo. | Netreba sa báť.
echar de menos | chýbať (niekto mi) | Te echo de menos. | Chýbaš mi.
`},
{id:'debate', level:'B2', title:'Diskusia a argumentácia', desc:'Ako vyjadriť a obhájiť názor.', items:`
por un lado | na jednej strane | Por un lado, es práctico. | Na jednej strane je to praktické.
por otro lado | na druhej strane | Por otro lado, es caro. | Na druhej strane je to drahé.
No estoy de acuerdo. | Nesúhlasím. | Lo siento, no estoy de acuerdo. | Prepáč, nesúhlasím.
la ventaja | výhoda | La ventaja es el precio. | Výhodou je cena.
la desventaja | nevýhoda | La única desventaja es el ruido. | Jedinou nevýhodou je hluk.
en cambio | naopak, zato | Él es tímido; en cambio, su hermana es muy abierta. | On je hanblivý, zato jeho sestra je veľmi otvorená.
Es verdad que | je pravda, že | Es verdad que es difícil. | Je pravda, že je to ťažké.
no obstante | napriek tomu | Es arriesgado; no obstante, lo voy a intentar. | Je to riskantné, napriek tomu to skúsim.
convencer | presvedčiť | Es difícil convencer a mi jefe. | Je ťažké presvedčiť môjho šéfa.
al fin y al cabo | nakoniec, v konečnom dôsledku | Al fin y al cabo, es tu decisión. | Nakoniec je to tvoje rozhodnutie.
`},
{id:'formal', level:'B2', title:'Formálna komunikácia', desc:'E-maily, úrady a pracovná korešpondencia.', items:`
Estimados señores | Vážení páni (v liste) | Estimados señores: les escribo por mi pedido. | Vážení páni, píšem vám kvôli mojej objednávke.
Le escribo para | píšem Vám, aby | Le escribo para pedir información. | Píšem Vám, aby som požiadal o informácie.
Adjunto le envío | v prílohe Vám posielam | Adjunto le envío mi currículum. | V prílohe Vám posielam môj životopis.
Un cordial saludo | S pozdravom | Un cordial saludo, Marek Novák | S pozdravom, Marek Novák
la solicitud | žiadosť | Gracias por su solicitud. | Ďakujeme za vašu žiadosť.
el plazo | lehota | El plazo termina el viernes. | Lehota končí v piatok.
la cita | stretnutie, termín | Tengo una cita con el médico. | Mám termín u lekára.
confirmar | potvrdiť | ¿Puede confirmar la reserva? | Môžete potvrdiť rezerváciu?
Quedo a su disposición. | Som Vám k dispozícii. | Para cualquier pregunta, quedo a su disposición. | V prípade otázok som Vám k dispozícii.
Gracias de antemano. | Vopred ďakujem. | Gracias de antemano por su respuesta. | Vopred ďakujem za vašu odpoveď.
`},
{id:'modismos', level:'C1', title:'Idiómy', desc:'Obrazné spojenia, ktoré Španieli používajú stále.', items:`
No es para tanto. | Nie je to až také hrozné. | Tranquilo, no es para tanto. | Pokoj, nie je to až také hrozné.
estar en las nubes | byť duchom neprítomný | Hoy estás en las nubes. | Dnes si duchom neprítomný.
costar un ojo de la cara | stáť majland | Este piso cuesta un ojo de la cara. | Tento byt stojí majland.
tomar el pelo | doberať si niekoho | ¿Me estás tomando el pelo? | Doberáš si ma?
meter la pata | pokaziť to, šliapnuť vedľa | Creo que he metido la pata. | Myslím, že som to pokazil.
ser pan comido | byť hračka | El examen fue pan comido. | Skúška bola hračka.
dar en el clavo | trafiť klinec po hlavičke | Con esa respuesta has dado en el clavo. | Touto odpoveďou si trafil klinec po hlavičke.
estar hasta las narices | mať plné zuby | Estoy hasta las narices de este ruido. | Mám plné zuby tohto hluku.
Llueve a cántaros. | Leje ako z krhly. | Coge un paraguas, llueve a cántaros. | Zober si dáždnik, leje ako z krhly.
ponerse las pilas | zabrať, pohnúť si | Tienes que ponerte las pilas. | Musíš zabrať.
`},
{id:'coloquial', level:'C2', title:'Hovorová španielčina', desc:'Slová, ktoré počuješ na ulici a vo filmoch.', items:`
o sea | čiže, teda | O sea, que no vienes. | Čiže neprídeš.
pues | no, tak (hovorovo) | Pues no sé, la verdad. | No neviem, úprimne.
¡Venga! | No tak! / Poď! | ¡Venga, vamos! | No tak, poďme!
¡Qué va! | Ale kdeže! | ¿Estás cansado? – ¡Qué va! | Si unavený? – Ale kdeže!
de hecho | v skutočnosti | De hecho, ya lo sabía. | V skutočnosti som to už vedel.
a lo mejor | možno | A lo mejor llueve mañana. | Možno zajtra bude pršať.
menos mal | ešte šťastie | Menos mal que has llegado. | Ešte šťastie, že si prišiel.
¡Ojalá! | Kiežby! | ¡Ojalá haga sol mañana! | Kiežby zajtra svietilo slnko!
en plan | akože (hovorovo) | Estaba en plan muy serio. | Bol akože veľmi vážny.
tío | kámo (hovorovo, Španielsko) | ¡Tío, qué fuerte! | Kámo, to je sila!
`}
],
sentences:[
["Espero que {tengas} un buen día.","Dúfam, že budeš mať pekný deň.","esperar que + subjuntivo.","B1"],
["Si {tuviera} tiempo, viajaría más.","Keby som mal čas, viac by som cestoval.","","B1"],
["Aunque {llueva}, saldremos.","Aj keby pršalo, pôjdeme von.","aunque + subjuntivo = aj keby.","B2"],
["Si lo hubiera sabido, no {habría} venido.","Keby som to bol vedel, nebol by som prišiel.","","B2"],
["Es el libro {del} que te hablé.","To je kniha, o ktorej som ti hovoril.","","B2"],
["{Pase} lo que pase, estaré aquí.","Nech sa stane čokoľvek, budem tu.","","C1"]
],
stories:[
{title:'¿Sigue viva la siesta?', level:'B2', paragraphs:[
 "Durante mucho tiempo, la siesta fue un símbolo de la cultura española. Hoy, sin embargo, pocos españoles duermen después de comer, sobre todo en las grandes ciudades.",
 "El ritmo de trabajo moderno y los largos trayectos dejan poco tiempo para descansar. Aun así, muchos expertos defienden una siesta corta de unos veinte minutos, porque mejora la concentración y reduce el estrés.",
 "Algunas empresas incluso han creado salas de descanso para sus empleados. Quizás la siesta no haya desaparecido, sino que simplemente se esté adaptando a los nuevos tiempos."],
 tr:[
 "Dlho bola siesta symbolom španielskej kultúry. Dnes však po jedle spí len málo Španielov, najmä vo veľkých mestách.",
 "Moderný pracovný rytmus a dlhé cesty do práce nechávajú málo času na oddych. Napriek tomu mnohí odborníci obhajujú krátku siestu asi na dvadsať minút, pretože zlepšuje sústredenie a znižuje stres.",
 "Niektoré firmy dokonca vytvorili pre zamestnancov oddychové miestnosti. Možno siesta nezmizla, ale len sa prispôsobuje novej dobe."],
 glossary:[{w:'sin embargo',sk:'však'},{w:'sobre todo',sk:'najmä'},{w:'trayectos',sk:'cesty (do práce)'},{w:'Aun así',sk:'napriek tomu'},{w:'defienden',sk:'obhajujú'},{w:'concentración',sk:'sústredenie'},{w:'salas de descanso',sk:'oddychové miestnosti'},{w:'desaparecido',sk:'zmizla'},{w:'adaptando',sk:'prispôsobuje'}],
 questions:[{q:'¿Duermen hoy muchos españoles la siesta?',options:['Sí, todos','Pocos, sobre todo en las ciudades','Solo los niños','Nadie lo sabe'],answer:1},
  {q:'¿Cuánto debe durar una siesta según los expertos?',options:['Dos horas','Unos veinte minutos','Toda la tarde','Cinco minutos'],answer:1},
  {q:'¿Qué han creado algunas empresas?',options:['Salas de descanso','Comedores nuevos','Gimnasios','Bibliotecas'],answer:0}]}
]
});

/* ───────── Portugalčina ───────── */
lvl('pt', {
levels:{basico:'A1', pessoas:'A1', verbos:'A1', numeros:'A1', comida:'A1', cidade:'A1', tempo:'A1', adjetivos:'A1',
  casa:'A2', trabalho:'A2', lazer:'A2', compras:'A2', saude:'A2', expressoes:'A2'},
units:[
{id:'conectores', level:'B1', title:'Spojky a súvislosti', desc:'Ako spájať myšlienky do dlhších viet.', items:`
porque | pretože | Fico em casa porque estou doente. | Zostanem doma, pretože som chorý.
então | tak, potom | Então, o que a gente faz? | Tak čo urobíme?
porém | avšak | É caro; porém, vale a pena. | Je to drahé, avšak oplatí sa to.
quando | keď | Quando eu era criança, morava em Nitra. | Keď som bol dieťa, býval som v Nitre.
se | ak | Se você quiser, a gente pode sair. | Ak chceš, môžeme ísť von.
embora | hoci | Embora esteja chovendo, vamos sair. | Hoci prší, pôjdeme von. | Po embora nasleduje subjuntivo.
enquanto | zatiaľ čo | Eu cozinho enquanto você faz as compras. | Ja varím, zatiaľ čo ty nakupuješ.
para que | aby | Vou explicar para que você entenda. | Vysvetlím to, aby si pochopil.
primeiro | najprv | Primeiro a gente come, depois sai. | Najprv sa najeme, potom ideme von.
finalmente | konečne | Finalmente é sexta! | Konečne je piatok!
`},
{id:'sentimentos', level:'B1', title:'Pocity a názory', desc:'Ako sa cítiš a čo si myslíš.', items:`
triste | smutný | Hoje estou um pouco triste. | Dnes som trochu smutný.
bravo | nahnevaný (Brazília) | Por que você está bravo? | Prečo si nahnevaný?
preocupado | ustarostený | Estou preocupado com a prova. | Robím si starosti kvôli skúške.
orgulhoso | hrdý | Estou orgulhoso de você. | Som na teba hrdý.
surpreso | prekvapený | Fiquei surpreso com a notícia. | Tá správa ma prekvapila.
Eu acho que | myslím, že | Eu acho que você tem razão. | Myslím, že máš pravdu.
Parece que | zdá sa, že | Parece que vai chover. | Zdá sa, že bude pršať.
Estou de saco cheio! | Mám toho plné zuby! | Estou de saco cheio de esperar! | Mám plné zuby čakania!
ter medo | báť sa | Não precisa ter medo. | Netreba sa báť.
sentir saudade | chýbať, túžiť za niekým | Vou sentir saudade de você. | Budeš mi chýbať. | saudade je typické portugalské slovo.
`},
{id:'debate', level:'B2', title:'Diskusia a argumentácia', desc:'Ako vyjadriť a obhájiť názor.', items:`
por um lado | na jednej strane | Por um lado, é prático. | Na jednej strane je to praktické.
por outro lado | na druhej strane | Por outro lado, é caro. | Na druhej strane je to drahé.
Não concordo. | Nesúhlasím. | Desculpa, mas não concordo. | Prepáč, ale nesúhlasím.
a vantagem | výhoda | A vantagem é o preço. | Výhodou je cena.
a desvantagem | nevýhoda | A única desvantagem é o barulho. | Jedinou nevýhodou je hluk.
em compensação | zato, na druhej strane | Ele é tímido; em compensação, a irmã é muito extrovertida. | On je hanblivý, zato jeho sestra je veľmi otvorená.
É verdade que | je pravda, že | É verdade que é difícil. | Je pravda, že je to ťažké.
no entanto | však, napriek tomu | É arriscado; no entanto, vou tentar. | Je to riskantné, napriek tomu to skúsim.
convencer | presvedčiť | É difícil convencer o meu chefe. | Je ťažké presvedčiť môjho šéfa.
no fim das contas | nakoniec, v konečnom dôsledku | No fim das contas, a decisão é sua. | Nakoniec je to tvoje rozhodnutie.
`},
{id:'formal', level:'B2', title:'Formálna komunikácia', desc:'E-maily, úrady a pracovná korešpondencia.', items:`
Prezados senhores | Vážení páni (v liste) | Prezados senhores, escrevo sobre o meu pedido. | Vážení páni, píšem ohľadom mojej objednávky.
Escrevo para | píšem, aby | Escrevo para pedir informações. | Píšem, aby som požiadal o informácie.
Segue em anexo | v prílohe posielam | Segue em anexo o meu currículo. | V prílohe posielam môj životopis.
Atenciosamente | S pozdravom | Atenciosamente, Marek Novák | S pozdravom, Marek Novák
a solicitação | žiadosť | Obrigado pela sua solicitação. | Ďakujeme za vašu žiadosť.
o prazo | lehota | O prazo termina na sexta. | Lehota končí v piatok.
marcar uma reunião | dohodnúť stretnutie | Podemos marcar uma reunião? | Môžeme si dohodnúť stretnutie?
confirmar | potvrdiť | Você pode confirmar a reserva? | Môžete potvrdiť rezerváciu?
Fico à disposição. | Som k dispozícii. | Para qualquer dúvida, fico à disposição. | V prípade otázok som k dispozícii.
Desde já agradeço. | Vopred ďakujem. | Desde já agradeço a sua atenção. | Vopred ďakujem za vašu pozornosť.
`},
{id:'expressoes2', level:'C1', title:'Idiómy', desc:'Obrazné spojenia, ktoré Brazílčania používajú stále.', items:`
Não é nenhum bicho de sete cabeças. | Nie je to nič hrozné. | Calma, não é nenhum bicho de sete cabeças. | Pokoj, nie je to nič hrozné.
estar nas nuvens | byť duchom neprítomný | Hoje você está nas nuvens. | Dnes si duchom neprítomný.
custar os olhos da cara | stáť majland | Esse carro custa os olhos da cara. | To auto stojí majland.
pagar mico | strápniť sa | Paguei mico na festa. | Na párty som sa strápnil.
dar uma mancada | pokaziť to, šliapnuť vedľa | Acho que dei uma mancada. | Myslím, že som to pokazil.
ser moleza | byť hračka | A prova foi moleza. | Skúška bola hračka.
acertar na mosca | trafiť presne | Você acertou na mosca! | Trafil si presne!
encher o saco | otravovať | Para de encher o saco! | Prestaň otravovať!
Está chovendo canivetes. | Leje ako z krhly. | Leva um guarda-chuva, está chovendo canivetes! | Zober si dáždnik, leje ako z krhly!
pisar na bola | urobiť chybu | O time pisou na bola no final. | Tím na konci urobil chybu.
`},
{id:'girias', level:'C2', title:'Hovorová portugalčina', desc:'Slová, ktoré počuješ na ulici a v seriáloch.', items:`
tipo | akože | Ele estava, tipo, muito nervoso. | Bol akože veľmi nervózny.
aí | a potom (hovorovo) | Aí ele saiu sem falar nada. | A potom odišiel bez slova.
né? | však? | Está calor, né? | Je teplo, však? | né = não é
cara | kámo, človeče | Cara, que dia! | Človeče, to bol deň!
Valeu! | Vďaka! | Valeu pela ajuda! | Vďaka za pomoc!
Nossa! | Páni! / Wow! | Nossa, que lindo! | Páni, aké krásne!
Tá bom. | Dobre. / Ok. | Tá bom, a gente se vê amanhã. | Dobre, uvidíme sa zajtra.
de boa | v pohode | Fica de boa, está tudo certo. | Buď v pohode, všetko je v poriadku.
sei lá | čo ja viem | Sei lá, talvez amanhã. | Čo ja viem, možno zajtra.
Fala sério! | Ale prosím ťa! / Vážne? | Fala sério, você ganhou? | Vážne, vyhral si?
`}
],
sentences:[
["Espero que você {tenha} um bom dia.","Dúfam, že budeš mať pekný deň.","esperar que + subjuntivo.","B1"],
["Se eu {tivesse} tempo, viajaria mais.","Keby som mal čas, viac by som cestoval.","","B1"],
["Embora {esteja} cansado, vou trabalhar.","Hoci som unavený, pôjdem pracovať.","","B2"],
["Se eu tivesse sabido, não {teria} vindo.","Keby som to bol vedel, nebol by som prišiel.","","B2"],
["Quando você {chegar}, me liga.","Keď prídeš, zavolaj mi.","budúci subjuntivo.","B2"],
["{Aconteça} o que acontecer, estarei aqui.","Nech sa stane čokoľvek, budem tu.","","C1"]
],
stories:[
{title:'O jeitinho brasileiro', level:'B2', paragraphs:[
 "No Brasil, fala-se muito do famoso “jeitinho”. É a capacidade de encontrar uma solução criativa para qualquer problema, mesmo quando as regras parecem impossíveis de cumprir.",
 "Para alguns, o jeitinho mostra a flexibilidade e o otimismo do povo brasileiro. Para outros, no entanto, ele pode levar a pequenas injustiças, porque nem sempre todos seguem as mesmas regras.",
 "De qualquer forma, quem passa um tempo no Brasil logo percebe que quase tudo se resolve com paciência, simpatia e uma boa conversa."],
 tr:[
 "V Brazílii sa veľa hovorí o slávnom „jeitinho“. Je to schopnosť nájsť kreatívne riešenie akéhokoľvek problému, aj keď sa pravidlá zdajú nemožné dodržať.",
 "Pre niektorých jeitinho ukazuje flexibilitu a optimizmus brazílskeho národa. Pre iných však môže viesť k malým nespravodlivostiam, pretože nie vždy všetci dodržiavajú rovnaké pravidlá.",
 "V každom prípade, kto strávi nejaký čas v Brazílii, čoskoro zistí, že takmer všetko sa vyrieši trpezlivosťou, priateľskosťou a dobrým rozhovorom."],
 glossary:[{w:'capacidade',sk:'schopnosť'},{w:'solução',sk:'riešenie'},{w:'cumprir',sk:'dodržať'},{w:'povo',sk:'národ, ľud'},{w:'no entanto',sk:'však'},{w:'injustiças',sk:'nespravodlivosti'},{w:'De qualquer forma',sk:'v každom prípade'},{w:'percebe',sk:'zistí, všimne si'},{w:'se resolve',sk:'vyrieši sa'},{w:'simpatia',sk:'priateľskosť'}],
 questions:[{q:'O que é o jeitinho?',options:['Uma comida típica','Uma solução criativa para problemas','Um tipo de música','Uma festa'],answer:1},
  {q:'Por que alguns criticam o jeitinho?',options:['Porque é caro','Porque pode levar a injustiças','Porque é difícil','Porque é antigo'],answer:1},
  {q:'Como quase tudo se resolve no Brasil?',options:['Com dinheiro','Com paciência e uma boa conversa','Com a polícia','Com e-mails'],answer:1}]}
]
});

/* ───────── Ruština ───────── */
lvl('ru', {
levels:{osnovy:'A1', semja:'A1', glagoly:'A1', chisla:'A1', eda:'A1', gorod:'A1', vremja:'A1', opisanie:'A1',
  dom:'A2', rabota:'A2', dosug:'A2', pokupki:'A2', zdorovje:'A2', frazy:'A2'},
units:[
{id:'svyazki', level:'B1', title:'Spojky a súvislosti', desc:'Ako spájať myšlienky do dlhších viet.', items:`
потому что | pretože | Я дома, потому что я болею. | Som doma, pretože som chorý.
поэтому | preto | Идёт дождь, поэтому я беру зонт. | Prší, preto si beriem dáždnik.
но | ale | Я устал, но счастлив. | Som unavený, ale šťastný.
когда | keď | Когда я был маленьким, я жил в Нитре. | Keď som bol malý, býval som v Nitre.
если | ak | Если хочешь, можем пойти гулять. | Ak chceš, môžeme ísť na prechádzku.
хотя | hoci | Хотя уже поздно, я ещё работаю. | Hoci je už neskoro, ešte pracujem.
пока | zatiaľ čo | Я готовлю, пока ты в магазине. | Varím, zatiaľ čo si v obchode. | пока znamená aj „čau“.
чтобы | aby | Я учу русский, чтобы читать книги. | Učím sa po rusky, aby som mohol čítať knihy.
сначала | najprv | Сначала поедим, потом пойдём гулять. | Najprv sa najeme, potom pôjdeme na prechádzku.
наконец | konečne | Наконец пятница! | Konečne piatok!
`},
{id:'chuvstva', level:'B1', title:'Pocity a názory', desc:'Ako sa cítiš a čo si myslíš.', items:`
грустный | smutný | Почему ты такой грустный? | Prečo si taký smutný?
злой | nahnevaný, zlý | Он злой, потому что автобус опоздал. | Je nahnevaný, pretože meškal autobus.
волноваться | robiť si starosti | Не надо волноваться. | Netreba si robiť starosti.
гордиться | byť hrdý | Я горжусь тобой. | Som na teba hrdý.
удивляться | čudovať sa | Я не удивляюсь. | Nečudujem sa.
Мне кажется | zdá sa mi | Мне кажется, будет дождь. | Zdá sa mi, že bude pršať.
Надоело! | Mám toho dosť! | Мне надоело ждать! | Mám dosť čakania!
бояться | báť sa | Не надо бояться. | Netreba sa báť.
скучать | chýbať (niekto mi) | Я скучаю по тебе. | Chýbaš mi.
радоваться | tešiť sa | Я радуюсь за тебя. | Teším sa za teba.
`},
{id:'diskussiya', level:'B2', title:'Diskusia a argumentácia', desc:'Ako vyjadriť a obhájiť názor.', items:`
с одной стороны | na jednej strane | С одной стороны, это удобно. | Na jednej strane je to pohodlné.
с другой стороны | na druhej strane | С другой стороны, это дорого. | Na druhej strane je to drahé.
Я не согласен. | Nesúhlasím. | Извини, но я не согласен. | Prepáč, ale nesúhlasím.
преимущество | výhoda | Главное преимущество — цена. | Hlavnou výhodou je cena.
недостаток | nevýhoda | Единственный недостаток — шум. | Jedinou nevýhodou je hluk.
зато | zato | Дорого, зато качественно. | Je to drahé, zato kvalitné.
действительно | skutočne | Это действительно сложно. | To je skutočne zložité.
тем не менее | napriek tomu | Это рискованно, тем не менее я попробую. | Je to riskantné, napriek tomu to skúsim.
убедить | presvedčiť | Его трудно убедить. | Ťažko ho presvedčiť.
в конце концов | nakoniec | В конце концов, это твоё решение. | Nakoniec je to tvoje rozhodnutie.
`},
{id:'ofits', level:'B2', title:'Formálna komunikácia', desc:'E-maily, úrady a pracovná korešpondencia.', items:`
Уважаемые коллеги | Vážení kolegovia | Уважаемые коллеги, напоминаю о встрече. | Vážení kolegovia, pripomínam stretnutie.
Обращаюсь к вам | obraciam sa na vás | Обращаюсь к вам с просьбой. | Obraciam sa na vás s prosbou.
во вложении | v prílohe | Моё резюме во вложении. | Môj životopis je v prílohe.
С уважением | S úctou | С уважением, Марек Новак | S úctou, Marek Novák
заявление | žiadosť | Я написал заявление на отпуск. | Napísal som žiadosť o dovolenku.
срок | lehota | Срок заканчивается в пятницу. | Lehota končí v piatok.
встреча | stretnutie | Встреча назначена на понедельник. | Stretnutie je naplánované na pondelok.
подтвердить | potvrdiť | Вы можете подтвердить бронь? | Môžete potvrdiť rezerváciu?
Я в вашем распоряжении. | Som vám k dispozícii. | По всем вопросам я в вашем распоряжении. | V prípade otázok som vám k dispozícii.
Заранее спасибо. | Vopred ďakujem. | Заранее спасибо за ответ. | Vopred ďakujem za odpoveď.
`},
{id:'idiomy', level:'C1', title:'Idiómy', desc:'Obrazné spojenia, ktoré Rusi používajú stále.', items:`
проще простого | hračka, úplne jednoduché | Эта задача проще простого. | Táto úloha je hračka.
витать в облаках | byť duchom neprítomný | Хватит витать в облаках! | Prestaň byť duchom mimo!
стоить бешеных денег | stáť majland | Эта машина стоит бешеных денег. | To auto stojí majland.
водить за нос | vodiť za nos | Не надо водить меня за нос! | Nevoď ma za nos!
сесть в лужу | strápniť sa | На экзамене я сел в лужу. | Na skúške som sa strápnil.
попасть в точку | trafiť klinec po hlavičke | Ты попал в точку! | Trafil si klinec po hlavičke!
сыт по горло | mať plné zuby | Я сыт по горло этими обещаниями. | Mám plné zuby týchto sľubov.
льёт как из ведра | leje ako z krhly | Возьми зонт, льёт как из ведра. | Zober si dáždnik, leje ako z krhly.
бить баклуши | leňošiť | Хватит бить баклуши, пора работать! | Dosť leňošenia, je čas pracovať!
Без труда не выловишь и рыбку из пруда. | Bez práce nie sú koláče. | Учи слова каждый день: без труда не выловишь и рыбку из пруда. | Uč sa slovíčka každý deň: bez práce nie sú koláče.
`},
{id:'razgovor', level:'C2', title:'Hovorová ruština', desc:'Slová, ktoré počuješ na ulici a vo filmoch.', items:`
ну | no (hovorovo) | Ну, давай начнём. | No, poďme začať.
вообще-то | vlastne | Вообще-то я хотел остаться дома. | Vlastne som chcel zostať doma.
типа | akože | Он типа всё знает. | Akože všetko vie.
короче | skrátka | Короче, мы опоздали. | Skrátka, zmeškali sme.
ладно | dobre, tak teda | Ладно, я согласен. | Dobre, súhlasím.
блин | do čerta (mierne) | Блин, я забыл ключи! | Do čerta, zabudol som kľúče!
Да ладно! | Ale choď! / Vážne? | Ты выиграл? Да ладно! | Vyhral si? Ale choď!
как бы | akoby | Я как бы не против. | Ja akoby nie som proti.
Давай! | No tak! / Poďme! / Čau! | Давай, до завтра! | Tak čau, do zajtra!
ничего себе | no teda! | Ничего себе, какой большой! | No teda, aký veľký!
`}
],
sentences:[
["Если бы у меня было время, я бы {больше} путешествовал.","Keby som mal čas, viac by som cestoval.","","B1"],
["Я хочу, {чтобы} ты пришёл.","Chcem, aby si prišiel.","чтобы + minulý tvar.","B1"],
["{Хотя} уже поздно, я ещё работаю.","Hoci je už neskoro, ešte pracujem.","","B1"],
["Книга, {которую} я читаю, очень интересная.","Kniha, ktorú čítam, je veľmi zaujímavá.","","B2"],
["Чем больше я читаю, {тем} лучше понимаю.","Čím viac čítam, tým lepšie rozumiem.","","B2"],
["{Несмотря} на дождь, мы пошли гулять.","Napriek dažďu sme išli na prechádzku.","несмотря на + akuzatív.","C1"]
],
stories:[
{title:'Русская баня', level:'B2', paragraphs:[
 "Баня — важная часть русской культуры. Люди ходят в баню не только чтобы помыться, но и чтобы отдохнуть, пообщаться с друзьями и забыть о повседневных проблемах.",
 "Традиционно в бане используют веник из берёзы. Им легко похлопывают по спине, что улучшает кровообращение. После жаркой парилки многие прыгают в холодную воду или даже в снег.",
 "Иностранцам это может показаться странным, однако те, кто попробовал, обычно признают, что после бани чувствуют себя как новые люди."],
 tr:[
 "Baňa (ruská parná sauna) je dôležitou súčasťou ruskej kultúry. Ľudia do nej chodia nielen sa umyť, ale aj oddýchnuť si, porozprávať sa s priateľmi a zabudnúť na každodenné problémy.",
 "Tradične sa v bani používa brezová metlička. Zľahka sa ňou šľahá po chrbte, čo zlepšuje krvný obeh. Po horúcej parnej miestnosti mnohí skáču do studenej vody alebo dokonca do snehu.",
 "Cudzincom sa to môže zdať zvláštne, no tí, čo to vyskúšali, zvyčajne priznávajú, že po bani sa cítia ako znovuzrodení."],
 glossary:[{w:'не только',sk:'nielen'},{w:'пообщаться',sk:'porozprávať sa'},{w:'повседневных',sk:'každodenných'},{w:'веник',sk:'metlička (zväzok prútov)'},{w:'берёзы',sk:'brezy'},{w:'кровообращение',sk:'krvný obeh'},{w:'парилки',sk:'parnej miestnosti'},{w:'Иностранцам',sk:'cudzincom'},{w:'однако',sk:'avšak'},{w:'признают',sk:'priznávajú'}],
 questions:[{q:'Зачем люди ходят в баню?',options:['Только чтобы помыться','Чтобы отдохнуть и пообщаться','Чтобы работать','Чтобы готовить'],answer:1},
  {q:'Что улучшает веник?',options:['Аппетит','Кровообращение','Сон','Память'],answer:1},
  {q:'Куда многие прыгают после парилки?',options:['В горячую воду','В холодную воду или снег','В бассейн','В кровать'],answer:1}]}
]
});

})(window.CONTENT);
