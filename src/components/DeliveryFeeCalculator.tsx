import React, { useState } from 'react';
import CustomInput from './common/CustomInput';
import { calculateDeliveryFee } from '../utils/calculateDeliveryFee';

interface DeliveryFeeCalculatorProps {
  
}

const DeliveryFeeCalculator: React.FC<DeliveryFeeCalculatorProps> = () => {
    const [cartValue, setCartValue] = useState<number | '' >('');
    const [deliveryDistance, setDeliveryDistance] = useState<number | ''>('');
    const [amountOfItems, setAmountOfItems] = useState<number | ''>('');
    const [date, setDate] = useState<string | ''>('');
    const [deliveryFee, setDeliveryFee] = useState<number>(0);

    const handleCartValue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setCartValue(parseFloat(e.target.value));
    };

    const handleDliveryDistance = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDeliveryDistance(parseInt(e.target.value));
    };

    const handleAmountOfItems = (e: React.ChangeEvent<HTMLInputElement>) => {
        setAmountOfItems(parseInt(e.target.value));
    };

    const handleDate = (e: React.ChangeEvent<HTMLInputElement>) => {
        setDate(e.target.value);
    };


    const handleSubmit = () => {
        if (cartValue && deliveryDistance && amountOfItems && date) {
          const fee = calculateDeliveryFee({
            cartValue,
            deliveryDistance,
            amountOfItems,
            date,
          });
          setDeliveryFee(fee);
        }
      };


  return (
    <div className='container'>
        <h3 className='mt-5 mb-5'>Delivery Fee Calculator</h3>
        <div className='col'>
            <div className='row'>
                <CustomInput
                    id="cartValue"
                    label="Cart Value"
                    type="number"
                    placeholder="Cart Value"
                    value={cartValue}
                    onChange={handleCartValue}
                    addonText="€"
                    step="0.001"
                />
            </div>
            <div className='row'>
                <CustomInput
                    id="deliveryDistance"
                    label="Delivery distance"
                    type="number"
                    placeholder="Delivery distance"
                    value={deliveryDistance}
                    onChange={handleDliveryDistance}
                    addonText="m"
                />
            </div>
            <div className='row'>
                <CustomInput
                    id="amountOfItems"
                    label="Amount of Item"
                    type="number"
                    placeholder="Amount of Item"
                    value={amountOfItems}
                    onChange={handleAmountOfItems}
                />
            </div>
            <div className='row'>
                <CustomInput
                    id="date"
                    label="Time"
                    type="date"
                    placeholder="Enter date"
                    value={date}
                    onChange={handleDate}
                />
            </div>
            <div className='row mt-5 ms-4'>
                    <button onClick={handleSubmit} type="button" className="btn btn-outline-primary" style={{width: '200px'}}>Calculate Delivery Price</button>
            </div>
        </div>
        <div className="row mt-4">
          {deliveryFee >= 0 && (
            <div className="alert alert-info">
              <strong>Calculated Delivery Fee:</strong> €{deliveryFee.toFixed(2)}
            </div>
          )}
        </div>
    </div>
  )
}

export default DeliveryFeeCalculator