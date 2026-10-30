# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

delegated: Next.js 16 (App Router) + React 19 + Tailwind CSS 4, chosen to match the owner's existing AniMax stack and deploy on Vercel.

## Users

Recruiters, server owners, and community leads who land on the site from Discord or a link and want to know, in under a minute, whether EzWin can build and run the systems they need (Discord bots, web panels, FiveM infrastructure, anime platforms, short-form edits).

## Product Purpose

A single-owner portfolio for EzWin that turns the real project archive into evidence: what was built, how it works, and how to start a conversation. Success means the visitor opens a project, believes the work is real, and joins the Discord.

## Positioning

Breadth with receipts: bots, panels, game-server infrastructure, a full anime platform, and video editing built by one person, each documented with the mechanisms that actually exist in the codebase (guard modules, ticket OAuth, AniList caching, custom player), not generic service copy.

## Operating Context

Visitors browse on desktop first (portfolio review, Discord link clicks) and on mobile from Discord. The site is static content with no backend; contact happens through the EzWin Discord invite found in the project files (`discord.gg/4vYK5vWCy8`).

## Capabilities and Constraints

- Single page: hero reel, selected systems, capabilities, process, contact.
- Project content comes from local folders (AegisBot, NexoraBot, VertexV14, EzAnime, Fivem Server, Discord VR Status, Edit archive, EZWİN LOGOLAR) plus the public `github.com/EzWinStudio` repos (studio agency, CATA-STORE, Template / Uncopylocked / Asset) and the ecosystem copy in the old `Portfolio` repo.
- No fabricated testimonials, user counts, revenue, or client names.
- No live project links or screenshots were provided; cards use the owner's real logos and described mechanisms.
- Motion must stay optional for `prefers-reduced-motion` and must never delay first-view content.

## Brand Commitments

Name: **EzWin** (chosen by the owner). Existing logo set is silver-on-black with a violet accent (AniMax). Turkish-language copy. Voice: direct, technical, confident, no corporate filler.

## Evidence on Hand

- `C:\Users\yekta\Desktop\Botlar\AegisBot` — 25 guard modules, dashboard (Express), 11 slash commands.
- `C:\Users\yekta\Desktop\Botlar\NexoraBot` — ticket bot + MongoDB + OAuth2 + SSE web panel, README documents the flows.
- `C:\Users\yekta\Desktop\Botlar\VertexV14` — music/community bot with EJS web dashboard and 105 commands.
- `C:\Users\yekta\Desktop\EzAnime` — Next.js 16 AniList platform with custom player, accounts (Google / Discord / MyAnimeList), SQLite-backed watchlist (README).
- `C:\Users\yekta\Desktop\Fivem Server` — test/dev setup behind the FiveM script studio: QBCore, 13 resource packs, txAdmin, gamebuild 3751. The owner corrected the positioning: EzWin FiveM is a script-sales studio, not a public city server, so slot counts are not published.
- `C:\Users\yekta\Desktop\Discord VR Status - Cahit` — Discord platform-presence userscript (7 platforms).
- `C:\Users\yekta\Desktop\EZWİN LOGOLAR` — brand and project logos used as card artwork.
- `C:\Users\yekta\Desktop\Edit` — video edit archive (93 clip files); titles are not used on the site.
- Public presence: `github.com/EzWinStudio`; support server `discord.gg/4vYK5vWCy8` (found in Vertex config).
- `github.com/EzWinStudio` — EzWinStudio agency (map/environment design, Luau backend/client, 3D, UI/UX); CATA-STORE (Robux packages, order lookup, admin panel, privacy/terms; site currently shows a maintenance state); Template / Uncopylocked / Asset repos (ready Roblox bases and asset packs).
- Old `EzWinStudio/Portfolio` repo — ecosystem copy for EZWIN CORPORATION (SCP-themed identity), EzWin Site Sistemleri (portfolio/panel web infrastructure), EzWinCheat (Luau tooling). Its EzWinMusic copy described a streaming bot; the owner corrected this — EzWinMusic is a music studio, so that copy is not used.
- EzCraft — Minecraft game server (owner-confirmed 2026-10-30). Only the logo exists locally; no repo or written description, so the card stays to "oyun sunucusu" level detail.
- EzWin Hesap Hizmetleri — logo exists but no verifiable description, so it is not published.

## Product Principles

1. Evidence over adjectives: every claim maps to a file, module, or documented flow.
2. One operator, many systems: the reel metaphor connects bots, web, game servers, and edits.
3. Motion is the medium, never the gate: content is readable before any animation runs.
4. Turkish first, technical vocabulary intact (guard, ticket, reel, panel).
5. The next step is always one click: the Discord invite.

## Accessibility & Inclusion

Keyboard-reachable navigation and cards, visible focus, `prefers-reduced-motion` respected, AA contrast for body text on the dark ground.
