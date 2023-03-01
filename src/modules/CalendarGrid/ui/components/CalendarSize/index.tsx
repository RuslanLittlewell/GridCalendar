import { Select } from '@chakra-ui/react'
import './style.scss';

interface SizeChanger {
  calendarSize: number,
  changeCalendarSize: any,
}
const CalendarSize: React.FC<SizeChanger> = ({ calendarSize, changeCalendarSize }) => {
  
  return (
    <Select
      placeholder='Size'
      size="xs"
      className='calendar-size'
      value={calendarSize}
      onChange={(e) => changeCalendarSize(Number(e.target.value))}
    >
      <option value='5'>5'</option>
      <option value='15'>15'</option>
      <option value='60'>60'</option>
    </Select>
  )
}

export default CalendarSize