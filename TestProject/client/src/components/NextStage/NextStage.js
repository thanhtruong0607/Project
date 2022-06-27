import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Select from 'react-select';
import DatePicker from 'react-datepicker';
import './NextStage.scss'

const NextStage = (props) => {

  const { title, show, onAction } = props;
  const [selectedDate, setSelectedDate] = useState(null);
  return (
    <>
      <Modal className='next-stage' show={show} onHide={() => onAction("close")} animation={false} >
        <Modal.Header closeButton>
          <Modal.Title>{title}</Modal.Title>
        </Modal.Header>

        <Modal.Body className='stage'><label>Move To</label><Select /></Modal.Body>

        <Modal.Body className='stage'><label>Done Date</label><DatePicker selected={selectedDate}
          onChange={date => setSelectedDate(date)}
          dateFormat='dd/MM/yyyy'
          showYearDropdown
          scrollableMonthYearDropdown
        /></Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={() => onAction("close")}>
            Cancle
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  )
}

export default NextStage;