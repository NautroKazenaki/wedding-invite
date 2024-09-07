import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import Typography from '@mui/material/Typography';
import Meeting from '../../images/meeting.png';
import FSStyles from './FourthSection.module.css';

export default function CTimeline() {
    return (
        <Timeline position="alternate" className={FSStyles.timeline}>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <img src={Meeting} alt="meeting" />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{
                    py: '12px', px: 2, border: '1px solid pink',
                    padding: '10%', width: '25vw', display: 'flex',
                    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    borderRadius: '10px', textAlign: 'center', fontFamily: 'Caveat',
                }}>
                    <Typography variant="h6" component="span">
                        Коттедж
                    </Typography>
                    <Typography>09.03.2024</Typography>
                    <Typography>Увидели друг друга впервые</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <img src={Meeting} alt="meeting" />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{
                    py: '12px', px: 2, border: '1px solid pink',
                    padding: '10%', width: '25vw', display: 'flex',
                    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    borderRadius: '10px', textAlign: 'center', fontFamily: 'Caveat',
                }}>
                    <Typography variant="h6" component="span">
                        Коттедж
                    </Typography>
                    <Typography>09.03.2024</Typography>
                    <Typography>Я заблевал бассейн после шавермы</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector />
                    <TimelineDot>
                        <img src={Meeting} alt="meeting" />
                    </TimelineDot>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                </TimelineSeparator>
                <TimelineContent sx={{
                    py: '12px', px: 2, border: '1px solid pink',
                    padding: '10%', width: '25vw', display: 'flex',
                    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    borderRadius: '10px', textAlign: 'center', fontFamily: 'Caveat',
                }}>
                    <Typography variant="h6" component="span">
                        Коттедж
                    </Typography>
                    <Typography>09.03.2024</Typography>
                    <Typography>Она убрала за мной</Typography>
                </TimelineContent>
            </TimelineItem>
            <TimelineItem>
                <TimelineSeparator>
                    <TimelineConnector sx={{ bgcolor: 'secondary.main' }} />
                    <TimelineDot>
                        <img src={Meeting} alt="meeting" />
                    </TimelineDot>
                    <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent sx={{
                    py: '12px', px: 2, border: '1px solid pink',
                    padding: '10%', width: '25vw', display: 'flex',
                    flexDirection: 'column', justifyContent: 'center', alignItems: 'center',
                    borderRadius: '10px', textAlign: 'center', fontFamily: 'Caveat',
                }}>
                    <Typography variant="h6" component="span">
                        Коттедж
                    </Typography>
                    <Typography>09.03.2024</Typography>
                    <Typography>Я сделал ей предложение</Typography>
                </TimelineContent>
            </TimelineItem>
        </Timeline>
    );
}