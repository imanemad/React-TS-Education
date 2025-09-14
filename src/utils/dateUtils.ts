import moment from "jalali-moment";

moment.locale("fa-IR")

export type FormatType='dddd, jD jMMMM jYYYY' | "jD jMMMM jYYYY" | "jMM/jDD" | "jYYYY/jMM/jD"

export const convertMiladiToJalali=(date?:string | undefined, format: FormatType='jYYYY/jMM/jD')=>{
    const newDate = moment(date)
    return newDate.format(format)
}