/* Jazykový pas: English (British English; American variants in notes).
   Lessons A1–C2, fill-in sentences, stories, dialogues and grammar. Core vocabulary is added from core-en.js. */
(function(){
const C = window.CONTENT = window.CONTENT || {};
C.en = {
units:[
{id:'zaklady', level:'A1', title:'Pozdravy a základy', desc:'Prvé vety, ktoré použiješ hneď.', items:`
Hello! | Ahoj! / Dobrý deň! | Hello! I'm Marek. | Ahoj! Ja som Marek. | Neutrálne, hodí sa vždy.
Hi! | Ahoj! | Hi, how's it going? | Ahoj, ako to ide? | Hovorovo.
Good morning! | Dobré ráno! | Good morning, everyone! | Dobré ráno všetkým! | Do obeda; poobede Good afternoon!
Goodbye! | Dovidenia! | Goodbye and thank you! | Dovidenia a ďakujem! | Hovorovo: Bye!
See you! | Uvidíme sa! | See you on Monday! | Uvidíme sa v pondelok!
Thank you. | Ďakujem. | Thank you very much! | Ďakujem veľmi pekne! | Hovorovo: Thanks.
Please | Prosím | A coffee, please. | Kávu, prosím. | Pri žiadosti. „Nech sa páči“ = Here you are.
Sorry! | Prepáč! / Prepáčte! | Sorry, I'm late. | Prepáč, meškám. | Ospravedlnenie.
Excuse me | Prepáčte (oslovenie) | Excuse me, where is the station? | Prepáčte, kde je stanica? | Keď niekoho oslovuješ.
How are you? | Ako sa máš? | Hi Anna, how are you? | Ahoj Anna, ako sa máš?
I'm fine, thanks. | Mám sa dobre, ďakujem. | I'm fine, thanks. And you? | Mám sa dobre, ďakujem. A ty?
My name is Marek. | Volám sa Marek. | Hello, my name is Marek. | Dobrý deň, volám sa Marek.
Nice to meet you! | Teší ma! | Nice to meet you, Anna! | Teší ma, Anna!
I don't understand. | Nerozumiem. | Sorry, I don't understand. | Prepáčte, nerozumiem.
`},
{id:'rodina', level:'A1', title:'Ľudia a rodina', desc:'Rodina, kamaráti a kolegovia.', items:`
family | rodina | My family lives in Košice. | Moja rodina býva v Košiciach.
mother | mama, matka | My mother cooks really well. | Moja mama varí veľmi dobre. | Hovorovo: mum (US: mom)
father | otec | My father works a lot. | Môj otec veľa pracuje. | Hovorovo: dad
brother | brat | My brother is older than me. | Môj brat je starší ako ja.
sister | sestra | My sister studies in Vienna. | Moja sestra študuje vo Viedni.
parents | rodičia | My parents are visiting us on Sunday. | Rodičia nás navštívia v nedeľu.
child | dieťa | The child is playing in the garden. | Dieťa sa hrá v záhrade. | Množné číslo: children
friend | kamarát, priateľ | He's my best friend. | Je to môj najlepší kamarát.
boyfriend | priateľ (vo vzťahu) | Her boyfriend is from Ireland. | Jej priateľ je z Írska.
girlfriend | priateľka (vo vzťahu) | My girlfriend loves music. | Moja priateľka miluje hudbu.
colleague | kolega, kolegyňa | My colleague helps me a lot. | Kolega mi veľmi pomáha.
cousin | bratranec, sesternica | My cousin lives in Canada. | Môj bratranec býva v Kanade. | Jedno slovo pre oboch.
`},
{id:'slovesa', level:'A1', title:'Najdôležitejšie slovesá', desc:'Slovesá, bez ktorých to nejde.', items:`
be | byť | I am tired. | Som unavený. | I am, you are, he/she is
have | mať | I have two brothers. | Mám dvoch bratov. | he/she has
do | robiť | What do you do? | Čo robíš? | did, done
go | ísť | I go to work by bus. | Do práce chodím autobusom. | went, gone
come | prísť | Are you coming tonight? | Prídeš dnes večer? | came, come
see | vidieť | I can see the sea! | Vidím more! | saw, seen
say | povedať | What did you say? | Čo si povedal? | said, said
know | vedieť, poznať | I don't know. | Neviem. | knew, known
can | môcť, vedieť | Can you swim? | Vieš plávať?
want | chcieť | I want to learn English. | Chcem sa naučiť po anglicky.
get | dostať, dostať sa | How do I get to the station? | Ako sa dostanem na stanicu? | got; veľmi časté sloveso
make | vyrobiť, urobiť | I make breakfast every day. | Každý deň robím raňajky. | do = robiť činnosť, make = vytvoriť niečo
take | vziať | Take your umbrella. | Vezmi si dáždnik. | took, taken
give | dať | Give me a minute. | Daj mi minútku. | gave, given
`},
{id:'jedlo', level:'A1', title:'Jedlo a kaviareň', desc:'Objednaj si a zaplať.', items:`
coffee | káva | A coffee with milk, please. | Kávu s mliekom, prosím.
bread | chlieb | I buy fresh bread every morning. | Každé ráno kupujem čerstvý chlieb.
water | voda | A glass of water, please. | Pohár vody, prosím.
meat | mäso | I don't eat meat. | Nejem mäso.
vegetables | zelenina | Eat more vegetables! | Jedz viac zeleniny!
menu | jedálny lístok | Can I see the menu, please? | Môžem vidieť jedálny lístok?
I'd like | Chcel by som | I'd like a cup of tea. | Chcel by som šálku čaju. | = I would like, zdvorilé
the bill | účet | Can we have the bill, please? | Môžeme dostať účet? | US: the check
order | objednať si | Are you ready to order? | Môžete si objednať?
delicious | výborný, chutný | The soup is delicious. | Polievka je výborná.
Enjoy your meal! | Dobrú chuť! | Here's your pizza. Enjoy your meal! | Tu je vaša pizza. Dobrú chuť!
pay | platiť | Who's paying today? | Kto dnes platí? | paid, paid
`},
{id:'mesto', level:'A1', title:'Mesto a cesta', desc:'Ako sa niekam dostaneš.', items:`
station | stanica | The station is near the centre. | Stanica je blízko centra.
train | vlak | The train leaves at nine. | Vlak odchádza o deviatej.
ticket | lístok | A return ticket to York, please. | Spiatočný lístok do Yorku, prosím. | single = jednosmerný, return = spiatočný
bus stop | zastávka | The bus stop is over there. | Zastávka je tamto.
airport | letisko | How do I get to the airport? | Ako sa dostanem na letisko?
street | ulica | I live on a quiet street. | Bývam na tichej ulici.
left | vľavo, doľava | Turn left at the lights. | Na semafore odboč doľava.
right | vpravo, doprava | The bank is on the right. | Banka je vpravo. | aj: správny (That's right.)
straight on | rovno | Go straight on. | Choď rovno. | US: straight ahead
Where is the toilet? | Kde je toaleta? | Excuse me, where is the toilet? | Prepáčte, kde je toaleta? | US: restroom
drive | šoférovať | Can you drive? | Vieš šoférovať? | drove, driven
change trains | prestupovať | You have to change trains in Leeds. | V Leedse musíš prestúpiť.
`},
{id:'cas', level:'A1', title:'Čas a dni', desc:'Kedy, ako často, o koľkej.', items:`
today | dnes | Today is Monday. | Dnes je pondelok.
tomorrow | zajtra | See you tomorrow! | Uvidíme sa zajtra!
yesterday | včera | I was at home yesterday. | Včera som bol doma.
now | teraz | I'm busy now. | Teraz nemám čas.
later | neskôr | Call me later. | Zavolaj mi neskôr.
day | deň | Have a nice day! | Pekný deň!
week | týždeň | I work five days a week. | Pracujem päť dní v týždni.
weekend | víkend | What are you doing at the weekend? | Čo robíš cez víkend? | US: on the weekend
on Monday | v pondelok | I have a meeting on Monday. | V pondelok mám poradu. | on + deň
at eight o'clock | o ôsmej | The film starts at eight o'clock. | Film začína o ôsmej. | at + čas
always | vždy | I always drink coffee in the morning. | Ráno vždy pijem kávu.
often | často | We often go to the cinema. | Často chodíme do kina.
`},
{id:'opisy', level:'A1', title:'Opisy', desc:'Aký je kto a čo.', items:`
big | veľký | They have a big house. | Majú veľký dom.
small | malý | My flat is small. | Môj byt je malý.
fast | rýchly | This train is very fast. | Tento vlak je veľmi rýchly.
slow | pomalý | The internet is slow today. | Internet je dnes pomalý.
expensive | drahý | London is expensive. | Londýn je drahý.
cheap | lacný | The market is cheap. | Trh je lacný.
beautiful | krásny | What a beautiful day! | Aký krásny deň!
tired | unavený | I'm really tired. | Som naozaj unavený.
important | dôležitý | This is very important. | Toto je veľmi dôležité.
difficult | ťažký, náročný | English grammar isn't difficult. | Anglická gramatika nie je ťažká.
easy | ľahký, jednoduchý | It's easy! | Je to ľahké!
happy | šťastný, rád | I'm happy to see you. | Som rád, že ťa vidím.
`},
{id:'otazky', level:'A1', title:'Otázky a malé slová', desc:'Bez nich sa nespýtaš na nič.', items:`
who | kto | Who is that? | Kto je to?
what | čo | What's your name? | Ako sa voláš? | doslova: Aké je tvoje meno?
where | kde, kam | Where do you live? | Kde bývaš?
when | kedy | When does the shop open? | Kedy otvára obchod?
why | prečo | Why are you laughing? | Prečo sa smeješ?
how | ako | How do you say this in English? | Ako sa toto povie po anglicky?
how much | koľko (nepočítateľné) | How much is it? | Koľko to stojí? | pri peniazoch a nepočítateľných: how much water
how many | koľko (počítateľné) | How many people are coming? | Koľko ľudí príde?
which | ktorý | Which bus goes to the centre? | Ktorý autobus ide do centra?
whose | čí | Whose bag is this? | Čia je to taška?
not | nie (zápor) | I'm not hungry. | Nie som hladný. | don't, doesn't, isn't…
also | tiež | I also speak German. | Hovorím aj po nemecky. | na konci vety: too
`},
{id:'nakup', level:'A2', title:'Nakupovanie', desc:'Ceny, veľkosti, platenie.', items:`
supermarket | supermarket | I go to the supermarket on Saturdays. | Do supermarketu chodím v sobotu.
go shopping | ísť nakupovať | Let's go shopping! | Poďme nakupovať!
cost | stáť (o cene) | How much does it cost? | Koľko to stojí? | cost, cost
price | cena | The price is too high. | Cena je príliš vysoká.
checkout | pokladňa | Please pay at the checkout. | Zaplaťte, prosím, pri pokladni.
in cash | v hotovosti | Can I pay in cash? | Môžem platiť v hotovosti?
by card | kartou | I'll pay by card. | Zaplatím kartou.
bag | taška | Do you need a bag? | Potrebujete tašku?
size | veľkosť | What size are you? | Akú veľkosť nosíte?
try on | vyskúšať (oblečenie) | Can I try this on? | Môžem si to vyskúšať?
I'm just looking. | Len sa pozerám. | No thanks, I'm just looking. | Nie, ďakujem, len sa pozerám.
receipt | účtenka | Here's your receipt. | Tu je vaša účtenka.
`},
{id:'byvanie', level:'A2', title:'Bývanie', desc:'Byt, izby a nábytok.', items:`
flat | byt | We rent a small flat. | Prenajímame si malý byt. | US: apartment
room | izba | My room is upstairs. | Moja izba je hore.
kitchen | kuchyňa | We eat in the kitchen. | Jeme v kuchyni.
bathroom | kúpeľňa | The bathroom is on the left. | Kúpeľňa je vľavo.
bed | posteľ | I go to bed at eleven. | Chodím spať o jedenástej. | go to bed = ísť spať
table | stôl | The keys are on the table. | Kľúče sú na stole.
chair | stolička | Take a chair. | Vezmi si stoličku.
door | dvere | Close the door, please. | Zatvor dvere, prosím.
live | bývať, žiť | We live in the city centre. | Bývame v centre mesta.
tidy up | upratať | I need to tidy up my room. | Musím si upratať izbu.
neighbour | sused | Our neighbours are very friendly. | Naši susedia sú veľmi priateľskí. | US: neighbor
cosy | útulný | What a cosy flat! | Aký útulný byt! | US: cozy
`},
{id:'praca', level:'A2', title:'Práca', desc:'Šéf, porady a dovolenka.', items:`
job | práca, zamestnanie | I love my job. | Milujem svoju prácu. | work = práca vo všeobecnosti
work | pracovať | I work in an office. | Pracujem v kancelárii.
boss | šéf | My boss is very nice. | Môj šéf je veľmi milý.
office | kancelária | The office is on the third floor. | Kancelária je na treťom poschodí.
meeting | porada, stretnutie | I have a meeting at ten. | O desiatej mám poradu.
appointment | termín, dohodnuté stretnutie | I have a doctor's appointment. | Mám termín u lekára.
customer | zákazník | The customer is always right. | Zákazník má vždy pravdu.
earn | zarábať | How much do you earn? | Koľko zarábaš?
experience | skúsenosť | Do you have any experience? | Máte nejaké skúsenosti?
apply for | uchádzať sa o | I applied for a new job. | Uchádzal som sa o novú prácu.
quit | dať výpoveď, skončiť | She quit her job last month. | Minulý mesiac dala výpoveď. | quit, quit
holiday | dovolenka | I'm on holiday next week. | Budúci týždeň mám dovolenku. | US: vacation
`},
{id:'technika', level:'A2', title:'Technika a internet', desc:'Mobil, heslo a wifi.', items:`
phone | telefón, mobil | My phone is dead. | Mobil sa mi vybil. | UK aj: mobile, US: cell phone
battery | batéria | The battery is low. | Batéria je slabá.
charge | nabíjať | I need to charge my phone. | Musím si nabiť mobil.
password | heslo | I forgot my password. | Zabudol som heslo.
download | stiahnuť | Download the app. | Stiahni si aplikáciu.
send | poslať | Send me the photo. | Pošli mi tú fotku. | sent, sent
message | správa | I sent you a message. | Poslal som ti správu.
call | zavolať | I'll call you tonight. | Zavolám ti večer.
Wi-Fi | wifi | What's the Wi-Fi password? | Aké je heslo na wifi?
It doesn't work. | Nefunguje to. | The printer doesn't work. | Tlačiareň nefunguje.
save | uložiť | Don't forget to save the file. | Nezabudni súbor uložiť.
screen | obrazovka | The screen is broken. | Obrazovka je rozbitá.
`},
{id:'volno', level:'A2', title:'Voľný čas', desc:'Koníčky, šport a zábava.', items:`
hobby | koníček | What are your hobbies? | Aké máš koníčky?
play | hrať (sa) | We play football on Sundays. | V nedeľu hráme futbal.
swim | plávať | I swim twice a week. | Plávam dvakrát týždenne. | swam, swum
go hiking | ísť na túru | We often go hiking in the mountains. | Často chodíme na túry do hôr.
read | čítať | I read before I go to sleep. | Čítam pred spaním. | read, read (vyslov [red])
travel | cestovať | I love travelling. | Milujem cestovanie. | US: traveling
meet up | stretnúť sa | Let's meet up on Friday. | Stretnime sa v piatok.
feel like | mať chuť | I feel like a pizza. | Mám chuť na pizzu.
have fun | baviť sa, užiť si | Have fun at the party! | Užite si párty!
concert | koncert | The concert was amazing. | Koncert bol úžasný.
film | film | Shall we watch a film? | Pozrieme si film? | US: movie
free time | voľný čas | What do you do in your free time? | Čo robíš vo voľnom čase?
`},
{id:'pocity', level:'A2', title:'Pocity a vzťahy', desc:'Ako sa cítiš a s kým.', items:`
sad | smutný | Why are you sad? | Prečo si smutný?
angry | nahnevaný | Don't be angry with me. | Nehnevaj sa na mňa.
nervous | nervózny | I'm nervous before exams. | Pred skúškami som nervózny.
look forward to | tešiť sa na | I'm looking forward to the weekend. | Teším sa na víkend.
love | milovať | I love you. | Milujem ťa.
like | mať rád, páčiť sa | I like your shoes. | Páčia sa mi tvoje topánky.
miss | chýbať (niekto mi) | I miss you. | Chýbaš mi. | aj: zmeškať (miss the bus)
fall in love | zamilovať sa | They fell in love in Paris. | Zamilovali sa v Paríži.
argue | hádať sa | They argue about money. | Hádajú sa kvôli peniazom.
relationship | vzťah | They're in a relationship. | Sú vo vzťahu.
I'm sorry. | Je mi to ľúto. / Prepáč. | I'm sorry about yesterday. | Je mi ľúto, čo sa stalo včera.
proud | hrdý | I'm proud of you. | Som na teba hrdý.
`},
{id:'zdravie', level:'A2', title:'Zdravie', desc:'U lekára a v lekárni.', items:`
doctor | lekár | I need to see a doctor. | Potrebujem ísť k lekárovi.
ill | chorý | I'm ill today. | Dnes som chorý. | US: sick
healthy | zdravý | Vegetables are healthy. | Zelenina je zdravá.
I have a headache. | Bolí ma hlava. | I have a headache and I'm tired. | Bolí ma hlava a som unavený.
temperature | horúčka, teplota | He has a high temperature. | Má vysokú horúčku. | aj: fever
pharmacy | lekáreň | Is there a pharmacy near here? | Je tu blízko lekáreň? | UK aj: chemist's
medicine | liek | Take this medicine twice a day. | Užívaj tento liek dvakrát denne.
I feel sick. | Je mi zle (na vracanie). | I feel sick after the boat trip. | Po plavbe loďou je mi zle.
hurt | bolieť | My leg hurts. | Bolí ma noha. | hurt, hurt
sore throat | bolesť hrdla | I have a sore throat. | Bolí ma hrdlo.
Get well soon! | Skoro sa uzdrav! | I heard you're ill. Get well soon! | Počul som, že si chorý. Skoro sa uzdrav!
rest | oddychovať | You should rest. | Mal by si oddychovať.
`},
{id:'frazy', level:'A2', title:'Frázy do rozhovoru', desc:'Hotové spojenia, vďaka ktorým znieš prirodzene.', items:`
No idea. | Netuším.
That's right. | Presne tak. / To je pravda.
Exactly! | Presne!
Sorry? | Prosím? (nepočul som) |  |  | aj: Pardon?
I'm not sure. | Nie som si istý.
It depends. | Záleží na tom.
In my opinion | podľa môjho názoru | In my opinion, it's too expensive. | Podľa mňa je to príliš drahé.
I don't mind. | Je mi to jedno. / Nevadí mi to.
What do you mean? | Čo tým myslíš?
No problem! | Žiadny problém!
I don't feel like it. | Nemám chuť.
Well | No (váhanie) | Well, I'm not sure. | No, nie som si istý.
`},
{id:'slovesa2', level:'A2', title:'Ďalšie časté slovesá', desc:'Slovesá do každého dňa.', items:`
find | nájsť | I can't find my keys. | Neviem nájsť kľúče. | found, found
bring | priniesť | Bring a jacket. | Prines si bundu. | brought, brought
need | potrebovať | I need help. | Potrebujem pomoc.
think | myslieť si | I think so. | Myslím, že áno. | thought, thought
stay | zostať | Stay here. | Zostaň tu.
leave | odísť, nechať | The train leaves at six. | Vlak odchádza o šiestej. | left, left
ask | pýtať sa, požiadať | Can I ask you something? | Môžem sa ťa niečo opýtať?
answer | odpovedať | Please answer the question. | Prosím, odpovedz na otázku.
help | pomôcť | Thanks for helping me. | Vďaka, že si mi pomohol.
show | ukázať | Show me the photo. | Ukáž mi fotku.
tell | povedať (niekomu) | Tell me the truth. | Povedz mi pravdu. | told, told; say = povedať (niečo)
understand | rozumieť | Do you understand? | Rozumieš? | understood, understood
`},
{id:'male', level:'A2', title:'Malé užitočné slová', desc:'Slová, ktoré sú v každej vete.', items:`
still | stále, ešte | I'm still at work. | Stále som v práci.
already | už | I've already eaten. | Už som jedol.
yet | ešte (v zápore), už (v otázke) | I haven't finished yet. | Ešte som neskončil.
only | len | I only have five euros. | Mám len päť eur.
very | veľmi | It's very cold. | Je veľká zima.
a lot of | veľa | We have a lot of time. | Máme veľa času. | hovorovo aj: lots of
a little | trochu | I speak a little English. | Hovorím trochu po anglicky.
everything | všetko | Everything is fine. | Všetko je v poriadku.
nothing | nič | Nothing happened. | Nič sa nestalo.
something | niečo | I want to tell you something. | Chcem ti niečo povedať.
here | tu, sem | Come here! | Poď sem!
maybe | možno | Maybe tomorrow. | Možno zajtra.
`},
{id:'minuly', level:'A2', title:'Minulý čas: nepravidelné slovesá', desc:'Najčastejšie tvary, ktoré treba vedieť naspamäť.', items:`
went | išiel (minulý čas od go) | I went to London last year. | Minulý rok som išiel do Londýna. | go – went – gone
saw | videl (see) | I saw a great film. | Videl som skvelý film. | see – saw – seen
ate | jedol (eat) | We ate pizza for dinner. | Na večeru sme jedli pizzu. | eat – ate – eaten
drank | pil (drink) | She drank a cup of tea. | Vypila šálku čaju. | drink – drank – drunk
had | mal (have) | I had a good day. | Mal som dobrý deň. | have – had – had
did | robil (do) | What did you do yesterday? | Čo si robil včera? | do – did – done
said | povedal (say) | He said hello. | Pozdravil. | say – said – said
came | prišiel (come) | She came home late. | Prišla domov neskoro. | come – came – come
bought | kúpil (buy) | I bought new shoes. | Kúpil som si nové topánky. | buy – bought – bought
wrote | napísal (write) | I wrote you an email. | Napísal som ti e-mail. | write – wrote – written
took | vzal (take) | We took a taxi. | Vzali sme si taxík. | take – took – taken
got | dostal (get) | I got a message. | Dostal som správu. | get – got – got (US: gotten)
`},
{id:'spojky', level:'B1', title:'Spojky', desc:'Slová, ktoré spájajú vety.', items:`
but | ale | I'm tired but happy. | Som unavený, ale šťastný.
because | pretože | I stayed at home because I was ill. | Zostal som doma, pretože som bol chorý.
that | že | I think that you're right. | Myslím, že máš pravdu. | často sa vynecháva: I think you're right.
if | ak, keby | If it rains, we'll stay at home. | Ak bude pršať, zostaneme doma.
as soon as | hneď ako | Call me as soon as you arrive. | Zavolaj mi, hneď ako prídeš.
although | hoci | Although it was late, we went out. | Hoci bolo neskoro, išli sme von.
so | takže | It was raining, so we took a taxi. | Pršalo, takže sme si vzali taxík.
however | avšak | It's expensive. However, it's worth it. | Je to drahé. Avšak stojí to za to.
unless | ak nie | We'll go unless it rains. | Pôjdeme, ak nebude pršať.
whether | či | I don't know whether he's coming. | Neviem, či príde. | hovorovo aj: if
while | zatiaľ čo, kým | I cooked while she was working. | Varil som, kým ona pracovala.
therefore | preto (formálne) | It's late, therefore we should go. | Je neskoro, preto by sme mali ísť.
`},
{id:'phrasal', level:'B1', title:'Frázové slovesá', desc:'Sloveso + malé slovo = nový význam.', items:`
get up | vstať | I get up at seven. | Vstávam o siedmej.
look for | hľadať | I'm looking for my glasses. | Hľadám okuliare.
find out | zistiť | I'll find out the price. | Zistím cenu.
give up | vzdať sa, prestať | Don't give up! | Nevzdávaj sa!
turn on | zapnúť | Turn on the light. | Zapni svetlo.
turn off | vypnúť | Turn off your phone. | Vypni si mobil.
pick up | vyzdvihnúť | I'll pick you up at the station. | Vyzdvihnem ťa na stanici.
run out of | minúť sa (niečo) | We've run out of milk. | Minulo sa nám mlieko.
put on | obliecť si, obuť si | Put on your coat. | Obleč si kabát.
take off | vyzliecť si; vzlietnuť | Take off your shoes, please. | Vyzuj sa, prosím. | Lietadlo: The plane takes off.
come back | vrátiť sa | When are you coming back? | Kedy sa vrátiš?
go out | ísť von | Let's go out tonight. | Poďme dnes večer von.
look after | starať sa o | Can you look after my cat? | Postaráš sa mi o mačku?
get on with | vychádzať s | I get on well with my sister. | So sestrou dobre vychádzam.
`},
{id:'kariera', level:'B1', title:'Práca a kariéra', desc:'Pohovor, plat a zmluva.', items:`
job vacancy | voľné pracovné miesto | There's a job vacancy in our team. | V našom tíme je voľné miesto.
salary | plat | The salary is good. | Plat je dobrý.
CV | životopis | Send us your CV. | Pošlite nám životopis. | US: résumé
job interview | pracovný pohovor | I have a job interview tomorrow. | Zajtra mám pracovný pohovor.
overtime | nadčasy | I worked overtime last week. | Minulý týždeň som robil nadčasy.
responsibility | zodpovednosť | It's a job with a lot of responsibility. | Je to práca s veľkou zodpovednosťou.
get promoted | byť povýšený | She got promoted last year. | Minulý rok ju povýšili.
employer | zamestnávateľ | My employer pays for the course. | Kurz mi platí zamestnávateľ.
training | školenie | We have a training day on Friday. | V piatok máme školenie.
self-employed | samostatne zárobkovo činný | I'm self-employed. | Som živnostník.
part-time | na čiastočný úväzok | She works part-time. | Pracuje na čiastočný úväzok. | full-time = na plný úväzok
notice period | výpovedná lehota | The notice period is two months. | Výpovedná lehota je dva mesiace.
`},
{id:'medien', level:'B1', title:'Médiá a správy', desc:'Čo sa píše a ako tomu veriť.', items:`
news | správy | Did you see the news? | Videl si správy? | vždy jednotné číslo: The news is…
article | článok | I read an interesting article. | Čítal som zaujímavý článok.
programme | relácia | It's my favourite programme. | Je to moja obľúbená relácia. | US: program
report | informovať; správa | The newspaper reported the story. | Noviny o tom informovali.
opinion | názor | Everyone has an opinion. | Každý má názor.
survey | prieskum | A new survey shows interesting results. | Nový prieskum ukazuje zaujímavé výsledky.
advertising | reklama | There's too much advertising on TV. | V televízii je priveľa reklamy. | jedna reklama: an advert, an ad
publish | zverejniť, vydať | The book was published in 2020. | Kniha vyšla v roku 2020.
source | zdroj | Always check the source. | Vždy si over zdroj.
reliable | spoľahlivý, dôveryhodný | Is this website reliable? | Je táto stránka dôveryhodná?
current | aktuálny | We talked about current events. | Rozprávali sme sa o aktuálnom dianí.
headline | titulok | The headline was shocking. | Titulok bol šokujúci.
`},
{id:'frazy2', level:'B1', title:'Frázy pre pokročilých', desc:'Aby si znel ako rodený hovorca.', items:`
Definitely! | Určite!
Sounds good. | To znie dobre.
We'll see. | Uvidíme.
What a pity! | Aká škoda! |  |  | aj: What a shame!
Never mind. | Nevadí.
Of course! | Samozrejme!
No wonder. | Niet divu.
It's worth it. | Stojí to za to.
Fingers crossed! | Držím palce!
On the whole | celkovo vzaté | On the whole, it was a good year. | Celkovo to bol dobrý rok.
I have a feeling that | Mám pocit, že | I have a feeling that something is wrong. | Mám pocit, že niečo nie je v poriadku.
It's none of my business. | Do toho mi nič nie je.
`},
{id:'diskusia', level:'B2', title:'Diskusia a argumentácia', desc:'Ako povedať názor a nesúhlasiť zdvorilo.', items:`
on the one hand | na jednej strane | On the one hand, it's cheap. | Na jednej strane je to lacné.
on the other hand | na druhej strane | On the other hand, it's far away. | Na druhej strane je to ďaleko.
I believe that | Som presvedčený, že | I believe that education is the key. | Som presvedčený, že vzdelanie je kľúčové.
I see it differently. | Vidím to inak.
I agree with you. | Súhlasím s tebou.
advantage | výhoda | The big advantage is the price. | Veľkou výhodou je cena.
disadvantage | nevýhoda | One disadvantage is the noise. | Jednou nevýhodou je hluk.
admittedly | síce, treba uznať | Admittedly, it's not perfect. | Síce to nie je dokonalé.
in contrast to | na rozdiel od | In contrast to Vienna, London is huge. | Na rozdiel od Viedne je Londýn obrovský.
I'm not convinced. | Nie som presvedčený.
weigh up | zvážiť | We need to weigh up the pros and cons. | Musíme zvážiť výhody a nevýhody.
From my point of view | z môjho pohľadu | From my point of view, it's a mistake. | Z môjho pohľadu je to chyba.
`},
{id:'formalne', level:'B2', title:'Formálna komunikácia', desc:'E-maily, žiadosti a úradný tón.', items:`
Dear Sir or Madam | Vážená pani, vážený pane | Dear Sir or Madam, I am writing to complain. | Vážená pani, vážený pane, píšem vám so sťažnosťou. | Keď nepoznáš meno.
Kind regards | S pozdravom | Kind regards, Marek Novák | S pozdravom Marek Novák | Neformálnejšie: Best wishes
I am writing to | Píšem vám, aby som | I am writing to apply for the position. | Píšem vám, aby som sa uchádzal o miesto.
enquiry | otázka, dopyt | Thank you for your enquiry. | Ďakujeme za váš dopyt. | US: inquiry
regarding | ohľadom | I am writing regarding your order. | Píšem vám ohľadom vašej objednávky.
attached | v prílohe | Please find attached my CV. | V prílohe vám posielam životopis.
deadline | termín (uzávierka) | The deadline is Friday. | Termín je v piatok.
arrange | dohodnúť, zariadiť | Could we arrange a meeting? | Mohli by sme si dohodnúť stretnutie?
be available | byť k dispozícii | I am available on Monday. | V pondelok som k dispozícii.
Thank you in advance. | Vopred ďakujem.
take into account | zohľadniť | Please take the delay into account. | Prosím, zohľadnite meškanie.
feedback | spätná väzba | Thank you for your feedback. | Ďakujeme za spätnú väzbu.
`},
{id:'svet', level:'B2', title:'Spoločnosť a životné prostredie', desc:'Témy zo správ a diskusií.', items:`
environment | životné prostredie | We must protect the environment. | Musíme chrániť životné prostredie.
climate change | klimatická zmena | Climate change is a global problem. | Klimatická zmena je globálny problém.
sustainable | udržateľný | We need sustainable energy. | Potrebujeme udržateľnú energiu.
society | spoločnosť | We live in a modern society. | Žijeme v modernej spoločnosti.
government | vláda | The government announced new rules. | Vláda oznámila nové pravidlá.
election | voľby | The election is in May. | Voľby sú v máji.
tax | daň | Taxes are high here. | Dane sú tu vysoké.
unemployment | nezamestnanosť | Unemployment is falling. | Nezamestnanosť klesá.
equality | rovnosť | Equality is important to me. | Rovnosť je pre mňa dôležitá.
protect | chrániť | Sunscreen protects your skin. | Opaľovací krém chráni pokožku.
cause | spôsobiť; príčina | What caused the accident? | Čo spôsobilo nehodu?
solution | riešenie | There's always a solution. | Vždy existuje riešenie.
`},
{id:'idiomy', level:'C1', title:'Idiómy', desc:'Ustálené výrazy, ktoré sa nedajú preložiť doslova.', items:`
break the ice | prelomiť ľady | A joke can break the ice. | Vtip môže prelomiť ľady.
a piece of cake | hračka (ľahké) | The exam was a piece of cake. | Skúška bola hračka.
It's raining cats and dogs. | Leje ako z krhly.
hit the nail on the head | trafiť klinec po hlavičke | You've hit the nail on the head. | Trafil si klinec po hlavičke.
under the weather | necítiť sa dobre | I'm feeling a bit under the weather. | Necítim sa najlepšie.
cost an arm and a leg | stáť majland | That car cost an arm and a leg. | To auto stálo majland.
let the cat out of the bag | prezradiť tajomstvo | Who let the cat out of the bag? | Kto to prezradil?
once in a blue moon | raz za uhorský rok | We see each other once in a blue moon. | Vidíme sa raz za uhorský rok.
spill the beans | vyklopiť to | Come on, spill the beans! | No tak, vyklop to!
call it a day | skončiť (na dnes) | Let's call it a day. | Na dnes končíme.
beat around the bush | chodiť okolo horúcej kaše | Stop beating around the bush. | Prestaň chodiť okolo horúcej kaše. | UK aj: beat about the bush
get cold feet | zľaknúť sa na poslednú chvíľu | He got cold feet before the wedding. | Pred svadbou zbabelo zacúval.
`},
{id:'abstrakt', level:'C1', title:'Abstraktné a odborné výrazy', desc:'Slová do článkov, prác a prezentácií.', items:`
requirement | požiadavka | What are the requirements for the job? | Aké sú požiadavky na túto prácu?
impact | dopad, vplyv | The impact on the economy was huge. | Dopad na ekonomiku bol obrovský.
connection | súvislosť, spojenie | I don't see the connection. | Nevidím súvislosť.
challenge | výzva | It was a real challenge. | Bola to skutočná výzva.
influence | ovplyvniť; vplyv | Social media influences young people. | Sociálne siete ovplyvňujú mladých ľudí.
ensure | zabezpečiť, zaručiť | We must ensure everyone's safety. | Musíme zaručiť bezpečnosť všetkých.
measure | opatrenie | The government introduced new measures. | Vláda zaviedla nové opatrenia.
considerable | značný | It took a considerable amount of time. | Zabralo to značné množstvo času.
available | dostupný | The product is available online. | Produkt je dostupný online.
development | vývoj, rozvoj | Technological development is fast. | Technologický vývoj je rýchly.
enable | umožniť | The internet enables us to work from home. | Internet nám umožňuje pracovať z domu.
with regard to | vzhľadom na, ohľadom | With regard to your question, here is the answer. | Ohľadom tvojej otázky, tu je odpoveď.
`},
{id:'nuansy', level:'C2', title:'Hovorová angličtina', desc:'Čo počuješ v seriáloch a na ulici.', items:`
kind of | tak trochu | I'm kind of tired. | Som tak trochu unavený. | hovorovo: kinda
literally | doslova (aj prehnane) | I literally ran to the station. | Doslova som bežal na stanicu.
basically | v podstate | Basically, it's a good idea. | V podstate je to dobrý nápad.
I reckon | myslím si (UK) | I reckon it'll rain. | Myslím, že bude pršať.
gonna | = going to | I'm gonna call her. | Zavolám jej. | Len v reči a chatoch.
wanna | = want to | Do you wanna come? | Chceš prísť? | Len v reči a chatoch.
No worries. | V pohode. / Nemáš za čo.
Cheers! | Na zdravie! / Vďaka! |  |  | V Británii aj „ďakujem“ alebo „ahoj“.
mate | kamoš (UK) | Thanks, mate! | Vďaka, kamoš! | US: buddy, dude
awkward | trápny, nepríjemný | That was a bit awkward. | To bolo trochu trápne.
fancy | mať chuť (UK) | Do you fancy a drink? | Dáš si niečo na pitie? | aj: páčiť sa (I fancy him.)
Fair enough. | Dobre, beriem. / To dáva zmysel.
`}
],

sentences:[
["I {am} from Slovakia.","Som zo Slovenska.","I am, you are, he/she is","A1"],
["My name {is} Marek.","Volám sa Marek.","","A1"],
["I {don't} understand.","Nerozumiem.","do not → don't","A1"],
["How much {is} it?","Koľko to stojí?","","A1"],
["I would {like} a coffee.","Dal by som si kávu.","I'd like = I would like","A1"],
["I {have} a brother.","Mám brata.","he/she has","A1"],
["I {live} in Bratislava.","Bývam v Bratislave.","","A1"],
["She {works} in a bank.","Pracuje v banke.","he/she/it + -s","A1"],
["{Where} is the station?","Kde je stanica?","","A1"],
["We {are} going to the cinema.","Ideme do kina.","we/you/they are","A1"],
["I like {this} song.","Páči sa mi táto pieseň.","this = tento (blízko), that = tamten","A1"],
["Can you {help} me?","Môžeš mi pomôcť?","","A1"],
["Yesterday I {went} to the shop.","Včera som išiel do obchodu.","go – went – gone","A2"],
["I {was} at home last night.","Včera večer som bol doma.","I/he/she was, we/you/they were","A2"],
["Did you {see} the film?","Videl si ten film?","Po did ide základný tvar.","A2"],
["She is {taller} than me.","Je vyššia ako ja.","krátke prídavné mená: -er","A2"],
["This is the {best} pizza in town.","Toto je najlepšia pizza v meste.","good – better – best","A2"],
["I'm {going} to visit my grandma.","Idem navštíviť babku.","going to = plán","A2"],
["There {are} two shops in our street.","Na našej ulici sú dva obchody.","there is / there are","A2"],
["I usually get up {at} seven.","Zvyčajne vstávam o siedmej.","at + čas","A2"],
["I was born {in} 1995.","Narodil som sa v roku 1995.","in + rok, mesiac","A2"],
["We met {on} Monday.","Stretli sme sa v pondelok.","on + deň","A2"],
["I {can't} swim.","Neviem plávať.","can't = cannot","A2"],
["You {should} see a doctor.","Mal by si ísť k lekárovi.","should = mal by","A2"],
["How {many} people are there?","Koľko je tam ľudí?","many + počítateľné","A2"],
["I {have} never been to London.","Nikdy som nebol v Londýne.","present perfect: have + 3. tvar","B1"],
["She {has} lived here for ten years.","Býva tu desať rokov.","for + dĺžka času","B1"],
["If it {rains}, we'll stay at home.","Ak bude pršať, zostaneme doma.","Po if prítomný čas.","B1"],
["I've lived here {since} 2019.","Bývam tu od roku 2019.","since + začiatok","B1"],
["The book {was} written in 1990.","Kniha bola napísaná v roku 1990.","trpný rod: be + 3. tvar","B1"],
["I'm looking forward {to} seeing you.","Teším sa, že ťa uvidím.","look forward to + -ing","B1"],
["I {used} to play the piano.","Kedysi som hrával na klavíri.","used to = kedysi","B1"],
["He said that he {was} tired.","Povedal, že je unavený.","Nepriama reč posúva čas.","B1"],
["If I {were} you, I would take the job.","Na tvojom mieste by som tú prácu vzal.","If I were…","B2"],
["If I had known, I {would} have come.","Keby som to bol vedel, bol by som prišiel.","3. typ podmienky","B2"],
["I'm not used {to} getting up early.","Nie som zvyknutý skoro vstávať.","be used to + -ing","B2"],
["She {must} have forgotten.","Určite zabudla.","must have + 3. tvar = istota o minulosti","B2"],
["The meeting {has} been postponed.","Stretnutie bolo odložené.","","B2"],
["{Despite} the rain, we went out.","Napriek dažďu sme išli von.","despite + podstatné meno","B2"],
["I wish I {had} more time.","Kiežby som mal viac času.","wish + minulý čas","B2"],
["It's high time we {left}.","Je najvyšší čas, aby sme odišli.","It's time + minulý čas","C1"],
["Hardly {had} we arrived when it started to rain.","Sotva sme prišli, začalo pršať.","Po hardly je obrátený slovosled.","C1"]
],

story:{title:'My Day', level:'A1', paragraphs:[
 "My name is Anna. I live in a small flat in Bristol. I get up at seven and I drink a cup of tea.",
 "I work in a bookshop in the city centre. I go to work by bus. My colleagues are very friendly.",
 "In the evening I cook dinner and I call my mum. At eleven o'clock I go to bed."],
 tr:[
 "Volám sa Anna. Bývam v malom byte v Bristole. Vstávam o siedmej a vypijem šálku čaju.",
 "Pracujem v kníhkupectve v centre mesta. Do práce chodím autobusom. Moji kolegovia sú veľmi priateľskí.",
 "Večer varím večeru a volám mame. O jedenástej idem spať."],
 glossary:[{w:'flat',sk:'byt'},{w:'get up',sk:'vstávam'},{w:'bookshop',sk:'kníhkupectvo'},{w:'by bus',sk:'autobusom'},{w:'friendly',sk:'priateľský'},{w:'go to bed',sk:'idem spať'}],
 questions:[{q:'Where does Anna work?',options:['In a bank','In a bookshop','In a café','At home'],answer:1},
  {q:'How does she go to work?',options:['By car','On foot','By bus','By train'],answer:2},
  {q:'What does she do in the evening?',options:['She cooks dinner','She goes swimming','She works','She reads the news'],answer:0}]},

stories:[
{title:'Lost in London', level:'A2', paragraphs:[
 "Last summer Tom visited London for the first time. On the first day he wanted to see Big Ben, but he took the wrong bus.",
 "After an hour he was in a part of the city that he didn't know. He didn't have a map and his phone battery was dead.",
 "He asked an old lady for help. She was very kind and showed him the way to the nearest tube station.",
 "In the evening Tom finally saw Big Ben. 'Getting lost was the best part of the day,' he said."],
 tr:[
 "Minulé leto Tom prvýkrát navštívil Londýn. Prvý deň chcel vidieť Big Ben, ale nastúpil do zlého autobusu.",
 "Po hodine bol v časti mesta, ktorú nepoznal. Nemal mapu a v mobile mal vybitú batériu.",
 "Požiadal o pomoc staršiu pani. Bola veľmi milá a ukázala mu cestu na najbližšiu stanicu metra.",
 "Večer Tom konečne uvidel Big Ben. „Že som sa stratil, to bola najlepšia časť dňa,“ povedal."],
 glossary:[{w:'for the first time',sk:'prvýkrát'},{w:'took the wrong bus',sk:'nastúpil do zlého autobusu'},{w:'battery was dead',sk:'batéria bola vybitá'},{w:'asked',sk:'požiadal, opýtal sa'},{w:'kind',sk:'milý, láskavý'},{w:'tube station',sk:'stanica metra (Londýn)'},{w:'Getting lost',sk:'stratiť sa'}],
 questions:[{q:'Why did Tom get lost?',options:['He took the wrong bus','He fell asleep','He followed a friend','He walked too far'],answer:0},
  {q:'Who helped him?',options:['A police officer','A taxi driver','An old lady','A student'],answer:2},
  {q:'What did Tom think about the day?',options:['It was terrible','Getting lost was the best part','He wanted to go home','London is too big'],answer:1}]},
{title:'The Job Interview', level:'B1', paragraphs:[
 "Lucia had a job interview at an IT company in Dublin. She had prepared for a week, but on the morning of the interview she was very nervous.",
 "Her train was delayed, so she arrived ten minutes late. She apologised and explained what had happened. The manager just smiled and said, 'Don't worry, it happens to everyone.'",
 "The interview went well. They asked about her experience, and she even made them laugh with a story about her first job.",
 "Two days later she got an email: they offered her the job. Lucia realised that being honest had helped her more than being perfect."],
 tr:[
 "Lucia mala pracovný pohovor v IT firme v Dubline. Pripravovala sa týždeň, ale ráno pred pohovorom bola veľmi nervózna.",
 "Jej vlak meškal, a tak prišla o desať minút neskôr. Ospravedlnila sa a vysvetlila, čo sa stalo. Manažér sa len usmial a povedal: „Nebojte sa, to sa stáva každému.“",
 "Pohovor dopadol dobre. Pýtali sa na jej skúsenosti a dokonca ich rozosmiala príbehom o svojej prvej práci.",
 "O dva dni dostala e-mail: ponúkli jej miesto. Lucia si uvedomila, že úprimnosť jej pomohla viac ako snaha byť dokonalá."],
 glossary:[{w:'job interview',sk:'pracovný pohovor'},{w:'had prepared',sk:'pripravovala sa'},{w:'delayed',sk:'meškal'},{w:'apologised',sk:'ospravedlnila sa'},{w:'went well',sk:'dopadol dobre'},{w:'experience',sk:'skúsenosti'},{w:'offered',sk:'ponúkli'},{w:'realised',sk:'uvedomila si'}],
 questions:[{q:'Why was Lucia late?',options:['She overslept','Her train was delayed','She got lost','She forgot the address'],answer:1},
  {q:'How did the manager react?',options:['He was angry','He cancelled the interview','He smiled and said it was fine','He asked her to come back tomorrow'],answer:2},
  {q:'What did Lucia learn?',options:['Being honest helped her','Trains are always late','She needs more experience','Dublin is too expensive'],answer:0}]},
{title:'Working from Home: Curse or Blessing?', level:'B2', paragraphs:[
 "Since the pandemic, millions of people have been working from home at least a few days a week. For many, it was a dream come true: no commuting, no traffic jams and more time with the family.",
 "However, not everyone is enthusiastic. Some people feel lonely and miss the small talk with colleagues. Others find it hard to switch off, because their living room has turned into their office.",
 "Experts say the key is to set clear boundaries: fixed working hours, a separate workspace and regular breaks. Many companies now offer a hybrid model, which combines the advantages of both worlds.",
 "In the end, whether working from home is a curse or a blessing depends on the person, the job and, of course, the size of your flat."],
 tr:[
 "Od pandémie milióny ľudí pracujú z domu aspoň niekoľko dní v týždni. Pre mnohých sa splnil sen: žiadne dochádzanie, žiadne zápchy a viac času s rodinou.",
 "Nie každý je však nadšený. Niektorí ľudia sa cítia osamelo a chýbajú im drobné rozhovory s kolegami. Iným robí problém vypnúť, pretože sa ich obývačka zmenila na kanceláriu.",
 "Odborníci hovoria, že kľúčom je stanoviť si jasné hranice: pevný pracovný čas, oddelené pracovné miesto a pravidelné prestávky. Mnohé firmy dnes ponúkajú hybridný model, ktorý spája výhody oboch svetov.",
 "Či je práca z domu kliatba alebo požehnanie, napokon závisí od človeka, práce a, samozrejme, od veľkosti bytu."],
 glossary:[{w:'commuting',sk:'dochádzanie do práce'},{w:'traffic jams',sk:'zápchy'},{w:'enthusiastic',sk:'nadšený'},{w:'lonely',sk:'osamelý'},{w:'switch off',sk:'vypnúť (oddýchnuť si)'},{w:'boundaries',sk:'hranice'},{w:'hybrid model',sk:'hybridný model (kombinácia)'},{w:'curse',sk:'kliatba'},{w:'blessing',sk:'požehnanie'}],
 questions:[{q:'What is one advantage of working from home?',options:['No commuting','More meetings','A higher salary','A bigger office'],answer:0},
  {q:'Why do some people find it hard to switch off?',options:['They work at night','Their living room became their office','Their boss calls them','They have no internet'],answer:1},
  {q:'What do experts recommend?',options:['Working in bed','Clear boundaries','Never taking breaks','Working only at weekends'],answer:1}]},
{title:'The Art of Doing Nothing', level:'C1', paragraphs:[
 "In a world obsessed with productivity, doing nothing has become almost a rebellious act. We fill every spare minute with podcasts, emails and endless scrolling, convinced that idleness is a waste of time.",
 "Yet research suggests the opposite. When the mind is allowed to wander, it makes unexpected connections, which is why so many brilliant ideas come to us in the shower or on a long walk.",
 "The Dutch even have a word for it: 'niksen', the deliberate practice of doing nothing without feeling guilty. It is not laziness, its fans argue, but a way of recharging one's batteries.",
 "So next time you catch yourself staring out of the window, don't reach for your phone. You might just be doing the most productive thing of the day."],
 tr:[
 "Vo svete posadnutom produktivitou sa z ničnerobenia stal takmer rebelský čin. Každú voľnú minútu vypĺňame podcastmi, e-mailmi a nekonečným scrollovaním, presvedčení, že nečinnosť je strata času.",
 "Výskumy však naznačujú opak. Keď necháme myseľ blúdiť, vytvára nečakané súvislosti, a preto nám toľko skvelých nápadov príde pod sprchou alebo na dlhej prechádzke.",
 "Holanďania na to majú dokonca slovo: „niksen“, zámerné ničnerobenie bez pocitu viny. Podľa jeho priaznivcov to nie je lenivosť, ale spôsob, ako si dobiť baterky.",
 "Takže keď sa nabudúce prichytíš, ako hľadíš z okna, nesiahaj po mobile. Možno práve robíš to najproduktívnejšie za celý deň."],
 glossary:[{w:'obsessed with',sk:'posadnutý niečím'},{w:'rebellious',sk:'rebelský'},{w:'idleness',sk:'nečinnosť'},{w:'wander',sk:'blúdiť, túlať sa'},{w:'deliberate',sk:'zámerný'},{w:'guilty',sk:'vinný (pocit viny)'},{w:'laziness',sk:'lenivosť'},{w:'recharging',sk:'dobíjanie'},{w:'staring',sk:'hľadieť, civieť'}],
 questions:[{q:'What does research suggest about doing nothing?',options:['It is a waste of time','It helps the mind make connections','It makes people lazy','It is bad for your health'],answer:1},
  {q:"What is 'niksen'?",options:['A Dutch dish','A sport','Doing nothing on purpose without guilt','A meditation app'],answer:2},
  {q:'What should you do next time you stare out of the window?',options:['Check your phone','Go for a run','Not reach for your phone','Start working'],answer:2}]}
],

dialogues:[
{id:'cafe', level:'A1', title:'V kaviarni', scene:'Objednávaš si v kaviarni v Londýne.', roles:['Čašníčka','Ty'], lines:[
 [0,"Hi there! What can I get you?","Ahoj! Čo vám môžem priniesť?"],
 [1,"Can I have a latte, please?","Môžem dostať latte, prosím?"],
 [0,"Sure. Small, medium or large?","Jasné. Malé, stredné alebo veľké?"],
 [1,"Medium, please.","Stredné, prosím."],
 [0,"Anything to eat?","Niečo na jedenie?"],
 [1,"Yes, a piece of carrot cake.","Áno, kúsok mrkvového koláča."],
 [0,"Is that to have here or to take away?","Tu alebo so sebou?"],
 [1,"To have here, thanks.","Tu, ďakujem."],
 [0,"That's six pounds twenty.","Bude to šesť libier dvadsať."],
 [1,"Can I pay by card?","Môžem platiť kartou?"],
 [0,"Of course. Just tap here.","Samozrejme. Len priložte kartu sem."]]},
{id:'weg', level:'A1', title:'Kde je stanica?', scene:'Si v Edinburghu a hľadáš stanicu.', roles:['Okoloidúci','Ty'], lines:[
 [1,"Excuse me, how do I get to the station?","Prepáčte, ako sa dostanem na stanicu?"],
 [0,"Go straight on and turn left at the traffic lights.","Choďte rovno a na semafore odbočte doľava."],
 [1,"Is it far?","Je to ďaleko?"],
 [0,"No, it's about five minutes on foot.","Nie, asi päť minút pešo."],
 [1,"Is there a bus?","Ide tam autobus?"],
 [0,"Yes, the number 22, but walking is quicker.","Áno, dvadsaťdvojka, ale pešo je to rýchlejšie."],
 [1,"Great, thank you very much!","Super, ďakujem veľmi pekne!"],
 [0,"No problem. Have a nice day!","Nemáte za čo. Pekný deň!"]]},
{id:'arzt', level:'A2', title:'U lekára', scene:'Nie je ti dobre, a tak ideš k lekárke.', roles:['Lekárka','Ty'], lines:[
 [0,"Hello, what seems to be the problem?","Dobrý deň, čo vás trápi?"],
 [1,"I've had a sore throat and a headache since Monday.","Od pondelka ma bolí hrdlo a hlava."],
 [0,"Do you have a temperature?","Máte horúčku?"],
 [1,"Yes, about thirty-eight degrees.","Áno, asi tridsaťosem stupňov."],
 [0,"Let me have a look. Open your mouth, please.","Pozriem sa. Otvorte ústa, prosím."],
 [0,"It's a throat infection. I'll give you a prescription.","Je to zápal hrdla. Dám vám recept."],
 [1,"How often should I take the tablets?","Ako často mám brať tabletky?"],
 [0,"Three times a day after meals. And get plenty of rest.","Trikrát denne po jedle. A veľa oddychujte."],
 [1,"Thank you, doctor.","Ďakujem, pani doktorka."]]},
{id:'pohovor', level:'B1', title:'Pracovný pohovor', scene:'Uchádzaš sa o miesto v IT firme v Dubline.', roles:['Personalistka','Ty'], lines:[
 [0,"Thanks for coming in. Could you tell us a bit about yourself?","Ďakujem, že ste prišli. Mohli by ste nám niečo povedať o sebe?"],
 [1,"Of course. I've worked as a developer for four years.","Samozrejme. Štyri roky pracujem ako programátor."],
 [0,"Why are you interested in this position?","Prečo vás zaujíma toto miesto?"],
 [1,"I'd like to work in an international team and learn new things.","Chcel by som pracovať v medzinárodnom tíme a učiť sa nové veci."],
 [0,"What would you say is your biggest strength?","Čo by ste povedali, že je vaša najväčšia silná stránka?"],
 [1,"I'm good at solving problems and I stay calm under pressure.","Viem dobre riešiť problémy a pod tlakom zostávam pokojný."],
 [0,"And a weakness?","A slabá stránka?"],
 [1,"Sometimes I find it hard to say no, but I'm working on it.","Niekedy ťažko hovorím nie, ale pracujem na tom."],
 [0,"Do you have any questions for us?","Máte na nás nejaké otázky?"],
 [1,"Yes, what does a typical day look like here?","Áno, ako tu vyzerá bežný deň?"]]},
{id:'homeoffice', level:'B2', title:'Práca z domu', scene:'Dohaduješ sa so šéfom, či môžeš pracovať z domu.', roles:['Šéf','Ty'], lines:[
 [1,"Have you got a minute? I'd like to talk about working from home.","Máte minútku? Chcel by som sa porozprávať o práci z domu."],
 [0,"Sure. What did you have in mind?","Jasné. Čo máte na mysli?"],
 [1,"Would it be possible to work from home two days a week?","Bolo by možné pracovať z domu dva dni v týždni?"],
 [0,"I'm not against it, but how would we stay in touch?","Nie som proti, ale ako by sme zostali v kontakte?"],
 [1,"I'd be available on chat all day, and I could join meetings online.","Celý deň by som bol dostupný na chate a na porady by som sa mohol pripájať online."],
 [0,"That sounds reasonable. Let's try it for a month and see how it goes.","To znie rozumne. Skúsme to na mesiac a uvidíme, ako to pôjde."],
 [1,"That's great, thank you. I'm sure it'll work out.","To je skvelé, ďakujem. Som si istý, že to vyjde."]]}
],

grammar:[
{id:'articles', level:'A1', title:'Členy a, an, the', intro:'Angličtina dáva pred podstatné mená malé slová, ktoré slovenčina nemá.', points:[
 'a = neurčitý člen pred spoluhláskou: a book, a car',
 'an = pred samohláskou vo výslovnosti: an apple, an hour (h sa nevyslovuje)',
 'the = určitý člen, keď je jasné, o čo ide: the sun, the book on the table',
 'Bez člena: množné číslo vo všeobecnosti (I like dogs), mená a väčšina krajín (Slovakia), jedlo a nápoje vo všeobecnosti (I drink coffee).'],
 practice:[["I have {a} brother.","Mám brata.","pred spoluhláskou a"],["She eats {an} apple every day.","Každý deň zje jablko.","pred samohláskou an"],["Close {the} door, please.","Zatvor dvere, prosím.","je jasné, ktoré dvere"],["I'll be back in {an} hour.","Vrátim sa o hodinu.","h sa nevyslovuje → an"]]},
{id:'present', level:'A1', title:'Prítomný čas: works alebo is working', intro:'Angličtina má dva prítomné časy: jeden na zvyky, druhý na to, čo sa deje práve teraz.', points:[
 'Present simple = zvyky a fakty: I work in a bank. She drinks tea.',
 'Pri he, she, it pridaj -s: he works, she goes, it costs',
 'Zápor a otázka cez do alebo does: I don\'t know. Does she like it?',
 'Present continuous = práve teraz: I am working. Are you listening?',
 'Signálne slová: always, usually, every day → simple; now, at the moment → continuous'],
 practice:[["She {works} in a hospital.","Pracuje v nemocnici.","he/she/it + -s"],["Look! It {is} raining.","Pozri! Prší.","práve teraz → is raining"],["{Does} he speak German?","Hovorí po nemecky?","otázka pri he → does"],["I {don't} eat meat.","Nejem mäso.","zápor → don't"]]},
{id:'past', level:'A2', title:'Minulý čas (Past simple)', intro:'Na ukončené deje v minulosti: včera, minulý rok, pred týždňom.', points:[
 'Pravidelné slovesá dostanú -ed: worked, played, visited',
 'Nepravidelné sa treba naučiť: go → went, see → saw, buy → bought',
 'Otázka a zápor cez did + základný tvar: Did you see it? I didn\'t go.',
 'Was a were: I was tired, they were at home.'],
 practice:[["We {visited} my grandma last week.","Minulý týždeň sme navštívili babku.","pravidelné → -ed"],["I {went} to the cinema yesterday.","Včera som išiel do kina.","go → went"],["Did you {see} the match?","Videl si ten zápas?","po did základný tvar"],["They {were} very tired.","Boli veľmi unavení.","they → were"]]},
{id:'perfect', level:'B1', title:'Present perfect: have done', intro:'Spája minulosť s prítomnosťou: skúsenosti, výsledky, „doteraz“.', points:[
 'Tvar: have alebo has + 3. tvar slovesa: I have seen, she has finished',
 'Skúsenosti bez presného času: Have you ever been to London?',
 'S for (ako dlho) a since (odkedy): I have lived here for five years / since 2020.',
 'S presným časom v minulosti použi past simple: I saw it yesterday (nie I have seen it yesterday).'],
 practice:[["I {have} never eaten sushi.","Nikdy som nejedol sushi.","have + 3. tvar"],["She {has} just left.","Práve odišla.","he/she → has"],["We've lived here {for} ten years.","Bývame tu desať rokov.","for + dĺžka"],["I've known him {since} school.","Poznám ho od školy.","since + začiatok"]]},
{id:'conditionals', level:'B1', title:'Podmienkové vety (if)', intro:'Ako povedať „ak“ a „keby“.', points:[
 '1. typ (reálne): If it rains, we will stay at home. Po if nikdy nie will.',
 '2. typ (nereálne teraz): If I had more money, I would travel more.',
 'Pri „keby som bol“ sa v spisovnej angličtine hovorí If I were…',
 '3. typ (minulosť, už sa nedá zmeniť): If I had known, I would have come.'],
 practice:[["If it {rains}, we'll take the bus.","Ak bude pršať, pôjdeme autobusom.","po if prítomný čas"],["If I {had} more time, I would learn Spanish.","Keby som mal viac času, učil by som sa španielsky.","2. typ → minulý tvar"],["If I {were} you, I'd call her.","Na tvojom mieste by som jej zavolal.","If I were"],["If she had asked, I {would} have helped.","Keby sa bola opýtala, bol by som pomohol.","3. typ → would have"]]}
]
};
})();
