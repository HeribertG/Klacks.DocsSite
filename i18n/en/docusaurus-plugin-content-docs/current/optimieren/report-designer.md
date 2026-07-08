---
sidebar_position: 6
---

With the Report Designer you build your own print templates — from schedules to address lists — right inside Klacks, no external tools required.

## How it works

A report consists of three areas, which you edit in the *Designer* tab:

- **Header** — printed at the top of every page. It has three zones (left, center, right) that can contain database fields, free text, or images (e.g. your company logo, uploaded via the image manager).
- **Body** — contains one or more data tables. Add columns by drag & drop from the field list; adjust the order by drag & drop as well, and the width via a percentage input field per column.
- **Footer** — printed at the bottom of every page.

Each table is linked to a **data source**, which you choose in the *Data Source* tab: work schedule (Schedule), addresses as list or detail, absences, shifts, groups, or Container Template. The data source determines which fields are available.

For styling you have:
- **Formatting** per cell and free text: font, size, bold/italic/underline, text color, alignment.
- **Cell borders** individually per side (top/right/bottom/left) with line style and color.
- **Table footer** with SUM fields: numeric columns are totaled automatically.
- **Free-text rows** before or after the data tables — for notes, terms, or signature fields, for example.
- **Page settings** in the *General* tab: portrait or landscape, paper size (A4, A3, B4/B5 JIS, Letter), and page margins in mm.

## Good to know

- **Merged fields:** Via the toolbar of the selected field you can combine several fields into a single column; the separator (comma, space, line break, dash) is configurable.
- The **work schedule** data source offers two extra options: *Combine entries per day* (multiple entries on the same day in one row) and *Show full period* (all days, even without entries).
- The table footer is enabled via a checkbox directly below the respective table; the SUM label for the footer field can be shown or hidden separately.

---
*Try it yourself: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data resets daily.*
