//we are adding data into the map, to quickly access the object.
//we need to pass an array of key-value pair to store value in the map while creating it.
export const map = new Map([
  ["main", 0],
  ["getStarted", 1],
  ["profileHeader", 2],
  ["profileHeaderQ1", 3],
  ["profileHeaderQ2", 4],
  ["profileHeaderQ3", 5],
  ["pdfTile", 6],
  ["pdfQ1", 7],
  ["pdfQ2", 8],
  ["pdfQ3", 9],
  ["protoTile", 10],
  ["360Mode", 11],
  ["360Q1", 12],
  ["360Q2", 13],
  ["youtube", 14],
  ["youtubeQ1", 15],
  ["youtubeQ2", 16],
  ["youtubeQ3", 17],
  ["edits", 18],
  ["dataPrivacy", 19],
  ["card", 20],
  ["marker", 21],
  ["markerQ1", 22],
  ["markerQ2", 23],
  ["frontside", 24],
  ["print", 25],
  ["printQ1", 26],
  ["printQ2", 27],
  ["game", 28],
  ["visionStatement", 29],
  ["visionQ1", 30],
  ["visionQ2", 31],
  ["visionQ3", 32],
  ["preview", 33],
  ["previewQ1", 34],
  ["previewQ2", 35],
  ["pricing", 36],
  ["pricingQ1", 37],
  ["pricingQ2", 38],
]);

