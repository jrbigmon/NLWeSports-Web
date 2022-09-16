interface AdTextValues {
    title: string
    value: any
    colorTextSubTitle: string
    colorText: string
}

export default function TextAd({title, value, colorTextSubTitle, colorText}: AdTextValues){
    return (
        <div className="w-28 h-9 flex">
            <p className={`text-[${colorTextSubTitle}] font-normal text-sm`}>{title}</p>
            <p className={`text-[${colorText}] font-bold text-sm`}>{value}</p>
        </div>
    )
}