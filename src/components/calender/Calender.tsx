import { Inject, Day, Week, WorkWeek, Month, Agenda, ScheduleComponent, EventSettingsModel, ViewDirective } from '@syncfusion/ej2-react-schedule'
import React from 'react';
import './Calender.css'

class Calender extends React.Component {
    private LocalData = [
        {
            id: 1,
            Subject: 'Tulevaisuuden ratkaisut elokuvatuotannossa',
            StartTime: new Date(2022, 3, 1, 10, 0),
            EndTime: new Date(2022, 3, 1, 11, 0),
            Location: 'Fireframe',
            Speaker: 'Mikko Kodisoja'
        },
        {
            id: 2,
            Subject: 'Käyttäjäkokemuksen merkitys IT-järjestelmissä',
            StartTime: new Date(2022, 3, 1, 11, 0),
            EndTime: new Date(2022, 3, 1, 12, 0),
            Location: 'Swappie',
            Speaker: 'Sami Marttinen'
        },
        {
            id: 3,
            Subject: 'Yrittäjyys korkean teknologian alalla',
            StartTime: new Date(2022, 3, 1, 12, 0),
            EndTime: new Date(2022, 3, 1, 14, 0),
            Location: 'FlyAR',
            Speaker: 'Frans Tihveräinen'
        },
        {
            id: 4,
            Subject: 'Kamerauutuudet indie-tuotannossa',
            StartTime: new Date(2022, 3, 1, 14, 0),
            EndTime: new Date(2022, 3, 1, 15, 0),
            Location: 'Sony',
            Speaker: 'Ulrich Mors'
        },
        {
            id: 5,
            Subject: 'Minne menet, suomalainen AV-ala?',
            StartTime: new Date(2022, 3, 1, 15, 0),
            EndTime: new Date(2022, 3, 1, 16, 0),
            Location: 'Avita ry',
            Speaker: 'Mika Vakkilainen'
        }

    ];
    private eventTemplate(props: { [key: string]: Object }): JSX.Element {
        return (<div className="template-wrap">{props.Location} </div>)
    }

    public render() {
        return <ScheduleComponent width='100%' height='550px' className=" mt-4" currentView="Day" selectedDate={new Date(2022, 3, 1)}
            eventSettings={{ dataSource: this.LocalData }}>
            <ViewDirective option="Day" eventTemplate={this.eventTemplate.bind(this)} />
            <ViewDirective option="Week" eventTemplate={this.eventTemplate.bind(this)} />
            <ViewDirective option="WorkWeek" eventTemplate={this.eventTemplate.bind(this)} />
            <ViewDirective option="Month" eventTemplate={this.eventTemplate.bind(this)} />
            <Inject services={[Day, Week, Month, WorkWeek, Agenda]}></Inject>
        </ScheduleComponent>
    }
}

export default Calender;
