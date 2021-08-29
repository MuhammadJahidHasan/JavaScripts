
const hasMeeting = true;

const meeting = new Promise((resolve, reject)=>{

     if(!hasMeeting){

         const meetingDetails = {
             name: 'IT meeting',
             location: 'zoom',
             time: '5.00 PM'

         };

         resolve(meetingDetails);

     }
    else{
     reject(new Error('Already meeting has been scheduled'));
    }
});

const addToCalender = (meetingDetails)=>{

    const calender = `${meetingDetails.name} has been scheduled on ${meetingDetails.location} at ${meetingDetails.time}`;

    return Promise.resolve(calender);

};

meeting
    .then(addToCalender)
    .then((res)=>{
        
        console.log(res);

    })
    .catch((err)=>{

        console.log(err.message);
    });