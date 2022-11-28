import Image from 'next/image'
import { useRouter } from 'next/router'
import React from 'react'
import { getEventById } from '../../dummy-data'

function EventDetailPage() {
  const router = useRouter()

  const eventId = router.query.eventId

  const event =getEventById(eventId)
  console.log(event)

  if(!event) {
    return <p>이벤트가 없습니다</p>
  }
  return (
    <div>
      <h1>{event.title}</h1>
      <Image width={450}  height={300} src={'/' + event.image} alt="IMAGE" />
    </div>
  )
}

export default EventDetailPage