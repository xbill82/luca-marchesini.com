import gigsJson from "./gigs.json";

const dateFormat = "YYYY-MM-DD";
const gigs = Array.from(gigsJson).sort((a, b) => {
  const dateA = moment(a.date, dateFormat);
  const dateB = moment(b.date, dateFormat);

  if (dateA.unix() === dateB.unix()) {
    return 0;
  }
  if (dateA.unix() < dateB.unix()) {
    return -1;
  }
  if (dateA.unix() > dateB.unix()) {
    return 1;
  }
});

export const latest = limit => {
  gigs;
};

const getNextUpcomingIdx = gigs => {
  const now = moment.unix();
};
