---
sidebar_position: 7
---

# 巨集

夜班、週日與國定假日工作的加給，或是休假與服役期間的精確工時計算，無法用單一固定公式套用到每家企業。您可以在「設定 > 巨集」中，用一種類似 BASIC 的語言撰寫自己的小型指令碼來處理這類計算。

## 運作方式

**巨集的用途：** 一個巨集會根據某次值班（Work）或某項聘僱關係的資料，計算出單一回傳值 — 通常是以小時或瑞士法郎表示的加給。計算結果會儲存在 `Work.Surcharges` 中，並自動納入工時統計（ClientPeriodHours）。每個巨集都屬於某一種類型 — 排班／聘僱關係或工作規則 — 並且可以像其他設定項目一樣命名、編輯與刪除。

**可用資料：** 透過 `IMPORT`，指令碼中可以使用諸如 `hour`（工作時數）、`fromhour`／`untilhour`（以十進位小時表示的起訖時間）、`weekday`（ISO-8601 標準：1 = 星期一……7 = 星期日）、`holiday`／`holidaynextday`（當天／隔天是否為國定假日）等變數，以及合約中設定的加給費率 `nightrate`、`holidayrate`、`sarate`（星期六）與 `sorate`（星期日）。

**語言範圍：** 這種指令碼語言支援控制結構（`IF…THEN…ELSEIF…ELSE…ENDIF`、`SELECT CASE`、`FOR…NEXT`、`DO…LOOP`）、自訂函式（`FUNCTION`）與程序（`SUB`，必須在第一次呼叫前先定義），以及內建的字串、數學、三角函數與時間函式（例如用來處理跨越午夜時段的 `TimeToHours`、`TimeOverlap`）。計算結果透過 `OUTPUT typ, wert` 回傳。

**在編輯器中測試：** 巨集編輯器有專屬的測試分頁：您可以為匯入的變數填入範例值、檢查語法，並試著執行指令碼。`DEBUGPRINT`／`DEBUGCLEAR` 可以在測試視窗中輸出額外的數值，而不會影響實際的回傳值。

**安全性：** 直譯器運作在沙盒環境中，無法存取檔案系統或網路 — 一個巨集頂多算錯結果，不會在計算範圍之外造成任何損害。

## 小提醒

- `DIM` 用來宣告變數，但不能同時賦予初始值 — `DIM x = 10` 是語法錯誤，必須先 `DIM x`，再另外寫 `x = 10`。
- `ENDIF`、`ENDFUNCTION` 與 `ENDSUB` 等關鍵字必須連寫，中間不能有空格。
- `weekday` 一律依照 ISO-8601 標準（1 = 星期一……7 = 星期日）— 若自行用 `SELECT CASE` 判斷「週末」，對應的數值就是 6（星期六）與 7（星期日）。

---
*立即體驗：[Klacks Playground](https://klacks-software.ch:7643) — 登入 `admin@test.com` / `P@ssw0rt1`，資料每日自動重置。*
