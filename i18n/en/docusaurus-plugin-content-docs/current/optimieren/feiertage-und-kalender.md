---
sidebar_position: 4
---

The perpetual calendar computes public holidays for any year automatically — you define the rules once, and Klacks knows the holidays for all years to come.

## How it works

Every holiday is described by a short rule. There are two basic kinds:

- **Fixed dates** in `MM/DD` format: `01/01` is New Year's Day, `08/01` the Swiss National Day, `12/25` Christmas.
- **Easter-based dates** in `EASTER+XX` or `EASTER-XX` format: the Easter date is computed automatically using Gauss's Easter algorithm, and the holiday is defined as an offset from it. Examples: `EASTER-02` = Good Friday, `EASTER+01` = Easter Monday, `EASTER+39` = Ascension Day, `EASTER+50` = Whit Monday, `EASTER+60` = Corpus Christi.

In addition there are **fixed dates with weekday shifting** (`MM/DD+XX+WW` or `MM/DD+XX-WW`) for holidays like "first Thursday in November" (`11/01+00+TH`) or "last Monday in May" (`05/25+00-MO`).

With **SubRules** you shift a holiday automatically when it falls on a particular weekday — e.g. `SA+2;SU+1`: if the day falls on a Saturday or Sunday, it moves to the Monday. Multiple rules are separated with `;`.

For each rule you also record a name and description (multilingual), country and canton/state, plus the checkboxes **Statutory holiday** and **Paid**.

## Good to know

- The weekday abbreviations are English: `SU`, `MO`, `TU`, `WE`, `TH`, `FR`, `SA`.
- SubRules are mainly intended for moving holidays from the weekend to the next working day.
- The **Paid** checkbox is relevant for payroll calculation.
- Country and canton/state let you handle regional differences — Good Friday, for example, does not apply in all Swiss cantons (exceptions: VS, TI).
- The pre-installed calendar packages for countries and Swiss cantons are locked against deletion; your own, self-created calendar selections can be deleted at any time.

![Holiday rules in Klacks](/img/app-calendar-de.png)
*Screenshot shown in German — the app itself is available in English.*

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
