import React, { useState, useEffect } from 'react'
import service from '../../service/axios';

const ReportTo = () => {

    const [Tags, setTags] = useState([]);

    useEffect(() => {
        let fetchAPIAssigned = async () => {
            let params = {
                model: "project.tags",
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

            setTags(data);
        }
        fetchAPIAssigned();
    }, [])

    return (
        <>
            {console.log(`>>>>>`, Tags)};
        </>
    )
}

export default ReportTo;