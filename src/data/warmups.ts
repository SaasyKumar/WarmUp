export type WarmUpItem = {
  id: string;
  title: string;
  duration: string;
  description: string;
  steps: string[];
};

export type WarmUpCategory = {
  id: string;
  label: string;
  emoji: string;
  color: string;
  items: WarmUpItem[];
};

export const categories: WarmUpCategory[] = [
  {
    id: "fitness",
    label: "Fitness",
    emoji: "🏋️",
    color: "#f97316",
    items: [
      {
        id: "fitness-1",
        title: "Dynamic Stretch",
        duration: "5 min",
        description: "Full body dynamic stretching to prep muscles.",
        steps: [
          "Arm circles 30s",
          "Leg swings 30s each",
          "Hip rotations 30s",
          "Torso twists 30s",
          "High knees 1 min",
        ],
      },
      {
        id: "fitness-2",
        title: "Cardio Primer",
        duration: "7 min",
        description: "Light cardio to raise heart rate before intense workout.",
        steps: [
          "Jumping jacks 1 min",
          "Butt kicks 1 min",
          "Jump rope (imaginary) 2 min",
          "Lateral shuffles 1 min",
          "Rest 2 min",
        ],
      },
    ],
  },
  {
    id: "coding",
    label: "Coding",
    emoji: "💻",
    color: "#6366f1",
    items: [
      {
        id: "coding-1",
        title: "Brain Boot",
        duration: "10 min",
        description: "Sharpen your mind before a coding session.",
        steps: [
          "Review yesterday's code 3 min",
          "Read one doc page 3 min",
          "Solve one easy algo problem 4 min",
        ],
      },
      {
        id: "coding-2",
        title: "Focus Ritual",
        duration: "5 min",
        description: "Set intentions and clear distractions.",
        steps: [
          "Close all tabs except editor",
          "Write today's goal in a comment",
          "Set a 25min Pomodoro timer",
          "Write first line of code",
        ],
      },
    ],
  },
  {
    id: "music",
    label: "Music",
    emoji: "🎵",
    color: "#ec4899",
    items: [
      {
        id: "music-1",
        title: "Vocal Warm-Up",
        duration: "8 min",
        description: "Prepare your voice for singing or recording.",
        steps: [
          "Lip trills 1 min",
          "Humming scales 2 min",
          "Vowel exercises (A E I O U) 2 min",
          "Sirens high to low 1 min",
          "Tongue twisters 2 min",
        ],
      },
      {
        id: "music-2",
        title: "Instrument Prep",
        duration: "10 min",
        description: "Finger and hand warm-up for instruments.",
        steps: [
          "Finger stretches 2 min",
          "Slow scales 3 min",
          "Arpeggios 3 min",
          "Play a familiar easy piece 2 min",
        ],
      },
    ],
  },
  {
    id: "writing",
    label: "Writing",
    emoji: "✍️",
    color: "#10b981",
    items: [
      {
        id: "writing-1",
        title: "Free Write",
        duration: "10 min",
        description: "Dump thoughts without judgment to unlock flow.",
        steps: [
          "Set timer for 10 min",
          "Write without stopping or editing",
          "Don't delete anything",
          "Follow any tangent that appears",
        ],
      },
      {
        id: "writing-2",
        title: "Prompt Spark",
        duration: "5 min",
        description: "Use a random prompt to ignite creativity.",
        steps: [
          "Pick a random word",
          "Write 3 sentences using it",
          "Expand one sentence to a paragraph",
          "Identify a theme you can use today",
        ],
      },
    ],
  },
  {
    id: "meditation",
    label: "Meditation",
    emoji: "🧘",
    color: "#8b5cf6",
    items: [
      {
        id: "meditation-1",
        title: "Box Breathing",
        duration: "4 min",
        description: "Regulate nervous system before meditating.",
        steps: [
          "Inhale 4 counts",
          "Hold 4 counts",
          "Exhale 4 counts",
          "Hold 4 counts",
          "Repeat 4 times",
        ],
      },
      {
        id: "meditation-2",
        title: "Body Scan",
        duration: "5 min",
        description: "Check in with each part of your body.",
        steps: [
          "Close eyes, sit tall",
          "Focus on feet for 30s",
          "Move up to legs, belly, chest",
          "Notice tension without reacting",
          "End at crown of head",
        ],
      },
    ],
  },
  {
    id: "sport",
    label: "Sport",
    emoji: "⚽",
    color: "#f59e0b",
    items: [
      {
        id: "sport-1",
        title: "Athlete Activation",
        duration: "8 min",
        description: "Sport-specific warm-up to prevent injury.",
        steps: [
          "Jog in place 2 min",
          "Lunges with rotation 1 min",
          "Lateral band walks 1 min",
          "Glute bridges 1 min",
          "Sport-specific drills 3 min",
        ],
      },
    ],
  },
  {
    id: "drawing",
    label: "Drawing",
    emoji: "🎨",
    color: "#ef4444",
    items: [
      {
        id: "drawing-1",
        title: "Hand Loosener",
        duration: "5 min",
        description: "Loosen wrist and fingers before drawing.",
        steps: [
          "Draw circles — big and small",
          "Draw straight lines across page",
          "Draw zigzags and curves",
          "Shade a quick gradient box",
          "Sketch a hand from memory",
        ],
      },
    ],
  },
  {
    id: "public-speaking",
    label: "Public Speaking",
    emoji: "🎤",
    color: "#06b6d4",
    items: [
      {
        id: "speaking-1",
        title: "Voice & Posture",
        duration: "6 min",
        description: "Get physically ready to command a room.",
        steps: [
          "Stand tall, power pose 1 min",
          "Breathe deeply 5 times",
          "Hum to warm voice",
          "Recite a passage aloud clearly",
          "Smile and hold eye contact with a mirror",
        ],
      },
    ],
  },
];
