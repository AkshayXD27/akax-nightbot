export default async function handler(req, res) {
  const lines = [
    "Are you a keyboard because you are just my type",
    "Do you have a map? I keep getting lost in your eyes",
    "You must be WiFi because I'm feeling a strong connection",
    "You are the glow in my dark mode",
    "You make my heart respond faster than an API call",
    "You are the patch note that improved my life",
    "Is your name ChatGPT? Because you just generated love",
    "You are the missing semicolon to my code",
    "If beauty were time, you'd be eternity",
    "You must be tired, because you've been running through my mind all day"
  ];

  const randomLine = lines[Math.floor(Math.random() * lines.length)];
  return new Response(randomLine);
}
