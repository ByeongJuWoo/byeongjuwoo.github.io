# CLAUDE.md — Cocktail page (`public/cocktail/index.html`)

This directory holds a **standalone static HTML page** — it is *not* part of the
Next.js app (no routing, no React, no build step touches it). Everything lives
in one file: CSS in `<style>`, markup in `<body>`, logic in the `<script>`
block near the end. This file documents the conventions that have built up
across many editing sessions so a fresh session doesn't relitigate or quietly
break them.

## The one rule that matters most

**ABV and soju numbers are computed by the page itself, from ingredient data
— never hand-typed.** The `RECIPES` object holds structured `{ n: ingredient,
o: ounces }` ingredients per drink; `computeRecipe()` derives ABV% and soju
count from that plus `ABV_TABLE`. The *static* HTML badges (the `%` pill and
`X.X soju` next to every menu name) are a separate, manually-written copy of
that same computed output — they exist so the number is visible without
opening the recipe modal. **Whenever you change a recipe's ingredients or
amounts, the JS `ingredients` array and the static HTML badge must be updated
together**, and they must agree. Do not eyeball a new percentage — actually
run the calculation (see "How to safely change a recipe" below). A past bug
(soju computed from the *diluted* ABV × original volume instead of true
ingredient alcohol content) shipped wrong numbers across ~10 recipes for a
while; don't reintroduce that class of bug.

## ABV_TABLE — canonical ingredient strengths

Single source of truth, defined once in the script:

| Ingredient | ABV | Ingredient | ABV |
|---|---|---|---|
| Vodka, Bourbon, White Rum, Dry Gin, Tequila, Cointreau | 40% | Kahlúa | 20% |
| Overproof Rum | 75% | Baileys | 17% |
| Monkey 47 (gin) | 47% | Midori, Blue Curaçao | 20% |
| Malibu Coconut Rum | 21% | Peach Schnapps | 15% |
| Cranberry/Orange/Pineapple/Lime Juice | 0% | Sweet & Sour Mix | **0%** |
| Tonic Water, Ginger Ale, Sprite, Milk, Cola, Grenadine | 0% | Sugar, Salt, Lemon, Orange, Cinnamon Powder (garnish) | 0% |

Notes:
- **Sweet & Sour Mix is 0% ABV.** It was wrongly set to 15% earlier in this
  project's history and every recipe using it had to be recomputed when that
  was caught (user confirmed: their actual bottle is 0%). Don't reintroduce
  a nonzero value for it without being told the bottle changed.
- Adding a brand-new ingredient to any recipe means adding it to
  `ABV_TABLE` first (real-world ABV of that spirit/liqueur/mixer), or it
  silently computes as 0%.

## Dilution rule (ice melt)

Recipes whose technique includes **Shake or Stir** get the raw ABV multiplied
by **0.8** (≈20% dilution from ice, a standard bartending approximation) to
produce the displayed/final ABV. **Build, Float, and Neat get no dilution**
(`dilute: false`). This is a per-recipe boolean (`dilute: true/false` in the
`RECIPES` entry) — set it by technique, not by feel.

## Soju conversion

- 1 "soju" = one 50ml glass at 17% ABV = **8.5ml of pure alcohol**.
- `soju count = total alcohol in the drink (ml) / 8.5`.
- Total alcohol is computed from the **raw, undiluted** ingredient volumes ×
  their ABV_TABLE percentage — dilution water has no alcohol in it, so the
  0.8 factor must never be applied when computing the alcohol-content side of
  this math, only when computing the displayed ABV%.
- 1 oz = 30ml (the conversion factor used throughout; not the precise 29.57ml,
  kept for round numbers).

## `RECIPES` entry shape

```js
'recipe-key': {
  name: 'Display Name',
  why: 'One-line reason, only if starred (or occasionally unstarred).',  // optional
  starred: true,        // optional — see "Recommended star" below
  dilute: true,         // true if technique is Shake/Stir, false for Build/Float/Neat
  ingredients: [
    { n: 'Vodka', o: 1.5 },                                   // plain
    { n: 'Sugar', o: 1/6, label: '1 tsp' },                   // override the oz-fraction text
    { n: 'Overproof Rum', o: 1/6, note: '(float)' },          // suffix after the amount
    { n: 'Salt', o: 0, note: '(for the rim)' },                // o:0 = garnish, excluded from ABV/volume math entirely
    { n: 'Monkey 47', o: 1.5, display: 'Dry Gin (Monkey 47) — 1 1/2 oz (neat)' } // full text override
  ],
  method: [ 'Step one.', 'Step two.' ]
}
```

- `o: 0` is the pattern for anything that shouldn't count toward ABV or total
  volume: rim garnishes (salt/sugar), a twist garnish, or an ingredient the
  user explicitly said to exclude from the calculation (e.g. a 3ml flambé
  float in AWOL). It still appears in the ingredients list via `note` or
  `display`.
- `formatOz()` auto-converts decimals to nice fractions (1/6, 1/4, 1/3, 1/2,
  2/3, 3/4, 5/6) for display — you don't need to hand-format amounts, just
  pass the decimal ounce value.

## Menu row HTML shape (in the Menu tab)

```html
<div class="menu-row clickable" data-recipe="recipe-key">
  <div class="menu-top">
    <span class="menu-name[ recommended][ unstocked]">Name</span>
    <div class="menu-abv-wrap">
      <span class="menu-soju"><span class="soju-num">X.X</span> soju</span>
      <span class="menu-abv {low|mid|high}">Y%</span>
    </div>
  </div>
  <div class="menu-tags">
    <span class="technique-tag">Shake</span>
    <span class="tag-divider"></span>
    <span class="menu-tag {base|liqueur|juice|mixer|syrup|fruit}">Ingredient</span>
    ...
  </div>
</div>
```

