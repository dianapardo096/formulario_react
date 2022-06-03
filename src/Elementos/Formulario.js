import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores ={
    falla: "#bb2929",
    exito: "#1ed12d",
    borde: "#FFFF",
}

const Formulario = styled.form`
background-color: rgba(44, 44, 60, 0.7);
padding: 2rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
height:65vh;
width: 35%;
`;

const H2 = styled.h1`
color:white;
padding:1rem;

`;

const IconoUsuario = styled(FontAwesomeIcon)`
	font-size: 6.5rem;
	z-index: 100;
    color: ${colores.borde};
	margin: 1rem;

`;


const GrupoInput = styled.div`
	position: relative;
	z-index: 90;
`;

const Input = styled.input`
	width: 100%;
	background: #fff;
	border-radius: 3px;
	height: 2.5rem;
	line-height: 2.5rem;
	padding: 0 40px 0 10px;
    margin-top: 1rem;
	transition: .3s ease all;
	border: 3px solid transparent;
	&:focus {
		border: 3px solid ${colores.borde};
		outline: none;
		box-shadow: 3px 0px 30px rgba(163,163,163, 0.7);
	}

`;


const LeyendaError = styled.p`
	font-size: 13px;
    font-weight: 600;
	margin-bottom: 0;
	color: ${colores.borde};

	display:none;
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
    color: ${colores.exito};
	opacity: 0;
`;

const MensajeError = styled.div`
display: flex;
justify-content: center;
align-items: center;
background-color: rgb(223, 94, 94);
width: 95%;
border-radius: 3px;
color:#fff;
padding:0.2rem;
font-size: 0.9rem;


`;

const BotonInicio = styled.div`	
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
margin: 1rem;
width: 100%;
h3,a{
	color: #fff;
}
`;

const Boton = styled.button`	
	margin: 0.2rem;
    border-radius: 5px;
	color:#572612;
    padding: 0.2rem;
	font-size: 1rem;
    border: none;
    background-color: #F9D544;
    width: 30%;
    height: max-content;
    cursor: pointer;

	&:hover{
		background-color: #fff;

	}
`;

export {
	Formulario,
	H2,
	GrupoInput,
	Input,
	LeyendaError,
	IconoValidacion,
	IconoUsuario,
	BotonInicio,
	Boton, 
	MensajeError
}