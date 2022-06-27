import React, { useState, useEffect } from 'react'
import service from '../../service/axios';

const Tag = ({ ids }) => {

    const [Tag, setTag] = useState([]);

    useEffect(() => {

        let fetchAPITag = async () => {
            let params = {
                model: "project.tags",
                method: "read",
                args: [

                    ids
                    ,
                    [
                        "display_name", "color"
                    ],
                    0,
                    0,
                    ""
                ],
                kwargs: {},
                context: {
                    "tz": "Asia/Ho_Chi_Minh",
                    "lang": "en_US"
                }
            };
            let response = await service.post(params);

            let data = response && response.data.result ? response.data.result : [];

            setTag(data);
        }
        fetchAPITag();
        console.log(`====>>>>`, ids)
    }, [])

    return (
        <>
            {console.log(`TAG: `, Tag)}
            {Tag && Tag.length > 0 && Tag.map(tag => {
                return (
                    <a className="badge rounded-pill bg-primary" href='#' role='button'>{tag.display_name}</a>

                )
            })}

        </>
    )
}

export default Tag;