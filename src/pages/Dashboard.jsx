import { useState } from 'react';
import Calendar from 'react-calendar';
import '../pages/Dashboard.css';
import 'react-calendar/dist/Calendar.css'
import { Button } from '@mui/material';
function App() {
  const [date, setDate] = useState(new Date());

  return (
    <div className='app'>
       <p className='text-center'>
        <span className='bold'>Selected Date:</span>{' '}
        {date.toDateString()}
      </p>
      <Button variant="contained" className='download'>Download</Button>
      <div className='calendar-container'>
        <Calendar onChange={setDate} value={date} />
      </div>
      
      <div className='button'>
<Button variant="outlined" className='register'>Register</Button>
<Button variant="outlined" className='test'>Test</Button>
</div>
    </div>
  );
}

export default App;