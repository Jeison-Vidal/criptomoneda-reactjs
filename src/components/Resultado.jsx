import React from 'react'
import styled from '@emotion/styled'

const Contenedor=styled.div`
color: #fff;
font-family: 'Lato',sans-serif;
`



const Texto=styled.p`
font-size: 18px;
span{font-weight:700}
`

const Precio=styled.p`
font-size: 30px;
span{font-weight:700}

`


const Resultado = ({resultado}) => {
    const {PRICE,HIGHDAY,LOWDAY,CHANGEPCT24HOUR,IMAGEURL,LASTUPDATE


    }=resultado
  return (
    <Contenedor>
        <img src={`http://cryptocompare.com/${IMAGEURL}`} alt="imagen" />
        <Precio>El precio es de: <span>{PRICE}</span></Precio>
        <Texto>El precio mas alto del dia: <span>{HIGHDAY}</span></Texto>
        <Texto>El precio mas bajo del dia: <span>{LOWDAY}</span></Texto>
        <Texto>Variacion últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto>
        <Texto>El precio es de: <span>{LASTUPDATE}</span></Texto>

    </Contenedor>
  )
}

export default Resultado