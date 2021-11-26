import MeetupDetail from "../../components/meetups/MeetupDetail";

const MeetupDetails = () => {
    return (
        <MeetupDetail
            image={
                "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg/1920px-London_Thames_Sunset_panorama_-_Feb_2008.jpg"
            }
            title="First Meetup"
            address="Some Street, 418194"
            description="Meetup description"
        />
    );
};

export async function getStaticPaths() {
    return {
        fallback: true,
        paths: [
            {
                params: {
                    meetupId: "m1",
                },
            },
            {
                params: {
                    meetupId: "m2",
                },
            },
        ],
    };
}

export async function getStaticProps(context) {
    const meetupId = context.params.meetupId;

    return {
        props: {
            meetupData: {
                image: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6e/London_Thames_Sunset_panorama_-_Feb_2008.jpg/1920px-London_Thames_Sunset_panorama_-_Feb_2008.jpg",
                id: meetupId,
                title: "First Meetup",
                address: "Some Street, 418194",
                description: "Meetup description",
            },
        },
    };
}

export default MeetupDetails;
