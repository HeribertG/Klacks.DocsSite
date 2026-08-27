---
sidebar_position: 8
---

# Ciclul de viață al unei ture: de la comandă la segment

Înainte ca o tură să poată fi ocupată, ea parcurge patru etape — de la comanda liber editabilă, prin comanda sigilată, imuabilă, până la tura planificabilă și segmentele acesteia. Sensul din spate: ceea ce a fost convenit rămâne permanent verificabil; ceea ce activitatea zilnică replanifică ulterior rămâne totuși flexibil.

O tură nu este neapărat legată de o comandă — Klacks reprezintă deopotrivă turele interne, regulate, fără legătură cu un client, cât și comenzile complexe cu multe livrări sau intervențiile descompuse în mai multe segmente-container.

## Cum funcționează

**1. Comandă — liber editabilă.** Fiecare tură nouă începe aici. Pe pagina serviciilor, butonul **+ comandă nouă** deschide masca de înregistrare; puteți revizui comanda de câte ori doriți, toate câmpurile sunt deschise. În planul de intervenții ea nu apare încă, deci nu se pot planifica angajați pe ea. Cu toate acestea, nu este o simplă schiță — este o comandă reală, doar că încă nesigilată. În lista de servicii, Klacks conduce această etapă sub **Comenzi**. Dacă acolo comutați pe **Ture planificabile**, butonul se numește **+ tură nouă**: acesta creează o comandă fără legătură cu un client — pentru muncă generală, pe care nimeni din exterior nu o comandă și nu o plătește. Cardul *Adresă* dispare atunci; și această tură parcurge cele patru etape.

**2. Comandă sigilată — imuabilă.** După ce comanda este definitivă, o sigilați cu butonul cu lacăt din cardul *Generalități*. Din acest moment este blocată și rămâne permanent păstrată ca reprezentare obligatorie a acordului — chiar și atunci când activitatea curentă a replanificat de mult tura. După salvare, acest lucru **nu mai poate fi anulat**. Ce comenzi au atins deja această etapă arată, în lista de servicii, caseta de bifare **Afișează doar comenzile sigilate**.

**3. Tură planificabilă — aici se planifică.** Sigilarea creează dintr-o dată, și exact o singură dată, tura planificabilă: o copie asociată comenzii. Doar această tură apare în [Grila planului: matricea dumneavoastră interactivă de timp](../planen/plan-raster.md), doar pe ea pot fi înregistrați angajați — și rămâne editabilă. O salvare ulterioară repetată nu generează o a doua copie. În lista de servicii o găsiți sub **Ture planificabile**.

**4. Segmente — tura decupată.** O tură planificabilă poate fi decupată, de exemplu pe zile sau pe intervale de timp. Tura anterioară devine astfel ea însăși un segment, celelalte iau naștere alături. Toate segmentele sunt, la rândul lor, planificabile și poartă apoi ocuparea propriu-zisă. Comanda sigilată rămâne neatinsă de acest proces — ea este și rămâne contractul din fundal.

**Când devine activ butonul cu lacăt:** acesta rămâne gri atâta timp cât comanda nu este suficient de completă pentru planificare — abrevierea, numele și data de început sunt completate, este selectată cel puțin o zi a săptămânii și cel puțin un grup, iar atât numărul de sarcini, cât și numărul de angajați per tură sunt mai mari decât zero. Tooltip-ul său o spune fără echivoc: „După blocare, comanda este imuabilă și este gata pentru planificare”.

**Singura excepție de la imuabilitate:** dacă o comandă sigilată nu are dată de sfârșit — de exemplu pentru că se prelungește continuu sau finalul ei este încă deschis —, aveți voie să setați ulterior acest câmp anume. Condiție: de la data aleasă nu sunt încă planificate ture. După aceea, și acest câmp este blocat, ca toate celelalte.

**Un exemplu:** pe 1 mai, înregistrați comanda „Nuntă Müller” și o rafinați pe parcursul a două zile. Pe 3 mai, clientul confirmă — sigilați. Klacks fixează comanda și creează alături tura planificabilă. Pe 4 mai, dispecerul înregistrează doi angajați, pe 5 mai, tura este decupată în două segmente. Pe 1 iunie, perioada este închisă, iar intrările de pe segmente sunt blocate. Comanda sigilată din 3 mai nu a fost modificată niciodată pe parcursul acestui proces.

