import Filter from "bad-words"


export const filterWords  =(words:string):string => {
    const filter = new Filter()
    return filter.clean(words)

}
export const filterArabic = (arabicText:string):string => {
    const filterAr = new Filter({
        regex:/[\u0600-\u06FF]/
    })
    return filterAr.clean(arabicText)
}
