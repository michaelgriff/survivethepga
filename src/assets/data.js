const players = {
  morikawa: {
    playerName: "Collin Morikawa",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
  },
  harman: {
    playerName: "Brian Harman",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_27644.jpg",
  },
  bhatia: {
    playerName: "Akshay Bhatia",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_56630.jpg",
  },
  schauffele: {
    playerName: "Xander Schauffele",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_48081.jpg",
  },
  thomas: {
    playerName: "Justin Thomas",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:FFFFFF,d_stub:default_avatar_light.png/headshots_33448.jpg",
  },
  cole: {
    playerName: "Eric Cole",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_47591.jpg",
  },
  clark: {
    playerName: "Wyndham Clark",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_51766.jpg",
  },
  fitzpatrick: {
    playerName: "Matt Fitzpatrick",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_40098.jpg",
  },
  im: {
    playerName: "Sungjae Im",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
  },
  aberg: {
    playerName: "Ludvig Aberg",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_52955.jpg",
  },
  hojgaard: {
    playerName: "Nicolai Hojgaard",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_52453.jpg",
  },
  tkim: {
    playerName: "Tom Kim",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_55182.jpg",
  },
  day: {
    playerName: "Jason Day",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_28089.jpg",
  },
  todd: {
    playerName: "Brendan Todd",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_30927.jpg",
  },
  finau: {
    playerName: "Tony Finau",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_29725.jpg",
  },
  homa: {
    playerName: "Max Homa",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39977.jpg",
  },
  hovland: {
    playerName: "Viktor Hovland",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_46717.jpg",
  },
  pendrith: {
    playerName: "Taylor Pendrith",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_40250.jpg",
  },
  lee: {
    playerName: "Min Woo Lee",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_37378.jpg",
  },
  cantlay: {
    playerName: "Patrick Cantlay",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_35450.jpg",
  },
  an: {
    playerName: "Byeong Hun An",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33948.jpg",
  },
  poston: {
    playerName: "JT Poston",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_49771.jpg",
  },
  scheffler: {
    playerName: "Scottie Scheffler",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_46046.jpg",
  },
  conners: {
    playerName: "Corey Conners",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39997.jpg",
  },
  skim: {
    playerName: "Si Woo Kim",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_37455.jpg",
  },
  theegala: {
    playerName: "Sahith Theegala",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_51634.jpg",
  },
  kirk: {
    playerName: "Chris Kirk",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_30926.jpg",
  },
  taylor: {
    playerName: "Nick Taylor",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_25493.jpg",
  },
  henley: {
    playerName: "Russell Henley",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34098.jpg",
  },
  spieth: {
    playerName: "Jordan Spieth",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34046.jpg",
  },
  hadwin: {
    playerName: "Adam Hadwin",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33399.jpg",
  },
  rose: {
    playerName: "Justin Rose",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_22405.jpg",
  },
  burns: {
    playerName: "Sam Burns",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_47504.jpg",
  },
  lowry: {
    playerName: "Shane Lowry",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33204.jpg",
  },
  fleetwood: {
    playerName: "Tommy Fleetwood",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_30911.jpg",
  },
  matsuyama: {
    playerName: "Hideki Matsuyama",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_32839.jpg",
  },
  pavon: {
    playerName: "Matthieu Pavon",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_48153.jpg",
  },
  fowler: {
    playerName: "Rickie Fowler",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_32102.jpg",
  },
  detry: {
    playerName: "Thomas Detry",
    playerPhoto:
      "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33653.jpg",
  },
};

const tournaments = {
  six: {
    tournamentName: "WM Phoenix Open",
  },
};

