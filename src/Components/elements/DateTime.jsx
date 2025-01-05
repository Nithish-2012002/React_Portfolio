import React, {useState} from "react";
const DateTime = () =>{
    const dob = "2002-09-12T23:10:00";
    const [years,setYears]=useState('');
    const [months,setMonths]=useState('');
    const [days,setDays]=useState('');
    const [hours,setHours]=useState('');
    const [minutes,setMinutes]=useState('');
    const [seconds,setSeconds]=useState('');
    const getDateTime = (dob) =>{
                const dobDate = new Date(dob);
                const now = new Date();

            let years = now.getFullYear() - dobDate.getFullYear();
            setYears(years);

            let months = now.getMonth() - dobDate.getMonth();
            if (months < 0) {
                years--;
                months += 12;
            }
            setMonths(months)

            
            let days = now.getDate() - dobDate.getDate();
            if (days < 0) {
                months--;
                const previousMonth = new Date(now.getFullYear(), now.getMonth(), 0);
                days += previousMonth.getDate();
            }
            setDays(days)

             const hours = now.getHours();
             setHours(hours);
             const minutes = now.getMinutes();
             setMinutes(minutes);
             const seconds = now.getSeconds();
             setSeconds(seconds);
        }
        setInterval(() => getDateTime(dob), 1000);

//   return {
//     years,
//     months,
//     days,
//     time: `${hours}h:${minutes}m:${seconds}s`,
//   };
    return(
        <>
            <p className="text-white text-3xl font-[500] text-center">{years} <span className="text-green-400">Years</span> {months} <span className="text-green-400">Months</span> {days} <span className="text-green-400">Days</span></p>
            <p className="text-white text-3xl font-[500] text-center">{`${hours}h:${minutes}m:${seconds}s`}</p>
        </>
    );
}
export default DateTime;