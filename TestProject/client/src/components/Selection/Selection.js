import React from 'react';
import Select from 'react-select';
import Team from '../Team/Team';
import ReportTo from '../ReportTo/ReportTo';
import Tags from '../Tags/Tags';
import Supporters from '../Supporters/Supporters';
import AssignedBy from '../AssignedBy/AssignedBy';

const Selection = () => {
    return (
        <>
            <Select options={<Team />}/>
        </>
    )
}

export default Selection;