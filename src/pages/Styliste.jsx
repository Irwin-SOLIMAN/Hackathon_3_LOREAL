import React, { useEffect, useState } from 'react';
import { useOutletContext } from 'react-router-dom';
import reco from '../recoDB';


const Styliste = () => {

    const [chooseColor, setChooseColor] = useOutletContext();

    const [stylistMap, setStylistMap] = useState(false);

    useEffect(() => {
        console.log(chooseColor);
    }, [])

    const handleInputChange = (event) => {
        const cityValue = event.target.value.toLowerCase();
        if(cityValue === "nantes") {
            setStylistMap(true);
        } else {
            setStylistMap(false);
        }
    }
    const handleClose = () => {
        setStylistMap(false);
    }

    const recoFilteredByColor = reco.filter(product => product.categ === chooseColor || product.categ === "soin");

    return (
        <div className='styliste'>
            <div className='finderBlock'>
                <p>
                    Je trouve un styliste L'ORÉAL
                </p>
                <input type='text' placeholder='📍 Votre ville' onChange={handleInputChange}>
                </input>
                {stylistMap && 
                    <div className='map'>
                        <div className='closingDiv'>
                            <p>Fermer la carte</p>
                            <div className='closingButton' onClick={handleClose}>✖️</div>
                        </div>
                        <img src='public/images/maps1.png'/>
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
                                    <div className='productName'>{product.name}</div>
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
