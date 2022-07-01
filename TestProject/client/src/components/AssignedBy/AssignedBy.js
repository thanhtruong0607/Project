import React, { useState, useEffect } from 'react'
import service from '../../service/axios';

const AssignedBy = () => {

    const [Assigned, setAssigned] = useState([]);

    useEffect(() => {
        let fetchAPIAssigned = async () => {
            let params = {
                model: "res.partner",
                method: "name_search",
                args:
                    [],
                kwargs:
                {
                    "name": "",
                    "args": [],
                    "operator": "ilike",
                    "limit": 8,
                    "context": {
                        "lang": "en_US",
                        "tz": "Asia/Ho_Chi_Minh",
                        "uid": 2,
                        "allowed_company_ids": [
                            1
                        ]
                    }
                }
            };
            let response = await service.post(params);

            let data = response.data && response.data.result ? response.data.result : [];

            setAssigned(data);
        }
        fetchAPIAssigned();
    }, [])

    return (
        <>
            {console.log(`>>>>>`, Assigned)}
            <select>
                {Assigned && Assigned.length > 0 && Assigned.map((assigned) => {
                    return (
                        <option key={assigned} value={assigned}>
                            {assigned[1]}
                        </option>
                    )
                })}
            </select>
        </>
    )
}

export default AssignedBy;