import React, { useState, useEffect } from 'react'
import service from '../../service/axios';
import Select from 'react-select';
const Team = () => {

    const [Team, setTeam] = useState([]);

    useEffect(() => {
        let fetchAPITeam = async () => {
            let params = {
                model: "project.task.team",
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

            let data = response && response.data.result ? response.data.result : [];

            setTeam(data);
        }
        fetchAPITeam();
    }, [])

    return (
        <>
            {console.log(`>>>>>`, Team)}
            <select>
                {Team && Team.length > 0 && Team.map((team) => {
                    return (
                        <option key={team} value={team}>
                            {team[1]}
                        </option>
                    )
                })}
            </select>
        </>

    )
}

export default Team;