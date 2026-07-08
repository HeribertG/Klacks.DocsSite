---
sidebar_position: 7
---

# Macros

Surcharges for night, Sunday, and public-holiday work, or the exact hour calculation for vacation and military service, can't be covered by a single fixed formula for every business. Under Settings > Macros you write your own small scripts for this in a BASIC-like language.

## How it works

**What macros are for:** A macro computes a single return value from the data of a shift (Work) or an employment — typically a surcharge in hours or currency. The result is stored in `Work.Surcharges` and automatically flows into the hours evaluation (ClientPeriodHours). Each macro belongs to a type — shift/employment or work rules — and can be named, edited, and deleted like any other setting.

**Available data:** Via `IMPORT` the script has access to, among others, `hour` (working hours), `fromhour`/`untilhour` (start/end time as decimal hours), `weekday` (ISO 8601: 1 = Monday … 7 = Sunday), `holiday`/`holidaynextday` (whether the current or following day is a public holiday), as well as the surcharge rates stored in the contract: `nightrate`, `holidayrate`, `sarate` (Saturday), and `sorate` (Sunday).

**Language scope:** The scripting language has control structures (`IF…THEN…ELSEIF…ELSE…ENDIF`, `SELECT CASE`, `FOR…NEXT`, `DO…LOOP`), user-defined functions (`FUNCTION`) and procedures (`SUB`, must be defined before their first call), as well as built-in string, math, trigonometry, and time functions (e.g. `TimeToHours`, `TimeOverlap` for time ranges spanning midnight). The result is returned via `OUTPUT type, value`.

**Testing in the editor:** The macro editor has its own Test tab: you enter sample values for the imported variables, check the syntax, and run the script as a trial. `DEBUGPRINT`/`DEBUGCLEAR` output additional values in the test window without affecting the actual return value.

**Security:** The interpreter runs in a sandbox with no access to the file system or network — a macro can get the calculation wrong, but it cannot cause damage outside the calculation.

## Good to know

- `DIM` declares a variable but doesn't initialize it at the same time — `DIM x = 10` is a syntax error; first `DIM x`, then separately `x = 10`.
- Keywords such as `ENDIF`, `ENDFUNCTION`, and `ENDSUB` are written as a single word, without a space.
- `weekday` consistently follows ISO 8601 (1 = Monday … 7 = Sunday) — in your own `SELECT CASE` checks for "weekend," those are the values 6 (Saturday) and 7 (Sunday).

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
