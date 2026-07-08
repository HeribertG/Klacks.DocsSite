---
sidebar_position: 3
---

Under Settings > General > Head Office Address you set your company's master address, along with the global default settings for country, canton, time zone, and holiday calendar.

## How it works

**Address fields:** Name, phone, address line 2, email, street, postal code, and city — plain free-text fields with no required-field validation.

**Country and canton:** Two dropdowns; the canton list only becomes active once a country is selected, and shows only the entries matching the chosen country.

**Time zone:** Selection from all time zones supported by the browser. If the field is left empty, Klacks derives the time zone from the selected country (otherwise UTC applies).

**Global calendar:** Selects the company-wide default holiday calendar from the calendar selections matching the chosen country. Individual contract templates can additionally be given their own, different calendar (see Settings > Contracts).

**Saving:** This card lives in the General section of the settings page. Changes are collected and saved or discarded via the settings page's shared save bar — there is no dedicated save button on this card.

## Good to know

- The company name entered here appears on generated order exports (ERP export) as the sender information.
- If the country changes, the canton is automatically reset; an already-selected calendar selection is only kept if it also matches the new country — otherwise it is cleared as well.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
