import React, {useEffect} from 'react'
import EventList from '../../components/events/EventList';
import { getAllEvents } from '../../dummy-data';
import EventsSearch from '../../components/events/EventsSearch'
import { useRouter } from 'next/router'

function AllEventPage() {
  // const events = getAllEvents();
  const router =  useRouter()

  useEffect(() => {
    fetch('https://nextstudy-895d7-default-rtdb.firebaseio.com/evnets.json').then(res => res.json())
    .then(data => console.log(data))
  
  }, [])
  

  const findEventHandler = ( year , month) => {
    router.push(`/events/${year}/${month}`)
  }
  return (
    <div>
      <EventsSearch onSearch={findEventHandler}/>
      {/* <EventList items={events}/> */}
    </div>
  )
}

export default AllEventPage