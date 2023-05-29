import { parseISO, format } from 'date-fns'

export default function Date({ datestring }) {
  const date = parseISO('000-10-31T01:30:00.000-05:00')
  console.log('datestring', datestring)
  return <time dateTime={datestring}>{format(date, 'LLLL d, yyyy')}</time>
}
