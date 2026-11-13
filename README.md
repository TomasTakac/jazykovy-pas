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

## Súbory
- `index.html`, `styles.css`, `app.js`: appka
- `content.js`: lekcie, vety, hry a príbehy (riadok lekcie: `slovo | význam | príkladová veta | preklad vety | poznámka`)
- `sw.js`, `manifest.webmanifest`, `icons/`: inštalácia na plochu a práca offline (pri každej zmene zvýš `VERSION` v `sw.js`)

## Lokálne spustenie
```bash
python3 -m http.server 8781
```
