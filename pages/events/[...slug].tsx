import React from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../dummy-data';
import EventList from '../../components/events/EventList';
import ResultsTitle from '../../components/events/results-title'

function FilteredEventPage() {
  const router = useRouter()

  const filterData = router.query.slug;

console.log(filterData)
if(!filterData) {
  return <p>Loading....</p>
}

const filteredYear = Number(filterData[0]);
const filteredMonth = Number(filterData[1]);

const filterdEvents = getFilteredEvents({
  year : filteredYear,
  month : filteredMonth
})

if(!filterdEvents || filterdEvents.length ===0 ){
  return <p>이벤트가 없습니다.</p>
}

const date = new Date(filteredYear , filteredMonth-1)
  return (
    <div>
      <ResultsTitle date={date}/>
      <EventList items={filterdEvents}/>
    </div>
  )
}

export default FilteredEventPage