import React, { useEffect,useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'
import useSelectMonedas from '../hooks/useSelectMonedas'
import {monedas}  from '../data/monedas'



const InputSubmit = styled.input`
background-color: #9497ff;
border: none;
width: 100%;
padding: 10px;
color: #fff;
font-weight:700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
margin-top: 20px;
transition: background-color .3s ease;
&:hover{
    background-color: #7A7DFE;
    cursor: point;

}


`

const Formulario = ({setMonedas}) => {

  const [criptos,setCriptos]=useState([])
  const [error,setError]=useState(false)
  const[moneda,SelectMonedas]=useSelectMonedas('Elije tu moneda',monedas)
  const[Criptomoneda,SelectCriptoMonedas]=useSelectMonedas('Elije tu Criptomoneda',criptos)
 useEffect(()=>{
    const consultarAPI=async ()=>{
      const url="https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD"
        const respuesta=await fetch(url)
        const resultado=await respuesta.json();
        const arrayCriptos=resultado.Data.map(cripto=>{
          const objeto={
            id:cripto.CoinInfo.Name,
            nombre:cripto.CoinInfo.FullName,

          }
          return objeto;
        })
      setCriptos(arrayCriptos)
    }
    consultarAPI()
 },[])
 const handleSubmit =e=>{

  e.preventDefault()
  if([moneda,Criptomoneda].includes('')){
    setError(true)
    return
  }
  setError(false)
  setMonedas({

    moneda,Criptomoneda
  })
  

 }
  return (
    <>
    {error && <Error>Todos los campos son obligatorios</Error> }
        <form 
        onSubmit={handleSubmit}
        >

          <SelectMonedas/>
          <SelectCriptoMonedas/>
            
            <InputSubmit type="submit" value="Cotizar" />

        </form>
    </>
  )
}

export default Formulario