export const history = {
  jessesmith: [
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "Brian Harman",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_27644.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 106102,
    },
    {
      playerName: "Akshay Bhatia",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_56630.jpg",
      tournamentName: "The American Express",
      result: 0,
    },
    {
      playerName: "Xander Schauffele",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_48081.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 236250,
    },
    {
      playerName: "Justin Thomas",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:FFFFFF,d_stub:default_avatar_light.png/headshots_33448.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 642500,
    },
    {
      ...players.scheffler,
      ...tournaments.six,
      result: 519200,
    },
  ],
  davidifergan: [
    {
      playerName: "Eric Cole",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_47591.jpg",
      tournamentName: "The Sentry",
      result: 320250,
    },
    {
      playerName: "Brian Harman",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_27644.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 106102,
    },
    {
      playerName: "Wyndham Clark",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_51766.jpg",
      tournamentName: "The American Express",
      result: 34020,
    },
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Matt Fitzpatrick",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_40098.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 38250,
    },
    {
      ...players.theegala,
      ...tournaments.six,
      result: 360800,
    },
  ],
  mattholland: [
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "Matt Fitzpatrick",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_40098.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 0,
    },
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "The American Express",
      result: 63980,
    },
    {
      playerName: "Ludvig Aberg",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_52955.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 236250,
    },
    {
      playerName: "Nicolai Hojgaard",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_52453.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 106625,
    },
    {
      ...players.thomas,
      ...tournaments.six,
      result: 187000,
    },
  ],
  jakegreenberg: [
    {
      playerName: "Tom Kim",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_55182.jpg",
      tournamentName: "The Sentry",
      result: 68000,
    },
    {
      playerName: "Brian Harman",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_27644.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 106102,
    },
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "The American Express",
      result: 63980,
    },
    {
      playerName: "Jason Day",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_28089.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 322500,
    },
    {
      ...players.thomas,
      ...tournaments.six,
      result: 187000,
    },
  ],
  dustinpulver: [
    {
      playerName: "Xander Schauffele",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_48081.jpg",
      tournamentName: "The Sentry",
      result: 530000,
    },
    {
      playerName: "Brendan Todd",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_30927.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 40001,
    },
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "The American Express",
      result: 63980,
    },
    {
      playerName: "Tony Finau",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_29725.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 305750,
    },
    {
      playerName: "Max Homa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39977.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 35313,
    },
    {
      ...players.theegala,
      ...tournaments.six,
      result: 360800,
    },
  ],
  jackbleiweis: [
    {
      playerName: "Viktor Hovland",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_46717.jpg",
      tournamentName: "The Sentry",
      result: 220000,
    },
    {
      playerName: "Matt Fitzpatrick",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_40098.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 0,
    },
    {
      playerName: "Taylor Pendrith",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_40250.jpg",
      tournamentName: "The American Express",
      result: 0,
    },
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Max Homa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39977.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 35313,
    },
    {
      ...players.lee,
      ...tournaments.six,
      result: 17776,
    },
  ],
  michaelgriff: [
    {
      playerName: "Ludvig Aberg",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_52955.jpg",
      tournamentName: "The Sentry",
      result: 62000,
    },
    {
      playerName: "Tyrell Hatton",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34363.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 153135,
    },
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "The American Express",
      result: 63980,
    },
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Viktor Hovland",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_46717.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 38250,
    },
    {
      ...players.an,
      ...tournaments.six,
      result: 18392,
    },
  ],
  chasebergman: [
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "Justin Suh",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50493.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 0,
    },
    {
      playerName: "Min Woo Lee",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_37378.jpg",
      tournamentName: "The American Express",
      result: 99120,
    },
    {
      playerName: "Ludvig Aberg",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_52955.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 236250,
    },
    {
      playerName: "Patrick Cantlay",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_35450.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 455000,
    },
    {
      ...players.theegala,
      ...tournaments.six,
      result: 360800,
    },
  ],
  coletishler: [
    {
      playerName: "Eric Cole",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_47591.jpg",
      tournamentName: "The Sentry",
      result: 320250,
    },
    {
      playerName: "Byeong Hun An",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33948.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 738700,
    },
    {
      playerName: "Justin Thomas",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:FFFFFF,d_stub:default_avatar_light.png/headshots_33448.jpg",
      tournamentName: "The American Express",
      result: 635600,
    },
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Xander Schauffele",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_48081.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 42500,
    },
    {
      ...players.fowler,
      ...tournaments.six,
      result: 0,
    },
  ],
  deansacoransky: [
    {
      playerName: "Brian Harman",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_27644.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "JT Poston",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_49771.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 300875,
    },
    {
      playerName: "Min Woo Lee",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_37378.jpg",
      tournamentName: "The American Express",
      result: 99120,
    },
    {
      playerName: "Jason Day",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_28089.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Patrick Cantlay",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_35450.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 455000,
    },
    {
      ...players.detry,
      ...tournaments.six,
      result: 53000,
    },
  ],
  maxwiseman: [
    {
      playerName: "Scottie Scheffler",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_46046.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "Corey Conners",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39997.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 18592,
    },
    {
      playerName: "Si Woo Kim",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_37455.jpg",
      tournamentName: "The American Express",
      result: 63980,
    },
    {
      playerName: "Sahith Theegala",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_51634.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 19080,
    },
    {
      playerName: "Max Homa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39977.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 35313,
    },
    {
      ...players.thomas,
      ...tournaments.six,
      result: 187000,
    },
  ],
  ryanschwartz: [
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "Akshay Bhatia",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_56630.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 153135,
    },
    {
      playerName: "Chris Kirk",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_30926.jpg",
      tournamentName: "The American Express",
      result: 23705,
    },
    {
      playerName: "Xander Schauffele",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_48081.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 236250,
    },
    {
      playerName: "Nick Taylor",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_25493.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 33875,
    },
    {
      ...players.detry,
      ...tournaments.six,
      result: 53000,
    },
  ],
  adamgriff: [
    {
      playerName: "Max Homa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39977.jpg",
      tournamentName: "The Sentry",
      result: 320250,
    },
    {
      playerName: "Russell Henley",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34098.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 373500,
    },
    {
      playerName: "JT Poston",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_49771.jpg",
      tournamentName: "The American Express",
      result: 212100,
    },
    {
      playerName: "Jason Day",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_28089.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Jordan Spieth",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34046.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 70125,
    },
    {
      ...players.im,
      ...tournaments.six,
      result: 18392,
    },
  ],
  davidgriff: [
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "Brian Harman",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_27644.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 106102,
    },
    {
      playerName: "Adam Hadwin",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33399.jpg",
      tournamentName: "The American Express",
      result: 310800,
    },
    {
      playerName: "Justin Rose",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_22405.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 20340,
    },
    {
      playerName: "Xander Schauffele",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_48081.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 42500,
    },
    {
      ...players.lowry,
      ...tournaments.six,
      result: 19448,
    },
  ],
  simongrammer: [
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "Russell Henley",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34098.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 373500,
    },
    {
      playerName: "Jason Day",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_28089.jpg",
      tournamentName: "The American Express",
      result: 45780,
    },
    {
      playerName: "Tony Finau",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_29725.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 305750,
    },
    {
      playerName: "Patrick Cantlay",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_35450.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 455000,
    },
    {
      ...players.cole,
      ...tournaments.six,
      result: 22396,
    },
  ],
  tygreenberg: [
    {
      playerName: "Jordan Spieth",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34046.jpg",
      tournamentName: "The Sentry",
      result: 1360000,
    },
    {
      playerName: "Corey Conners",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39997.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 18592,
    },
    {
      playerName: "Sam Burns",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_47504.jpg",
      tournamentName: "The American Express",
      result: 310800,
    },
    {
      playerName: "Jason Day",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_28089.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Max Homa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39977.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 35313,
    },
    {
      ...players.thomas,
      ...tournaments.six,
      result: 187000,
    },
  ],
  fletcherblakely: [
    {
      playerName: "Max Homa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39977.jpg",
      tournamentName: "The Sentry",
      result: 320250,
    },
    {
      playerName: "Corey Conners",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39997.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 18592,
    },
    {
      playerName: "JT Poston",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_49771.jpg",
      tournamentName: "The American Express",
      result: 212100,
    },
    {
      playerName: "Eric Cole",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_47591.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Jordan Spieth",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34046.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 70125,
    },
    {
      ...players.theegala,
      ...tournaments.six,
      result: 360800,
    },
  ],
  harrywood: [
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "The Sentry",
      result: 690500,
    },
    {
      playerName: "Corey Conners",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39997.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 18592,
    },
    {
      playerName: "Justin Thomas",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:FFFFFF,d_stub:default_avatar_light.png/headshots_33448.jpg",
      tournamentName: "The American Express",
      result: 635600,
    },
    {
      playerName: "Jason Day",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_28089.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Scottie Scheffler",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_46046.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 642500,
    },
    {
      ...players.homa,
      ...tournaments.six,
      result: 0,
    },
  ],
  aarongotkin: [
    {
      playerName: "Harris English",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34099.jpg",
      tournamentName: "The Sentry",
      result: 320250,
    },
    {
      playerName: "Tyrell Hatton",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34363.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 153135,
    },
    {
      playerName: "Shane Lowry",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33204.jpg",
      tournamentName: "The American Express",
      result: 0,
    },
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 0,
    },
    {
      playerName: "Matt Fitzpatrick",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_40098.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 38250,
    },
    {
      ...players.detry,
      ...tournaments.six,
      result: 53000,
    },
  ],
  spencersnow: [
    {
      playerName: "Jordan Spieth",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34046.jpg",
      tournamentName: "The Sentry",
      result: 1360000,
    },
    {
      playerName: "Byeong Hun An",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33948.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 738700,
    },
    {
      playerName: "Sungjae Im",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39971.jpg",
      tournamentName: "The American Express",
      result: 63980,
    },
    {
      playerName: "Tony Finau",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_29725.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 305750,
    },
    {
      playerName: "Tommy Fleetwood",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_30911.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 106625,
    },
    {
      ...players.thomas,
      ...tournaments.six,
      result: 187000,
    },
  ],
  jonahgutmann: [
    {
      playerName: "Viktor Hovland",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_46717.jpg",
      tournamentName: "The Sentry",
      result: 220000,
    },
    {
      playerName: "Hideki Matsuyama",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_32839.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 40001,
    },
    {
      playerName: "Matthieu Pavon",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_48153.jpg",
      tournamentName: "The American Express",
      result: 34020,
    },
    {
      playerName: "Min Woo Lee",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_37378.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 28530,
    },
    {
      playerName: "Jordan Spieth",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_34046.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 70125,
    },
    {
      ...players.burns,
      ...tournaments.six,
      result: 519200,
    },
  ],
  benstarkman: [
    {
      playerName: "Vincent Norrman",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_51070.jpg",
      tournamentName: "The Sentry",
      result: 50000,
    },
    {
      playerName: "Joe Highsmith",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_60067.jpg",
      tournamentName: "Sony Open in Hawaii",
      result: 0,
    },
    {
      playerName: "Tyson Alexander",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_33408.jpg",
      tournamentName: "The American Express",
      result: 0,
    },
    {
      playerName: "Max Homa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_39977.jpg",
      tournamentName: "Farmers Insurance Open",
      result: 156536,
    },
    {
      playerName: "Collin Morikawa",
      playerPhoto:
        "https://pga-tour-res.cloudinary.com/image/upload/c_thumb,g_face,z_0.7,q_auto,dpr_2.0,w_80,h_80,b_rgb:F2F2F2,d_stub:default_avatar_light.png/headshots_50525.jpg",
      tournamentName: "AT&T Pebble Beach",
      result: 322500,
    },
    {
      ...players.fowler,
      ...tournaments.six,
      result: 0,
    },
  ],
};

