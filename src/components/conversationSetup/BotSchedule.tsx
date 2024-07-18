import { DatePicker, Radio } from 'antd'
import React, { useState } from 'react'
import dayjs from 'dayjs'

const BotSchedule = () => {
  const [scheduleOption, setScheduleOption] = useState('sendNow')
  const [date, setDate] = useState(dayjs())
  const onChangeScheduleOption = (e) => {
    setScheduleOption(e.target.value)
    if (e.target.value === 'sendNow') {
      setDate(dayjs())
    } else if (e.target.value === 'schedule') {
      setDate(dayjs().add(1, 'day'))
    }
  }

  const onChangeDate = (value) => {
    setDate(value)
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
        showTime={{ format: 'hh:mm A' }}
        format="DD-MM-YYYY hh:mm A"
        onChange={onChangeDate}
        disabled={scheduleOption !== 'schedule'}
        minDate={dayjs()}
        // className="flex-grow"
        style={{ flex: 1, height: '36px' }}
      />
    </div>
  )
}

export default BotSchedule
