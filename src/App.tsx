import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Calendar,
  CalendarCell,
  CalendarGrid,
  CalendarGridBody,
  CalendarGridHeader,
  CalendarHeaderCell,
  CalendarHeading,
} from "@/components/ui/calendar";

const MyCalendar = () => {
  return (
    <Calendar aria-label="Appointment date">
      <CalendarHeading />
      <CalendarGrid>
        <CalendarGridHeader>
          {(day) => <CalendarHeaderCell>{day}</CalendarHeaderCell>}
        </CalendarGridHeader>
        <CalendarGridBody>
          {(date) => <CalendarCell date={date} />}
        </CalendarGridBody>
      </CalendarGrid>
    </Calendar>
  );
};

function App() {
  const [visible, setVisible] = useState(true);
  return (
    <div className="flex flex-col m-3 gap-3 w-72">
      <Button
        variant={visible ? "destructive" : "default"}
        onPress={() => setVisible((x) => !x)}
      >
        {visible ? "Hide" : "Show"} calendar
      </Button>
      {visible && <MyCalendar />}
    </div>
  );
}

export default App;
