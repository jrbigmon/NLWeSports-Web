interface AdTextValues {
    title: string
    value: any
    colorTextSubTitle: string
    colorText: string
}

export default function TextAd(props: AdTextValues){
    return (
        <div className="flex flex-col mb-2 m-1">
            <p className={`${props.colorTextSubTitle} font-normal text-sm`}>{props.title}</p>
            <p className={`${props.colorText} font-bold text-sm`}>{props.value}</p>
        </div>
    )
}