export const users = [
  {
    name: "jessesmith",
    number: history["jessesmith"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#5593C1",
  },
  {
    name: "davidifergan",
    number: history["davidifergan"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#C1556F",
  },
  {
    name: "mattholland",
    number: history["mattholland"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#64C155",
  },
  {
    name: "jakegreenberg",
    number: history["jakegreenberg"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#8B849B",
  },
  {
    name: "dustinpulver",
    number: history["dustinpulver"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#C1A955",
  },
  {
    name: "jackbleiweis",
    number: history["jackbleiweis"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#55C1A0",
  },
  {
    name: "michaelgriff",
    number: history["michaelgriff"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#7755C1",
  },
  {
    name: "chasebergman",
    number: history["chasebergman"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#C155B6",
  },
  {
    name: "coletishler",
    number: history["coletishler"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#C18F57",
  },
  {
    name: "deansacoransky",
    number: history["deansacoransky"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#839F97",
  },
  {
    name: "maxwiseman",
    number: history["maxwiseman"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#8F9B84",
  },
  {
    name: "adamgriff",
    number: history["adamgriff"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#696984",
  },
  {
    name: "davidgriff",
    number: history["davidgriff"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#13136B",
  },
  {
    name: "simongrammer",
    number: history["simongrammer"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#D658A0",
  },
  {
    name: "tygreenberg",
    number: history["tygreenberg"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#441006",
  },
  {
    name: "fletcherblakely",
    number: history["fletcherblakely"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#92E0D1",
  },
  {
    name: "harrywood",
    number: history["harrywood"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#556619",
  },
  {
    name: "aarongotkin",
    number: history["aarongotkin"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#E2AAE8",
  },
  {
    name: "ryanschwartz",
    number: history["ryanschwartz"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#808BA0",
  },
  {
    name: "spencersnow",
    number: history["spencersnow"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#5F5F5F",
  },
  {
    name: "jonahgutmann",
    number: history["jonahgutmann"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#A5EF16",
  },
  {
    name: "benstarkman",
    number: history["benstarkman"].reduce(
      (partialSum, a) => partialSum + a.result,
      0
    ),
    color: "#30471F",
  },

  // Add more users as needed
];

export const currentPicks = [
  {
    name: "jessesmith",
    playerName:
      history["jessesmith"][history["jessesmith"].length - 1].playerName,
    playerPhoto:
      history["jessesmith"][history["jessesmith"].length - 1].playerPhoto,
    color: "#5593C1",
    isCurrent: true,
  },
  {
    name: "davidifergan",
    playerName:
      history["davidifergan"][history["davidifergan"].length - 1].playerName,
    playerPhoto:
      history["davidifergan"][history["davidifergan"].length - 1].playerPhoto,
    color: "#C1556F",
    isCurrent: true,
  },
  {
    name: "mattholland",
    playerName:
      history["mattholland"][history["mattholland"].length - 1].playerName,
    playerPhoto:
      history["mattholland"][history["mattholland"].length - 1].playerPhoto,
    color: "#64C155",
    isCurrent: true,
  },
  {
    name: "jakegreenberg",
    playerName:
      history["jakegreenberg"][history["jakegreenberg"].length - 1].playerName,
    playerPhoto:
      history["jakegreenberg"][history["jakegreenberg"].length - 1].playerPhoto,
    color: "#8B849B",
    isCurrent: true,
  },
  {
    name: "dustinpulver",
    playerName:
      history["dustinpulver"][history["dustinpulver"].length - 1].playerName,
    playerPhoto:
      history["dustinpulver"][history["dustinpulver"].length - 1].playerPhoto,
    color: "#C1A955",
    isCurrent: true,
  },
  {
    name: "jackbleiweis",
    playerName:
      history["jackbleiweis"][history["jackbleiweis"].length - 1].playerName,
    playerPhoto:
      history["jackbleiweis"][history["jackbleiweis"].length - 1].playerPhoto,
    color: "#55C1A0",
    isCurrent: true,
  },
  {
    name: "michaelgriff",
    playerName:
      history["michaelgriff"][history["michaelgriff"].length - 1].playerName,
    playerPhoto:
      history["michaelgriff"][history["michaelgriff"].length - 1].playerPhoto,
    color: "#7755C1",
    isCurrent: true,
  },
  {
    name: "chasebergman",
    playerName:
      history["chasebergman"][history["chasebergman"].length - 1].playerName,
    playerPhoto:
      history["chasebergman"][history["chasebergman"].length - 1].playerPhoto,
    color: "#C155B6",
    isCurrent: true,
  },

  {
    name: "coletishler",
    playerName:
      history["coletishler"][history["coletishler"].length - 1].playerName,
    playerPhoto:
      history["coletishler"][history["coletishler"].length - 1].playerPhoto,
    color: "#C18F57",
    isCurrent: true,
  },
  {
    name: "deansacoransky",
    playerName:
      history["deansacoransky"][history["deansacoransky"].length - 1]
        .playerName,
    playerPhoto:
      history["deansacoransky"][history["deansacoransky"].length - 1]
        .playerPhoto,
    color: "#839F97",
    isCurrent: true,
  },
  {
    name: "maxwiseman",
    playerName:
      history["maxwiseman"][history["maxwiseman"].length - 1].playerName,
    playerPhoto:
      history["maxwiseman"][history["maxwiseman"].length - 1].playerPhoto,
    color: "#8F9B84",
    isCurrent: true,
  },
  {
    name: "ryanschwartz",
    playerName:
      history["ryanschwartz"][history["ryanschwartz"].length - 1].playerName,
    playerPhoto:
      history["ryanschwartz"][history["ryanschwartz"].length - 1].playerPhoto,
    color: "#808BA0",
    isCurrent: true,
  },
  {
    name: "adamgriff",
    playerName:
      history["adamgriff"][history["adamgriff"].length - 1].playerName,
    playerPhoto:
      history["adamgriff"][history["adamgriff"].length - 1].playerPhoto,
    color: "#696984",
    isCurrent: true,
  },
  {
    name: "davidgriff",
    playerName:
      history["davidgriff"][history["davidgriff"].length - 1].playerName,
    playerPhoto:
      history["davidgriff"][history["davidgriff"].length - 1].playerPhoto,
    color: "#13136B",
    isCurrent: true,
  },
  {
    name: "simongrammer",
    playerName:
      history["simongrammer"][history["simongrammer"].length - 1].playerName,
    playerPhoto:
      history["simongrammer"][history["simongrammer"].length - 1].playerPhoto,
    color: "#D658A0",
    isCurrent: true,
  },
  {
    name: "tygreenberg",
    playerName:
      history["tygreenberg"][history["tygreenberg"].length - 1].playerName,
    playerPhoto:
      history["tygreenberg"][history["tygreenberg"].length - 1].playerPhoto,
    color: "#441006",
    isCurrent: true,
  },
  {
    name: "fletcherblakely",
    playerName:
      history["fletcherblakely"][history["fletcherblakely"].length - 1]
        .playerName,
    playerPhoto:
      history["fletcherblakely"][history["fletcherblakely"].length - 1]
        .playerPhoto,
    color: "#92E0D1",
    isCurrent: true,
  },
  {
    name: "harrywood",
    playerName:
      history["harrywood"][history["harrywood"].length - 1].playerName,
    playerPhoto:
      history["harrywood"][history["harrywood"].length - 1].playerPhoto,
    color: "#556619",
    isCurrent: true,
  },
  {
    name: "aarongotkin",
    playerName:
      history["aarongotkin"][history["aarongotkin"].length - 1].playerName,
    playerPhoto:
      history["aarongotkin"][history["aarongotkin"].length - 1].playerPhoto,
    color: "#E2AAE8",
    isCurrent: true,
  },
  {
    name: "spencersnow",
    playerName:
      history["spencersnow"][history["spencersnow"].length - 1].playerName,
    playerPhoto:
      history["spencersnow"][history["spencersnow"].length - 1].playerPhoto,
    color: "#5F5F5F",
    isCurrent: true,
  },
  {
    name: "jonahgutmann",
    playerName:
      history["jonahgutmann"][history["jonahgutmann"].length - 1].playerName,
    playerPhoto:
      history["jonahgutmann"][history["jonahgutmann"].length - 1].playerPhoto,
    color: "#A5EF16",
    isCurrent: true,
  },
  {
    name: "benstarkman",
    playerName:
      history["benstarkman"][history["benstarkman"].length - 1].playerName,
    playerPhoto:
      history["benstarkman"][history["benstarkman"].length - 1].playerPhoto,
    color: "#30471F",
    isCurrent: true,
  },
];
