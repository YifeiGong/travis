import React, { useState, useEffect} from 'react';
import "rbx/index.css";
import { Container, Title } from 'rbx';
import CourseList from './components/CourseList';
import firebase from 'firebase/app';
import 'firebase/database';


const firebaseConfig = {
  apiKey: "AIzaSyBuvW2w64V4krd0zA5ANBSeGDmFqzwI92E",
  authDomain: "travis-600d1.firebaseapp.com",
  databaseURL: "https://travis-600d1.firebaseio.com",
  projectId: "travis-600d1",
  storageBucket: "travis-600d1.appspot.com",
  messagingSenderId: "942719467295",
  appId: "1:942719467295:web:b95fd7b25be68dc918fa2a"
};

const meetsPat = /^ *((?:M|Tu|W|Th|F)+) +(\d\d?):(\d\d) *[ -] *(\d\d?):(\d\d) *$/;

const Banner = ({ title }) => (
  <Title>{ title || '[loading...]' }</Title>
);

const timeParts = meets => {
  const [match, days, hh1, mm1, hh2, mm2] = meetsPat.exec(meets) || [];
  return !match ? {} : {
    days,
    hours: {
      start: hh1 * 60 + mm1 * 1,
      end: hh2 * 60 + mm2 * 1
    }
  };
};

const addCourseTimes = course => ({
  ...course,
  ...timeParts(course.meets)
});

const addScheduleTimes = schedule => ({
  title: schedule.title,
  courses: schedule.courses.map(addCourseTimes)
});

const App = () => {
  const [schedule, setSchedule] = useState({ title: '', courses: [] });
  const url = 'https://www.cs.northwestern.edu/academics/courses/394/data/cs-courses.php';

  useEffect(() => {
    const fetchSchedule =  async () => {
      const response = await fetch(url);
      if (!response.ok) throw response;
      const json = await response.json();
      setSchedule(addScheduleTimes(json));
    }
    fetchSchedule();
  }, [])

  return (
    <Container>
      <Banner title={ schedule.title } />
      <CourseList courses={ schedule.courses } />
    </Container>
  );
};

export default App;
