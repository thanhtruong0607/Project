import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom'
import './TaskDetail.scss';
import { FaStar } from 'react-icons/fa';
import StatusBar from "../StatusBar/StatusBar";
import service from "../../service/axios";
import Tag from "../Tag/Tag";
import Select from 'react-select';
import DatePicker from 'react-datepicker';

const TaskDetail = (props) => {

    const [taskDetail, setTaskDetail] = useState([]);

    const [rating, setRating] = useState(null);

    const [hover, setHover] = useState(null);

    let route_params = useParams();

    const [isEdit, setEdit] = useState(false);

    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {

        let fetchTaskDetailAPI = async () => {
            console.log(`gfg:`, route_params)
            let params = {
                model: "project.task",
                method: "read",
                args: [
                    [
                        parseInt(route_params.id)
                    ],
                    [
                        "stage_id",
                        "count_done_issues",
                        "count_project_issues",
                        "subtask_done_count",
                        "subtask_count",
                        "duration_picker",
                        "_domain_partner_as_internal_user",
                        "is_internal_project",
                        "id",
                        "project_id",
                        "team_id",
                        "user_id",
                        "supporter_ids",
                        "creator_id",
                        "report_to_ids",
                        "date_end",
                        "tag_ids",
                        "date_finished",
                        "parent_id",
                        "create_uid",
                        "level_tree",
                        "company_id",
                        "description",
                        "checklist_task_instance_ids",
                        "task_checklists",
                        "has_checklist_task_instance_ids",
                        "checklist_readonly",
                        "planned_hours",
                        "subtask_planned_hours",
                        "progress",
                        "timesheet_ids",
                        "effective_hours",
                        "subtask_effective_hours",
                        "total_hours_spent",
                        "remaining_hours",
                        "sequence",
                        "partner_id",
                        "email_from",
                        "email_cc",
                        "child_ids",
                        "subtask_project_id",
                        "displayed_image_id",
                        "date_assign",
                        "date_last_stage_update",
                        "working_hours_open",
                        "working_days_open",
                        "working_hours_close",
                        "working_days_close",
                        "plan_duration",
                        "date_start",
                        "date_deadline",
                        "schedule_mode",
                        "predecessor_ids",
                        "task_resource_ids",
                        "info_ids",
                        "attachment_ids",
                        "other_attachment_ids",
                        "message_follower_ids",
                        "activity_ids",
                        "message_ids",
                        "message_attachment_count",
                        "display_name"
                    ]
                ],
                kwargs: {},
                context: {
                    "tz": "Asia/Ho_Chi_Minh",
                    "lang": "en_US"
                }
            };
            let response = await service.post(params);

            let data = response && response.data.result ? response.data.result : [];

            setTaskDetail(data);

        };
        fetchTaskDetailAPI();
    }, []);
    const onEdit = () => {
        setEdit(!isEdit);
    }
    const teamList = [
        { value: 1, label: "Office Design" },
        { value: 2, label: "Research & Development" },
        { value: 3, label: "Your Company" }
    ];
    const dataList = [
        { value: 1, label: "Azure Interior" },
        { value: 2, label: "Azure Interior, Brandon Freeman" },
        { value: 3, label: "Azure Interior, Colleen Diaz" },
        { value: 4, label: "Azure Interior, Nicole Ford" },
        { value: 5, label: "Blue" },
        { value: 6, label: "Company_1" },
        { value: 7, label: "Company_2" }
    ];
    return (
        <>
            <div className="task-master">
                <button className="btn o_arrow_button btn-secondary edit" type="button" onClick={onEdit}>
                    {isEdit ? 'CANCEL EDIT' : 'EDIT'}
                </button>

                {console.log(taskDetail)}
                {taskDetail && taskDetail.length > 0 && taskDetail.map(detail => {
                    return (
                        <div key={detail.id}>
                            <StatusBar stages={detail.stage_id} />
                            <div className="row task-detail ">


                                {isEdit ? <input value={detail.display_name} /> : <h2>
                                    {detail.display_name}
                                </h2>}


                                <table className='table-detail col-sm-6'>
                                    <tbody>
                                        <tr>
                                            <td className='td_label'>
                                                <label>Team</label>
                                            </td>
                                            {isEdit ? <Select placeholder={detail.team_id[1]} options={teamList} /> : <td className='td_form'>
                                                {detail.team_id[1]}
                                            </td>}

                                        </tr>
                                        <tr>
                                            <td className='td_label'>
                                                <label>Assigned To</label>
                                            </td>
                                            {isEdit ? <Select placeholder={detail.user_id[1]} /> : <td className='td_form'>
                                                {detail.user_id[1]}
                                            </td>}
                                        </tr>

                                        <tr>
                                            <td className='td_label'>
                                                <label>Supporters</label>
                                            </td>
                                            {isEdit ? <Select options={dataList} /> : <td className='td_form'>
                                                {detail.supporter_ids[1]}
                                            </td>}
                                        </tr>

                                        <tr>
                                            <td className='td_label'>
                                                <label>Assigned By</label>
                                            </td>

                                            {isEdit ? <Select placeholder={detail.creator_id[1]} options={dataList} /> : <td className='td_form'>
                                                {detail.creator_id[1]}

                                            </td>}
                                        </tr>
                                        <tr>
                                            <td className='td_label'>
                                                <label>Report To</label>
                                            </td>
                                            {isEdit ? <Select options={dataList} /> : <td className='td_form'>
                                                {detail.report_to_ids[1]}

                                            </td>}
                                        </tr>

                                    </tbody>
                                </table>

                                <table className='table-detail col-sm-6'>
                                    <tbody>
                                        <tr>
                                            <td className='td_label'>
                                                <label>Deadline</label>
                                            </td>

                                            {isEdit ? <DatePicker selected={selectedDate}
                                                onChange={date => setSelectedDate(date)}
                                                dateFormat='dd/MM/yyyy' showYearDropdown scrollableMonthYearDropdown /> : <td className='td_form'>
                                                {detail.date_last_stage_update}

                                            </td>}
                                        </tr>
                                        <tr>
                                            <td className='td_label'>
                                                <label>Độ Khó</label>
                                            </td>
                                            <td className='td_form'>
                                                {detail.level_tree}

                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='td_label'>
                                                <label>Ưu tiên</label>
                                            </td>
                                            <td className='td_form'>
                                                <span>
                                                    {[...Array(3)].map((star, i) => {

                                                        const ratingValue = i + 1;

                                                        return (
                                                            <label key={i}>
                                                                <input
                                                                    type='radio'
                                                                    name='rating'
                                                                    value={ratingValue}
                                                                    onClick={() => setRating(ratingValue)}
                                                                />
                                                                <FaStar
                                                                    className='star'
                                                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                                    onMouseEnter={() => setHover(ratingValue)}
                                                                    onMouseLeave={() => setHover(null)}
                                                                />
                                                            </label>
                                                        )
                                                    })}
                                                </span>
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='td_label'>
                                                <label>Created By</label>
                                            </td>
                                            <td className='td_form'>
                                                {detail.create_uid[1]}
                                            </td>
                                        </tr>
                                        <tr>
                                            <td className='td_label'>
                                                <label>Thẻ Phân Loại</label>
                                            </td>
                                            <td className='td_form'>
                                                <Tag ids={detail.tag_ids} />
                                            </td>
                                            {/* {isEdit ? <input value={<Tag ids={detail.tag_ids} />}/> : <td className='td_form'>
                                                <Tag ids={detail.tag_ids} />
                                            </td> */}
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    )
                })}
            </div>
        </>
    )
}

export default TaskDetail;