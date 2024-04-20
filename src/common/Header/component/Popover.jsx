import {Popover} from "react-bootstrap";
import {useState} from "react";

export const PopoverSlider = (onChangeValue) => {
    const [value, setValue] = useState(3);
    return (
        <Popover id="popover-basic">
            <Popover.Header as="h3">Music By LJS</Popover.Header>
            <Popover.Body>
                <div>
                    <h6>volume</h6>
                    <input id="musicVolumeSlider" type={"range"} onChange={(e) => {
                        onChangeValue(e.target.value);
                        setValue(e.target.value);
                    }} value={value} min={0} max={10} step={0.1}/>
                </div>

            </Popover.Body>
        </Popover>
    );

}