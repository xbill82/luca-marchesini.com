import moment from "moment";

export const formatDate = date =>
  moment(date)
    .locale("fr")
    .format("D MMMM YYYY");

export const formatTime = time => moment(time).format("HH:mm");

export const getGeographicalInformation = (gig) => {
  if (!gig.country || gig.country !== 'FR') {
    return `${gig.city}, ${gig.country}`;
  } else if (gig.city) {
    return `${gig.city}, ${gig.region}`
  }
}