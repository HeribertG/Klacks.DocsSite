---
sidebar_position: 4
---

# Role a oprávnění

Klacks zná přesně dvě přiřaditelné úrovně oprávnění pro přihlašovací účty: **Supervisor** a **Admin**. Třetí, technicky samostatná role neexistuje — pojmy jako „plánovač" popisují níže **funkci v každodenním provozu**, nikoli další úroveň oprávnění.

## Dvě skutečné role

**Supervisor** smí vytvářet, upravovat a mazat adresy, skupiny, smlouvy, absence a směny, a také v rozvrhu schvalovat den nebo skupinu a toto schválení opět odvolat. Pouhé potvrzování jednotlivých pracovních dob naproti tomu žádnou zvláštní roli nevyžaduje — to zvládne libovolný přihlašovací účet.

**Admin** smí navíc vše, co smí Supervisor, plus: přístup ke všem nastavením (včetně samotné správy uživatelů), uzavírat a znovu otevírat období a spravovat zvlášť chráněné oblasti jako Identity Provider, reporty a pravidla kalendáře.

Přiřazení probíhá přes rozevírací seznam ve správě uživatelů (ikona ozubeného kola) a projeví se okamžitě, bez samostatného kliknutí na uložení.

## „Plánovač" jako funkce, ne jako role

V praxi vlastní plánovací práci většinou provádí účet se Supervisor rolí — spouští automatické plánování, upravuje rozvrh v mřížce metodou drag & drop, předkládá dny nebo skupiny ke schválení. Nejde o samostatnou úroveň oprávnění, nýbrž prostě o práva, která účet Supervisor beztak má.

## Dobré vědět

- Naposledy přihlášený uživatel se ve správě uživatelů zobrazuje také, nemůže tam ale sám sebe upravovat, měnit si oprávnění ani se sám smazat.
- Definitivní uzavření nebo znovuotevření období zůstává vyhrazeno výhradně Adminovi — i když Supervisor už dny nebo skupiny schválil.
- Přihlašovací účet nemusí být nutně propojen s kartou kmenových dat zaměstnance — správa uživatelů a správa osob jsou oddělené oblasti.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*
