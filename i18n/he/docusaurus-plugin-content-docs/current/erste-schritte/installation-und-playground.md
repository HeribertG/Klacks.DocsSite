---
sidebar_position: 1
---

# התקנה ו-Playground

את Klacks אפשר לנסות תוך דקה - ולהתקין תוך דקות ספורות. ללא הרשמה, ללא שיחות מכירה.

## אפשרות 1: Playground (בלי להתקין דבר)

מופע Klacks ציבורי עם נתוני דוגמה פועל בכתובת **[klacks-software.ch](https://klacks-software.ch:7643)**:

- **התחברות:** `admin@test.com` · **סיסמה:** `P@ssw0rt1`
- יש לכם הרשאות מנהל מלאות - נסו הכול.
- כל הנתונים **מתאפסים אוטומטית מדי יום**. אין להזין נתונים אישיים אמיתיים.

## אפשרות 2: על השרת שלכם (On-Premise)

חבילת ה-On-Premise כוללת הכול: תמונות Docker, מתקין, מסד נתונים, HTTPS ועדכונים אוטומטיים.

```bash
curl -fsSLO https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip
unzip klacks-onprem.zip && cd onprem && ./install.sh
```

תחת Windows: `install.ps1` במקום `install.sh`. המתקין יוצר בעצמו סיסמאות ותעודות, טוען את תמונות ה-Docker העדכניות וממתין עד שהכול פועל. התחברות ראשונה עם `admin@test.com` / `P@ssw0rt1` - **שנו סיסמה זו מיד לאחר ההתחברות הראשונה.**

## כדאי לדעת

- שירות עדכונים מובנה שומר על ההתקנה שלכם עדכנית באופן אוטומטי - עם גיבוי לפני כל עדכון ושחזור אוטומטי במקרה של בעיות.
- הנתונים שלכם נשארים לחלוטין בתשתית שלכם; Klacks לא שולחת דיווחים החוצה.
- הדרישה היא שרת עם Docker, גישת אינטרנט יוצאת (עבור תמונות Docker ועדכונים) ופורטים פתוחים 80/443.

---
*שאלות לגבי ההתקנה? [קהילת Klacks ב-Discord](https://discord.gg/YRP8p2abVC).*
