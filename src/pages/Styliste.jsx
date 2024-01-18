import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import reco from '../recoDB';


const Styliste = () => {

    const [chooseColor, setChooseColor] = useOutletContext();

    const [stylistMap, setStylistMap] = useState(false);
    const [cityValue, setCityValue] = useState('');
    const [stylist1, setStylist1] = useState(false);
    const [stylist2, setStylist2] = useState(false);

    useEffect(() => {
        console.log(chooseColor);
    }, [])

    const handleInputChange = (event) => {
        const city = event.target.value.toLowerCase();
        if(city === "nantes") {
            setStylistMap(true);
        } else {
            setStylistMap(false);
        }
        setCityValue(city);
    }

    const handleClose = () => {
        setStylistMap(false);
        setCityValue('');
    }

    const handleStylist1 = () => {
        setStylist1(true)
        if(setStylist2 === true) {
            setStylist2(false)
        }
        console.log("styliste1")
    }
    const handleStylist2 = () => {
        setStylist2(true)
        if(setStylist1 === true) {
            setStylist1(false)
        }
        console.log("styliste2")
    }

    const closeCard1 = () => {
        setStylist1(false)
    }

    const closeCard2 = () => {
        setStylist2(false)
    }

    const recoFilteredByColor = reco.filter(product => product.categ === chooseColor || product.categ === "soin");

    return (
        <div className='styliste'>
            <div className='finderBlock'>
                <p>
                    Je trouve un styliste L'ORÉAL
                </p>
                <input type='text' placeholder='📍 Votre ville' onChange={handleInputChange} value={cityValue}>
                </input>
                {stylistMap && 
                    <div className='map'>
                        <div className='closingDiv' onClick={handleClose}>
                            <p>Fermer la carte</p>
                            <div className='closingButton'>✖️</div>
                        </div>
                        <img src='/images/maps1.png'/>
                        <div className='pin1' onClick={handleStylist1}>
                            <img src=''/>
                        </div>
                        <div className='pin2' onClick={handleStylist2}>
                            <img src=''/>
                        </div>
                        {stylist1 &&
                            <div className='stylistCard1'>
                                <div className='closingButton' onClick={closeCard1}>✖️</div>
                                <div className='infos'>
                                    <div className='salon'>Innovatif</div>
                                    <div className='adress'>4 Boulevard Dupont</div>
                                    <div className='contact'>02.54.98.20.21</div>
                                </div>
                            </div>
                        }
                        {stylist2 &&
                            <div className='stylistCard2'>
                                <div className='closingButton' onClick={closeCard2}>✖️</div>
                                <div className='infos'>
                                    <div className='salon'>Coupe de Cœur</div>
                                    <div className='adress'>35 Rue du Calvaire</div>
                                    <div className='contact'>02.65.34.75.40</div>
                                </div>
                            </div>
                        }
                    </div>
                }
            </div>
            <div className={stylistMap === true ? 'recommendedBlockHidden' : 'recommendedBlock'}>
                <p>
                    Je consulte les produits recommandés
                </p>
                <div className='productsMap'>
                    {recoFilteredByColor.map((product) => {
                        return (
                            <div className='productCard' key={product.id}>
                                <div className='imgContainer'>
                                    <img src={product.img} />
                                </div>
                                <div className='productInfo'>
                                    <div className='productName'>{product.name.toUpperCase()}</div>
                                    <div className='productPrice'>{product.price} </div>    
                                </div>
                            </div>
                            
                        )
                    })}
                </div>
                <div className={stylistMap === true ? 'unrollArrow' : 'unrollArrowHidden'} onClick={handleClose}>
                    ⬇️
                </div>
            </div>
            <div/>
        </div>
    );
};

export default Styliste;
