// import { useEffect, useState } from "react";
import { useEffect, useState } from "react";
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
    // const [data, setData] = useState([]);
    // useEffect(() => {
    //     fetch("https://coinranking1.p.rapidapi.com/markets", {
    //         headers: {
    //             "x-rapidapi-host": "coinranking1.p.rapidapi.com",
    //             "x-rapidapi-key": "743b5fc6edmsha81738b7162d165p1d4967jsn5485cfc4dae4",
    //         },
    //     })
    //         .then((res) => res.json())
    //         .then((res) => setData(res.data.stats));
    // }, []);

    return (
        <>
            <MeetupList meetups={props.meetups} />
            <h1>{props.volume}</h1>
        </>
    );
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
    //f723960dd044a40f9481348770703d28
    const res = await fetch("https://coinranking1.p.rapidapi.com/markets", {
        headers: {
            "x-rapidapi-host": "coinranking1.p.rapidapi.com",
            "x-rapidapi-key": "743b5fc6edmsha81738b7162d165p1d4967jsn5485cfc4dae4",
        },
    });
    const data = await res.json();
    console.log(data.data.stats.volume);
    if (!data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            meetups: DUMMY,
            volume: data.data.stats.volume,
        },
        revalidate: 10,
    };
}

export default HomePage;
