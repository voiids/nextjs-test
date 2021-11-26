// import { useEffect, useState } from "react";
import MeetupList from "../components/meetups/MeetupList";

const DUMMY = [
    {
        id: "m1",
        title: "A First Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg/1920px-London_Thames_Sunset_panorama_-_Feb_2008.jpg",
        address: "Some address 5, 5467",
        description: "This is a meetup",
    },
    {
        id: "m2",
        title: "A Second Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg/1920px-London_Thames_Sunset_panorama_-_Feb_2008.jpg",
        address: "Some address 5, 5467",
        description: "This is a meetup",
    },
    {
        id: "m3",
        title: "A Thirth Meetup",
        image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg/1920px-London_Thames_Sunset_panorama_-_Feb_2008.jpg",
        address: "Some address 5, 5467",
        description: "This is a meetup",
    },
];

const HomePage = (props) => {
    // const [loadedMeetups, setLoadedMeetups] = useState([]);

    // useEffect(() => {
    //     setLoadedMeetups(DUMMY);
    // }, []);

    return <MeetupList meetups={props.meetups} />;
};

// export async function getServerSideProps(context) {
//     const req = context.req;
//     const res = context.res;

//     return {
//         props: {
//             meetups: DUMMY,
//         },
//     };
// }

export async function getStaticProps() {
    return {
        props: {
            meetups: DUMMY,
        },
        revalidate: 10,
    };
}

export default HomePage;
