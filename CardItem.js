import React from 'react'

const CardItem = (props) => {

    let { title, description, imageUrl, HP, Attacks } = props;
    let source = "API";
    return (
        <div className="my-3 mx-3 " >
            <div className="card">
                <img src={!imageUrl ? "https://wallpapers-base.com/wp-content/uploads/2018/08/high_quality_wallpaper_HD_1080_IDS_1140420.png" : imageUrl} style={{ width: "250px", height: "300px", alignSelf: "center" }} className="card-img-top" alt="..." />


                <div className="card-body" style={{textAlign:'center'}}>
                    <p className="card-title"><h5><strong>Name:</strong> {title}</h5> </p>
                    <p className="card-title"><h5><strong>HP:</strong> {HP}</h5> </p>
                    <p className="card-text"><h5><strong>Level:</strong>{description ? description : "Not Mentioned"}</h5></p>
                    <p>
                        <h5><strong>Attacks:</strong> </h5>
                        {Attacks.map((element) => {
                            return <h6>{element.name}</h6>
                        })}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default CardItem