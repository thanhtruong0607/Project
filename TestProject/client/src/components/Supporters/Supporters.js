import React, { useState, useEffect } from 'react'
import service from '../../service/axios';

const Supporters = () => {

    const [Support, setSupport] = useState([]);

    useEffect(() => {
        let fetchAPISupport = async () => {
            let params = {
                model: "res.partner",
                method: "name_search",
                args: [
                ],
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

            let data = response && response.data ? response.data : [];

            setSupport(data);
        }
        fetchAPISupport();
    }, [])

    return (
        <div>
            {console.log(`>>>>>`, Support)};
        </div>
    )
}

export default Supporters;