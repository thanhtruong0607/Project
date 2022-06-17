import React, { useState, useEffect } from "react";
import './TaskDetail.scss';
import { FaStar } from 'react-icons/fa';
import StatusBar from "../StatusBar/StatusBar";
import service from "../../service/axios";

const TaskDetail = () => {

    const [taskDetail, setTaskDetail] = useState([]);

    const [rating, setRating] = useState(null);

    const [hover, setHover] = useState(null);

    useEffect(() => {
        let fetchTaskDetailAPI = async () => {
            let params = {
                model: "project.task",
                method: "read",
                args: [
                    [
                        29
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

            setTaskDetail(data);

        };
        fetchTaskDetailAPI();
    }, []);

    return (
        <>
            {console.log(taskDetail)}
            <StatusBar />
            <div className="row task-detail ">

                <h2>
                    PROJECT TEST
                </h2>

                <table className='table-detail col-sm-6'>
                    <tbody>
                        <tr>
                            <td className='td_label'>
                                <label>Dự Án</label>
                            </td>
                            <td className='td_form'>
                                <a href='https://uat.xboss.com/web#id=17&model=project.project&menu_id='>XBOSS MOBILE ERP</a>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Giai Đoạn Dự Án</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Assigned Team</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Người Thực Hiện</label>
                            </td>
                            <td className='td_form'>
                                <a href='https://uat.xboss.com/web#id=208&model=res.users&menu_id='>Trần Giang Nam</a>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Assigned Resources</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Done %</label>
                            </td>
                            <td className='td_form'>
                                <span>0</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Start Date</label>
                            </td>
                            <td className='td_form'>
                                <span></span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>End Date</label>
                            </td>
                            <td className='td_form'>
                                <span></span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Effort(Hours)</label>
                            </td>
                            <td className='td_form'>
                                <span>0</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Người Hỗ Trợ </label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Người Báo Cáo</label>
                            </td>
                            <td className='td_form'>
                                <a href='https://uat.xboss.com/web#id=1280&model=res.partner'>0100109106 - Tập Đoàn Công Nghiệp - Viễn Thông Quân Đội</a>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Need Install</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Milestones</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                    </tbody>
                </table>

                <table className='table-detail col-sm-6'>
                    <tbody>
                        <tr>
                            <td className='td_label'>
                                <label>Deadline</label>
                            </td>
                            <td className='td_form'>
                                <span>05/04/2022 20:45:36</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Độ Khó</label>
                            </td>
                            <td className='td_form'></td>
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
                                            <label>
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
                                <label>Thẻ Phân Loại</label>
                            </td>
                            <td className='td_form'>
                                <a className="badge rounded-pill bg-warning" href='#' role='button'>INVOICE</a>
                                <a className="badge rounded-pill bg-warning" href='#' role='button'>HR</a>
                                <a className="badge rounded-pill bg-danger" href='#' role='button'>FRM</a>
                                <a className="badge rounded-pill bg-secondary" href='#' role='button'>PURCHASE ORDER</a>
                                <a className="badge rounded-pill bg-success" href='#' role='button'>PURCHASE RIQUISITION</a>
                                <a className="badge rounded-pill bg-white text-dark btn btn-outline-dark" href='#' role='button'>Form</a>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Scheduling Mode</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Constraint Type</label>
                            </td>
                            <td className='td_form'>
                                <span></span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Constraint Date</label>
                            </td>
                            <td className='td_form'>
                                <span></span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Effort Driven</label>
                            </td>
                            <td className='td_form'>
                                <span className='fa fa-square-o'></span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Manually Scheduled</label>
                            </td>
                            <td className='td_form'>
                                <span className='fa fa-check-square'></span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Loại Task <i className='fa fa-question-circle'></i></label>
                            </td>
                            <td className='td_form'>
                                <span>Báo lỗi</span>
                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Yêu Cầu <i className='fa fa-question-circle'></i></label>
                            </td>
                            <td className='td_form'>

                            </td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Sprint</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Release</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Loại</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                        <tr>
                            <td className='td_label'>
                                <label>Ngày Hoàn Thành</label>
                            </td>
                            <td className='td_form'></td>
                        </tr>
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TaskDetail;