const WEEKLY_PACING = [
  {
    week: 1,
    start: "2025-09-03", // Assuming "Sep 3" is the start
    end: "2025-09-05",
    topics: [
      { unit: 1, topic: "1.1" },
      { unit: 1, topic: "1.2" },
      { unit: 1, topic: "1.3" }
    ]
  },
  {
    week: 2,
    start: "2025-09-08",
    end: "2025-09-12",
    topics: [
      { unit: 1, topic: "1.4" },
      { unit: 1, topic: "1.5" },
      { unit: 1, topic: "1.6" },
      { unit: 1, topic: "1.7" }
    ]
  },
  {
    week: 3,
    start: "2025-09-15",
    end: "2025-09-19",
    topics: [
      { unit: 1, topic: "1.8" },
      { unit: 1, topic: "1.9" },
      { unit: 1, topic: "1.10" }
      // "Unit 1 Capstone Prep" is mentioned but not a numbered topic.
      // If you want to include it, decide how to represent it, e.g.,
      // { unit: 1, topic: "Capstone Prep" } or similar.
    ]
  },
  {
    week: 4,
    start: "2025-09-22",
    end: "2025-09-26",
    topics: [
      { unit: 2, topic: "2.1" },
      { unit: 2, topic: "2.2" },
      { unit: 2, topic: "2.3" },
      { unit: 2, topic: "2.4" }
    ]
  },
  {
    week: 5,
    start: "2025-09-29",
    end: "2025-10-03", // Corrected "Oct 3" to "10-03"
    topics: [
      { unit: 2, topic: "2.5" },
      { unit: 2, topic: "2.6" },
      { unit: 2, topic: "2.7" }
    ]
  },
  {
    week: 6,
    start: "2025-10-06",
    end: "2025-10-10",
    topics: [
      { unit: 2, topic: "2.8" },
      { unit: 2, topic: "2.9" },
      // "U2 Capstone Prep"
      { unit: 3, topic: "3.1" }
    ]
  },
  {
    week: 7,
    start: "2025-10-14",
    end: "2025-10-17",
    topics: [
      { unit: 3, topic: "3.2" },
      { unit: 3, topic: "3.3" },
      { unit: 3, topic: "3.4" }
    ]
  },
  {
    week: 8,
    start: "2025-10-20",
    end: "2025-10-24",
    topics: [
      { unit: 3, topic: "3.5" },
      { unit: 3, topic: "3.6" },
      { unit: 3, topic: "3.7" }
    ]
  },
  {
    week: 9,
    start: "2025-10-27",
    end: "2025-10-31",
    topics: [
      // "U3 Capstone Prep"
      { unit: 4, topic: "4.1" },
      { unit: 4, topic: "4.2" }
    ]
  },
  {
    week: 10,
    start: "2025-11-03",
    end: "2025-11-07",
    topics: [
      { unit: 4, topic: "4.3" },
      { unit: 4, topic: "4.4" },
      { unit: 4, topic: "4.5" }
    ]
  },
  {
    week: 11,
    start: "2025-11-10",
    end: "2025-11-14",
    topics: [
      { unit: 4, topic: "4.6" },
      { unit: 4, topic: "4.7" }
    ]
  },
  {
    week: 12,
    start: "2025-11-17",
    end: "2025-11-21",
    topics: [
      { unit: 4, topic: "4.8" },
      { unit: 4, topic: "4.9" }
    ]
  },
  {
    week: 13,
    start: "2025-11-24",
    end: "2025-11-26",
    topics: [
      { unit: 4, topic: "4.10" }
    ]
  },
  {
    week: 14,
    start: "2025-12-01",
    end: "2025-12-05",
    topics: [
      { unit: 4, topic: "4.11" },
      { unit: 4, topic: "4.12" }
    ]
  },
  {
    week: 15,
    start: "2025-12-08",
    end: "2025-12-12",
    topics: [
      // "U4 Capstone Prep"
      { unit: 5, topic: "5.1" },
      { unit: 5, topic: "5.2" }
    ]
  },
  {
    week: 16,
    start: "2025-12-15",
    end: "2025-12-19",
    topics: [
      { unit: 5, topic: "5.3" },
      { unit: 5, topic: "5.4" }
    ]
  },
  {
    week: 17,
    start: "2026-01-05", // Assuming 2026 for January
    end: "2026-01-09",
    topics: [
      { unit: 5, topic: "5.5" },
      { unit: 5, topic: "5.6" }
    ]
  },
  {
    week: 18,
    start: "2026-01-12",
    end: "2026-01-16",
    topics: [
      { unit: 5, topic: "5.7" },
      { unit: 5, topic: "5.8" }
      // "U5 Capstone Prep"
    ]
  },
  {
    week: 19,
    start: "2026-01-20",
    end: "2026-01-23",
    topics: [
      { unit: 6, topic: "6.1" },
      { unit: 6, topic: "6.2" },
      { unit: 6, topic: "6.3" }
    ]
  },
  {
    week: 20,
    start: "2026-01-26",
    end: "2026-01-30",
    topics: [
      { unit: 6, topic: "6.4" },
      { unit: 6, topic: "6.5" },
      { unit: 6, topic: "6.6" }
    ]
  },
  {
    week: 21,
    start: "2026-02-02",
    end: "2026-02-06",
    topics: [
      { unit: 6, topic: "6.7" },
      { unit: 6, topic: "6.8" },
      { unit: 6, topic: "6.9" }
    ]
  },
  {
    week: 22,
    start: "2026-02-09",
    end: "2026-02-13",
    topics: [
      { unit: 6, topic: "6.10" },
      { unit: 6, topic: "6.11" }
      // "U6 Capstone Prep"
    ]
  },
  {
    week: 23,
    start: "2026-02-23",
    end: "2026-02-27",
    topics: [
      { unit: 7, topic: "7.1" },
      { unit: 7, topic: "7.2" },
      { unit: 7, topic: "7.3" }
    ]
  },
  {
    week: 24,
    start: "2026-03-02",
    end: "2026-03-06",
    topics: [
      { unit: 7, topic: "7.4" },
      { unit: 7, topic: "7.5" },
      { unit: 7, topic: "7.6" }
    ]
  },
  {
    week: 25,
    start: "2026-03-09",
    end: "2026-03-13",
    topics: [
      { unit: 7, topic: "7.7" },
      { unit: 7, topic: "7.8" },
      { unit: 7, topic: "7.9" }
    ]
  },
  {
    week: 26,
    start: "2026-03-16",
    end: "2026-03-20",
    topics: [
      { unit: 7, topic: "7.10" },
      // "U7 Capstone Prep"
      { unit: 8, topic: "8.1" }
    ]
  },
  {
    week: 27,
    start: "2026-03-23",
    end: "2026-03-27",
    topics: [
      { unit: 8, topic: "8.2" },
      { unit: 8, topic: "8.3" },
      { unit: 8, topic: "8.4" }
    ]
  },
  {
    week: 28,
    start: "2026-03-30",
    end: "2026-04-03",
    topics: [
      { unit: 8, topic: "8.5" },
      { unit: 8, topic: "8.6" }
    ]
  },
  {
    week: 29,
    start: "2026-04-06",
    end: "2026-04-08",
    topics: [
      { unit: 8, topic: "8.7" },
      // "U8 Capstone Prep"
      // "ALL Unit 9 + Capstone" is a bit broad.
      // Assuming you mean all numbered topics from Unit 9.
      // If Unit 9 has topics 9.1, 9.2, 9.3, 9.4, 9.5, 9.6 from the OCR:
      { unit: 9, topic: "9.1" },
      { unit: 9, topic: "9.2" },
      { unit: 9, topic: "9.3" },
      { unit: 9, topic: "9.4" },
      { unit: 9, topic: "9.5" },
      { unit: 9, topic: "9.6" }
      // "Unit 9 Capstone"
    ]
  }
];