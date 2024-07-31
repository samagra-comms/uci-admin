import { DatePicker, Radio } from 'antd'
import React, { useState } from 'react'
import dayjs from 'dayjs'
import { useStore } from '../../store'

const BotSchedule = ({ onChangeHandler }) => {
  const [scheduleOption, setScheduleOption] = useState('')
  const [date, setDate] = useState(null)
  const onChangeScheduleOption = (e) => {
    const newScheduleOption = e.target.value
    setScheduleOption(newScheduleOption)

    let newDate
    if (newScheduleOption === 'sendNow') {
      newDate = dayjs()
    } else if (newScheduleOption === 'schedule') {
      newDate = dayjs().add(1, 'day')
    }
    setDate(newDate)
    onChangeDate(newDate)
  }

  const onChangeDate = (value) => {
    const formattedDate = value.toISOString()
    setDate(value)
    onChangeHandler({
      target: {
        name: 'scheduleTime',
        value: formattedDate,
      },
    })
  }

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        margin: '12px 0',
      }}
    >
      <Radio.Group
        onChange={onChangeScheduleOption}
        value={scheduleOption}
        style={{ marginRight: '16px', whiteSpace: 'nowrap' }}
      >
        <Radio value="sendNow" style={{ fontSize: '15px' }}>
          Send Now
        </Radio>
        <Radio value="schedule" style={{ fontSize: '15px' }}>
          Schedule
        </Radio>
      </Radio.Group>

      <DatePicker
        value={date}
        showTime={{ format: 'hh:mm A', showHour: true, showMinute: true }}
        format="DD-MM-YYYY hh:mm A"
        onChange={onChangeDate}
        disabled={scheduleOption !== 'schedule'}
        minDate={dayjs()}
        // className="flex-grow"
        style={{ flex: 1, height: '38px' }}
        placeholder="Please select bot scheduling time"
      />
    </div>
  )
}

export default BotSchedule
