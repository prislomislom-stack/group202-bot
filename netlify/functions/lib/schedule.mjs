export const SLOTS = [
  "12:45–13:35", "13:40–14:30", "14:35–15:25",
  "15:30–16:20", "16:25–17:15", "17:20–18:10",
];

const TELE = "Асосҳои телекоммуникатсия (Курбонзода Н., ауд.330)";
const HUQ330 = "Ҳуқуқ (Қосимова М., ауд.330)";
const EKO = "Экология (Маҳмудова А., ауд.330)";
const SXEMA = "Схемотехника (Файзиев З., ауд.330)";
const KONS = "Консепсияи табиатшиносӣ (Иброҳимова М., ауд.430)";
const NIZOM = "Низомҳои бисёршабакавӣ (Раҷабов Ш., ауд.330)";
const FALSAFA332 = "Фалсафа (Қурбонова М., ауд.332)";
const FALSAFA330 = "Фалсафа (Қурбонова М., ауд.330)";

// 1 = Душанбе ... 6 = Шанбе
export const SCHEDULE = {
  1: [TELE, TELE, TELE, HUQ330, EKO, EKO],
  2: [EKO, SXEMA, SXEMA, SXEMA, KONS, HUQ330],
  3: [NIZOM, NIZOM, NIZOM, "Ҳуқуқ (Қосимова М., ауд.331)", null, null],
  4: [FALSAFA332, FALSAFA332, FALSAFA330, FALSAFA330, FALSAFA330, HUQ330],
  5: ["Соати тарбиявӣ (ауд.330)", TELE, TELE, TELE, KONS, KONS],
  6: [NIZOM, NIZOM, NIZOM, SXEMA, SXEMA, SXEMA],
};

export const DAYS = {
  1: "Душанбе", 2: "Сешанбе", 3: "Чоршанбе",
  4: "Панҷшанбе", 5: "Ҷумъа", 6: "Шанбе",
};

// Вақти Тоҷикистон = UTC+5
export function tjDay() {
  return new Date(Date.now() + 5 * 3600 * 1000).getUTCDay();
}

export function todayText(day = tjDay()) {
  const lessons = SCHEDULE[day];
  if (!lessons) return "Имрӯз дарс нест. Истироҳат кунед! 🎉";
  let t = `📚 Гурӯҳи 202 — ${DAYS[day]}\n\n`;
  lessons.forEach((l, i) => {
    if (l) t += `${i + 1}. ${SLOTS[i]}\n   ${l}\n`;
  });
  return t.trim();
    }
