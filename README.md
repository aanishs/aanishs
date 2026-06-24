<div align="center">

# ᴛʜᴇ ᴀ–ᴢ ᴅɪᴄᴛɪᴏɴᴀʀʏ

*a working dictionary of the things I build — one project per letter, A through Z*

**aanish · Wavelength** &nbsp;—&nbsp; *9 of 26 defined*

</div>

```text
 A   B   C   D   E   F   G   H   I   J   K   L   M
 ●   ◐   ●   ●   ●   ○   ○   ○   ○   ○   ○   ○   ○
 N   O   P   Q   R   S   T   U   V   W   X   Y   Z
 ○   ○   ●   ○   ○   ●   ●   ○   ○   ●   ○   ○   ○

 ● shipped & live      ◐ building      ○ not yet defined      9 / 26
 labels:  product · open source · skill · for fun
```

> [!NOTE]
> **dic·tion·ar·y** /ˈdɪk.ʃən.ɛr.i/ *n.* — **1 :** a reference work listing words with their meanings. **2 :** *(this one)* an A→Z challenge in which one ships twenty-six projects, one per letter, and records each here as it ships. *‹still mid-alphabet; the blanks are honest, not filler.›*

---

### The entries &nbsp;<sub>A → Z</sub>

> # A &nbsp;·&nbsp; aanish
> /ˈɑː.nɪʃ/ &nbsp;·&nbsp; (AH-nish) &nbsp;·&nbsp; *proper n.*
>
> **1 :** technical co-founder at **Simplest Healthcare** - builds CoralEHR an AI-native EHR for behavioral-health care, alongside the clinicians who use it. **2 a :** an engineer who taught himself FHIR and builds AI agents on top of it; **b :** has also led go-to-market — at home in the codebase and on the call; **c :** *(by extension)* ships a project per letter of the alphabet to prove the point. **3 :** *(informal)* happiest in the ambiguous 0→1, where nothing is defined yet.
>
> *— adj.* **TypeScript-pilled** : holding that types are a feature, not a tax.
>
> *alma mater* &nbsp; <img src="assets/usc-trojans.svg" alt="USC" height="40">
>
> [from *coral* + *EHR*, by way of behavioral health] &nbsp; *SEE ALSO* B, C, D, E, P, S, T, W.

