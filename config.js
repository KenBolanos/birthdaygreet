/**
 * ✨ EDIT THIS FILE to customize the birthday greeting! ✨
 *
 * This is the ONLY file you need to modify.
 * No need to touch HTML, CSS, or any other JavaScript files.
 *
 * AVAILABLE SECTION TYPES:
 *   "greeting"      → Opening greeting with recipient's name
 *   "announcement"  → Birthday announcement text
 *   "chatbox"       → Chat message with typing animation
 *   "ideas"         → Sequential text reveals, one by one
 *   "quote"         → Styled quote card with optional author
 *   "countdown"     → Animated 3-2-1 countdown
 *   "stars"         → Twinkling stars background
 *   "fireworks"     → Colorful firework sparks burst
 *   "balloons"      → Floating balloon animation
 *   "profile"       → Profile photo with birthday wish
 *   "confetti"      → Confetti burst animation
 *   "closing"       → Closing message with replay button
 *
 * HOW TO USE:
 *   REMOVE a section  → Delete its object from the sections array
 *   DUPLICATE          → Copy-paste any section object
 *   REORDER            → Move the section object up/down in the array
 *   EDIT TEXT          → Change the string values
 */

const CONFIG = {
  // ── Recipient Info ────────────────────────────────────────────
  name: "Twiiiixxxyyyy",
  music: "./music/birthday.mp3", // Place your music in the music/ folder

  // ── Theme Colors ──────────────────────────────────────────────
  // A toggle button lets the viewer switch between dark & light mode.
  colors: {
    primary: "#f472b6", // Main accent color (rose pink)
    accent: "#60a5fa", // Secondary accent color (sky blue)
    dark: {
      background: "#0f172a", // Slate 900
      text: "#f1f5f9", // Slate 100
    },
    light: {
      background: "#fafaf9", // Stone 50
      text: "#1e293b", // Slate 800
    },
  },

  // ── Default Color Mode ────────────────────────────────────────
  // Options: "dark" or "light"
  defaultMode: "dark",

  // ── Sections ──────────────────────────────────────────────────
  // Add, remove, duplicate, or reorder as you wish!
  sections: [
    {
      type: "greeting",
      title: "Hewooo",
      subtitle: "Yeah yeah the candy bar",
    },
    {
      type: "countdown",
      from: 3, // Countdown from this number
      goText: "HAPPY BIRTHDAY🎊", // Text shown after countdown ends
    },
    {
      type: "announcement",
      text: "It's your birthday!! 🥳",
    },
    {
      type: "chatbox",
      message:
        "Happy birthday to youu🎉🎊!! Wishing you a bright future ahead filled with joy, love, MONEY and endless happiness!",
      buttonText: "➤",
    },
    {
      type: "ideas",
      lines: [
        "That's what I was going to say.",
        "But then I stopped.",
        "I realised, I wanted to do something more <strong>personalized</strong>.",
        "Just like making this kind of greeting.",
        "Because,",
        "You are an <strong>AUNT</strong>  now",
        "Just kidding hahaha😂",
        "William Shakespeare once said....",
      ],
      bigLetters: "SO",
    },
    {
      type: "quote",
      text: "“With mirth and laughter let old wrinkles come.”",
      author: "William Shakespeare",
    },
    {
      type: "stars",
      count: 40,
    },
    {
      type: "balloons",
      count: 25,
    },
    {
      type: "profile",
      wishTitle: "Happy Birthday!",
      wishText:
        "May your life be filled with happiness and always keep on mind that GOD is with you!😊",
    },
    {
      type: "fireworks",
      count: 24,
    },
    {
      type: "confetti",
      count: 9,
    },
    {
      type: "closing",
      text: "Okay, come back and tell me if you liked it or stay to listen to the music up to you haha",
      replayText: "Or click, if you want to watch it again.",
    },
  ],
};
