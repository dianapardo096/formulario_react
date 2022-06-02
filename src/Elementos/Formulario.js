import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const colores ={
    falla: "#bb2929",
    exito: "#1ed12d",
    borde: "#FFFF",
}

const Formulario = styled.form`
background-color: rgba(44, 44, 60, 0.7);
padding: 1rem;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
border-radius: 10px;
height: 45vh;
width: 35%;
`;

const H2 = styled.h1`
color:white;
padding:1rem;

`;

const IconoUsuario = styled(FontAwesomeIcon)`
	font-size: 80px;
	z-index: 100;
    color: ${colores.borde};
	
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
    font-weight: 800;
	margin-bottom: 0;
	color: ${colores.falla};
`;

const IconoValidacion = styled(FontAwesomeIcon)`
	position: absolute;
	right: 10px;
	bottom: 14px;
	z-index: 100;
	font-size: 16px;
    color: ${colores.exito};
	
`;


export {Formulario,H2,GrupoInput,Input,LeyendaError,IconoValidacion,IconoUsuario}