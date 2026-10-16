import { send, addSub, removeSub } from "./lib/tg.mjs";
import { todayText } from "./lib/schedule.mjs";

export default async (req) => {
  try {
    const update = await req.json();
    const msg = update.message;
    if (!msg || !msg.text) return new Response("ok");
    const id = msg.chat.id;
    const cmd = msg.text.trim().split(" ")[0].split("@")[0];

    if (cmd === "/start") {
      await addSub(id);
      await send(id, "Салом! ✅ Шумо ба огоҳиҳои гурӯҳи 202 обуна шудед.\nҲар рӯз соати 12:00 ҷадвали имрӯза меояд.\n\n/today — ҷадвали имрӯз\n/stop — қатъ кардан");
    } else if (cmd === "/today") {
      await send(id, todayText());
    } else if (cmd === "/stop") {
      await removeSub(id);
      await send(id, "Обуна қатъ шуд. Барои баргаштан /start занед.");
    }
  } catch (e) {
    console.error(e);
  }
  return new Response("ok");
};
