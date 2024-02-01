export function Selector({name, data, txtDefault, onChange}) {
    return (
        <select 
            name={name}
            onChange={(e) => onChange(e)}>
                <option value={txtDefault} disabled selected>{txtDefault}</option>
                {data.map((elem,index)=>(
                    <option key={index} value={elem.value}>{elem.name}</option>
                ))}
        </select>
    )
}