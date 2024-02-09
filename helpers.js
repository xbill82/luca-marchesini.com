import moment from "moment";

export const formatDate = date =>
  moment(date, "YYYY-MM-DD")
    .locale("fr")
    .format("D MMMM YYYY");

export const formatTime = time => moment(time, "HH:mm:ss").format("HH:mm");