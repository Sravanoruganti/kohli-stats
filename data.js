/* ============================================================
   KOHLI STATS — DATA FILE
   ------------------------------------------------------------
   This is the ONLY file you need to edit when stats change.
   Update statsAsOf whenever you update numbers below.
   ============================================================ */

const SITE_DATA = {
  statsAsOf: "28 June 2026",

  profile: {
    name: "Virat Kohli",
    born: "5 November 1988, Delhi, India",
    role: "Right-handed batter, occasional medium-pace bowler",
    teams: "India National Team · Royal Challengers Bengaluru (IPL)",
    captaincy: "Former all-format captain of India",
    tagline: "One of the most prolific run-scorers in the history of international cricket."
  },

  // Career totals — headline scoreboard
  careerTotals: {
    internationalCenturies: 85,
    internationalRuns: 28215,
    iplRuns: 8661,
    worldCupsWon: ["2011 ODI World Cup", "2013 Champions Trophy", "2024 T20 World Cup"]
  },

  // Format-by-format breakdown
  formats: [
    {
      format: "Test",
      status: "Retired — May 2025",
      matches: 123,
      runs: 9230,
      average: 46.85,
      centuries: 30,
      doubleCenturies: 7,
      highScore: "254*",
      note: "7 double centuries — the most by any Indian batter in Test history."
    },
    {
      format: "ODI",
      status: "Active",
      matches: 311,
      runs: 14797,
      average: 58.72,
      centuries: 54,
      doubleCenturies: 0,
      highScore: "183",
      note: "World record holder for most ODI centuries (54), surpassing Tendulkar's 49 in Nov 2023."
    },
    {
      format: "T20I",
      status: "Retired — July 2024",
      matches: 125,
      runs: 4188,
      average: 48.70,
      centuries: 1,
      doubleCenturies: 0,
      highScore: "122*",
      note: "Retired after India's 2024 T20 World Cup title win."
    },
    {
      format: "IPL",
      status: "Active — RCB only",
      matches: 267,
      runs: 8661,
      average: null,
      centuries: 8,
      doubleCenturies: 0,
      highScore: "113*",
      note: "All-time leading run-scorer in IPL history. Only player to feature for one franchise (RCB) every season since 2008."
    }
  ],

  // Childhood / early years timeline
  childhood: [
    {
      year: "1988",
      age: "Birth",
      title: "Born in Delhi",
      text: "Born on 5 November 1988 in Delhi to a middle-class family. His father, a criminal lawyer, first put a bat in his hands as a young boy."
    },
    {
      year: "1998",
      age: "9",
      title: "Joins West Delhi Cricket Academy",
      text: "Enrolled at the newly-formed West Delhi Cricket Academy, where coach Rajkumar Sharma began shaping his technique and temperament."
    },
    {
      year: "2002",
      age: "13",
      title: "First competitive matches",
      text: "Began playing age-group cricket for Delhi, taking his first steps in organised competitive cricket against Himachal Pradesh."
    },
    {
      year: "2004",
      age: "15",
      title: "Loses his father, plays the next day",
      text: "His father passed away suddenly. Kohli famously returned to the crease the following day to continue a Ranji Trophy match for Delhi — an early sign of the mental toughness that would define his career."
    },
    {
      year: "2006",
      age: "17",
      title: "Delhi Ranji Trophy debut",
      text: "Made his first-class debut for Delhi in the Ranji Trophy, beginning his domestic career proper."
    }
  ],

  // Major milestones across the full career
  milestones: [
    {
      year: "2008",
      title: "U19 World Cup-winning captain",
      text: "Captained India to victory at the Under-19 Cricket World Cup, announcing himself on the world stage."
    },
    {
      year: "2008",
      title: "ODI debut & RCB signing",
      text: "Made his senior ODI debut for India in Sri Lanka, and was picked up by Royal Challengers Bengaluru in the inaugural IPL season — a partnership that continues today."
    },
    {
      year: "2009",
      title: "Maiden ODI century",
      text: "Scored his first ODI hundred against Sri Lanka, confirming his arrival as a serious international batter."
    },
    {
      year: "2011",
      title: "World Cup glory on home soil",
      text: "Part of the Indian squad that won the 2011 ODI World Cup, scoring a century on his World Cup debut against Bangladesh."
    },
    {
      year: "2011",
      title: "Test debut",
      text: "Made his Test debut against the West Indies, beginning a red-ball career that would later include 30 centuries."
    },
    {
      year: "2013",
      title: "Champions Trophy winner",
      text: "Played a key role as India won the 2013 ICC Champions Trophy, and led the side for the first time on a tour of the West Indies."
    },
    {
      year: "2014",
      title: "Named full Test captain",
      text: "Took over the Test captaincy from MS Dhoni mid-series in Australia, then scored three centuries in his first three innings as permanent captain."
    },
    {
      year: "2018",
      title: "Historic series win in Australia",
      text: "Led India to its first-ever Test series win on Australian soil — a defining achievement of his captaincy."
    },
    {
      year: "2019",
      title: "Career-best 254*",
      text: "Posted his highest Test score of 254 not out against South Africa in Pune."
    },
    {
      year: "2022",
      title: "Ends a 3-year century drought",
      text: "Broke a long-running wait for an international hundred with a century against Afghanistan at the Asia Cup, followed by a defining 82* against Pakistan at the T20 World Cup."
    },
    {
      year: "2023",
      title: "Passes Tendulkar's ODI century record",
      text: "Scored his 50th ODI century against New Zealand in the World Cup semi-final at the Wankhede Stadium, going past Sachin Tendulkar's long-standing record of 49."
    },
    {
      year: "2024",
      title: "T20 World Cup champion — then retires from the format",
      text: "Won the 2024 T20 World Cup with India and announced his retirement from T20 internationals immediately after."
    },
    {
      year: "2025",
      title: "Retires from Test cricket",
      text: "Announced his retirement from Test cricket in May 2025, closing out a 123-match red-ball career."
    },
    {
      year: "2025",
      title: "First IPL title — at last",
      text: "After 18 seasons with RCB, finally won the IPL in 2025, beating Punjab Kings in the final."
    },
    {
      year: "2026",
      title: "Back-to-back IPL champion",
      text: "Led RCB to a second consecutive IPL title in 2026, with Kohli playing a central role in the triumph."
    }
  ],

  // Year-wise stats (for the year-wise stats page — populated with key years; extend as needed)
  yearWise: [
    { year: 2008, matches: 13, runs: 405, centuries: 0, note: "International debut year" },
    { year: 2009, matches: 32, runs: 995, centuries: 1, note: "Maiden ODI century vs Sri Lanka" },
    { year: 2011, matches: 42, runs: 1737, centuries: 3, note: "World Cup-winning year" },
    { year: 2013, matches: 48, runs: 2783, centuries: 12, note: "Statistically one of his best calendar years ever" },
    { year: 2016, matches: 32, runs: 2595, centuries: 7, note: "Record IPL season: 973 runs" },
    { year: 2018, matches: 27, runs: 2735, centuries: 11, note: "Peak Test form; tour of England" },
    { year: 2019, matches: 28, runs: 2818, centuries: 7, note: "Career-best Test score: 254*" },
    { year: 2022, matches: 31, runs: 1582, centuries: 1, note: "Century drought ends vs Afghanistan" },
    { year: 2023, matches: 34, runs: 2294, centuries: 8, note: "50th ODI century, breaks Tendulkar's record" },
    { year: 2024, matches: 22, runs: 1397, centuries: 2, note: "T20 World Cup win; retires from T20Is" },
    { year: 2025, matches: 19, runs: 1350, centuries: 3, note: "Retires from Tests; first IPL title with RCB" },
    { year: 2026, matches: 9, runs: 612, centuries: 1, note: "Back-to-back IPL title with RCB" }
  ]
};
