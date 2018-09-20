import gigsJson from "./gigs.json";

const dateFormat = "YYYY-MM-DD HH:mm:ss";
const gigs = Array.from(gigsJson).sort((a, b) => {
  const dateA = moment(`${a.date} ${a.time}`, dateFormat);
  const dateB = moment(`${b.date} ${b.time}`, dateFormat);

  if (dateA.unix() === dateB.unix()) {
    return 0;
  }
  if (dateA.unix() > dateB.unix()) {
    return -1;
  }
  if (dateA.unix() < dateB.unix()) {
    return 1;
  }
});

export const some = limit => {
  return gigs.slice(0, limit);
};
