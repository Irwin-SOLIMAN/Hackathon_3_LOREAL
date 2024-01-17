import React from 'react';
import reco from '../recoDB';

const Styliste = () => {
    return (
        <div className='styliste'>
            <div className='finderBlock'>
                <p>
                    Je trouve un styliste L'ORÉAL
                </p>
                <input type='text' placeholder='📍 Votre ville'>
                </input>
            </div>
            <div className='recommendedBlock'>
                <p>
                    Je consulte les produits recommandés
                </p>
                <div className='productsMap'>
                    {reco.map((product) => {
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
            </div>
        </div>
    );
};

export default Styliste;