import gigsJson from "./gigs.json";
import moment from "moment";

const dateFormat = "YYYY-MM-DD HH:mm:ss";
export const all = Array.from(gigsJson).sort((a, b) => {
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
  return all.slice(0, limit);
};

export const byId = id => {
  return all.find(gig => gig.id === id);
};

export const formatDate = date =>
  moment(date, "YYYY-MM-DD")
    .locale("fr")
    .format("D MMMM YYYY");

export const formatTime = time => moment(time, "HH:mm:ss").format("HH:mm");