//array of objects
export const data = [
  {
    id: "main",
    message: [
      "Thank You for your interest in Vision Card. This tool grants sharing personalised Augmented Reality experiences via visiting cards.",
      "Explore the multi-featured nature of Vision Card and get started with setting up yours.",
      ,
      "-",
      "General Topics",
    ],

    onlyQue: false,
    isCard: true,

    tags: [
      {
        id: "getStarted",
        tag: "GET STARTED - AR Experience",
      },
      {
        id: "card",
        tag: "THE CARD",
      },
      {
        id: "visionStatement",
        tag: "VISION STATEMENT",
      },
      {
        id: "preview",
        tag: "PREVIEW",
      },
      {
        id: "pricing",
        tag: "PRICING",
      },
    ],
  },

  {
    id: "getStarted",
    message: [
      "The AR Experience consists of the Profile Header and Feature Tiles.",
      "Click for Frequently Asked Questions in the following:",
    ],
    onlyQue: false, //Only Question tag, i.e. Quetion asked by user.
    isCard: true,
    que: "GET STARTED - AR Experience",
    tags: [
      {
        id: "profileHeader",
        tag: "PROFILE HEADER",
      },
      {
        id: "pdfTile",
        tag: "FEATURE - PDF/RESUME TILE",
      },
      {
        id: "protoTile",
        tag: "FEATURE - PROTO TILE",
      },
      {
        id: "edits",
        tag: "MAKING EDITS",
      },
      {
        id: "dataPrivacy",
        tag: "DATA & PRIVACY",
      },
    ],
  },

  {
    id: "profileHeader",
    message: [
      "Enter your Name & Title. Upload your Picture.",
      "Select action links recipients can reach you with.",
    ],
    onlyQue: false,
    isCard: true,
    que: "PROFILE HEADER",
    tags: [
      {
        id: "profileHeaderQ1",
        tag: "Will any of my photos work?",
      },
      {
        id: "profileHeaderQ2",
        tag: "How do the action buttons work?",
      },
      {
        id: "profileHeaderQ3",
        tag: "How can people save my contact?",
      },
    ],
  },

  {
    id: "profileHeaderQ1",
    onlyQue: false,
    isCard: false,
    que: "Will any of my photos work?",
    ans: "Any photo as long as you’re recognisable will work. You can also crop and zoom after uploading. AR Transparency Filter will be applied.",
  },

  {
    id: "profileHeaderQ2",
    onlyQue: false,
    isCard: false,
    que: "How do the action buttons work?",
    ans: "Upon clicking any action button in live AR Experience, the device will execute the command through the respective app in the device.",
  },

  {
    id: "profileHeaderQ3",
    onlyQue: false,
    isCard: false,
    que: "How can people save my contact?",
    ans: "Clicking your Display Picture will share your contact with all the mentioned links and details that people can save on their devices.",
  },

  {
    id: "pdfTile",
    onlyQue: false,
    que: "PDF integrstion feature",
    message: [
      "PDF Documents attached to your visiting card for added value in your meetings.",
    ],
    isCard: true,
    tags: [
      {
        id: "pdfQ1",
        tag: "How many pdf I can add",
      },
      {
        id: "pdfQ2",
        tag: "what size of pdf can I add",
      },
      {
        id: "pdfQ3",
        tag: "blah blah blah",
      },
    ],
  },

  {
    id: "pdfQ1",
    onlyQue: false,
    isCard: false,
    que: "How many pdf I can add",
    ans: "only 1, I guess",
  },

  {
    id: "pdfQ2",
    onlyQue: false,
    isCard: false,
    que: "what size of pdf can I add",
    ans: "upto 3 mb",
  },

  {
    id: "pdfQ3",
    onlyQue: false,
    isCard: false,
    que: "xyz",
    ans: "upto 3 mb",
  },

  {
    id: "protoTile",
    message: ["Choose between two modules to express information."],
    onlyQue: false,
    isCard: true,
    que: "FEATURE - PROTO TILE",
    tags: [
      {
        id: "360Mode",
        tag: "360 MODE",
      },
      {
        id: "youtube",
        tag: "YOUTUBE",
      },
    ],
  },

  {
    id: "360Mode",
    message: [],
    onlyQue: false,
    isCard: true,
    que: "360 Mode",
    tags: [
      {
        id: "360Q1",
        tag: "What does this feature do?",
      },
      {
        id: "360Q2",
        tag: "Where can I find 360° Media to upload?",
      },
    ],
  },

  {
    id: "360Q1",
    onlyQue: false,
    isCard: false,
    que: "What does this feature do?",
    ans: "It utilises a 360° Image which users can view and explore by moving their smartphone in all directions. 360o Mode is also VR(Virtual Reality) Mo0de.",
  },

  {
    id: "360Q2",
    onlyQue: false,
    isCard: false,
    que: "Where can I find 360° Media to upload?",
    ans: "Multiple websites offer downloads of 360° Media or you can create your own with 360° Cameras. 360° Content Creation is an additional service offered by Reality Reach Tech. 360.realityreach.com for more info.",
  },

  {
    id: "youtube",
    message: [],
    onlyQue: false,
    isCard: true,
    que: "Youtube",
    tags: [
      {
        id: "youtubeQ1",
        tag: "How can I make the best use of this?",
      },
      {
        id: "youtubeQ2",
        tag: "Will it open in the YouTube app?",
      },
      {
        id: "youtubeQ3",
        tag: "Will the AR Experience quit when users play the video?",
      },
    ],
  },

  {
    id: "youtubeQ1",
    onlyQue: false,
    isCard: false,
    que: "How can I make the best use of this?",
    ans: "Share a video from your own channel that presents your business or project, or any video from YouTube that you believe should add value to your recipients. Just paste the video url while choosing this Tile.",
  },

  {
    id: "youtubeQ2",
    onlyQue: false,
    isCard: false,
    que: "Will it open in the YouTube app?",
    ans: "Yes! That is if the user has the YouTube app on their device, or this video will be opened in the device browser.",
  },
  {
    id: "youtubeQ3",
    onlyQue: false,
    isCard: false,
    que: "Will the AR Experience quit when users play the video?",
    ans: "Upon clicking the YouTube Tile user will be navigated to the YouTube app and hence away from the AR Experience. There’s an Add to Watch Later button that adds the video in the user’s playlist if the user is interested but doesn’t want to leave the AR Experience.",
  },

  {
    id: "edits",
    message: [
      "You can edit your profile instantaneously by logging in the Vision Builder. Feel free to make changes, update your information, documents & media anytime.",
    ],
    onlyQue: false,
    isCard: true,
    que: "MAKING EDITS",
    tags: [],
  },

  {
    id: "dataPrivacy",
    message: [
      "We do not collect any user data and there are no trackers or use of cookies in our website & service. Data input by users necessary for the AR Experience is encrypted.",
    ],
    onlyQue: false,
    isCard: true,
    que: "DATA & PRIVACY",
    tags: [],
  },

  {
    id: "card",
    message: [
      "Vision Card is the amalgamation of tradition & technology",
      "Share your card and make a memorable impression.",
    ],
    onlyQue: false,
    isCard: true,
    que: "The Card",
    tags: [
      {
        id: "marker",
        tag: "MARKER/QR/KEY",
      },
      {
        id: "frontside",
        tag: "FRONT_SIDE",
      },
      {
        id: "print",
        tag: "PRINT & SHARE",
      },
      {
        id: "game",
        tag: "GAME",
      },
    ],
  },

  {
    id: "marker",
    message: [],
    onlyQue: false,
    isCard: true,
    que: "MARKER/QR/KEY",
    tags: [
      {
        id: "markerQ1",
        tag: "Tell me more about the QR code.",
      },
      {
        id: "markerQ2",
        tag: "Can I use my own design on the backside?",
      },
    ],
  },

  {
    id: "markerQ1",
    onlyQue: false,
    isCard: false,
    que: "Tell me more about the QR code.",
    ans: "The unique QR code navigates to the AR Experience on the device’s web browser. The asymmetric design on the backside of the card is a camera marker for the experience.",
  },

  {
    id: "markerQ2",
    onlyQue: false,
    isCard: false,
    que: "Can I use my own design on the backside?",
    ans: "The QR code and asymmetric design is core for the camera to load the AR experience upon it. It cannot be replaced. But you can use any design for the frontside of the card.",
  },

  {
    id: "frontside",
    message: [
      "We use a template that covers all the necessary details you will present via your visiting card. You can also upload your own design for the frontside.",
    ],
    onlyQue: false,
    isCard: true,
    que: "Is this a regular visiting card on its frontside?",
    tags: [],
  },

  {
    id: "print",
    message: [],
    onlyQue: false,
    isCard: true,
    que: "PRINT & SHARE",
    tags: [
      {
        id: "printQ1",
        tag: "100 Cards Free! How does this offer & printing cards work?",
      },
      {
        id: "printQ2",
        tag: "extra questions",
      },
    ],
  },
  {
    id: "printQ1",
    onlyQue: false,
    isCard: false,
    que: "100 Cards Free! How does this offer & printing cards work?",
    ans: "You will receive your first 100 Card free after purchasing the annual subscription. Note : Printing Cost of Cards & Service Cost of hosting the profile online are separate. You can print & share any amount of cards in standard printing rates after subscribing.",
  },

  {
    id: "printQ2",
    onlyQue: false,
    isCard: false,
    que: "extra questions",
    ans: "no ans yet",
  },

  {
    id: "game",
    message: [
      "Ink.tertact innovates mobile & paper interaction. Recipients can take their time before they make a call or reach out to you for a more collected and relaxed approach. This feature is purely optional.",
    ],
    onlyQue: false,
    isCard: true,
    que: "Why is there a Game on my Card?",
    tags: [],
  },

  {
    id: "visionStatement",
    message: [
      "The vision statement communicates your organization's value and commitment to achieving its goals.",
      "It is displayed at the welcome screen. This is an optional feature.",
    ],
    onlyQue: false,
    isCard: true,
    que: "VISION STATEMENT",
    tags: [
      {
        id: "visionQ1",
        tag: "Will it make an impact on my recipients?",
      },
      {
        id: "visionQ2",
        tag: "I don’t have a vision statement yet, what can I do?",
      },
      {
        id: "visionQ3",
        tag: "Show me some sample statements for inspiration.",
      },
    ],
  },

  {
    id: "visionQ1",
    onlyQue: false,
    isCard: false,
    que: "Will it make an impact on my recipients",
    ans: "Vision Cards are designed to create memorable interactions in the formal setting and your unique vision statement can be a key to reflect a prosperous interaction.",
  },

  {
    id: "visionQ2",
    onlyQue: false,
    isCard: false,
    que: "I don’t have a vision statement yet, what can I do?",
    ans: "You can mention iconic vision statements of notable individuals or organisations in history that align with your beliefs.",
  },

  {
    id: "visionQ3",
    onlyQue: false,
    isCard: false,
    que: "Show me some sample statements for inspiration.",
    ans: "“To bring inspiration & innovation to every athlete in the world” – Nike “To inspire & nurture the human spirit, one person and one cup at a time” – Starbucks",
  },

  {
    id: "preview",
    message: [
      "Get first hand experience of your Vision Card before the purchase",
      "ust scan the Test-QR code from another device to preview the AR Experience",
    ],
    onlyQue: false,
    isCard: true,
    que: "Preview",
    tags: [
      {
        id: "previewQ1",
        tag: "Why is it asking me to login again?",
      },
      {
        id: "previewQ2",
        tag: "extra",
      },
    ],
  },

  {
    id: "previewQ1",
    onlyQue: false,
    isCard: false,
    que: "Why is it asking me to login again?",
    ans: "Logging in again is necessary to make sure it's you accessing the preview of AR Experience from another device. We value the privacy of the users.",
  },

  {
    id: "previewQ2",
    onlyQue: false,
    isCard: false,
    que: "remaining",
    ans: "not yet",
  },

  {
    id: "pricing",
    message: [
      "Get first hand experience of your Vision Card before the purchase",
      "ust scan the Test-QR code from another device to preview the AR Experience",
    ],
    onlyQue: false,
    isCard: true,
    que: "Preview",
    tags: [
      {
        id: "pricingQ1",
        tag: "How many cards can I print and share with people?",
      },
      {
        id: "pricingQ2",
        tag: "Can I use the Image and get my cards printed from elsewhere?",
      },
    ],
  },

  {
    id: "pricingQ1",
    onlyQue: false,
    isCard: false,
    que: "How many cards can I print and share with people?",
    ans: "There is no limit! We hope these cards help you establish more connections.",
  },

  {
    id: "pricingQ2",
    onlyQue: false,
    isCard: false,
    que: "Can I use the Image and get my cards printed from elsewhere?",
    ans: "Yes! Our service is core to the web experience. You can always reach out to your vendor of preference and paper of choice to print your Vision Cards.",
  },
];

const message = "I'm here to help find you the right answer";
const title = "FAQ Bot";

export function getFaqs() {
  return data;
}

export function getMessageData() {
  return message;
}

export function getTitleData() {
  return title;
}
