import React, { useState, useEffect } from 'react'
import service from '../../service/axios';

const ReportTo = () => {

    const [Report, setReport] = useState("");

    useEffect(() => {
        let fetchAPIAssigned = async () => {
            let params = {
                model: "res.partner",
                method: "name_search",
                args: [],
                kwargs: {
                    "name": "Azure",
                    "args": [],
                    "operator": "ilike",
                    "limit": 0,
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

            let data = response && response.data ? response.data : [];

            setReport(data);
        }
        fetchAPIAssigned();
    }, [])

    return (
        <div>
            {console.log(`>>>>>`, Report)};
        </div>
    )
}

export default ReportTo;