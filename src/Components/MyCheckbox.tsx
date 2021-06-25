import { FormControlLabel, Checkbox, FormControlLabelProps } from '@material-ui/core';
import{ useState } from 'react';

interface Props{
    value: string;
    checked: boolean;
}

function MyCheckbox(props: Props) {

    const [state , setState] = useState(0);

    return (
        <FormControlLabel
            control={
                <Checkbox
                    onClick={()=>setState(state+1)}
                    checked={props.checked}
                    onChange={() => { }}
                    name="checkedF"

                />
            }
            label={`${props.value} ${state}`}
        />
    )
}

export default MyCheckbox;