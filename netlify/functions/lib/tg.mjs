const TOKEN = process.env.BOT_TOKEN;
const SB = process.env.SUPABASE_URL;
const KEY = process.env.SUPABASE_KEY;

export async function send(chat_id, text) {
  await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ chat_id, text }),
  });
}

const sbHeaders = { apikey: KEY, "Content-Type": "application/json" };
if (KEY && !KEY.startsWith("sb_")) sbHeaders.Authorization = `Bearer ${KEY}`;

export async function addSub(chat_id) {
  await fetch(`${SB}/rest/v1/subscribers`, {
    method: "POST",
    headers: { ...sbHeaders, Prefer: "resolution=merge-duplicates" },
    body: JSON.stringify({ chat_id }),
  });
}

export async function removeSub(chat_id) {
  await fetch(`${SB}/rest/v1/subscribers?chat_id=eq.${chat_id}`, {
    method: "DELETE",
    headers: sbHeaders,
  });
}

export async function listSubs() {
  const r = await fetch(`${SB}/rest/v1/subscribers?select=chat_id`, {
    headers: sbHeaders,
  });
  return r.ok ? await r.json() : [];
}
