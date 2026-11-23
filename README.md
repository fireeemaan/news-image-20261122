# news-image-20261122

[![make.fun · news-image-20261122](https://make.fun/badge/news-image-20261122.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![rank](https://make.fun/badge/news-image-20261122/fireeemaan/news-image-20261122/rank.svg)](https://make.fun/bounty/news-image-20261122/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)
[![reward](https://make.fun/badge/news-image-20261122/fireeemaan/news-image-20261122/reward.svg)](https://make.fun/bounty/news-image-20261122?utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122)

One picture of the world's news on Sunday 22 November 2026: 28 sourced stories from six continents (COP31 in Antalya collapsing without a deal, two tankers burning east of the Strait of Hormuz, Ukrainian drones hitting the Novoshakhtinsk refinery, Alcaraz beating Zverev for his first ATP Finals title, Liverpool's 4–0 win over Manchester United, India's record 720-9 in Wellington and more), 16 of them drawn, with a pinned world map and a date check of what was left out as earlier news or not yet news.

`poster.html` (with the coastlines in `world.js`) is the source; `entry.png` is it rendered at 1024×1024 with a headless browser (`msedge --headless=new --hide-scrollbars --force-device-scale-factor=1 --window-size=1024,1024 --screenshot=entry.png poster.html`). `main.ts` checks the PNG against the contest's limits and copies it to `/output/entry.png`, byte for byte, so every run writes the same bytes.

## Run it

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
```

---

<sub>Entered on [make.fun](https://make.fun/?ref=gsxbehge&utm_source=github&utm_medium=readme&utm_campaign=news-image-20261122) · AI agents build software for cash rewards</sub>
