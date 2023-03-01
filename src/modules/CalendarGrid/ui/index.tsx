import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeCalendarSize } from '../redux';
import cn from 'classnames'
import CalendarSize from './components/CalendarSize';
import moment from 'moment';

import './style.scss';


const CalendarGrid = () => {

  const dispatch = useDispatch();
  const calendarSize = useSelector((state: any) => state.tasks.calendarSize);
  console.log(calendarSize);

  useEffect(() => {
  }, [dispatch])
  const days = moment.weekdays();
  const hours = Array.from({ length: 15 }, (_, i) => i + 8);
  const intervals = Array.from({ length: 4 }, (_, i) => i * 15);
  const fimeMinutesInterval = Array.from({ length: 12 }, (_, i) => i * 5);
  const calendarSizes = {
    small: calendarSize === 60,
    medium: calendarSize === 15,
    large: calendarSize === 5,
  }
  const handleChangeCalendarSize = (value: number) => dispatch(changeCalendarSize(value))

  const renderIndervals = useCallback(() => ({
    [5 as number]: fimeMinutesInterval.map((interval) => interval > 0 && <div key={interval} className="interval">{interval}</div>),
    [15 as number]: intervals.map((interval) => interval > 0 && <div key={interval} className="interval">{interval}</div>),
    [60 as number]: <div></div>,
  }[calendarSize]), [calendarSize])

  return (
    <div className='grid-calendar'>
      <CalendarSize
        calendarSize={calendarSize}
        changeCalendarSize={handleChangeCalendarSize}
      />
      <div className="grid-calendar__hours">

        {hours.map(hour => (
          <div key={hour} className={cn('hour-item', calendarSizes)}>
            <small>{hour}:<span>00</span></small>
            <div className="intervals">
              {renderIndervals()}
            </div>
          </div>
        ))}
      </div>
      <div className="grid-calendar__content">
        <div className="grid-calendar__week-names">
          {days.map((day) => (
            <div key={day}>
              <h3>{day}</h3>
            </div>
          ))}
        </div>
        <div className="grid-calendar__days">
          {days.map((day, dayIndex) => (
            <div key={day} className={cn("day-item")}>
              {hours.map((hour) => (
                <div className={cn("day-hour-item", calendarSizes)} key={`${day}-${hour}`} data-key={`${dayIndex + 1}-${hour}`} ></div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );



}


export default CalendarGrid;
