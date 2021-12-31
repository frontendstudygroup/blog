import * as React from "react"
import { zonedTimeToUtc, formatInTimeZone } from "date-fns-tz"
import {format} from "date-fns";
import enGB from 'date-fns/locale/en-GB'

const DateTime = ({date, time}) => {
 const stdDate = format(new Date(date), 'yyyy-MM-dd');
 const utcDate = zonedTimeToUtc(`${stdDate} ${time}`, 'Europe/Berlin');
 const timeZones = ['America/Los_Angeles', 'America/New_York', 'Europe/Berlin', 'Asia/Kolkata', 'Asia/Jakarta', 'Asia/Singapore', 'Australia/Melbourne'];
 
 return timeZones.map(tz => 
    <div className="dateTime" key={tz}>
        <span>{formatInTimeZone(utcDate, tz, 'dd MMMM HH:mm', { locale: enGB })}</span>
        <span>{formatInTimeZone(utcDate, tz, 'zzzz', { locale: enGB })}</span>
        <span>{formatInTimeZone(utcDate, tz, 'zzz', { locale: enGB })}</span>
    </div>
 )
}

export default DateTime
