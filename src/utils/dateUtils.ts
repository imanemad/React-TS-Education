import moment from "jalali-moment";

moment.locale("fa-IR")

export type FormatType='dddd, jD jMMMM jYYYY' | "jD jMMMM jYYYY" | "jMM/jDD" | "jYYYY/jMM/jD"

export const convertMiladiToJalali=(date?:string | undefined, format: FormatType='jYYYY/jMM/jD')=>{
    const newDate = moment(date)
    return newDate.format(format)
}

export const getDatesInRange = (startOf:number,endOf:number):string[]=>{
    const today =new Date();
    const dates:string[]=[];

    startOf =- startOf

    for (let i = startOf ; i <= endOf; i++) {
        const currentDate = new Date(today);
        currentDate.setDate(today.getDate() + i)
        dates.push(currentDate.toISOString())
    }

    return dates
}

export const compareDates= (date1:string,date2:string)=>{
    const d1=new Date(date1)
    const d2=new Date(date2)
    return(
        d1.getUTCFullYear() === d2.getUTCFullYear() &&
        d1.getUTCMonth() === d2.getUTCMonth() &&
        d1.getUTCDate() === d2.getUTCDate()
    )
}