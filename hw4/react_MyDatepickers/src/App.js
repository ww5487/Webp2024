import React, { useState } from 'react';
import './App.css';
import { styled } from '@mui/system';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import TextField from '@mui/material/TextField';

const CustomizedTextField = styled(TextField)(({ theme }) => ({
  marginLeft: theme.spacing(1),
  marginRight: theme.spacing(1),
  width: 250,
  marginTop: 100
}));

const App = () => {
  const [date, setDate] = useState(new Date('2017-05-24'));

  const handleDateChange = (newDate) => {
    setDate(newDate);
  };

  const renderDatePickerInput = (params) => {
    const dateValue = new Date(params.inputProps.value);
    if (!isNaN(dateValue)) {
      const year = dateValue.getFullYear();
      const rocYear = year - 1911;
      const month = String(dateValue.getMonth() + 1).padStart(2, '');
      const day = String(dateValue.getDate()).padStart(2, '');
      params.inputProps.value = `民國${rocYear}-${month}月-${day}日`;
    }
    return <CustomizedTextField {...params} />;
  };

  return (
    <div className="App">
      <form noValidate>
        <LocalizationProvider dateAdapter={AdapterDateFns}>
          <DatePicker
            label="選擇日期"
            value={date}
            onChange={handleDateChange}
            renderInput={renderDatePickerInput}
          />
        </LocalizationProvider>
      </form>
    </div>
  );
}

export default App;
