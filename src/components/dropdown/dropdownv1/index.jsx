import React, { useState } from "react"
import { List, ListItem } from "@attrybtech/attryb-ui"

// declare type SelectListItem = {
//   _id: string
//   value: string
//   data?: object
// }

const SelectListItem = [
  {
      _id: "0AKGxNWVoFgYy5nnJu5ece4797eaf5e",
      icon:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
      value: "Fannie Morgan",
      data: {
          _id: "0AKGxNWVoFgYy5nnJu5ece4797eaf5e",
          value: "Douglas Ramirez",
          email: "na@zed.az",
      },
  },
  {
      _id: "DKSmS636ccc0e4a2e9",
      icon:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
      value: "Derrick Banks",
      data: {
          _id: "DKSmS636ccc0e4a2e9",
          value: "Eugene Norton",
          email: "gaktertin@ho.br",
      },
  },
  {
      _id: "5SOVguIqGRY54uSece4797feauqe",
      icon:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
      value: "Leo Schultz",
      data: {
          _id: "5SOVguIqGRY54uSece4797feauqe",
          value: "Cory Mullins",
          email: "wetel@ra.az",
      },
  },
  {
      _id: "tn9598MB2BXNk2ERlTnJ636ccc0e4a2f1",
      icon:"https://media.wired.com/photos/598e35fb99d76447c4eb1f28/master/pass/phonepicutres-TA.jpg",
      value: "Blake Roy",
      data: {
          _id: "tn9598MB2BXNk2ERlTnJ636ccc0e4a2f1",
          value: "Bryan McKinney",
          email: "cem@birna.edu",
      },
  },
]
const sample = SelectListItem;

const Dropdown = () => {

  const [active, setActive] = useState(sample[2])
    const [active2, setActive2] = useState({})

    /**
     * Handler to handle item selection in from the select list
     * This handler must set item obtained from callback param as activeItem
     */
    // const selectHandler = (item) => {
    //     console.log({ selection: item })
    //     if (!item || !Object.keys(item)?.length) return
    //     setActive(item)
    // }

    const selectHandler2 = (item) => {
        console.log({ selection: item })
        if (!item || !Object.keys(item)?.length) return
        setActive2(item)
    }

    const [isLabelVisible, setIsLabelVisible] = useState(false);

  const handleFocusIn = () => {
    setIsLabelVisible(true);
    alert("Hi");
  };

  const handleFocusOut = (e) => {
    if (e.target.value === "") {
      setIsLabelVisible(false);
    }
  };

  const worker = "Label-Name";

  return (
    <div>
      <label
        htmlFor="searchTerm"
        id="label"
        className={isLabelVisible ? "labeltext" : "hidden labeltext"}
        >
        {worker}
      </label>
        <List
                        onFocus={handleFocusIn}
                        onBlur={handleFocusOut}
                        list={[...sample]}
                        activeItem={active2}
                        buttonPlaceholder="Select some items"
                        searchProps={["value"]}
                        selectCallback={selectHandler2}>
                        {[...sample].map((item) => {
                            return (
                                <ListItem key={item._id} data={item}>
                                    {item.value}
                                </ListItem>
                            )
                        })}
                    </List>
    </div>
  )
}

export default Dropdown;