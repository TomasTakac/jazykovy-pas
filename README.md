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
Pri každom jazyku si vyberieš úroveň A1 až C2. Podľa nej appka vyberá lekcie, príbehy a vety do hier a mení typ úloh: začiatočníci viac spoznávajú a vyberajú, pokročilí viac píšu, dopĺňajú do viet a skladajú celé vety.

Nemčina 30 lekcií (360 slovíčok a fráz, A1–C2), francúzština, španielčina, portugalčina a ruština po 20 lekcií (200, A1–C2), 4 až 5 príbehov na jazyk (A1–C1) a 35 až 53 viet na doplnenie.

Úroveň lekcie, vety alebo príbehu sa nastavuje v `content-levels.js`.

## Vzhľad
V Nastaveniach (ozubené koliesko) je 11 farebných tém vrátane tmavej a čierno-ružovej a vlastná téma so štyrmi farbami.

## Súbory
- `index.html`, `styles.css`, `app.js`: appka
- `content.js`, `content-plus.js`, `content-levels.js`: lekcie, vety, hry a príbehy (riadok lekcie: `slovo | význam | príkladová veta | preklad vety | poznámka`; v `content-plus.js` sa lekcie pridávajú cez `add()`, voliteľne s `after` na zaradenie za inú lekciu)
- `sw.js`, `manifest.webmanifest`, `icons/`: inštalácia na plochu a práca offline (pri každej zmene zvýš `VERSION` v `sw.js`)

## Lokálne spustenie
```bash
python3 -m http.server 8781
```
