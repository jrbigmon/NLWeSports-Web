interface InputProps {
    inpurtId: string
    htmlFor: string
    textLabel: string
    inputValue: string
    setInput: any
    oldValueInput: string
}

function Checkbox (props: InputProps) {
    return (
        <div className="mr-3">
            <label htmlFor={props.htmlFor} className="block text-[#FFFFFF] font-normal">{ props.textLabel }</label>
            <input 
                id={props.inpurtId} 
                name="weekDays" 
                type="checkbox" 
                value={props.inputValue}  
                className="accent-[#18181B] w-[100%] p-2 rounded-lg text-[#71717A]"
                onChange={e => {
                    if(e.target.checked && props.oldValueInput !== ''){
                        props.setInput(`${props.oldValueInput}${e.target.value}`)  
                    } else if(e.target.checked && props.oldValueInput == ''){
                        props.setInput(`${e.target.value}`)
                    } else {
                        const indexValueInOldValues = props.oldValueInput.indexOf(e.target.value)
                        if(indexValueInOldValues !== -1){
                            const newValuesAfterRemove = props.oldValueInput.replace(e.target.value, '')
                            props.setInput(newValuesAfterRemove)
                        }
                    }
                }}
            />
        </div>
    )
}

export default Checkbox