import React from 'react';
import Container from 'react-bootstrap/Container'

import UserNavi from '../components/UserNavi';
import PageTitle from '../components/PageTitle';
import LoggedInName from '../components/LoggedInName';
import CardUI from '../components/CardUI';
import SchedList from '../components/SchedList';
import PriorityList from '../components/PriorityList';

const CanvasPage = () =>
{
    // temp time handling
    var today = "2021-10-23";
    var tomorr = "2021-10-25";
    var later = "2021-12-17";
    var nextyear = "2022-4-15";
    
    // Scheduling Tasks
    // may need list id (in the case of multiples) 
    // and user id to associate lists with users
    const sched = [
        { 
            id: "todo-0", 
            name: "Eat", 
            completed: true, 
            date: today, 
            time: "0:00" 
        },
        { 
            id: "todo-1", 
            name: "Sleep", 
            completed: false, 
            date: today, 
            time: "0:00" 
        },
        { 
            id: "todo-2", 
            name: "Repeat", 
            completed: false, 
            date: tomorr, 
            time: "22:00"

        },
        {
            id: "todo-3",
            name: "Weekend Trip",
            completed: false,
            date: later, 
            time: "6:45"
        },
        {
            id: "todo-4",
            name: "Appointment",
            completed: false,
            date: nextyear,
            time: "16:15"
        }
    ];

    // Priority Tasks
    // may also need list id,  user id 
    const tasks = [
        { 
            id: "priority-0", 
            name: "Eat", 
            completed: false
        },
        { 
            id: "priority-1", 
            name: "Sleep", 
            completed: false
        },
        { 
            id: "priority-2", 
            name: "Repeat", 
            completed: false
        }
    ];

    return(
        <div id="canvas" className="pageSolid">
            <UserNavi />
            <PageTitle />
            <LoggedInName />
            <Container className="cardContainer">
                <CardUI/>
                <PriorityList tasks={tasks}/>
                <SchedList tasks={sched}/>
            </Container>
        </div>
    );
}

export default CanvasPage;