- ABV class thresholds: **low** `<12%`, **mid** `12–25%` (inclusive), **high**
  `>25%`.
- `menu-tag` category → color class: base spirits = `base`, liqueurs =
  `liqueur`, juices = `juice`, mixers/sodas = `mixer`, syrups = `syrup`,
  garnish (sugar/salt/fruit) = `fruit`.
- Every menu item should have `data-recipe="key"` matching a `RECIPES` key —
  the whole menu is click-to-view-recipe now; there shouldn't be any item
  left without a modal.
- `data-recipe` keys and `RECIPES` keys must be a 1:1 set — no orphans on
  either side (quick self-check below).

## "Recommended" star system

- A starred item has `starred: true` in its `RECIPES` entry **and** the
  `recommended` class on its `.menu-name` in the HTML — these two must be
  added/removed **together**. `.menu-name.recommended::before` renders the
  ⭐.
- The modal's "why" callout box only gets the ⭐ prefix if `starred: true`.
  A `why` field **without** `starred` is valid and intentional (e.g. Monkey
  Shot has a why-box but no star) — don't assume every `why` implies a star.
- Moving the star between drinks means moving the class + the `starred` flag;
  it does not necessarily mean copying the `why` text — each drink normally
  keeps its own reason.

## Stock tab / `unstocked` convention

- Categories: Base Spirits, Liqueurs, Juices, Mixers, Syrups, Garnish (CSS
  classes `base/liqueur/juice/mixer/syrup/fruit` respectively).
- If a recipe uses an ingredient **not currently listed in Stock**, add
  `unstocked` to that recipe's `.menu-name` classes (grays out the name).
  This is a **manual** cross-check — nothing verifies it automatically.
  Remove the class the moment the ingredient is added to Stock.
- The "To Buy" section at the bottom of the Stock tab is a wishlist
  (dashed-border chips) for things not yet purchased — add real items there
  when relevant, not just anything unstocked.

## Schedule / booking calendar (Welcome tab)

- `MIN_YEAR`/`MIN_MONTH` and `MAX_YEAR`/`MAX_MONTH` bound month navigation
  (currently **Sept 2026 – Dec 2026**). Extend these as the year progresses —
  don't just leave it stuck.
- `BOOKED_DATES` is a flat array of `'YYYY-MM-DD'` strings, all labeled
  "Booked" uniformly (no per-visit numbering — that was tried and explicitly
  reverted).
- **Every Thursday is auto-"Busy"** unless that date is already in
  `BOOKED_DATES` — computed live via `Date#getDay() === 4`, not a hardcoded
  per-month list. This generalizes correctly across months; don't regress it
  back to a hardcoded busy-date list.
- Clicking an open date opens the booking modal (reuses `.recipe-modal-*`
  styling) and sends the message via **EmailJS** (`emailjs.send`) to
  `byeongju@umich.edu`. Service ID, Template ID, and Public Key are hardcoded
  in the script (EmailJS public keys are meant to be client-side visible,
  like a Stripe publishable key — this is expected, not a leak). **Do not**
  revert this to a `mailto:` link — that was tried first and explicitly
  rejected in favor of actual send-on-submit behavior.

## Tone / naming

This is the user's personal site — uncensored drink names are intentional
(e.g. "Adios Mother Fucker (AMF)", "Quick Fuck"). Don't self-censor names the
user has already approved.

## How to safely change a recipe (checklist)

1. Edit the `ingredients` array in the `RECIPES` entry (and `dilute` if the
   technique changed).
2. Recompute the ABV% and soju — don't do this in your head. Extract the
   script and run `computeRecipe()` against the new ingredients in Node to
   get exact numbers (this project's editing history has a recurring pattern
   of doing exactly this — pull `ABV_TABLE` + `computeRecipe` out of the
   `<script>` block into a throwaway Node snippet, stub `document` if needed,
   and print `c.abvRounded` / `c.sojuRounded`).
3. Update the static `menu-abv` class + text and `soju-num` text in the menu
   row to match exactly.
4. Update `.menu-tags` chips to match the new ingredient list (add/remove/
   rename as needed, right CSS category class).
5. If the ingredient list changed, check whether `unstocked` needs to be
   added or removed.
6. Sanity-check before considering it done:
   ```bash
   python3 - <<'EOF'
   import re
   html = open('public/cocktail/index.html').read()
   for tag in ['section','div','span']:
       o = len(re.findall(r'<'+tag+r'(\s|>)', html))
       c = len(re.findall(r'</'+tag+r'>', html))
       print(tag, o, c)  # opens must equal closes
   scripts = re.findall(r'<script(?: src="[^"]*")?>(.*?)</script>', html, re.S)
   open('/tmp/c.js','w').write(scripts[-1])
   EOF
   node --check /tmp/c.js && echo OK
   ```
   Also spot-check that every `data-recipe="x"` has a matching `RECIPES` key
   and vice versa (a quick regex diff, same pattern used throughout this
   project's history).

## Git

- Only commit when explicitly asked.
- Never stage `tsconfig.tsbuildinfo` (untracked Next.js build artifact,
  unrelated to this page).
- Commit messages end with the `Co-Authored-By: Claude Sonnet 5
  <noreply@anthropic.com>` trailer per the user's standing instruction.
