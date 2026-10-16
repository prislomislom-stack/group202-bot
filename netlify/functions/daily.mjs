import { send, listSubs } from "./lib/tg.mjs";
import { todayText } from "./lib/schedule.mjs";

export default async () => {
  const text = todayText();
  const subs = await listSubs();
  for (const s of subs) await send(s.chat_id, text);
};

// 07:00 UTC = 12:00 вақти Тоҷикистон
export const config = { schedule: "0 7 * * *" };
