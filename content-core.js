/* Jazykový pas: core vocabulary for every language.
   The most frequent everyday words and phrases, one word per meaning (no rare synonyms).
   Master list below: "Slovak meaning | Slovak example". Each core-xx.js file gives, line by line in the same order:
   "target | example | note | Slovak meaning override | Slovak example override" (overrides optional).
   "-" skips a line for that language.
   Words a language already has in its other lessons are skipped automatically. */
(function(){
const M = [
{id:'k-cisla1', level:'A1', title:'Čísla 1 – 20', desc:'Počítanie, vek, hodiny a ceny.', items:`
jeden | Mám jedného brata.
dva | Dve kávy, prosím.
tri | Mám tri deti.
štyri | Stojí to štyri eurá.
päť | Pracujem päť dní v týždni.
šesť | Vstávam o šiestej.
sedem | Týždeň má sedem dní.
osem | Obchod otvára o ôsmej.
deväť | Autobus číslo deväť ide do centra.
desať | Počkaj desať minút.
jedenásť | Môj syn má jedenásť rokov.
dvanásť | Je dvanásť hodín.
pätnásť | Lekcia trvá pätnásť minút.
dvadsať | Mám dvadsať rokov.`},
{id:'k-cisla2', level:'A1', title:'Väčšie čísla a poradie', desc:'Ceny, roky a kto je prvý.', items:`
tridsať | Stojí to tridsať eur.
päťdesiat | Môj otec má päťdesiat rokov.
sto | Je tam sto ľudí.
tisíc | Byt stojí tisíc eur mesačne.
prvý | Je to môj prvý deň v práci.
druhý | Toto je môj druhý týždeň tu.
tretí | Toto je moja tretia lekcia.
posledný | Toto je posledný vlak.
polovica | Zjedol som polovicu pizze.
číslo | Aké je tvoje telefónne číslo?`},
{id:'k-zamena', level:'A1', title:'Ja, ty, my', desc:'Osobné a privlastňovacie zámená.', items:`
ja | Ja som z Bratislavy.
ty | Ty si môj najlepší kamarát.
on | On pracuje v banke.
ona | Ona hovorí tri jazyky.
my | My bývame v centre.
vy (viacerí) | Prídete vy dvaja zajtra?
oni | Oni sú z Rakúska.
Vy (zdvorilo) | Hovoríte po slovensky?
môj | To je môj mobil.
tvoj | Kde je tvoj brat?
jeho | Jeho brat býva vo Viedni.
jej | Jej auto je nové.
náš | Náš byt je malý.`},
{id:'k-den', level:'A1', title:'Môj deň', desc:'Slovesá, ktoré použiješ každý deň.', items:`
vstávať | Vstávam o siedmej.
spať | Cez víkend spím dlho.
jesť | Ješ mäso?
piť | Pijem veľa vody.
variť | Dnes večer varím ja.
sprchovať sa | Sprchujem sa ráno.
učiť sa | Učím sa každý deň desať minút.
kupovať | Kde kupuješ chlieb?
otvoriť | Môžem otvoriť okno?
zatvoriť | Zatvor dvere, prosím.
začať | Film začína o ôsmej.
skončiť | Kedy končíš v práci?
čakať | Čakám na autobus.
hľadať | Hľadám svoje kľúče.`},
{id:'k-pohyb', level:'A1', title:'Pohyb a smer', desc:'Ísť, prísť, odísť, vrátiť sa.', items:`
ísť pešo | Do práce chodím pešo.
prísť | Prídem o piatej.
odísť | Musím už odísť.
vrátiť sa | Kedy sa vrátiš?
vojsť | Vojdite, prosím.
nastúpiť | Nastúp do autobusu číslo päť.
vystúpiť | Vystúpte na ďalšej zastávke.
sedieť | Sedím vedľa okna.
stáť | Stojím pred obchodom.
ležať | Ležím na pláži.
behať | Behám v parku.
prechádzať sa | Večer sa prechádzame v parku.
ponáhľať sa | Musím sa ponáhľať.`},
{id:'k-jazyk', level:'A1', title:'Keď sa učíš jazyk', desc:'Vety, ktoré ti pomôžu, keď niečomu nerozumieš.', items:`
Ako sa to povie? |
Čo to znamená? |
Môžete to zopakovať? |
Ešte raz, prosím. |
Hovorte pomalšie, prosím. |
Ako sa to píše? |
Ako sa to vyslovuje? |
Môžete mi to napísať? |
Je to správne? |
Čo je to? |
Mám otázku. |
Hovoríte po anglicky? |
Ešte sa učím. |`},
{id:'k-miesta', level:'A1', title:'Miesta v meste', desc:'Kam ideš a kde to je.', items:`
obchod | Obchod je hneď za rohom.
banka | Banka je zatvorená.
pošta | Musím ísť na poštu.
nemocnica | Nemocnica je ďaleko.
škola | Deti sú v škole.
kostol | Kostol je na námestí.
park | Poďme do parku.
námestie | Stretneme sa na námestí.
múzeum | Múzeum je v pondelok zatvorené.
reštaurácia | Poznáš dobrú reštauráciu?
kaviareň | Sedím v kaviarni.
centrum | Bývame blízko centra.
most | Choď cez most.`},
{id:'k-kde', level:'A1', title:'Kde? Hore, dole, vedľa', desc:'Kde čo je.', items:`
tu | Bývam tu.
tam | Sadni si tam.
blízko | Je to blízko.
ďaleko | Je to ďaleko?
vedľa | Lekáreň je vedľa banky.
oproti | Bývam oproti škole.
medzi | Pošta je medzi bankou a kaviarňou.
pod | Mačka je pod stolom.
nad | Lampa visí nad stolom.
vonku | Deti sa hrajú vonku.
vnútri | Počkám vnútri.
hore | Kúpeľňa je hore.
dole | Kuchyňa je dole.`},
{id:'k-kedy', level:'A1', title:'Kedy? Časti dňa', desc:'Ráno, večer, hodina, rok.', items:`
ráno | Ráno pijem kávu.
poobede | Poobede mám čas.
večer | Večer som doma.
v noci | V noci zle spím.
hodina | Čakám už hodinu.
minúta | Mám päť minút.
mesiac | Budúci mesiac idem do Viedne.
rok | Tento rok chcem veľa cestovať.
skoro (zavčasu) | Zajtra musím vstať skoro.
neskoro | Je neskoro, idem domov.
čoskoro | Uvidíme sa čoskoro!
potom | Najprv jem, potom sa učím.
predtým | Predtým som býval v Prahe.`},
{id:'k-dni', level:'A1', title:'Dni a ročné obdobia', desc:'Pondelok až nedeľa, jar až zima.', items:`
pondelok | V pondelok začínam novú prácu.
utorok | V utorok mám kurz.
streda | V stredu som doma.
štvrtok | Vo štvrtok ideme do kina.
piatok | V piatok večer idem von.
sobota | V sobotu spím dlho.
nedeľa | V nedeľu obedujeme s rodičmi.
jar | Na jar je všetko zelené.
leto | V lete ideme k moru.
jeseň | Na jeseň často prší.
zima (ročné obdobie) | V zime je tu veľa snehu.
narodeniny | Kedy máš narodeniny?`},
{id:'k-casto', level:'A2', title:'Ako často?', desc:'Vždy, niekedy, nikdy.', items:`
niekedy | Niekedy varím ja.
zriedka | Zriedka pozerám televíziu.
nikdy | Nikdy nemám čas.
obvykle | Obvykle vstávam o siedmej.
každý deň | Každý deň sa učím.
raz týždenne | Plávam raz týždenne.
dvakrát | Bol som tam dvakrát.
znova | Znova prší!
ešte raz | Skúsme to ešte raz.
hneď | Prídem hneď.
stále (ešte) | Stále prší.
zatiaľ | Zatiaľ je všetko v poriadku.`},
{id:'k-ludia', level:'A1', title:'Ľudia okolo nás', desc:'Kto je kto.', items:`
človek | Je to dobrý človek.
ľudia | Na ulici je veľa ľudí.
chlapec | Ten chlapec je môj syn.
dievča | To dievča hovorí po anglicky.
babka | Moja babka má osemdesiat rokov.
dedko | Dedko býva na dedine.
syn | Môj syn chodí do školy.
dcéra | Moja dcéra študuje medicínu.
manžel | Môj manžel varí lepšie ako ja.
manželka | Jeho manželka je lekárka.
pán | Ten pán čaká na vás.
pani | Tá pani je moja suseda.
sused | Môj sused je veľmi milý.`},
{id:'k-telo', level:'A2', title:'Telo', desc:'Keď niečo bolí.', items:`
hlava | Bolí ma hlava.
oko | Mám modré oči.
ucho | Nepočujem dobre na jedno ucho.
nos | Mám upchatý nos.
ústa | Otvorte ústa, prosím.
zub | Bolí ma zub.
ruka | Umy si ruky.
noha | Zlomil som si nohu.
srdce | Srdce mi bije rýchlo.
brucho | Bolí ma brucho.
chrbát | Bolí ma chrbát.
vlasy | Má dlhé vlasy.
hrdlo | Bolí ma hrdlo.`},
{id:'k-jedlo', level:'A1', title:'Jedlo a nápoje', desc:'Čo ješ a piješ.', items:`
mlieko | Pijem kávu s mliekom.
čaj | Dáš si čaj?
pivo | Jedno pivo, prosím.
víno | Dáme si červené víno.
ovocie | Jem veľa ovocia.
jablko | Chceš jablko?
zemiaky | Dnes sú zemiaky s mäsom.
ryža | Mäso s ryžou, prosím.
cestoviny | Deti milujú cestoviny.
syr | Kúpim chlieb a syr.
vajce | Na raňajky jem vajcia.
cukor | Kávu bez cukru, prosím.
soľ | Podáš mi soľ?
ryba | Jem rybu raz týždenne.`},
{id:'k-stol', level:'A2', title:'Pri stole', desc:'Raňajky, obed, večera.', items:`
raňajky | Čo máš na raňajky?
obed | Obed je o dvanástej.
večera | Dnes je večera u nás.
tanier | Podaj mi tanier, prosím.
pohár | Pohár vody, prosím.
šálka | Dáš si šálku čaju?
nôž | Potrebujem nôž.
vidlička | Môžem dostať vidličku?
lyžica | Polievka sa je lyžicou.
mať hlad | Mám hlad.
mať smäd | Máš smäd?
chutiť | Chutí ti to?
sladký | Tento koláč je veľmi sladký.`},
{id:'k-doma', level:'A2', title:'Doma', desc:'Dom, záhrada a vybavenie.', items:`
dom | Máme malý dom so záhradou.
záhrada | Deti sú v záhrade.
obývačka | Večer sedíme v obývačke.
schody | Výťah nefunguje, ideme po schodoch.
stena | Na stene visí obraz.
lampa | Lampa je na stole.
chladnička | Mlieko je v chladničke.
práčka | Práčka je pokazená.
gauč | Spím na gauči.
skriňa | Oblečenie je v skrini.
poschodie | Bývam na treťom poschodí.
okno | Otvor okno.`},
{id:'k-prace', level:'A2', title:'Domáce práce', desc:'Upratovanie, pranie, opravy.', items:`
upratovať | V sobotu upratujeme.
prať | Musím prať.
umývať riad | Kto dnes umýva riad?
vysávať | Vysávam raz týždenne.
vyniesť smeti | Vynes smeti, prosím.
opraviť | Vieš opraviť bicykel?
umyť | Umyl som auto.
zapnúť | Zapni svetlo.
vypnúť | Vypni televízor.
pokaziť sa | Mobil sa mi pokazil.
svetlo | Je tu málo svetla.`},
{id:'k-farby', level:'A1', title:'Farby', desc:'Akej farby to je.', items:`
farba | Akú farbu máš rád?
červený | Mám červené auto.
modrý | Obloha je modrá.
zelený | Tráva je zelená.
žltý | Banány sú žlté.
čierny | Pijem čiernu kávu.
biely | Steny sú biele.
sivý | Dnes je sivý deň.
hnedý | Má hnedé oči.
oranžový | Pomaranč je oranžový.
ružový | Kúpila si ružové šaty.
svetlý | Byt je veľmi svetlý.
tmavý | Má tmavé vlasy.`},
{id:'k-aky', level:'A1', title:'Aký je? Opisy 2', desc:'Prídavné mená do každej vety.', items:`
mladý | Je ešte mladý.
starý | Môj počítač je starý.
nový | Mám nový mobil.
dobrý | To je dobrý nápad.
zlý | Mám zlý deň.
dlhý | Bol to dlhý deň.
krátky | Mám krátke vlasy.
vysoký | Môj brat je vysoký.
plný | Autobus je plný.
prázdny | Chladnička je prázdna.
čistý | Je kuchyňa čistá?
špinavý | Moje topánky sú špinavé.
zaujímavý | Je to zaujímavá kniha.`},
{id:'k-povaha', level:'A2', title:'Povaha', desc:'Aký je človek.', items:`
milý | Tvoja mama je veľmi milá.
priateľský | Ľudia sú tu priateľskí.
zábavný | Môj brat je zábavný.
nudný | Ten film bol nudný.
múdry | Je to múdra žena.
hlúpy | To bola hlúpa otázka.
lenivý | Dnes som lenivý.
pracovitý | Je veľmi pracovitý.
zdvorilý | Buď zdvorilý.
trpezlivý | Musíš byť trpezlivý.
plachý | Je trochu plachá.
sebavedomý | Je veľmi sebavedomý.
čestný | Je to čestný človek.`},
{id:'k-adj', level:'A2', title:'Užitočné prídavné mená', desc:'Pripravený, hotový, voľný.', items:`
zaneprázdnený | Prepáč, teraz som zaneprázdnený.
pripravený | Si pripravený?
hotový | Večera je hotová.
voľný | Je toto miesto voľné?
sám | Bývam sám.
istý | Si si istý?
správny | To je správna odpoveď.
nesprávny | Mám nesprávne číslo.
možný | Je to možné?
nemožný | To je nemožné!
potrebný | Je to naozaj potrebné?
normálny | To je úplne normálne.`},
{id:'k-chcem', level:'A1', title:'Chcem, potrebujem, môžem', desc:'Vety, ktorými povieš, čo chceš.', items:`
Chcel by som | Chcel by som lístok do Viedne.
Potrebujem | Potrebujem pomoc.
Mám rád | Mám rád hudbu.
Nemám rád | Nemám rád zimu.
Páči sa mi | Páči sa mi tvoja bunda.
Môžem | Môžem tu sedieť?
Musím ísť. |
Mal by si | Mal by si ísť k lekárovi.
Nemusíš. | Nemusíš platiť.
Nesmieš | Tu nesmieš fajčiť.
Mám chuť na | Mám chuť na pizzu.
Je mi zima. |
Je mi teplo. |`},
{id:'k-otazky', level:'A1', title:'Otázky, ktoré potrebuješ', desc:'Najčastejšie otázky v rozhovore.', items:`
Koľko je hodín? |
Odkiaľ si? |
Kde bývaš? |
Čo robíš? (povolanie) |
Koľko máš rokov? |
Máš čas? |
Čo si dáš? |
Ako sa voláš? |
Je tu niekde bankomat? |
Môžem platiť kartou? |
Kedy otvárajú? |
Čo sa stalo? |
Si v poriadku? |`},
{id:'k-reakcie', level:'A1', title:'Áno, nie a krátke odpovede', desc:'Rýchle reakcie v rozhovore.', items:`
áno |
nie |
Naozaj? |
Jasné. |
V poriadku. |
Nie je za čo. |
Rozumiem. |
Dúfam, že áno. |
Myslím, že áno. |
Myslím, že nie. |
Ja tiež. |
Ja nie. |
Možno neskôr. |`},
{id:'k-plany', level:'A2', title:'Stretnutie a plány', desc:'Dohodni sa s kamarátom.', items:`
Poďme! | Poďme do kina!
Kedy sa stretneme? |
O koľkej? |
Kde sa stretneme? |
Hodí sa ti to? |
Mám čas. |
Nemám čas. |
Uvidíme sa zajtra! |
Teším sa. |
Napíšem ti. |
Už mám plány. |
Čo robíš cez víkend? |
Prídeš? |`},
{id:'k-mobil', level:'A2', title:'Mobil a správy', desc:'Ako sa dnes komunikuje.', items:`
mobil | Kde je môj mobil?
správa | Dostal som správu.
napísať správu | Napíšem ti správu.
zavolať | Zavolám ti večer.
aplikácia | Stiahni si tú aplikáciu.
heslo | Aké je heslo na wifi?
nabíjačka | Máš nabíjačku?
fotka | Pošli mi fotku.
odfotiť | Môžete nás odfotiť?
sociálne siete | Trávim veľa času na sociálnych sieťach.
prihlásiť sa (do aplikácie) | Neviem sa prihlásiť.
účet (v aplikácii) | Vytvor si účet.
batéria | Mám slabú batériu.`},
{id:'k-pocitac', level:'B1', title:'Počítač a internet', desc:'Práca na počítači.', items:`
počítač | Pracujem celý deň na počítači.
notebook | Zoberiem si notebook.
súbor | Pošli mi ten súbor.
e-mail | Napíšem ti e-mail.
odkaz (link) | Pošlem ti odkaz.
kliknúť | Klikni sem.
vymazať | Omylom som to vymazal.
vytlačiť | Musím vytlačiť lístok.
nastavenia | Choď do nastavení.
klávesnica | Klávesnica nefunguje.
videohovor | Máme videohovor o desiatej.
vyhľadať | Vyhľadaj to na internete.
internet | Nemám internet.`},
{id:'k-peniaze', level:'A2', title:'Peniaze', desc:'Platiť, šetriť, požičať.', items:`
peniaze | Nemám pri sebe peniaze.
hotovosť | Máte hotovosť?
bankový účet | Potrebujem bankový účet.
bankomat | Kde je bankomat?
minúť | Minul som veľa peňazí.
ušetriť | Chcem ušetriť na auto.
požičať si | Môžem si požičať tvoje pero?
požičať (niekomu) | Požičiaš mi desať eur?
zľava | Je tu zľava?
účtenka | Potrebujete účtenku?
dlžiť | Koľko ti dlžím?
drobné | Nemám drobné.`},
{id:'k-doprava', level:'A1', title:'Doprava', desc:'Ako sa dostaneš z miesta na miesto.', items:`
auto | Moje auto je pokazené.
autobus | Autobus mešká.
električka | Choď električkou číslo štyri.
bicykel | Do práce jazdím na bicykli.
lietadlo | Lietadlo má meškanie.
loď | Ideme loďou.
taxík | Zavolám taxík.
parkovať | Kde môžem parkovať?
meškať | Prepáč, meškám.
zápcha | Som v zápche.
odchod | Kedy je odchod?
príchod | Príchod je o šiestej.
nástupište | Vlak ide z nástupišťa tri.`},
{id:'k-cesta', level:'A2', title:'Na cestách', desc:'Pas, batožina a letisko.', items:`
pas | Nezabudni pas!
batožina | Kde si môžem vyzdvihnúť batožinu?
mapa | Máš mapu?
turista | V lete je tu veľa turistov.
zahraničie | Pracuje v zahraničí.
dovolenka | Kam ideš na dovolenku?
letenka | Kúpil som letenku do Lisabonu.
hranica | Na hranici sme čakali hodinu.
cesta (výlet) | Ako bola cesta?
zmeškať | Zmeškal som vlak.
zbaliť sa | Ešte sa musím zbaliť.`},
{id:'k-restika', level:'A2', title:'V reštaurácii', desc:'Od rezervácie po sprepitné.', items:`
stôl pre dvoch | Máte stôl pre dvoch?
čašník | Čašník je veľmi milý.
predjedlo | Ako predjedlo si dám polievku.
hlavné jedlo | Čo je hlavné jedlo?
dezert | Dáte si dezert?
Dám si | Dám si rybu.
sprepitné | Nechám sprepitné.
vegetariánsky | Máte niečo vegetariánske?
alergia | Mám alergiu na orechy.
Na zdravie! (prípitok) |
Bolo to výborné. |
polievka | Polievka je studená.`},
{id:'k-sluzby', level:'A2', title:'Obchody a služby', desc:'Pekáreň, trh, otváracie hodiny.', items:`
pekáreň | Kúpim chlieb v pekárni.
trh | V sobotu ideme na trh.
kaderník | Zajtra idem ku kaderníkovi.
otvorené | Je otvorené aj v nedeľu?
zatvorené | Dnes je zatvorené.
otváracie hodiny | Aké sú otváracie hodiny?
rad (ľudí) | Ten rad je veľmi dlhý.
vrátiť (tovar) | Môžem to vrátiť?
vymeniť | Môžem to vymeniť za menšiu veľkosť?
balík | Prišiel ti balík.
objednať online | Objednal som to online.
doručenie | Doručenie je zadarmo.
zadarmo | Vstup je zadarmo.`},
{id:'k-pomoc', level:'A2', title:'U lekára a v núdzi', desc:'Keď ide o zdravie a bezpečnosť.', items:`
Pomoc! |
Zavolajte sanitku! |
polícia | Polícia je na ceste.
nehoda | Stala sa nehoda.
zranený | Je niekto zranený?
bolesť | Mám silné bolesti.
kašeľ | Mám kašeľ.
nádcha | Mám nádchu.
prechladnutie | Mám prechladnutie, zostávam doma.
tabletka | Vezmite si jednu tabletku ráno.
recept (od lekára) | Potrebujete recept.
poistenie | Máte zdravotné poistenie?
pohotovosť | Kde je pohotovosť?`},
{id:'k-skola', level:'A2', title:'Škola a štúdium', desc:'Učenie, skúšky, otázky.', items:`
univerzita | Študujem na univerzite.
trieda | V našej triede je dvadsať žiakov.
učiteľ | Náš učiteľ je veľmi trpezlivý.
študent | Som študent.
skúška | Zajtra mám skúšku.
domáca úloha | Urobil si domácu úlohu?
učiť (niekoho) | Učí deti angličtinu.
študovať | Čo študuješ?
otázka | To je dobrá otázka.
odpoveď | Poznáš odpoveď?
slovník | Pozriem sa do slovníka.
kurz | Chodím na jazykový kurz.`},
{id:'k-veci', level:'A1', title:'Najčastejšie podstatné mená', desc:'Slová, ktoré sú v každom rozhovore.', items:`
vec | Mám veľa vecí.
čas | Čas letí.
život | Život je krásny.
svet | Chcem vidieť svet.
miesto | Je to krásne miesto.
cesta (smer) | Poznáš cestu?
slovo | Nepoznám to slovo.
jazyk | Koľko jazykov hovoríš?
krajina (štát) | Je to krásna krajina.
mesto | Bývam vo veľkom meste.
problém | Máme problém.
nápad | Mám nápad!
pravda | To je pravda.`},
{id:'k-veci2', level:'A2', title:'Ďalšie dôležité podstatné mená', desc:'Začiatok, koniec, dôvod, zmena.', items:`
začiatok | Na začiatku je to ťažké.
koniec | Koniec filmu bol smutný.
časť | Prvá časť bola lepšia.
dôvod | Aký je dôvod?
možnosť | Máme dve možnosti.
zmena | Potrebujem zmenu.
rozhodnutie | Je to ťažké rozhodnutie.
výsledok | Výsledok je dobrý.
rozdiel | Aký je rozdiel?
cieľ | Môj cieľ je hovoriť plynule.
chyba | Urobil som chybu.
pomoc | Ďakujem za pomoc.
príbeh | Je to dlhý príbeh.`},
{id:'k-slovesa3', level:'A2', title:'Slovesá, ktoré počuješ stále', desc:'Poznať, pamätať si, skúsiť.', items:`
poznať (niekoho) | Poznáš môjho brata?
myslieť si | Čo si myslíš?
pamätať si | Pamätáš si na mňa?
zabudnúť | Zabudol som tvoje meno.
páčiť sa | Páči sa ti to?
skúsiť | Skús to ešte raz.
použiť | Môžem použiť tvoj mobil?
zmeniť | Chcem zmeniť svoj život.
dostať | Dostal som darček.
stať sa | To sa stáva.
cítiť sa | Cítim sa dobre.
nechať | Nechaj to tak.
zdať sa | Zdá sa, že bude pršať.`},
{id:'k-akcie', level:'A2', title:'Čo robíš rukami', desc:'Položiť, držať, niesť.', items:`
položiť | Polož to na stôl.
držať | Drž mi tašku.
niesť | Môžem ti pomôcť niesť kufor?
chytiť | Chyť loptu!
ťahať | Dvere treba ťahať.
tlačiť | Dvere treba tlačiť.
zdvihnúť | Zdvihni to zo zeme.
spadnúť | Mobil mi spadol.
rozbiť | Rozbil som pohár.
stratiť | Stratil som peňaženku.
schovať | Kde si to schoval?
hodiť | Hoď mi kľúče.`},
{id:'k-spolu', level:'A2', title:'Ľudia spolu', desc:'Stretnúť, pozvať, poďakovať.', items:`
stretnúť | Stretol som starého kamaráta.
navštíviť | Zajtra navštívim babku.
pozvať | Chcem ťa pozvať na večeru.
poďakovať | Chcem ti poďakovať.
ospravedlniť sa | Chcem sa ospravedlniť.
sľúbiť | Sľubujem!
súhlasiť | Súhlasím s tebou.
odporučiť | Čo mi odporúčate?
dohodnúť sa | Dohodli sme sa na piatku.
rozhodnúť sa | Ešte som sa nerozhodol.
vybrať si | Vyber si jedno.
požiadať | Požiadal ma o pomoc.
dovoliť | Rodičia mi to nedovolia.`},
{id:'k-proces', level:'B1', title:'Pokračovať, prestať, zrušiť', desc:'Plány a ich zmeny.', items:`
pokračovať | Pokračujme zajtra.
prestať | Prestal som fajčiť.
zastaviť | Zastavte tu, prosím.
zlepšiť sa | Moja výslovnosť sa zlepšuje.
pripraviť | Pripravím večeru.
plánovať | Čo plánuješ na leto?
dokončiť | Musím dokončiť prácu.
zrušiť | Musím zrušiť stretnutie.
posunúť (termín) | Môžeme to posunúť na zajtra?
uspieť | Dúfam, že uspeješ.
zvládnuť | Zvládneš to!`},
{id:'k-ako', level:'A2', title:'Ako? Užitočné príslovky', desc:'Slová, ktoré spresnia vetu.', items:`
dobre | Spala si dobre?
zle | Dnes sa cítim zle.
spolu | Poďme spolu.
takmer | Som takmer hotový.
úplne | Úplne som zabudol.
trochu | Som trochu unavený.
príliš | Je to príliš drahé.
hlavne | Hlavne, že si zdravý.
zrazu | Zrazu začalo pršať.
konečne | Konečne je víkend!
našťastie | Našťastie sa nič nestalo.
bohužiaľ | Bohužiaľ nemám čas.
rýchlo | Poď rýchlo!`},
{id:'k-spojky', level:'A2', title:'Spájanie viet', desc:'A, alebo, okrem toho, kým.', items:`
a | Kávu a vodu, prosím.
alebo | Čaj alebo kávu?
okrem toho | Okrem toho je to lacné.
namiesto | Namiesto kávy pijem čaj.
inak | Ponáhľaj sa, inak zmeškáme vlak.
ani | Nemám čas ani peniaze.
buď – alebo | Buď dnes, alebo zajtra.
aj keď | Prídem, aj keď budem unavený.
kým (nie) | Počkaj, kým prídem.
predtým, než | Umy si ruky predtým, než ješ.
potom, čo | Potom, čo som skončil, som išiel domov.`},
{id:'k-porovnanie', level:'A2', title:'Porovnávanie', desc:'Väčší, lepší, rovnaký.', items:`
väčší | Tvoj byt je väčší.
menší | Máte menšiu veľkosť?
lepší | Toto je lepšie.
horší | Počasie je horšie ako včera.
najlepší | Je to najlepšia pizza v meste.
viac ako | Zarába viac ako ja.
menej ako | Stojí to menej ako desať eur.
rovnaký | Máme rovnaké tričko.
iný | Chcem inú farbu.
podobný | Sú si veľmi podobní.
taký – ako | Je taký vysoký ako jeho otec.`},
{id:'k-rozhovor', level:'B1', title:'Aby rozhovor plynul', desc:'Slová, ktorými spájaš myšlienky.', items:`
To dáva zmysel. |
To je zaujímavé. |
Mimochodom | Mimochodom, videl si Petra?
Vlastne | Vlastne nie.
Každopádne | Každopádne, ďakujem.
Inými slovami |
Napríklad | Napríklad?
Ako som povedal |
Počkaj. |
Neviem, ako to povedať. |
Ide o to, že |
Myslíš? |`},
{id:'k-pocity', level:'A2', title:'Smiať sa, plakať, dúfať', desc:'Čo cítiš a čo robíš.', items:`
smiať sa | Prečo sa smeješ?
plakať | Dieťa plače.
usmievať sa | Usmievaj sa!
hanbiť sa | Hanbím sa.
báť sa | Bojím sa psov.
dúfať | Dúfam, že prídeš.
ľutovať | Ľutujem to.
nudiť sa | Nudím sa.
stres | Mám v práci veľa stresu.
radosť | To mi robí radosť.
objať | Objal ma.`},
{id:'k-vztahy', level:'B1', title:'Vzťahy a život', desc:'Od zoznámenia po svadbu.', items:`
zoznámiť sa | Kde ste sa zoznámili?
chodiť spolu | Chodia spolu dva roky.
vziať sa | Budúci rok sa berieme.
svadba | Svadba je v júni.
rozísť sa | Rozišli sa.
narodiť sa | Narodil som sa v Košiciach.
zomrieť | Jeho dedko zomrel minulý rok.
vyrastať | Vyrastal som na dedine.
dôverovať | Dôverujem ti.
priateľstvo | Naše priateľstvo je pre mňa dôležité.
slobodný | Si slobodný?
ženatý | Je ženatý.
rozvedený | Moji rodičia sú rozvedení.`},
{id:'k-priroda', level:'A2', title:'Príroda a zvieratá', desc:'Von z mesta.', items:`
zviera | Máš rád zvieratá?
pes | Mám psa.
mačka | Moja mačka spí celý deň.
vták | Na strome je vták.
strom | Pod stromom je tieň.
kvet | Kúpil som jej kvety.
hora | Cez víkend ideme do hôr.
rieka | Mesto leží pri rieke.
more | Voda v mori je teplá.
ostrov | Chcem ísť na ostrov.
dedina | Bývam na malej dedine.
príroda | Mám rád prírodu.`},
{id:'k-pocasie', level:'A1', title:'Počasie', desc:'O počasí sa dá rozprávať vždy.', items:`
počasie | Aké je dnes počasie?
slnko | Svieti slnko.
dážď | Zajtra bude dážď.
prší | Prší už celý deň.
sneží | Vonku sneží!
teplo | Dnes je teplo.
chladno, zima | Vonku je zima.
vietor | Fúka silný vietor.
oblak | Na oblohe nie je ani oblak.
búrka | V noci bola búrka.
stupeň | Je tridsať stupňov.
predpoveď počasia | Pozrel si predpoveď počasia?
horúco | V lete je tu veľmi horúco.`},
{id:'k-oblecenie', level:'A2', title:'Oblečenie', desc:'Čo nosíš.', items:`
oblečenie | Kupujem si nové oblečenie.
nohavice | Tieto nohavice sú príliš dlhé.
tričko | Chcem biele tričko.
bunda | Zober si bundu.
sveter | Je zima, oblečiem si sveter.
topánky | Potrebujem nové topánky.
šaty | Máš krásne šaty.
nosiť (oblečenie) | Rada nosím džínsy.
obliecť sa | Rýchlo sa oblečiem.
čiapka | Zober si čiapku.
ponožky | Kde sú moje ponožky?
okuliare | Nevidím bez okuliarov.
taška | Moja taška je ťažká.`},
{id:'k-sport', level:'A2', title:'Šport a pohyb', desc:'Hýbať sa je zdravé.', items:`
futbal | Hráš futbal?
posilňovňa | Chodím do posilňovne trikrát týždenne.
cvičiť | Cvičím každé ráno.
bicyklovať sa | Rád sa bicyklujem.
zápas | Pozeráš ten zápas?
vyhrať | Kto vyhral?
prehrať | Prehrali sme dva ku jednej.
tím | Ktorému tímu fandíš?
trénovať | Trénujem dvakrát týždenne.
lyžovať | Vieš lyžovať?
túra | Cez víkend ideme na túru.`},
{id:'k-kultura', level:'A2', title:'Kultúra a zábava', desc:'Filmy, seriály, hudba.', items:`
seriál | Pozerám nový seriál.
kniha | Čítam dobrú knihu.
pieseň | To je moja obľúbená pieseň.
spievať | Rád spievam.
tancovať | Ideš tancovať?
divadlo | Ideme do divadla.
výstava | Výstava bola zaujímavá.
vstupenka | Kúpil som dve vstupenky na koncert.
hra (počítačová) | Hráš počítačové hry?
maľovať | Moja sestra rada maľuje.
obľúbený | Aké je tvoje obľúbené jedlo?
kapela | Akú kapelu počúvaš?`},
{id:'k-najom', level:'B1', title:'Bývanie a sťahovanie', desc:'Prenájom, nájomné, energie.', items:`
nájomné | Nájomné je osemsto eur.
prenajímateľ | Prenajímateľ to opraví.
sťahovať sa | Budúci mesiac sa sťahujeme.
zariadený | Byt je zariadený.
kaucia | Kaucia je dve nájomné.
energie (náklady) | Sú energie v cene?
kúrenie | Kúrenie nefunguje.
elektrina | Elektrina je drahá.
výťah | Je tam výťah?
balkón | Byt má balkón.
nájomná zmluva | Podpísal som nájomnú zmluvu.
prenajať si | Chcem si prenajať byt.`},
{id:'k-urady', level:'B1', title:'Úrady a doklady', desc:'Formuláre a papiere.', items:`
občiansky preukaz | Máte občiansky preukaz?
adresa | Aká je vaša adresa?
formulár | Vyplňte tento formulár.
vyplniť | Ako to mám vyplniť?
podpísať | Podpíšte tu, prosím.
úrad | Zajtra musím ísť na úrad.
žiadosť | Podal som žiadosť.
poplatok | Poplatok je dvadsať eur.
potvrdenie | Potrebujem potvrdenie.
dátum narodenia | Váš dátum narodenia?
prihlásiť sa (na pobyt) | Musím sa prihlásiť na úrade.
doklady | Ukážte mi doklady, prosím.`},
{id:'k-praca', level:'B1', title:'V práci každý deň', desc:'Projekt, úlohy, prestávka.', items:`
projekt | Pracujem na novom projekte.
úloha | Mám veľa úloh.
termín (dokedy) | Kedy je termín?
prestávka | Mám prestávku na obed.
vyriešiť | Ako to vyriešime?
vybaviť | Vybavím to dnes.
firma | Pracujem v malej firme.
zamestnanec | Firma má sto zamestnancov.
zmena (v práci) | Dnes mám nočnú zmenu.
zodpovedný | Kto je za to zodpovedný?
skúsený | Je veľmi skúsený.
zamestnaný | Kde ste zamestnaný?`},
{id:'k-dnes', level:'B1', title:'Ako hovoria ľudia dnes', desc:'Hovorové frázy, ktoré počuješ všade.', items:`
To je v pohode. |
Daj vedieť. |
Ozvi sa. |
Maj sa! |
Vďaka! |
Sorry. |
Mám to. |
To je fajn. |
Žiadny stres. |
Čo je nové? |
Nič moc. |
Do toho! |`},
{id:'k-casove', level:'B1', title:'Časové výrazy', desc:'Kedy presne.', items:`
včas | Prišiel som včas.
medzitým | Medzitým uvarím kávu.
odteraz | Odteraz budem cvičiť.
nedávno | Nedávno som sa presťahoval.
v poslednej dobe | V poslednej dobe veľa pracujem.
cez víkend | Cez víkend som bol v horách.
počas | Počas obeda nevolaj.
odkedy | Odkedy tu bývaš?
do (času) | Pracujem do piatej.
o (týždeň) | Uvidíme sa o týždeň.
pred (týždňom) | Bol som tam pred týždňom.
budúci | Budúci týždeň mám dovolenku.
minulý | Minulý rok som bol v Španielsku.`},
{id:'k-niekto', level:'A2', title:'Niekto, nikto, všetci', desc:'Malé slová, ktoré sú všade.', items:`
niekto | Niekto klope.
nikto | Nikto nevie.
všetci | Všetci sú tu.
každý | Každý to vie.
niekde | Niekde som to videl.
nikde | Nikde to nie je.
všade | Všade sú turisti.
nejaký | Máš nejaký nápad?
žiadny | Nemám žiadny problém.
ostatní | Kde sú ostatní?
obaja | Obaja moji bratia bývajú vo Viedni.`},
{id:'k-trh', level:'A2', title:'Na trhu a v obchode', desc:'Koľko čoho kúpiť.', items:`
kilo | Kilo jabĺk, prosím.
liter | Liter mlieka, prosím.
kus | Dva kusy, prosím.
fľaša | Fľašu vody, prosím.
balenie | Jedno balenie kávy, prosím.
čerstvý | Je ten chlieb čerstvý?
zelenina | Kupujem čerstvú zeleninu.
mäso | Mäso je drahé.
paradajka | Paradajky sú zo Slovenska.
cibuľa | Potrebujem jednu cibuľu.
banán | Deti jedia banány.
pomaranč | Pomaranče sú sladké.`},
{id:'k-svet', level:'B1', title:'Svet okolo nás', desc:'Témy zo správ a rozhovorov.', items:`
politika | Nezaujímam sa o politiku.
ekonomika | Ekonomika rastie.
história | Zaujíma ma história.
budúcnosť | Čo plánuješ do budúcnosti?
minulosť | To je minulosť.
zákon | To je proti zákonu.
sloboda | Sloboda je dôležitá.
bezpečnosť | Bezpečnosť je na prvom mieste.
technológia | Technológia sa rýchlo mení.
vojna | Jeho dedko zažil vojnu.
mier | Všetci chcú mier.
náboženstvo | Náboženstvo je pre neho dôležité.
kultúra | Zaujíma ma iná kultúra.`},
{id:'k-slovesa-b1', level:'B1', title:'Slovesá pre B1', desc:'Na názor, plány a vysvetľovanie.', items:`
vysvetliť | Môžeš mi to vysvetliť?
opísať | Opíš mi to.
porovnať | Porovnaj tieto dve ceny.
predstaviť si | Predstav si to.
očakávať | Čo od toho očakávaš?
prekvapiť | Prekvapilo ma to.
závisieť | To závisí od počasia.
vyhnúť sa | Chcem sa vyhnúť chybám.
zaujímať sa | Zaujímaš sa o šport?
podporovať | Rodičia ma vždy podporujú.
sťažovať sa | Stále sa sťažuje.`}
];

const ART = /^(der|die|das|le|la|les|el|los|las|lo|o|a|os|as|un|une|una|uno|um|uma)\s+/i;
const norm = s => String(s).replace(/^l['’]\s*/i, '').replace(ART, '').replace(/[!?.¡¿,…:;]/g, '').replace(/\s+/g, ' ').trim();
const lines = s => String(s).split('\n').map(l => l.trim()).filter(Boolean);

window.CORE = {M, norm, add(c, T){
  const L = window.CONTENT && window.CONTENT[c]; if (!L) return;
  const have = new Set();
  L.units.forEach(u => lines(u.items).forEach(l => have.add(norm(l.split('|')[0].trim()))));
  for (const u of M) {
    if (!T[u.id]) continue;
    const mm = lines(u.items), ll = lines(T[u.id]), out = [];
    if (mm.length !== ll.length) console.warn('core', c, u.id, mm.length, ll.length);
    mm.forEach((m, i) => {
      const [sk, exSk = ''] = m.split('|').map(s => s.trim());
      const p = (ll[i] || '').split('|').map(s => s.trim()), t = p[0];
      if (!t || t === '-') return;
      const k = norm(t); if (have.has(k)) return; have.add(k);
      const ex = p[1] && p[1] !== '-' ? p[1] : '';
      const f = [t, p[3] || sk, ex, ex ? (p[4] || exSk) : '', p[2] || ''];
      while (f.length > 2 && !f[f.length - 1]) f.pop();
      out.push(f.join(' | '));
    });
    if (out.length >= 4) L.units.push({id:u.id, level:u.level, title:u.title, desc:u.desc, items:out.join('\n')});
  }
}};
})();
