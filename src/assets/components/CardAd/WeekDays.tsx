interface Props {
    weekDays: any
}

export default function WeekDays (props: Props) {
    return (
        <div>
            <div className="w-auto h-auto z-100 absolute bg-[#2A2634] rounded-lg p-4 top-20 right-0 text-zinc-400 opacity-0 hover:opacity-90">
            {
                props.weekDays.map((day:any) => {
                    return (
                        <p>{day}</p>
                    )
                })
            }
            </div>
        </div>
    )
}