**Cardurile măștii de înregistrare.** Masca este împărțită în carduri, pe care le puteți extinde și restrânge individual; salvarea și anularea se fac prin bara de salvare din partea de jos a spațiului de lucru. O parte dintre carduri apar doar atunci când activați, în cardul *Generalități*, comutatorul **Mod expert**:

- **Generalități** — abreviere (cel mult 6 caractere; Klacks o sugerează automat în timp ce se tastează numele), nume, data de început și de sfârșit, precum și note. Aici se află și butonul cu lacăt și comutatorul pentru modul expert.
- **Grup** — atribuie tura unuia sau mai multor grupuri. Cel puțin un grup este obligatoriu; atâta timp cât niciunul nu este selectat, o casetă de informare semnalează acest lucru.
- **Calificări necesare** — ce [calificări](../einstellungen/stammdaten-organisation/qualifikationen.md) necesită tura, fiecare cu nivel minim (Redus până la Expert) și indicația dacă este obligatorie.
- **Ore și zile ale săptămânii** — ora de început, ora de sfârșit și durata, precum și zilele săptămânii în care are loc tura, plus două reguli pentru sărbători. În modul expert, puteți gestiona tura aici, în schimb, ca interval orar flexibil: aceasta se situează atunci flexibil în fereastra dintre ora de început și cea de sfârșit, iar ceea ce contează este durata înregistrată.
- **Macro** (mod expert) — asociază tura cu un [macro](../einstellungen/klacksy-konfiguration/makros.md) pentru calculul duratei și al salariului.
- **Adresă** — clientul, respectiv locul de intervenție, căutat după nume sau număr de identificare. Coloana de filtrare din dreapta restrânge exact această căutare.
- **Caracteristici speciale** (mod expert) — intervenție sporadică, împreună cu periodicitatea, briefing și debriefing, timp de deplasare la și de la locație, precum și numărul de angajați și de sarcini per tură.
- **Cheltuieli standard** (mod expert) — cheltuieli care apar regulat la această tură, fiecare cu denumire, sumă și indicația dacă sunt impozabile.

Modul în care sunt ocupate ulterior turele planificabile este descris în [Planificare automată: un clic, restul rulează în fundal](../planen/auto-planung.md) și [Grila planului: matricea dumneavoastră interactivă de timp](../planen/plan-raster.md).

## Bine de știut

- **Sigilarea înseamnă aici altceva decât în fluxul de aprobare.** Sigilarea unei comenzi îngheață *descrierea* turei — ce trebuie făcut, permanent. [Flux de aprobare: de la ciornă la plan obligatoriu](../planen/freigabe-workflow.md) și [Închiderea perioadei](../planen/periodenabschluss.md) blochează, în schimb, *intrările din zile concrete*. Cele două funcționează independent una de cealaltă.
- **Comenzile apar și automat.** Pe lângă masca de înregistrare, [importul ERP](../einstellungen/kommunikation-integration/erp-uebernahmepunkte.md) este a doua cale: comenzile provenite de acolo ajung, de asemenea, mai întâi ca și comandă nesigilată și trebuie verificate și sigilate.
- **O comandă uitată se face remarcată.** Dacă o comandă rămâne nesigilată cu puțin timp înainte de începutul ei, [Klacksy ca membru proactiv al echipei](../ki/klacksy-proaktiv.md) atrage atenția asupra ei cu tipul de constatare „Comandă deschisă” — pentru că nesigilată înseamnă: neplanificabilă.
- **Turele-container funcționează puțin diferit.** Un container este un înveliș care grupează mai multe ture parțiale; el nu are, prin urmare, nici client, nici adresă, iar cardurile *Adresă* și *Cheltuieli standard* dispar. Cardul *Caracteristici speciale* arată la el doar opțiunea pentru intervenția sporadică. Caseta de bifare „Este un container” o găsiți în modul expert, în cardul *Generalități*, și poate fi setată doar atâta timp cât comanda este încă nesigilată.
- **Turele sporadice și turele cu interval orar flexibil nu se iau în calcul.** Amândouă nu apar, în mod deliberat, în bara de servicii a [Monitorului de resurse](../optimieren/ressourcen-monitor.md), deoarece nu reprezintă o necesitate zilnică fixă.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*
