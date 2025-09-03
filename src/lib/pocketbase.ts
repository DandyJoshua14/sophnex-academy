import PocketBase from "pocketbase";

// ✅ Initialize PocketBase client
const pb = new PocketBase("https://manage.sophnexacademy.com.ng/"); // change this to your actual PB backend URL

// ---------- Fetchers ----------

export async function getHtmlCssTranscripts(day: number | string) {
  return fetchTranscripts("htmlcss", day);
}

export async function getJavaScriptTranscripts(day: number | string) {
  return fetchTranscripts("javascript", day);
}

export async function getPythonTranscripts(day: number | string) {
  return fetchTranscripts("python", day);
}

// ---------- Helper Core Function ----------
async function fetchTranscripts(collection: string, day: number | string) {
  try {
    const records = await pb.collection(collection).getFullList({
      filter: `day="${day}"`,
      sort: "created", // optional, newest first
    });

    return records.map((record) => ({
      id: record.id,
      day: record.day,
      video_url: record.video_url,
      transcript: record.transcripts, // rich text field
    }));
  } catch (err) {
    console.error(`Error fetching from ${collection}:`, err);
    return [];
  }
}

// ---------- Central Day Selector ----------
/**
 * Selects transcripts by subject and day
 * @param subject - "htmlcss" | "javascript" | "python"
 * @param day - number|string
 */
export async function getTranscriptsByDay(subject: string, day: number | string) {
  switch (subject.toLowerCase()) {
    case "htmlcss":
      return await getHtmlCssTranscripts(day);
    case "javascript":
      return await getJavaScriptTranscripts(day);
    case "python":
      return await getPythonTranscripts(day);
    default:
      throw new Error("Invalid subject. Use htmlcss, javascript, or python.");
  }
}


export async function getFullCourse(collection: string) {
  let records = await pb.collection(collection).getFullList()
  return records.map((record) => ({
    id: record.id,
    day: record.day,
    video_url: record.video_url,
    transcript: record.transcripts,
    title: record.title,
    type: record.type || 'video', // default to 'video' if type is not set
  }));
}