> **B** &nbsp; **bon·fire·DB** &nbsp; /ˈbɒn.faɪər.diːˌbiː/ &nbsp;·&nbsp; (BON-fyr · D-B) &nbsp;·&nbsp; *n.* &nbsp;·&nbsp; *(open source · healthcare)*
>
> **1 :** an open-source, agent-native clinical backend — typed clinical primitives on Postgres with FHIR R4 generated underneath, so you ship FHIR-safe apps without running a FHIR server. **2 :** built so agents can safely read and aggregate patient records.
>
> *In a sentence:* *‹bonfireDB democratizes building in healthcare.›*
>
> [from *bonfire* + *DB*] &nbsp; *SEE ALSO* C *(the same FHIR-safe thesis)*, S *(sibling OSS)*. &nbsp; *— building.* &nbsp; [site ↗](https://bonfiredb.dev)

> **C** &nbsp; **Cor·al·EHR** &nbsp; /ˈkɔːr.əl.iː.eɪtʃ.ɑːr/ &nbsp;·&nbsp; (KOR-uhl · E-H-R) &nbsp;·&nbsp; *prop. n.* &nbsp;·&nbsp; *(product · healthcare)*
>
> **1 :** an AI-native electronic health record for private-pay behavioral health. **2 :** the flagship product of **Simplest Healthcare**.
>
> *In a sentence:* *‹CoralEHR is built with clinicians, not just for them.›*
>
> [from *coral* + *EHR* (electronic health record); first attested September 2025] &nbsp; *SEE ALSO* T *(sibling app)*, B *(the backend thesis)*. &nbsp; *— live.* &nbsp; [site ↗](https://coralehr.com)

> **D** &nbsp; **dun·ning–kru·ger** &nbsp; /ˈdʌn.ɪŋ ˈkruː.ɡər/ &nbsp;·&nbsp; (DUH-ning · KROO-gur) &nbsp;·&nbsp; *n., also v.* &nbsp;·&nbsp; *(open source · skill)*
>
> **1** *(n.)* **:** a tool that interviews you about your own codebase, scores your answers against the source with file:line receipts, and plots the gap between what you think you understand and what the code can prove. **2** *(v.)* **to dunning-kruger** *(oneself)* **:** to discover, on the record, how much of a vibe-coded repo is a black box.
>
> *In a sentence:* *‹it dunning-krugered my repo and was not kind.›*
>
> [from *Dunning* + *Kruger*, after the 1999 effect] &nbsp; *SEE ALSO* E *(both audit what you'd rather not look at)*. &nbsp; *— shipped.* &nbsp; [repo ↗](https://github.com/aanishs/dunning-kruger)
>
> <sub>first commit <!--fc:aanishs/dunning-kruger-->2026-06-23<!--/fc--> · last commit <!--lc:aanishs/dunning-kruger-->2026-06-23<!--/lc--></sub>

> **E** &nbsp; **em–dash** &nbsp; /ˈɛm.dæʃ/ &nbsp;·&nbsp; (EM-dash) &nbsp;·&nbsp; *n.* &nbsp;·&nbsp; *(open source · skill)*
>
> **1 :** an open-source compliance engine that plugs into Claude Code — scans your infrastructure for HIPAA / SOC 2 / GDPR / PCI / ISO gaps, drafts the fixes, and emits signed audit evidence. **2 :** the open-source answer to a five-figure compliance SaaS.
>
> *In a sentence:* *‹compliance without the black box - or the invoice.›*
>
> [from *em-dash*, the punctuation that outs AI prose — a wink at the opaque compliance vendors it undercuts] &nbsp; *SEE ALSO* D *(both audit what you'd rather not look at)*. &nbsp; *— shipped.* &nbsp; [repo ↗](https://github.com/aanishs/em-dash)
>
> <sub>first commit 2026-03-22 · last commit <!--lc:aanishs/em-dash-->2026-04-06<!--/lc--></sub>

> **P** &nbsp; **pok·er·in·site** &nbsp; /ˈpoʊ.kər.ɪnˌsaɪt/ &nbsp;·&nbsp; (POH-kur-in-syt) &nbsp;·&nbsp; *n.* &nbsp;·&nbsp; *(for fun)*
>
> **1 :** a for-fun poker-analytics app — turns your hands into hand-, player-, and game-level insight, with bankroll tracking. *(React · Firebase.)*
>
> [from *poker* + *insight*; cf. *on-site* / *in-sight*] &nbsp; *cf.* D *(both score you against the record you'd rather not see)*. &nbsp; *— shipped.* &nbsp; [site ↗](https://pokerin.site) &nbsp;·&nbsp; [repo ↗](https://github.com/aanishs/pokerinsite)
>
> <sub>first commit 2024-08-08 · last commit <!--lc:aanishs/pokerinsite-->2025-06-05<!--/lc--></sub>

> **S** &nbsp; **sim·ply–html** &nbsp; /ˈsɪm.pli.eɪtʃ.tiː.ɛmˈɛl/ &nbsp;·&nbsp; (SIM-plee · H-T-M-L) &nbsp;·&nbsp; *n.* &nbsp;·&nbsp; *(open source · skill)*
>
> **1 :** a tool that turns agent-written markdown into living, PIN-gated HTML pages — so what the model wrote outlives the chat it was written in.
>
> *In a sentence:* *"the model writes the content; it never writes the JavaScript."*
>
> [from wanting agent-written prose to outlive the conversation] &nbsp; *SEE ALSO* B *(sibling OSS)*. &nbsp; *— shipped.* &nbsp; [repo ↗](https://github.com/aanishs/simply-html)
>
> <sub>first commit 2026-06-21 · last commit <!--lc:aanishs/simply-html-->2026-06-21<!--/lc--></sub>

> **T** &nbsp; **Tic·Vi·sion** &nbsp; /ˈtɪk.vɪʒ.ən/ &nbsp;·&nbsp; (TIK-vizh-uhn) &nbsp;·&nbsp; *prop. n.* &nbsp;·&nbsp; *(product · healthcare)*
>
> **1 :** Tourette's tic-tracking with remote therapeutic monitoring. **2 :** a product of **Simplest Healthcare**, sibling to CoralEHR.
>
> [from *tic* + *vision*; first attested January 2025] &nbsp; *SEE ALSO* C *(sibling product)*, B *(the FHIR-safe thesis)*. &nbsp; *— live.* &nbsp; [site ↗](https://ticvision.io)

> **W** &nbsp; **wave·length** &nbsp; /ˈweɪv.lɛŋθ/ &nbsp;·&nbsp; (WAYV-length) &nbsp;·&nbsp; *n.* &nbsp;·&nbsp; *(for fun · game)*
>
> **1 :** a multiplayer compatibility game — answer prompts on a 0–100 spectrum, share a link, and see how aligned you and a friend are.
>
> *In a sentence:* *‹send the link; find out if you're actually on the same wavelength.›*
>
> [from *wave* + *length*; *idiom.* "on the same wavelength"] &nbsp; *cf.* P *(both turn answers into a score)*. &nbsp; *— live.* &nbsp; [site ↗](https://playwavelength.com) &nbsp;·&nbsp; [repo ↗](https://github.com/aanishs/wavelength)
>
> <sub>first commit 2024-05-23 · last commit <!--lc:aanishs/wavelength-->2024-08-01<!--/lc--></sub>

---

### The rest of the alphabet

*Seventeen headwords still awaiting their first attestation:*

`F` &nbsp; `G` &nbsp; `H` &nbsp; `I` &nbsp; `J` &nbsp; `K` &nbsp; `L` &nbsp; `M` &nbsp; `N` &nbsp; `O` &nbsp; `Q` &nbsp; `R` &nbsp; `U` &nbsp; `V` &nbsp; `X` &nbsp; `Y` &nbsp; `Z`

<details>
<summary><i>a note on the blanks</i></summary>

<br>

A dictionary can hold a word that means nothing — *dord*, "density," sat in Webster's from 1934 to 1947 before anyone noticed it was a typo. These seventeen letters are honest blanks, not *dords*. They get headwords when they ship, and not before.

</details>

<details>
<summary><b>pronunciation key</b></summary>

<br>

```
ə  about      ay  face      ee  fleece     y   price
oh goat       oo  goose     uh  strut      ʃ   shy
ŋ  sing       θ   thigh     ˈ   primary stress     ˌ   secondary stress
```

Pronunciations are given as IPA `/…/` with a folk respelling in parentheses; initialisms (E·H·R, H·T·M·L) are spelled letter-by-letter.

</details>

---

<div align="center">

### ✶ Word of the Day ✶

**bon·fire·DB** &nbsp; *n.* &nbsp;—&nbsp; *"the agent-native clinical backend."*

The data layer is the one part you don't get to improvise. &nbsp;*entry B of 26 — the alphabet continues.*

<sub><i>terse · present-tense · no fluff · receipts where there are receipts.</i></sub>

</div>
