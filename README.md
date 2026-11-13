# Jazykový pas

Offline appka na učenie jazykov (nemčina, francúzština, španielčina, portugalčina, ruština) pre iPhone aj PC.
Nepotrebuje server ani účet: pokrok sa ukladá v zariadení a medzi zariadeniami sa prenáša zálohou (Pokrok → Záloha a prenos).

## Ako sa učí nové slovo
1. **Zoznámenie**: slovo, preklad, výslovnosť, príkladová veta (v nemčine farba rodu: der modrý, die červený, das zelený).
2. **Spoznanie**: vyber význam zo štyroch možností, alebo ho rozpoznaj podľa zvuku.
3. **Opačne**: k slovenskému významu vyber cudzie slovo.
4. **Skladanie**: poskladaj slovo z písmen alebo frázu zo slov.
5. **Písanie**: napíš ho sám (s nápovedou po písmenkách).

Potom ide do rozloženého opakovania (1 → 3 → 7 → … dní). Čím lepšie ho vieš, tým ťažšia forma: výber → skladanie → písanie → doplnenie do vety.

## Úrovne a obsah
Pri každom jazyku si vyberieš úroveň A1 až C2, alebo si ju zistíš krátkym **vstupným testom** (4 otázky na úroveň). Podľa nej appka vyberá lekcie, príbehy, rozhovory a vety do hier a mení typ úloh: začiatočníci viac spoznávajú a vyberajú, pokročilí viac píšu, dopĺňajú do viet a skladajú celé vety.

| | Lekcie | Slovíčka a frázy | Príbehy | Rozhovory | Gramatika |
|---|---|---|---|---|---|
| Nemčina | 33 | 396 | 6 | 5 | 7 tém |
| FR, ES, PT, RU | 22 | 220 | 5 | 4 | 4 témy |

Navyše 35 až 53 viet na doplnenie do hier.

## Čo appka robí a prečo
- **Najčastejšie slová najprv**: otázky, slovesá a frázy, ktoré pokryjú najviac bežnej reči.
- **Rozložené opakovanie**: slovo sa vráti tesne predtým, ako by si ho zabudol.
- **Rozhovory** (Čítanie → Rozhovory): vypočuješ si skutočnú situáciu (kaviareň, cesta, lekár, pohovor) a potom si zahráš svoju rolu. Začiatočníci skladajú repliku z dlaždíc, pokročilí ju píšu alebo hovoria nahlas.
- **Hovorenie**: hra „Hovor nahlas“ (Hry) a mikrofón v rozhovoroch. Keď rozpoznávanie reči nejde (napr. v appke na ploche iPhonu), appka ťa nahrá a pustí ti tvoju výslovnosť vedľa vzoru.
- **Gramatika v kocke** (Lekcie): krátke vysvetlenie a hneď precvičenie.
- **Cieľ** (cestovanie, práca, ľudia, kultúra, sťahovanie, zábava): označí lekcie, ktoré sú pre teba najdôležitejšie.
- **Pečiatky v pase** (Pokrok): 17 úspechov za sériu, slová, príbehy, rozhovory a hovorenie.
- **Pripomienky**: v Nastaveniach si pridáš dennú pripomienku do kalendára (súbory v `reminders/`).
- **Sprievodca** (Pokrok): koľko slov už vieš z cieľových 2 000 a ako sa učiť najrýchlejšie.

Úroveň lekcie, vety alebo príbehu sa nastavuje v `content-levels.js`.

## Vzhľad
V Nastaveniach (ozubené koliesko) je 11 farebných tém vrátane tmavej a čierno-ružovej a vlastná téma so štyrmi farbami.

## Súbory
- `index.html`, `styles.css`, `app.js`: appka
- `content.js`, `content-plus.js`, `content-levels.js`, `content-extra.js`: lekcie, vety, hry, príbehy, rozhovory a gramatika (riadok lekcie: `slovo | význam | príkladová veta | preklad vety | poznámka`; v `content-plus.js` sa lekcie pridávajú cez `add()`, voliteľne s `after` na zaradenie za inú lekciu)
- `reminders/`: denné pripomienky do kalendára (.ics)
- `sw.js`, `manifest.webmanifest`, `icons/`: inštalácia na plochu a práca offline (pri každej zmene zvýš `VERSION` v `sw.js`)

## Lokálne spustenie
```bash
python3 -m http.server 8781
```
