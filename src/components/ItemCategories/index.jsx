import React, {useState} from 'react';

const ItemCategories = (props) => {
    const [isSelected, setIsSelected] = useState(props.selectedCategories.includes(props.typ) ? true : false)
    const handleChange = () => {
        if (isSelected === true) {
            const result = props.selectedCategories.filter((item)=> {
                return !(item === props.typ)
            })
            props.setSelectedCategories(result)
            setIsSelected(false)
        } else {
            props.setSelectedCategories([...props.selectedCategories, props.typ])
            setIsSelected(true)
        }
            console.log(props.selectedCategories)
    }
    return (

        <label className="item-category">
           <input type="checkbox" value={props.typ} onChange={handleChange} checked={isSelected}/>
             {props.name}
        </label>

    )
}
export default ItemCategories;