---
sidebar_position: 7
---

# 宏

夜班、周日和法定假日工作的津贴，或者休假与服役期间的精确工时计算，无法用一个适用于所有企业的固定公式来覆盖。您可以在「设置 > 宏」中，用一种类似 BASIC 的语言编写自己的小脚本来实现这些计算。

## 运作方式

**宏的用途：** 一个宏根据某次值班（Work）或某项聘用关系的数据计算出一个返回值 — 通常是以小时或瑞士法郎为单位的津贴。计算结果保存在 `Work.Surcharges` 中，并自动纳入工时统计（ClientPeriodHours）。每个宏都属于某一种类型 — 排班/聘用关系或工作规则 — 并且可以像其他任何设置项一样命名、编辑和删除。

**可用数据：** 通过 `IMPORT`，脚本中可以使用诸如 `hour`（工作小时数）、`fromhour`/`untilhour`（以十进制小时表示的起止时间）、`weekday`（ISO-8601 标准：1 = 星期一……7 = 星期日）、`holiday`/`holidaynextday`（当天/次日是否为法定假日）等变量，以及合同中设定的津贴费率 `nightrate`、`holidayrate`、`sarate`（星期六）和 `sorate`（星期日）。

**语言范围：** 脚本语言支持控制结构（`IF…THEN…ELSEIF…ELSE…ENDIF`、`SELECT CASE`、`FOR…NEXT`、`DO…LOOP`）、自定义函数（`FUNCTION`）和过程（`SUB`，必须在首次调用前定义），以及内置的字符串、数学、三角函数和时间函数（例如用于处理跨越午夜时间段的 `TimeToHours`、`TimeOverlap`）。计算结果通过 `OUTPUT typ, wert` 返回。

**在编辑器中测试：** 宏编辑器有独立的测试标签页：您可以为导入的变量填入示例值，检查语法并试运行脚本。`DEBUGPRINT`/`DEBUGCLEAR` 可以在测试窗口中输出额外的数值，而不会影响实际的返回值。

**安全性：** 解释器运行在沙箱环境中，无法访问文件系统或网络 — 一个宏最多只会算错结果，不会在计算范围之外造成任何损害。

## 小贴士

- `DIM` 用于声明变量，但不能同时赋初值 — `DIM x = 10` 是语法错误，必须先 `DIM x`，再单独写 `x = 10`。
- `ENDIF`、`ENDFUNCTION` 和 `ENDSUB` 等关键字要连写，中间不能有空格。
- `weekday` 统一遵循 ISO-8601 标准（1 = 星期一……7 = 星期日）— 如果自己用 `SELECT CASE` 判断「周末」，对应的数值是 6（星期六）和 7（星期日）。

---
*直接体验：[Klacks Playground](https://klacks-software.ch:7643) — 登录 `admin@test.com` / `P@ssw0rt1`，数据每日自动重置。*
