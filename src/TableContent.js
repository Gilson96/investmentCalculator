import React from 'react'
import { calculateInvestmentResults } from './CalculateInvestmens'



const TableContent = ({ inputValue }) => {

    const resultsData = calculateInvestmentResults(inputValue);


    // this gets the initial investment
    // based on the first year, needed
    // to calculate the total interest of each year
    const initialInvestment =
        resultsData[0].valueEndOfYear -
        resultsData[0].interest -
        resultsData[0].annualInvestment;

    // function that calculates
    // the totalInterest
    const totalInterest = ((yearData) => {
        return yearData.valueEndOfYear - yearData.annualInvestment * yearData.year - initialInvestment
    })

    // this gets the invested Capital
    const totalAmountInvested = ((yearData) => {
        return yearData.valueEndOfYear - totalInterest(yearData)
    })

    // The browser-provided Intl API is used to prepare a formatter object
    // This object offers a "format()" method that can be used to format numbers as currency
    // Example Usage: formatter.format(1000) => yields "$1,000"
    const formatter = new Intl.NumberFormat('en-US', {
        style: 'currency',
        currency: 'GBP',
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    });

    return (
        <div className='flex gap-4 text-base my-2' id='font'>
            <div className='flex-col'>
                <h1 className='font-bold'>Year</h1>
                {resultsData.map(yearData => <p className=' text-right'>{yearData.year}</p>)}
            </div>
            <div className='flex-col'>
                <h1 className='font-bold'>Investement Value</h1>
                {resultsData.map(yearData => <p className=' text-right'>{formatter.format(yearData.valueEndOfYear)}</p>)}
            </div>
            <div className='flex-col'>
                <h1 className='font-bold'>interest (Year)</h1>
                {resultsData.map(yearData => <p className=' text-right'>{formatter.format(yearData.interest)}</p>)}
            </div>
            <div className='flex-col'>
                <h1 className='font-bold'>Total interest</h1>
                {resultsData.map(yearData => <p className=' text-right'>{formatter.format(totalInterest(yearData))}</p>)}
            </div>
            <div className='flex-col'>
                <h1 className='font-bold'>invested Capital</h1>
                {resultsData.map(yearData => <p className=' text-right'>{formatter.format(totalAmountInvested(yearData))}</p>)}
            </div>
        </div>
    )
}

export default TableContent 