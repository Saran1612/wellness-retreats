import { Grid } from "@mui/material"
import Cards from "./cards"
import Modals from "./modal"


interface RetreatsProps {
    displayData: any;
}

const Retreats = (props: RetreatsProps): JSX.Element => {

    const { displayData } = props;
    return (
        <>
            <Grid container spacing={2}>
                {displayData?.map((item: any, index: number) => (
                    <Grid item xs={12} sm={6} md={3} key={index}>
                        <Cards
                            title={item.title}
                            image={item.image}
                            price={item.price.toString()}
                            location={item.location}
                            description={item.description}
                            date={new Date(item.date * 1000).toLocaleDateString()}
                            cardDetails={item}
                        />
                    </Grid>
                ))}
            </Grid>


        </>
    )
}

export default Retreats
