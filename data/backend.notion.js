const lodash = require('lodash');
const { Client } = require("@notionhq/client")
const throttledQueue = require('throttled-queue')

const notion = new Client({
  auth: process.env.NOTION_API_KEY,
})
const throttle = throttledQueue(3, 1000);

const gigsDBId = '13b920e1f55247fb9a7708a9c29faaa7'
const eventsDBId = 'd31bd8f35e47405bb43bc657cdf67211'
const showsDBId = 'ca3d9449a5b14e11a41d4b051085e8b8'

const eventDTO = (event) => ({
  id: event.id, 
  name: lodash.get(event, 'properties.Name.title[0].plain_text', ''),
  url: lodash.get(event, 'properties.URL.url', ''),
})

const fetchAllEvents = async (eventsById = {}, next_cursor = undefined) => {
  console.debug('Fetching events for cursor', next_cursor)
  if (next_cursor !== null) {
    const response = await throttle(() => notion.databases.query({
      database_id: eventsDBId,
      start_cursor: next_cursor
    }))

    response.results.forEach(event => {
      eventsById[event.id] = eventDTO(event)
    })

    if (response.has_more) {
      return fetchAllEvents(eventsById, response.next_cursor)
    }
  }

  return eventsById
}

const fetchEventById = async (id) => {
  console.debug('Fetching event by ID', id)
  const response = await throttle(() => notion.pages.retrieve({
    page_id: id
  }))

  return eventDTO(response)
}

const resolveEvent = async (eventId, eventsById) => {
  if (!eventId) {
    return null
  }
  if (eventsById) {
    return eventsById[eventId]
  }

  return await fetchEventById(eventId)
}

const showDTO = (show) => ({
  id: show.id,
  title: lodash.get(show, 'properties.Title.title[0].plain_text', ''),
  name: lodash.get(show, 'properties.ID.rich_text[0].plain_text', ''),
})

const fetchAllShows = async (showsById = {}, next_cursor = undefined) => {
  console.debug('Fetching shows for cursor', next_cursor)
  if (next_cursor !== null) {
    const response = await throttle(() => notion.databases.query({
      database_id: showsDBId,
      start_cursor: next_cursor
    }))

    response.results.forEach(show => {
      showsById[show.id] = showDTO(show)
    })

    if (response.has_more) {
      return fetchAllShows(showsById, response.next_cursor)
    }
  }

  return showsById
}

const fetchShowById = async (id) => {
  console.debug('Fetching show by ID', id)
  const response = await throttle(() => notion.pages.retrieve({
    page_id: id
  }))

  return await showDTO(response)
}

const resolveShow = async (showId, showsById) => {
  if (!showId) {
    return null
  }
  
  if (showsById) {
    return showsById[showId]
  }

  return fetchShowById(showId)
}

const gigDTO = (gig) => ({
  id: lodash.get(gig, 'properties.ID.unique_id.number', 'UNKNOWN'),
  legacyLocation: lodash.get(gig, 'properties.LegacyLocation.rich_text[0].plain_text', ''),
  venue: lodash.get(gig, 'properties.Venue.rich_text[0].plain_text', ''),
  city: lodash.get(gig, 'properties.City.rich_text[0].plain_text', ''),
  region: lodash.get(gig, 'properties.Region.rich_text[0].plain_text', ''),
  country: lodash.get(gig, 'properties.Country.select.name', ''),
  address: lodash.get(gig, 'properties.Address.rich_text[0].plain_text', ''),
  mapUrl: lodash.get(gig, 'properties.MapURL.url', ''),
  date: lodash.get(gig, 'properties.When.date.start', ''),
  title: lodash.get(gig, 'show.title', null),
  showName: lodash.get(gig, 'show.name', null),
  parentEvent: lodash.get(gig, 'event.name', null),
  parentEventUrl: lodash.get(gig, 'event.url')
})

const fetchAllGigs = async (showsById, eventsById, gigsById = {}, start_cursor = undefined) => {
  if (start_cursor !== null) {
    const response = await fetchBatchGigs(showsById, eventsById, start_cursor)

    gigsById = {
      ...gigsById,
      ...response.results
    }

    if (response.has_more) {
      return fetchAllGigs(showsById, eventsById, gigsById, response.next_cursor)
    }
  }

  return gigsById
}

const fetchBatchGigs = async (showsById, eventsById, start_cursor = undefined, page_size = 50, sorts = undefined) => {
  console.debug('Fetching gigs for cursor', start_cursor)
  const response = await throttle(() => notion.databases.query({
    database_id: gigsDBId,
    start_cursor,
    page_size,
    sorts,
    filter: {
      and: [
        {
          property: 'Status',
          status: {
            equals: 'published'
          }
        }
      ]
    }
  }))

  const gigsById = {}
  for(let gig of response.results) {
    const enrichedGig = {
      ...gig,
      show: await resolveShow(lodash.get(gig, 'properties.Show.relation[0].id', null), showsById),
      event: await resolveEvent(lodash.get(gig, 'properties.Event.relation[0].id', null), eventsById)
    }
    gigsById[gig.id] = gigDTO(enrichedGig)
  }

  return {
    results: gigsById,
    has_more: response.has_more,
    next_cursor: response.next_cursor
  }
}

const fetchGigByUniqueId = async (id) => {
  console.debug('Fetching gig by unique ID', id)
  const fetchedGigs = await throttle(() => notion.databases.query({
    database_id: gigsDBId,
    filter: {
      or: [
        {
          property: 'ID',
          number: {
            equals: id
          }
        }
      ]
    }
  }))

  const fetchedGig = fetchedGigs.results[0]
  const enrichedGig = {
    ...fetchedGig,
    show: await resolveShow(lodash.get(fetchedGig, 'properties.Show.relation[0].id', null)),
    event: await resolveEvent(lodash.get(fetchedGig, 'properties.Event.relation[0].id', null))
  }
  return gigDTO(enrichedGig)
}

module.exports = {
  fetchAllEvents,
  fetchAllShows,
  fetchAllGigs,
  fetchEventById,
  fetchShowById,
  fetchGigByUniqueId,
  fetchBatchGigs
}